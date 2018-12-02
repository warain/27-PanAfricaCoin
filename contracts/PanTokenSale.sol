pragma solidity ^0.4.2;

import "./PanToken.sol";

contract PanTokenSale {
    address admin;
    PanToken public tokenContract;
    uint256 public tokenPrice;
    uint256 public tokenSold;

    event Sell(address _buyer, uint256 _amount);

    function PanTokenSale(PanToken _tokenContract, uint256 _tokenPrice) public {
        admin = msg.sender;
        tokenContract = _tokenContract;
        tokenPrice = _tokenPrice;
    }

    //multiplier
    function multiply(uint x, uint y) internal pure returns (uint z){
      require(y == 0 || (z = x * y)/y == x);
    }

    function buyTokens(uint256 _numberOfTokens) public payable {
      // Require that value is equal to token tokenPrice
       require(msg.value == multiply(_numberOfTokens, tokenPrice));
      // Require enough contract has enough tokenSold
      // Require that a transfer is successful
      tokenSold += _numberOfTokens;
      Sell(msg.sender, _numberOfTokens);
    }
}
