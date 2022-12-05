import React, {useState} from 'react';
import {useSelector} from "react-redux";
import ProductsList from "./productsList";

export default function GetManufacturerProducts() {
    const [manufacturer, setManufacturer] = useState('');
    const web3 = useSelector(state => state.web3);

    return (
        <div>
            <div>
                <label className="flex justify-center text-xl mt-5 font-medium text-gray-800">Get
                    Manufacturer Products</label>
            </div>

            <div className="bg-white px-4 py-5 flex items-center justify-center shadow sm:rounded-lg sm:p-6">
                <div>
                    <div className="col-span-6 sm:col-span-3">
                        <label className="block text-sm font-medium text-gray-700">
                            Manufacturer ID
                        </label>
                        <input
                            type="text"
                            value={manufacturer}
                            onChange={e => setManufacturer(e.target.value)}
                            placeholder='Enter the manufacturer ID'
                            className="block px-4 w-96 h-10 rounded-md border-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                    </div>

                </div>
            </div>
            <div className="flex justify-center">
                <button
                    type="submit"
                    className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    Get
                </button>
            </div>
            <ProductsList/>
        </div>
    )
}
