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

    // Buy PanTokenSale
    function buyTokens(uint256 _numberOfTokens) public payable {
      // Require that value is equal to token tokenPrice
      // Require enough contract has enough tokenSold
      // Require that a transfer is successful
      tokenSold += _numberOfTokens;
      // Trigger Sell event
      Sell(msg.sender, _numberOfTokens);
    }
    // end sale
}
