pragma solidity ^0.4.2;

import "./PanToken.sol";

contract PanTokenSale {
    address admin;
    PanToken public tokenContract;

    function PanTokenSale(PanToken _tokenContract) public {
        admin = msg.sender;
        tokenContract = _tokenContract;
        // Assign Token Contract
        // Token price
    }
}
