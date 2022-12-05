import React, {useState} from "react";
import FpisContract from "../blockchain/ProductIdentificationContract.js";
import {useSelector} from "react-redux";
import {MagnifyingGlassIcon} from "@heroicons/react/20/solid";
import Table from "./table";

export const VerifyProduct = () => {
    const [productID, setProductID] = useState("");
    const [result, setResult] = useState("");
    const [error, setError] = useState("");
    const web3 = useSelector((state) => state.web3.web3);
    const [manufacturer, setManufacturer] = useState("");
    const [currentOwner, setCurrentOwner] = useState("");
    const [previousOwner, setPreviousOwner] = useState([]);
    const account = useSelector((state) => state.web3.account);

    const verifyProduct = async () => {
        try {
            const temp = await FpisContract.methods.verifyProduct(productID).call({
                from: account,
                gas: 3000000,
                value: 1000000000000000000,
            });
            setResult(temp[0]);
            setCurrentOwner(temp[1]);
            setManufacturer(temp[2][0]);
            setPreviousOwner(temp[2].slice(1));
            console.log("Verify Product: ", result);
        } catch (e) {
            console.log(e);
            setError(e.message.split(":")[2]);
        }
    }

    return (
        <div className={"m-5"}>
            <h3 className="text-lg font-medium leading-6 text-gray-900">Verify Product</h3>

            <div className={"mt-5 "}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Please Enter the Product ID:
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true"/>
                    </div>
                    <input
                        type="number"
                        id="productID"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-500 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="0000"
                        value={productID}
                        onChange={(e) => setProductID(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="absolute inset-y-0 right-0 flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-r-md text-white bg-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        onClick={verifyProduct}
                    >
                        Verify
                    </button>
                </div>
            </div>

            <div className={"mt-5"}>
                <div className={"mt-5"}>
                    <p className={"text-gray-900"}>{result}</p>
                </div>
            </div>
            <div className={"mt-5"}>
                {manufacturer !== "" && (
                <div className="px-4 sm:px-6 lg:px-8">
                    <h1 className="text-2xl font-semibold text-gray-900 inline-flex">Manufacturer:</h1>
                    <p className={"inline-flex px-4"}>{manufacturer}</p>
                </div>
                )}
                {currentOwner !== "" && (
                <div className="px-4 sm:px-6 lg:px-8">
                    <h1 className="text-2xl font-semibold text-gray-900 inline-flex">Current Owner:</h1>
                    <p className={"inline-flex px-4"}>{currentOwner}</p>
                </div>
                )}
            </div>

            <hr className={"mt-5"}/>

            <div className={"mt-5"}>
                {previousOwner.length !== 0 && (
                    <Table PreviousOwners={previousOwner} Manufacturer={manufacturer}/>
                )}
            </div>

            <div className="flex justify-center">
                <label className="text-red-500">{error}</label>
            </div>
        </div>
    );
}
