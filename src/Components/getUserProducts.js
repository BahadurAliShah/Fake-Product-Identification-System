import React, {useState, useEffect} from 'react';
import {useSelector} from "react-redux";
import ProductsList from "./productsList";
import FpisContract from "../blockchain/ProductIdentificationContract";

export default function GetUserProducts() {
    // const [user, setUser] = useState('');
    const [products, setProducts] = useState([]);
    const [error, setError] = useState('');
    const web3 = useSelector(state => state.web3);

    const getProducts = async () => {
        try {
            const account = web3.account;
            const result = await FpisContract.methods.getProductByAddress(account).call();
            console.log("Get User Products: ", result);
            setProducts(result);
        } catch (e) {
            console.log(e);
            setError(e.message.split(":")[2]);
        }
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div>
            <div>
                <label className="flex justify-center text-xl mt-5 font-medium text-gray-800">Get User
                    Products</label>
            </div>

            {/*<div className="bg-white px-4 py-5 flex items-center justify-center shadow sm:rounded-lg sm:p-6">*/}
            {/*    <div>*/}
            {/*        <div className="col-span-6 sm:col-span-3">*/}
            {/*            <label className="block text-sm font-medium text-gray-700">*/}
            {/*                User ID*/}
            {/*            </label>*/}
            {/*            <input*/}
            {/*                type="text"*/}
            {/*                placeholder='Enter the User ID'*/}
            {/*                value={user}*/}
            {/*                onChange={e => setUser(e.target.value)}*/}
            {/*                className="block px-4 w-96 h-10 rounded-md border-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"*/}
            {/*            />*/}
            {/*        </div>*/}

            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className="flex justify-center">*/}
            {/*    <button*/}
            {/*        type="submit"*/}
            {/*        className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"*/}
            {/*    >*/}
            {/*        Get*/}
            {/*    </button>*/}
            {/*</div>*/}

            <ProductsList Products={products}/>

            <div className="flex justify-center">
                <label className="text-red-500">{error}</label>
            </div>
        </div>
    )
}
