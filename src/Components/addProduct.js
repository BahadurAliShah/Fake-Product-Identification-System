import React, {useState} from 'react';
import {useSelector} from "react-redux";
import FpisContract from "../blockchain/ProductIdentificationContract";

export default function AddProduct() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');
    const web3 = useSelector(state => state.web3);

    const addProduct = async () => {
        try {
            const account = web3.account;
            const result = await FpisContract.methods.createProduct(name, description, price).send({
                from: account,
                gas: 3000000
            });
            console.log(result);
        } catch (e) {
            console.log(e);
            setError(e.message.split(":")[2]);
        }
    }

    return (
        <div>
            <div>
                <label className="flex justify-center text-xl mt-5 font-medium text-gray-800">Add
                    Product</label>
            </div>

            <div className="bg-white px-4 py-5 flex items-center justify-center shadow sm:rounded-lg sm:p-6">

                <div>
                    <div className="col-span-6 sm:col-span-3">
                        <label className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            placeholder='Enter the product name'
                            className="block px-4 w-96 h-10 rounded-md border-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                    </div>
                    <br></br>
                    <div className="col-span-6 sm:col-span-3">
                        <label className="block text-sm font-medium text-gray-700">
                            Price
                        </label>
                        <input
                            type="text"
                            value={price}
                            onChange={e => setPrice(e.target.value)}
                            placeholder='Enter the price'
                            className="block px-4 w-96 h-10 rounded-md border-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                    </div>
                    <br></br>
                    <div className="col-span-6 sm:col-span-4">
                        <label className="block text-sm font-medium text-gray-700">
                            Description
                        </label>
                        <input
                            type="text"
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                            placeholder='Enter the description'
                            className="block px-4 w-96 h-10 rounded-md border-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                    </div>
                    <br></br>
                    <div className="col-span-6 sm:col-span-4">
                        <label className="block text-sm font-medium text-gray-700">
                            Manufacturer ID
                        </label>
                        <input
                            type="text"
                            disabled={true}
                            placeholder='Enter Manufacturer ID'
                            value={web3.account}
                            className="block px-4 w-96 h-10 rounded-md border-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                    </div>
                    <br></br>
                </div>
            </div>
            <div className="flex justify-center">

                <button
                    type="submit"
                    onClick={addProduct}
                    className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    Save
                </button>
            </div>

            <div className="flex justify-center">
                <label className="text-red-500">{error}</label>
            </div>
        </div>
    )
}
