pragma solidity >=0.4.2;

contract ZToken {
    // constructor
    // set the total number of tokens
    // read the total number of token
    uint256 public totalSupply;

    mapping(address => uint256) public balanceOf;

    constructor(uint256 _initialSupply) public {
        balanceOf[msg.sender] = _initialSupply;
        totalSupply = _initialSupply;
    }
}
