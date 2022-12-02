import {useEffect} from "react";
import Web3 from "web3";
import { useSelector } from "react-redux";


export const ConnectButton = () => {
    const theme = useSelector(state => state.theme.theme);

    useEffect(() => {
        console.log("theme", theme);
    }, []);
    const connect = async () => {
        try {
            if (window.ethereum) {
                const web3 = new Web3(window.ethereum);
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
    };

    return <button onClick={connect}>Connect</button>;
}
