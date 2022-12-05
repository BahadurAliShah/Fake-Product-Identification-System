import Web3 from "web3";
import {ContractAddress, HttpProvider} from "../assets/constants";

const provider = new Web3.providers.HttpProvider(HttpProvider);

const web3 = new Web3(provider);

const abi = [{
    "inputs": [],
    "stateMutability": "payable",
    "type": "constructor"
}, {
    "inputs": [{"internalType": "address", "name": "", "type": "address"}],
    "name": "balance",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "_id", "type": "uint256"}, {
        "internalType": "address",
        "name": "_newOwner",
        "type": "address"
    }],
    "name": "changeOwner",
    "outputs": [{"internalType": "string", "name": "feedback", "type": "string"}],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "mAddress", "type": "address"}, {
        "internalType": "string",
        "name": "cName",
        "type": "string"
    }, {"internalType": "string", "name": "cLocation", "type": "string"}],
    "name": "createManufacturer",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "string", "name": "_name", "type": "string"}, {
        "internalType": "string",
        "name": "_desc",
        "type": "string"
    }, {"internalType": "uint256", "name": "_price", "type": "uint256"}],
    "name": "createProduct",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "getBalance",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "_whoIs", "type": "address"}],
    "name": "getIdentity",
    "outputs": [{"internalType": "string", "name": "identity", "type": "string"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "_id", "type": "address"}],
    "name": "getManufacturerDetails",
    "outputs": [{
        "components": [{
            "internalType": "address",
            "name": "mID",
            "type": "address"
        }, {"internalType": "string", "name": "companyName", "type": "string"}, {
            "internalType": "string",
            "name": "companyLocation",
            "type": "string"
        }], "internalType": "struct ProductIdentification.manufacturer", "name": "mDetails", "type": "tuple"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "whoIs", "type": "address"}],
    "name": "getOldProductByUser",
    "outputs": [{
        "components": [{
            "internalType": "uint256",
            "name": "productID",
            "type": "uint256"
        }, {"internalType": "string", "name": "productName", "type": "string"}, {
            "internalType": "string",
            "name": "pDescription",
            "type": "string"
        }, {"internalType": "uint256", "name": "price", "type": "uint256"}, {
            "internalType": "address",
            "name": "currentOwner",
            "type": "address"
        }, {"internalType": "address[]", "name": "ownersList", "type": "address[]"}, {
            "internalType": "address",
            "name": "manufactur",
            "type": "address"
        }], "internalType": "struct ProductIdentification.product[]", "name": "soldProducts", "type": "tuple[]"
    }],
    "stateMutability": "payable",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "_id", "type": "uint256"}],
    "name": "getOwner",
    "outputs": [{"internalType": "address", "name": "temp", "type": "address"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "_id", "type": "uint256"}],
    "name": "getOwnerList",
    "outputs": [{"internalType": "address[]", "name": "owners", "type": "address[]"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "whoIs", "type": "address"}],
    "name": "getProductByAddress",
    "outputs": [{
        "components": [{
            "internalType": "uint256",
            "name": "productID",
            "type": "uint256"
        }, {"internalType": "string", "name": "productName", "type": "string"}, {
            "internalType": "string",
            "name": "pDescription",
            "type": "string"
        }, {"internalType": "uint256", "name": "price", "type": "uint256"}, {
            "internalType": "address",
            "name": "currentOwner",
            "type": "address"
        }, {"internalType": "address[]", "name": "ownersList", "type": "address[]"}, {
            "internalType": "address",
            "name": "manufactur",
            "type": "address"
        }], "internalType": "struct ProductIdentification.product[]", "name": "output", "type": "tuple[]"
    }],
    "stateMutability": "payable",
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
            "name": "pDescription",
            "type": "string"
        }, {"internalType": "uint256", "name": "price", "type": "uint256"}, {
            "internalType": "address",
            "name": "currentOwner",
            "type": "address"
        }, {"internalType": "address[]", "name": "ownersList", "type": "address[]"}, {
            "internalType": "address",
            "name": "manufactur",
            "type": "address"
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
    "outputs": [{"internalType": "string", "name": "ver", "type": "string"}, {
        "internalType": "address",
        "name": "currentOwner",
        "type": "address"
    }, {"internalType": "address[]", "name": "owners", "type": "address[]"}],
    "stateMutability": "payable",
    "type": "function"
}]

const FpisContract = new web3.eth.Contract(abi, ContractAddress);
console.log("FPISContract: ", FpisContract);
export default FpisContract;
