import {useEffect} from "react";
import Web3 from "web3";
import { useSelector } from "react-redux";
import FpisContract from "../blockchain/ProductIdentificationContract.js";

const verifyProduct = async (productID) => {
    const web3 = new Web3(window.ethereum);
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    const result = await FpisContract.methods.verifyProduct(productID).call({from: account});
    return result;
}

export const ConnectButton = () => {
    const theme = useSelector(state => state.theme.theme);

    useEffect(() => {
        console.log("theme", theme);
    }, []);
    const connect = async () => {
        try {
            if (window.ethereum) {
                console.log("web3", window.ethereum);
                try {
                    const accounts = await window.ethereum.request({
                        method: "eth_requestAccounts",
                    });
                    console.log(accounts);
                } catch (error) {
                    console.log(error);
                }
            } else {
                console.log("Install Metamask");
            }
        } catch (error) {
            console.log(error);
        }
        verifyProduct("0x1").then((result) => {
            console.log("result", result);
        });
    };

    return <button onClick={connect}>Connect</button>;
}
