// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.2;

contract ZToken {
    // name
    string public name = "Z Token";
    // symbol
    string public symbol = "ZTC";
    //standard
    string public standard = "Z Token v1.0";
    // constructor
    // set the total number of tokens
    // read the total number of token
    uint256 public totalSupply;

    mapping(address => uint256) public balanceOf;

    constructor(uint256 _initialSupply) public {
        balanceOf[msg.sender] = _initialSupply;
        totalSupply = _initialSupply;
    }

    //Transfer
    function transfer(address _to, uint256 _value)
        public
        returns (bool success)
    {
        // exception if doesnt have enough
        // return a boolean
        // transfer event
    }
}
