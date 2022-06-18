// SPDX-License-Identifier: MIT

// Telling Ethereum which solidity version to use when running this code

pragma solidity ^0.8.4;

// Import the standard implementation of ERC721
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

// Contract 'NFTee' _IS_ an 'ERC721' contract
contract NFTee is ERC721 {

    constructor() ERC721("LearnWeb3's NFT","LEARN-NFT") {
        // Mint 1 NFT to myself
        _mint(msg.sender, 1);
    }

}