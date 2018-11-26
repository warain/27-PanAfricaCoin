pragma solidity ^0.4.2;


contract DappToken {
	// Constructor
  //Set the tokens
  // REad the total number of tokens
  uint256 public totalSupply;

  function DappToken () public {
    totalSupply = 1000000; //1 million tokens (state variable)  
  }
}
