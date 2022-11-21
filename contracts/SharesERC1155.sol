pragma solidity 0.8.13;
//SPDX-License-Identifier: MIT

//import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/proxy/utils/Initializable.sol";

import "./utils/BaalNFTVotes.sol";
import "./interfaces/IBaal.sol";


// import "hardhat/console.sol";

/// @title Shares
/// @notice Accounting for Baal non voting shares
contract SharesNFT is   BaalNFTVotes, Initializable { 
    // ERC20 CONFIG
    string private __name; /*Name for ERC20 trackers*/
    string private __symbol; /*Symbol for ERC20 trackers*/
    mapping (uint256 => uint256) private _totalSupply;
    // Baal Config
    IBaal public baal;

    modifier baalOnly() {
        require(msg.sender == address(baal), "!auth");
        _;
    }

    constructor(string memory uri)  /* ERC20("Template", "T")  */ ERC1155(uri) ERC1155Permit("NFTVote") initializer {} /*Configure template to be unusable*/

    /// @notice Configure shares - called by Baal on summon
    /// @dev initializer should prevent this from being called again
    /// @param name_ Name for ERC20 token trackers
    /// @param symbol_ Symbol for ERC20 token trackers
    function setUp(string memory name_, string memory symbol_)
        external
        initializer
    {
        baal = IBaal(msg.sender); /*Configure Baal to setup sender*/
        __name = name_;
        __symbol = symbol_;
    }

  /**
     * @notice setup weights of NFTs for voting
     * @param _idNFT - as is IdNFT 
     * @param _multiplier - NFT's weight multiplier
     */
    function setupNFTvotes (uint256 _idNFT, uint8 _multiplier) public baalOnly {
       _setupNFTvotes(_idNFT, _multiplier);
    }

    /// @notice Baal-only function to mint shares.
    /// @param recipient Address to receive shares
    /// @param amount Amount to mint

/**
 *  <NFTGov> ERC1155
 */

    function mint(address recipient, uint256 id, uint256 amount, bytes calldata data) external baalOnly {
        unchecked {
            if (totalSupply(id) + amount <= type(uint256).max / 2) {
                _totalSupply[id] += amount;
                uint256[] memory ids = new uint[](1);
                uint256[] memory amounts = new uint[](1);
                ids[0] = id;
                amounts[0] = amount;
                _beforeTokenTransfer(msg.sender, address(0), recipient, ids, amounts, data);

                _mint(recipient, id, amount, data);
            }
        }
    }
    function mintBatch(
        address to,
        uint256[] calldata ids,
        uint256[] calldata amounts,
        bytes calldata data
        ) external baalOnly {
            _mintBatch (to, ids, amounts, data);
        } 

    /// @notice Baal-only function to burn shares.
    /// @param account Address to lose shares
    /// @param amount Amount to burn
    function burn(address account, uint256 id, uint256 amount) external baalOnly {
        _totalSupply[id] -= amount;
        _burn(account, id, amount);
    }

    function burnBatch(
        address from,
        uint256[] calldata ids,
        uint256[] calldata amounts
    ) external {
        _burnBatch( from, ids, amounts  );
    }

/**
 *  < /NFTGov> 
 */


    /// @notice Internal hook to restrict token transfers unless allowed by baal
    /// @dev Allows transfers if msg.sender is Baal which enables minting and burning
    /// @param from The address of the source account.
    /// @param to The address of the destination account.
    /// @param amounts[] The number of `shares` tokens to transfer.
    function _beforeTokenTransfer(
        address operator,
        address from,
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory data 
    ) internal override  {
        __beforeTokenTransfer(   operator, //address
            from, //address
            to, //address
            ids, //uint256[] memory 
            amounts, // uint256[] memory
            data //bytes memory
            );
        require(
            from == address(0) || /*Minting allowed*/
                (msg.sender == address(baal) && to == address(0)) || /*Burning by Baal allowed*/
                !baal.sharesPaused(),
            "!transferable"
        );
    }
    function getCheckpoint(address delegatee, uint256 nCheckpoints)
        public
        view
        override /* (BaalNFTVotes, IBaalNFToken) */
        returns (Checkpoint memory)
    {
        return super.getCheckpoint(delegatee, nCheckpoints);
    }

    function totalSupply(uint256 _id) public view   returns (uint256) {
        return _totalSupply[_id];
    }

}
 