// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.6;

contract CounterContract {
    uint256 public count = 0;

    event Increment(uint256 value);
    event Decrement(uint256 value);

    function getCount() public view returns (uint256) {
        return count;
    }

    function increment() public {
        count++;
        emit Increment(count);
    }

    function decrement() public {
        count--;
        emit Increment(count);
    }

    function insertNumber(uint256 _number) public {
        count = _number;
    }
}
