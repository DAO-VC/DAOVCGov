// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.13;
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import "./ERC1155Permit.sol";
import "contracts/interfaces/iCheckpoint.sol";
import "../interfaces/IBaalNFToken.sol";
//import "hardhat/console.sol";

/**
 * @dev similar to Openzeplin ERC20Votes
 *
 * uses timestamp instead of block.number and auto self delegates.
 *
 * This extension keeps a history (checkpoints) of each account's vote power. Vote power can be delegated either
 * by calling the {delegate} function directly, or by providing a signature to be used with {delegateBySig}. Voting
 * power can be queried through the public accessors  {getPriorVotes}.
 *
 */
abstract contract BaalNFTVotes is ERC1155Permit, iCheckpoint, IBaalNFToken {
    using ECDSA for bytes32;

    // DELEGATE TRACKING
    mapping(address => mapping(uint256 => Checkpoint)) public checkpoints; /*maps record of vote `checkpoints` for each account by index*/
    mapping(address => uint256) public numCheckpoints; /*maps number of `checkpoints` for each account*/
    mapping (uint256 => mapping(address => address)) public delegates; /*maps idNFTs to record of each account's `shares` delegate*/

    mapping (uint256 => uint8) public nftVotesMul; /* IDNFT =>  multiplier  of NFT votes */
    uint256[] nftVotesAll; /* list of all NFT for voting */

    // SIGNATURE HELPERS
    bytes32 constant DELEGATION_TYPEHASH = keccak256("Delegation(string name,address delegatee,uint256 nonce,uint256 expiry)");

    event DelegateChanged(
        address indexed delegator,
        address indexed fromDelegate,
        address indexed toDelegate
    ); /*emits when an account changes its voting delegate*/
    event DelegateVotesChanged(
        address indexed delegate,
        uint256 previousBalance,
        uint256 newBalance
    ); /*emits when a delegate account's voting balance changes*/


  /**
     * @notice setup weights of NFTs for voting
     * @param _idNFT - as is IdNFT 
     * @param _multiplier - NFT's weight multiplier
     */
    function _setupNFTvotes (uint256 _idNFT, uint8 _multiplier) internal {
        if (_multiplier == 0) { //delete _idNFT
            // console.log("delete _idNFT", _idNFT); 
            for (uint8 i=0; i<nftVotesAll.length; i++) { 
                if (nftVotesAll[i] == _idNFT) {
                    nftVotesAll[i] = nftVotesAll[nftVotesAll.length - 1];
                    delete (nftVotesAll[nftVotesAll.length - 1]); //TODO make test for deleting
                    return;
                }
            }
        } else if (  nftVotesMul[_idNFT] == 0) { // add new _IDNFT 
            // console.log("add new _idNFT", _idNFT, _multiplier); 
            nftVotesMul[_idNFT] = _multiplier;
            nftVotesAll.push (_idNFT);
            return;
        } else {  // update existing _idNFT
            // console.log("update new _idNFT", _idNFT, _multiplier); 
            nftVotesMul[_idNFT] = _multiplier;
            return;
        }
    }
        function __beforeTokenTransfer(
        address operator,
        address from,
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory data       
    ) internal  {
        /* _beforeTokenTransfer( 
            operator, //address
            from, //address
            to, //address
            ids, //uint256[] memory 
            amounts, // uint256[] memory
            data //bytes memory
            ); */
        require (ids.length == amounts.length, "ids.len != amounts.len");
        /*If recipient is receiving their first shares, auto-self delegate*/
        for (uint8 i=0; i<ids.length; i++){
            if (balanceOf(to, ids[i]) == 0 && numCheckpoints[to] == 0 && amounts[i] > 0) {
                
                delegates[ids[i]][to] = to;
            }
             // console.log(" amounts[i] * nftVotesMul[ids[i]]", ids[i],  amounts[i],  nftVotesMul[ids[i]]);
            uint256 votes =  amounts[i] * nftVotesMul[ids[i]];
            _moveDelegates(delegates[ids[i]][from], delegates[ids[i]][to], votes);
            }
    }

    /// @notice Delegate votes from user to `delegatee`.
    /// @param delegatee The address to delegate votes to.
    function delegate(address delegatee, uint256 idNFT) external virtual {
        _delegate(msg.sender, delegatee, idNFT);
    }

    /// @notice Delegates votes from `signer` to `delegatee` with EIP-712 signature.
    /// @param delegatee The address to delegate 'votes' to.
    /// @param nonce The contract state required to match the signature.
    /// @param expiry The time at which to expire the signature.
    /// @param v The v signature
    /// @param r The r signature
    /// @param s The s signature
    function delegateBySig(
        address delegatee,
        uint256 idNFT,
        uint256 nonce,
        uint256 expiry,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) public {
        require(block.timestamp <= expiry, "ERC20Votes: signature expired");
        address signer = ECDSA.recover(
            _hashTypedDataV4(
                keccak256(
                    abi.encode(
                        DELEGATION_TYPEHASH,
                        keccak256(abi.encodePacked(name())),
                        delegatee,
                        nonce,
                        expiry
                    )
                )
            ),
            v,
            r,
            s
        );
        require(nonce == _useNonce(signer), "ERC20Votes: invalid nonce");
        _delegate(signer, delegatee, idNFT);
    }

    /// @notice Delegates Baal voting weight.
    /// @param delegator The address to delegate 'votes' from.
    /// @param delegatee The address to delegate 'votes' to.
    function _delegate(address delegator, address delegatee, uint256 idNFT) internal virtual {
        require(balanceOf(delegator, idNFT) > 0, "!shares");
        address currentDelegate = delegates[idNFT][delegator];
        delegates[idNFT][delegator] = delegatee;
        uint256 votes = balanceOf(delegator, idNFT) * nftVotesMul[idNFT];
        // console.log("_moveDelegates", votes);

        _moveDelegates(
            currentDelegate,
            delegatee,
            votes
        );

        emit DelegateChanged(delegator, currentDelegate, delegatee);
    }

    /// @notice Elaborates delegate update - cf., 'Compound Governance'.
    /// @param srcRep The address to delegate 'votes' from.
    /// @param dstRep The address to delegate 'votes' to.
    /// @param amount The amount of votes to delegate
    function _moveDelegates(
        address srcRep,
        address dstRep,
        uint256 amount
    ) private {
        unchecked {
            if (srcRep != dstRep && amount != 0) {
                if (srcRep != address(0)) {
                    uint256 srcRepNum = numCheckpoints[srcRep];
                    uint256 srcRepOld = srcRepNum != 0
                        ? getCheckpoint(srcRep, srcRepNum - 1).votes
                        : 0;
                    uint256 srcRepNew = srcRepOld - amount;
                    _writeCheckpoint(srcRep, srcRepNum, srcRepOld, srcRepNew);
                }

                if (dstRep != address(0)) {
                    uint256 dstRepNum = numCheckpoints[dstRep];
                    uint256 dstRepOld = dstRepNum != 0
                        ? getCheckpoint(dstRep, dstRepNum - 1).votes
                        : 0;
                    uint256 dstRepNew = dstRepOld + amount;
                    _writeCheckpoint(dstRep, dstRepNum, dstRepOld, dstRepNew);
                }
            }
        }
    }

    /// @notice Elaborates delegate update - cf., 'Compound Governance'.
    /// @param delegatee The address to snapshot
    /// @param nCheckpoints The number of checkpoints delegatee has
    /// @param oldVotes The number of votes the delegatee had
    /// @param newVotes The number of votes the delegate has now
    function _writeCheckpoint(
        address delegatee,
        uint256 nCheckpoints,
        uint256 oldVotes,
        uint256 newVotes
    ) private {
        uint32 timeStamp = uint32(block.timestamp);

        unchecked {
            if (
                nCheckpoints != 0 &&
                getCheckpoint(delegatee, nCheckpoints - 1).fromTimeStamp ==
                timeStamp
            ) {
                getCheckpoint(delegatee, nCheckpoints - 1).votes = newVotes;
            } else {
                checkpoints[delegatee][nCheckpoints] = Checkpoint(
                    timeStamp,
                    newVotes
                );
                numCheckpoints[delegatee] = nCheckpoints + 1;
            }
        }

        emit DelegateVotesChanged(delegatee, oldVotes, newVotes);
    }

    /// @notice Returns the prior number of `votes` for `account` as of `timeStamp`.
    /// @param account The user to check `votes` for.
    /// @param timeStamp The unix time to check `votes` for.
    /// @return votes Prior `votes` delegated to `account`.
    function getPriorVotes(address account, uint256 timeStamp)
        external
        view
        virtual
        returns (uint256 votes)
    {
        require(timeStamp < block.timestamp, "!determined"); /* Prior votes must be in the past*/

        uint256 nCheckpoints = numCheckpoints[account];
        if (nCheckpoints == 0) return 0;

        unchecked {
            if (
                getCheckpoint(account, nCheckpoints - 1).fromTimeStamp <=
                timeStamp
            ) return getCheckpoint(account, nCheckpoints - 1).votes; /* If most recent checkpoint is at or after desired timestamp, return*/
            if (getCheckpoint(account, 0).fromTimeStamp > timeStamp) return 0;
            uint256 lower = 0;
            uint256 upper = nCheckpoints - 1;
            while (upper > lower) {
                /* Binary search to look for highest timestamp before desired timestamp*/
                uint256 center = upper - (upper - lower) / 2;
                Checkpoint memory cp = getCheckpoint(account, center);
                if (cp.fromTimeStamp == timeStamp) return cp.votes;
                else if (cp.fromTimeStamp < timeStamp) lower = center;
                else upper = center - 1;
            }
            votes = getCheckpoint(account, lower).votes;
        }
    }

    /// @notice Returns the current delegated `vote` balance for `account`.
    /// @param account The user to check delegated `votes` for.
    /// @return votes Current `votes` delegated to `account`.
/*     function getCurrentVotes(address account)
        external
        view
        virtual
        returns (uint256 votes)
    {
        uint256 nCheckpoints = numCheckpoints[account]; //Get most recent checkpoint, or 0 if no checkpoints
        unchecked {
            votes = nCheckpoints != 0
                ? getCheckpoint(account, nCheckpoints - 1).votes
                : 0;
        }
    } */
    function getCurrentVotes(address account)
        external
        view
        virtual
        returns (uint256 votes)
    {
        uint256 nCheckpoints = numCheckpoints[account]; /*Get most recent checkpoint, or 0 if no checkpoints*/
        unchecked {
            votes = nCheckpoints != 0
                ? getCheckpoint(account, nCheckpoints - 1).votes
                : 0;
        }
    }

    function getCheckpoint(address delegatee, uint256 nCheckpoints)
        public
        view
        virtual
        returns (Checkpoint memory)
    {
        return checkpoints[delegatee][nCheckpoints];
    }

    function getNFTVotesMul (address _voter) public view returns (uint256 mul)  { 
        for (uint8 i=0; i<nftVotesAll.length; i++) {
            mul += nftVotesMul[nftVotesAll[i]] * balanceOf(_voter, nftVotesAll[i]);
        }
    }
}
