// adding getUserProducts component
import React, { Component } from 'react';
import {useState} from 'react'
import Web3 from 'web3';

export default function GetUserProducts() {
    const [product, setProduct] = useState({
        name: '',
        price: '',
        quantity: '',
        description: ''
    })

    const {name, price, quantity, description} = product

    const onChange = e => setProduct({...product, [e.target.name]: e.target.value})

    const onSubmit = async e => {
        e.preventDefault()
        const accounts = await web3.eth.getAccounts()
        console.log(accounts)
        const web3 = new Web3(window.web3.currentProvider)
        //declaring abi
        const abi = []
        //declaring contract address
        const address = ''
        const contract = new web3.eth.Contract(abi, address)
        await contract.methods.createProduct(name, price, quantity, description).send({from: accounts[0]})
    }

    return (
        <form className="space-y-6" action="#" method="POST">
        <div>
            <label htmlFor="name" className="flex justify-center text-xl mt-5 font-medium text-gray-800">Get User Products</label>
        </div>

      <div className="bg-white px-4 py-5 flex items-center justify-center shadow sm:rounded-lg sm:p-6">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          
          <div className="mt-5 md:col-span-2 md:mt-0">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                  User ID
                </label>
                <input
                  type="text"
                  name="first-name"
                  placeholder='Enter the User ID'
                  id="first-name"
                  autoComplete="given-name"
                  className="mt-1 block w-full rounded-xl h-7 border-blue-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>             
               
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
      <button
                    type="button"
                    className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    Get
                </button>
      </div>
    </form>
    )
}