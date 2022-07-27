// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.6;

contract Chat {
  string public message;
//object in solidity
  event Message(string message);

 /*  function setMessage(string _message) public {
    message = _message;
    emit Message(message);
  } */

}