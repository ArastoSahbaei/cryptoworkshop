// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.6;

contract WeAppCoin {
    address public minter;
    mapping(address => uint256) public balances;

    event Sent(address from, address to, uint256 value);

    constructor() {
        minter = msg.sender;
    }

    function mint(address receiver, uint256 amount) public {
        require(msg.sender == minter);
        require(amount < 1e60);
        balances[receiver] += amount;
    }

    function send(address receiver, uint256 amount) public {
        require(balances[msg.sender] >= amount, "Insufficient balance");
        balances[msg.sender] -= amount;
        balances[receiver] += amount;
        emit Sent(msg.sender, receiver, amount);
    }
}
