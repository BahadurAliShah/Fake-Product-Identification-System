import Web3 from "web3";
import {HttpProvider, ContractAddress} from "../assets/constants";

const provider = new Web3.providers.HttpProvider(HttpProvider);

const web3 = new Web3(provider);

const abi = [{
    "inputs": [{"internalType": "uint256", "name": "_id", "type": "uint256"}, {
        "internalType": "string",
        "name": "_newOwner",
        "type": "string"
    }], "name": "changeOwner", "outputs": [], "stateMutability": "nonpayable", "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "_id", "type": "uint256"}, {
        "internalType": "string",
        "name": "_name",
        "type": "string"
    }, {"internalType": "string", "name": "_location", "type": "string"}],
    "name": "createManufacturer",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "_id", "type": "uint256"}, {
        "internalType": "string",
        "name": "_name",
        "type": "string"
    }, {"internalType": "string", "name": "_pStatus", "type": "string"}, {
        "internalType": "uint256",
        "name": "_price",
        "type": "uint256"
    }, {"internalType": "string", "name": "_pOwner", "type": "string"}, {
        "internalType": "uint256",
        "name": "man",
        "type": "uint256"
    }],
    "name": "createProduct",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "_id", "type": "uint256"}],
    "name": "getManufacturerDetails",
    "outputs": [{
        "components": [{
            "internalType": "uint256",
            "name": "mID",
            "type": "uint256"
        }, {"internalType": "string", "name": "companyName", "type": "string"}, {
            "internalType": "string",
            "name": "companyLocation",
            "type": "string"
        }], "internalType": "struct ProductIdentification.manufacturer", "name": "mDetails", "type": "tuple"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "_id", "type": "uint256"}],
    "name": "getOwner",
    "outputs": [{"internalType": "string", "name": "temp", "type": "string"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "_id", "type": "uint256"}],
    "name": "getOwnerList",
    "outputs": [{"internalType": "string[]", "name": "owners", "type": "string[]"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "_id", "type": "uint256"}],
    "name": "getProductDetails",
    "outputs": [{
        "components": [{
            "internalType": "uint256",
            "name": "productID",
            "type": "uint256"
        }, {"internalType": "string", "name": "productName", "type": "string"}, {
            "internalType": "string",
            "name": "pStatus",
            "type": "string"
        }, {"internalType": "uint256", "name": "price", "type": "uint256"}, {
            "internalType": "string",
            "name": "currentOwner",
            "type": "string"
        }, {"internalType": "string[]", "name": "ownersList", "type": "string[]"}, {
            "internalType": "uint256",
            "name": "manufactur",
            "type": "uint256"
        }], "internalType": "struct ProductIdentification.product", "name": "pDetails", "type": "tuple"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "owner",
    "outputs": [{"internalType": "address", "name": "", "type": "address"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "_id", "type": "uint256"}],
    "name": "verifyProduct",
    "outputs": [{"internalType": "string", "name": "ver", "type": "string"}],
    "stateMutability": "view",
    "type": "function"
}];

const FpisContract = new web3.eth.Contract(abi, ContractAddress);
console.log("FPISContract: ", FpisContract);
export default FpisContract;
