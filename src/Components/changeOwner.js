import React, {useState} from 'react';
import {useSelector} from "react-redux";

export default function ChangeOwner() {
    const [name, setName] = useState('');
    const [newOwner, setNewOwner] = useState('');
    const [feedback, setFeedback] = useState('');
    const web3 = useSelector(state => state.web3);

    return (
        <div>
            <div>
                <label className="flex justify-center text-xl mt-5 font-medium text-gray-800">Change
                    Owner</label>
            </div>

            <div className="bg-white px-4 py-5 flex items-center justify-center shadow sm:rounded-lg sm:p-6">
                <div>
                    <div className="col-span-6 sm:col-span-3">
                        <label className="block text-sm font-medium text-gray-700">
                            Product ID
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            placeholder='Enter the product ID'
                            className="block px-4 w-96 h-10 rounded-md border-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                    </div>
                    <br></br>
                    <div className="col-span-6 sm:col-span-3">
                        <label className="block text-sm font-medium text-gray-700">
                            New Owner Address
                        </label>
                        <input
                            type="text"
                            value={newOwner}
                            onChange={e => setNewOwner(e.target.value)}
                            placeholder='Address of new owner'
                            className="block px-4 w-96 h-10 rounded-md border-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                    </div>
                    <br></br>
                    <div className="col-span-6 sm:col-span-3">
                        <label className="block text-sm font-medium text-gray-700">
                            Feedback
                        </label>
                        <input
                            type="text"
                            value={feedback}
                            onChange={e => setFeedback(e.target.value)}
                            placeholder='Address of new owner'
                            className="block px-4 w-96 h-10 rounded-md border-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                    </div>
                    <br></br>

                </div>
            </div>
            <div className="flex justify-center">
                <button
                    type="submit"
                    className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    Save
                </button>
            </div>
        </div>
    )
}
