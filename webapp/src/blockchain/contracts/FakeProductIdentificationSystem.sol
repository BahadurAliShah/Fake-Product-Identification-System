//SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract ProductIdentification {
    address public owner;


    // data type of manufacturer
    struct manufacturer {
        uint mID;
        string companyName;
        string companyLocation;
    }

    // data type of product
    struct product {
        uint productID;
        string productName;
        string pStatus;
        uint price;
        string currentOwner;
        string[] ownersList;
        uint manufactur;
    }

    product[] productArray;
    manufacturer[] manufacturerArray;

    function createManufacturer(uint _id, string memory _name, string memory _location) public returns (uint){
        manufacturer memory newManufacturer;
        newManufacturer.mID = _id;
        newManufacturer.companyName = _name;
        newManufacturer.companyLocation = _location;
        manufacturerArray.push(newManufacturer);
        return 1;
    }


    function createProduct(uint _id, string memory _name, string memory _pStatus, uint _price, string memory _pOwner, uint man) public returns (uint) {
        bool flag = false;
        for (uint i = 0; i < productArray.length; i++) {
            if (_id == productArray[i].productID) {
                flag = true;
            }
        }
        require(flag == false, "The product already exists!");
        product memory newProduct;
        newProduct.productID = _id;
        newProduct.productName = _name;
        newProduct.pStatus = _pStatus;
        newProduct.price = _price;
        newProduct.currentOwner = _pOwner;
        newProduct.manufactur = man;
        productArray.push(newProduct);
        return 1;
    }

    function changeOwner(uint _id, string memory _newOwner) public {
        for (uint i = 0; i < productArray.length; i++) {
            if (_id == productArray[i].productID) {
                productArray[i].ownersList.push(productArray[i].currentOwner);
                productArray[i].currentOwner = _newOwner;

            }
        }
    }

    function getOwner(uint _id) public view returns (string memory temp){
        for (uint i = 0; i < productArray.length; i++) {
            if (_id == productArray[i].productID) {
                temp = productArray[i].currentOwner;
            }
        }
        return temp;
    }

    function verifyProduct(uint _id) public view returns (string memory ver){
        bool flag = false;
        for (uint i = 0; i < productArray.length; i++) {
            if (_id == productArray[i].productID) {
                flag = true;
            }
        }
        if (flag == true) {
            ver = "The Product is Original and verified";
        }
        else {
            ver = "The Product is Fake and not verified";
        }
        return ver;
    }

    function getProductDetails(uint _id) public view returns (product memory pDetails){
        for (uint i = 0; i < productArray.length; i++) {
            if (_id == productArray[i].productID) {
                pDetails = productArray[i];
                return pDetails;
            }
        }
    }

    function getManufacturerDetails(uint _id) public view returns (manufacturer memory mDetails){
        for (uint i = 0; i < manufacturerArray.length; i++) {
            if (_id == manufacturerArray[i].mID) {
                mDetails = manufacturerArray[i];
                return mDetails;
            }
        }
    }

    function getOwnerList(uint _id) public view returns (string[] memory owners){
        for (uint i = 0; i < productArray.length; i++) {
            if (_id == productArray[i].productID) {
                owners = productArray[i].ownersList;
                return owners;
            }
        }
    }
}
