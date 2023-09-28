// File: contracts/BlockchainUNN_ICO.sol

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract BlockchainUNN_ICO {
    
    address public admin;
    address public token_address;
    uint256 public ico_start_time;
    mapping(address => bool) public registered_addresses;
    mapping(address => bool) public claimed_addresses;
    uint256 public constant ICO_DURATION = 86400;  // 24 hours in seconds
    
    constructor(address _token_address) {
        admin = msg.sender;
        token_address = _token_address;
        ico_start_time = block.timestamp;
    }

    function register() external payable {
        require(msg.value == 0.01 ether, "Must send 0.01 ether to register");
        require(registered_addresses[msg.sender] == false, "User already registered");
        require(block.timestamp <= ico_start_time + ICO_DURATION, "ICO ended. Cannot register now");
        registered_addresses[msg.sender] = true;
    }

    function claim() external {
        require(registered_addresses[msg.sender] == true, "User not registered");
        require(block.timestamp > ico_start_time + ICO_DURATION, "ICO not yet ended");
        require(claimed_addresses[msg.sender] == false, "Tokens already claimed");
        
        claimed_addresses[msg.sender] = true;
        IERC20(token_address).transfer(msg.sender, 50 * 10**18); 
    }
}
