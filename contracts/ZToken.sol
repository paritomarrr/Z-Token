pragma solidity >=0.4.2;

contract ZToken {
    // constructor
    // set the total number of tokens
    // read the total number of token
    uint256 public totalSupply;

    constructor() public {
        totalSupply = 100000;
    }
}
