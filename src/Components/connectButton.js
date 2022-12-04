import Web3 from "web3";
import FpisContract from "../blockchain/ProductIdentificationContract.js";

const verifyProduct = async (productID) => {
    const web3 = new Web3(window.ethereum);
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    const result = await FpisContract.methods.verifyProduct(productID).call({from: account});
    return result;
}
export const ConnectButton = async () => {
    // const dispatch = useDispatch();
    // const web3 = useSelector(state => state.web3);
    const connect = async () => {
        // if (web3.web3 === null) {
        //     if (window.ethereum) {
        //         try {
        //             const accounts = await window.ethereum.request({
        //                 method: "eth_requestAccounts",
        //             });
        //             const account = accounts[0];
        //             const web3 = new Web3(window.ethereum);
        //             dispatch(SaveWEB3(web3, account));
        //         } catch (error) {
        //             console.log(error);
        //         }
        //     } else {
        //         console.log("Install Metamask");
        //     }
        // } else {
        //     console.log("Already connected");
        // }
    }
    return (
        <button
            type="button"
            className="inline-flex items-center rounded-md border border-transparent bg-gray-600 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            onClick={() => connect()}
        >
            Connect
        </button>
    );
};
