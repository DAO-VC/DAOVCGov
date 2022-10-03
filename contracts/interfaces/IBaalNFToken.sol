//SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";
import "./iCheckpoint.sol";

interface IBaalNFToken is IERC1155, iCheckpoint{

    function setUp(string memory _name, string memory _symbol) external;


/**
 *  <NFTGov> ERC1155
 */
    function mint(
        address recipient, 
        uint256 id,
        uint256 amount,  
        bytes calldata data) external;
        
    function mintBatch(
        address to,
        uint256[] calldata ids,
        uint256[] calldata amounts,
        bytes calldata data
        ) external;

    function burn(address account, 
        uint256 id, 
        uint256 amount) external;

    function burnBatch(
        address from,
        uint256[] calldata ids,
        uint256[] calldata amounts
    ) external;

/**
 *  < /NFTGov> 
 */

    // below is shares token specific
    function getPriorVotes(address account, uint256 timeStamp) external view returns (uint256);

    function numCheckpoints(address) external view returns (uint256);

    function getCheckpoint(address, uint256)
        external
        view
        returns (Checkpoint memory);

    function getCurrentVotes(address account) external view returns(uint256);

}