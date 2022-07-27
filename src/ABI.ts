const counterContract = [
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
          }
      ],
      "name": "Decrement",
      "type": "event",
      "signature": "0x32814a5bdfd1b8c3d76c49c54e043d6e8aa93d197a09e16599b567135503f748"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
          }
      ],
      "name": "Increment",
      "type": "event",
      "signature": "0x51af157c2eee40f68107a47a49c32fbbeb0a3c9e5cd37aa56e88e6be92368a81"
  },
  {
      "inputs": [],
      "name": "count",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true,
      "signature": "0x06661abd"
  },
  {
      "inputs": [],
      "name": "decrement",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x2baeceb7"
  },
  {
      "inputs": [],
      "name": "getCount",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true,
      "signature": "0xa87d942c"
  },
  {
      "inputs": [],
      "name": "increment",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xd09de08a"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "_number",
              "type": "uint256"
          }
      ],
      "name": "insertNumber",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x1da963b2"
  }
]

export default {
  counterContract
}

