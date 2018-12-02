pragma solidity ^0.4.2;

import "./PanToken.sol";

contract PanTokenSale {
    address admin;
    PanToken public tokenContract;
    uint256 public tokenPrice;

    function PanTokenSale(PanToken _tokenContract, uint256 _tokenPrice) public {
        admin = msg.sender;
        tokenContract = _tokenContract;
        tokenPrice = _tokenPrice;
        // Token price
    }
}
