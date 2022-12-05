import {useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import FpisContract from "../blockchain/ProductIdentificationContract";

export default function CreateManufacturer() {
    const dispatch = useDispatch()
    const web3 = useSelector(state => state.web3)
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [location, setLocation] = useState("")

    const createManufacturer = async () => {
        const account = web3.account
        const result = await FpisContract.methods.createManufacturer(address, name, location).send({
            from: account,
            gas: 3000000
        })
        console.log(result)
    }

    return (
        <div className="space-y-6">
            <div>
                <label className="flex justify-center mt-5 text-xl font-medium text-gray-800">Create
                    Manufacturer</label>
            </div>

            <div className="bg-white px-4 py-5 flex items-center justify-center shadow sm:rounded-lg sm:p-6">
                <div>
                    <div className="col-span-6 sm:col-span-3">
                        <label className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            placeholder='Enter the Name'
                            value={name}
                            onChange={e => setName(e.target.value)}
                            className="block px-4 w-96 h-10 rounded-md border-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                    </div>
                    <br/>
                    <div className="col-span-6 sm:col-span-3">
                        <label className="block text-sm font-medium text-gray-700">
                            Address
                        </label>
                        <input
                            type="text"
                            placeholder='Enter the Company Address'
                            value={address}
                            onChange={e => setAddress(e.target.value)}
                            className="block px-4 w-96 h-10 rounded-md border-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                    </div>
                    <br/>
                    <div className="col-span-6 sm:col-span-4">
                        <label className="block text-sm font-medium text-gray-700">
                            Company Location
                        </label>
                        <input
                            type="text"
                            placeholder='Enter the Company Location'
                            value={location}
                            onChange={e => setLocation(e.target.value)}
                            className="block px-4 w-96 h-10 rounded-md border-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                    </div>
                </div>
            </div>


            <div className="flex justify-center">
                <button
                    type="button"
                    className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    onClick={createManufacturer}
                >
                    Save
                </button>
            </div>
        </div>
    )
}
