//SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

//"0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2", companyabc, islamabad

contract ProductIdentification{
    address public owner;
    mapping(address => uint) public balance;

    // data type of manufacturer
    struct manufacturer{
        address mID;
        string companyName;
        string companyLocation;
    }

    // data type of product
    struct product{
        uint productID;
        string productName;
        string pDescription;
        uint price;
        address currentOwner;
        address[] ownersList;
        address manufactur;

    }

    product[] productArray;
    product[] man_list_products;
    product[] user_list_products;
    product[] user_old_products;
    manufacturer[] manufacturerArray;
    uint productCount = 0;

    constructor() payable{
        owner = msg.sender;
        balance[owner] = msg.value;
    }

    function createManufacturer(address mAddress, string memory cName, string memory cLocation) public returns (uint) {
        require (msg.sender == owner, "Only the contract owner can add manufacturer!");
        bool flag = false;
        for (uint i=0; i<manufacturerArray.length; i++){
            if (mAddress == manufacturerArray[i].mID){
                flag = true;
            }
        }
        require (flag == false, "The manufacturer already exists!");
        manufacturer memory newManufacturer;
        newManufacturer.mID = mAddress;
        newManufacturer.companyName = cName;
        newManufacturer.companyLocation = cLocation;
        manufacturerArray.push(newManufacturer);
        return 1;
    }

    function createProduct(string memory _name, string memory _desc, uint _price) public returns (uint) {
        bool flag = false;
        for (uint i=0; i<manufacturerArray.length; i++){
            if(manufacturerArray[i].mID == msg.sender){
                flag = true;
                break;
            }
        }
        require(flag == true, "Only the manufacturer can create the products!");
        product memory newProduct;
        newProduct.productID = productCount;
        newProduct.productName = _name;
        newProduct.pDescription = _desc;
        newProduct.price = _price;
        newProduct.currentOwner = msg.sender;
        newProduct.manufactur = msg.sender;
        productArray.push(newProduct);
        productCount++;
        return 1;
    }

    function changeOwner(uint _id, address  _newOwner) public returns (string memory feedback) {
        uint index = 9999;
        for (uint i=0; i<productArray.length; i++){
            if (_id == productArray[i].productID){
                index = i;
                break;
            }
        }
        require (productArray[index].currentOwner == msg.sender, "You dont own this product" );
        productArray[index].ownersList.push(msg.sender);
        productArray[index].currentOwner = _newOwner;
        feedback = "Owner has been successfully changed!";
        return feedback;
    }

    function getOwner(uint _id) public view returns (address temp){
        for (uint i=0; i<productArray.length; i++){
            if (_id == productArray[i].productID){
                temp = productArray[i].currentOwner;
            }
        }
        return temp;
    }

    function verifyProduct(uint _id) public payable returns (string memory ver, address currentOwner, address[] memory owners ){
        require(msg.value >= 1 * (1 ether), "You need 1 Ether to verify product");
        balance[msg.sender] = msg.value;
        balance[owner] += 1 * (1 ether);
        balance[msg.sender] -= 1 * (1 ether);
        // msg.value -= 1 * (1 ether);
        bool flag = false;
        uint index = 0;
        for (uint i=0; i<productArray.length; i++){
            if (_id == productArray[i].productID){
                flag = true;
                index = i;
            }
        }
        if (flag == true){
            ver = "Verified, Product found in our list";
        }
        else{
            ver = "Not Verified, Product in not in our list";
        }
        return (ver, productArray[index].currentOwner, productArray[index].ownersList);
    }

    function getProductDetails(uint _id) public view returns (product memory pDetails){
        for (uint i=0; i<productArray.length; i++){
            if (_id == productArray[i].productID){
                pDetails = productArray[i];
                return pDetails;
            }
        }
    }

    function getManufacturerDetails(address _id) public view returns (manufacturer memory mDetails){
        for (uint i=0; i<manufacturerArray.length; i++){
            if (_id == manufacturerArray[i].mID){
                mDetails = manufacturerArray[i];
                return mDetails;
            }
        }
    }

    function getOwnerList(uint _id) public view returns (address[] memory owners){
        for (uint i=0; i<productArray.length; i++){
            if (_id == productArray[i].productID){
                owners = productArray[i].ownersList;
                return owners;
            }
        }
    }

    function getIdentity(address _whoIs) public view returns (string memory identity){
        bool flag = false;
        if (_whoIs == owner){
            identity = "Contract Owner's Address!";
            flag = true;
        }
        for (uint i=0; i<manufacturerArray.length; i++){
            if (_whoIs == manufacturerArray[i].mID){
                identity = "Manufacturer's Address!";
                flag = true;
            }
        }
        if (flag==false){
            identity = "Product Owner's Address!";
        }
        return identity;
    }

    function getBalance() public view returns(uint256){
        return balance[owner];
    }

    function getProductByManufacturer(address whoIs) public payable returns(product[] memory){
        for (uint i=0; i<productArray.length; i++){
            if (productArray[i].manufactur == whoIs){
                man_list_products.push(productArray[i]);
            }
        }
        return man_list_products;
    }

    function getProductByUser(address whoIs) public payable returns(product[] memory productsOfUser){
        for (uint i=0; i<productArray.length; i++){
            if (productArray[i].currentOwner == whoIs){
                user_list_products.push(productArray[i]);
            }
        }
        productsOfUser = user_list_products;
        return productsOfUser;
    }

    function getOldProductByUser(address whoIs) public payable returns(product[] memory soldProducts){
        for (uint i=0; i<productArray.length; i++){
            for(uint j=0; j<productArray[i].ownersList.length; j++){
                if (productArray[i].ownersList[j] == whoIs){
                    user_old_products.push(productArray[i]);
                }
            }

        }
        soldProducts = user_old_products;
        return soldProducts;
    }

}
