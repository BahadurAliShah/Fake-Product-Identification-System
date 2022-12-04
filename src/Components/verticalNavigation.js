import {Fragment, useState} from 'react'
import {Dialog, Menu, Transition} from '@headlessui/react'
import {
    Bars3BottomLeftIcon,
    CalendarIcon,
    ChartBarIcon,
    FolderIcon,
    InboxIcon,
    UsersIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import {useDispatch, useSelector} from "react-redux";
import {SaveWEB3} from "../Redux/Actions/web3Actions";
import Web3 from "web3";

const navigation = [
    {name: 'Add Manufacturer', href: '#', icon: UsersIcon, current: true},
    {name: 'Add Product', href: '#', icon: UsersIcon, current: false},
    {name: 'Verify Product', href: '#', icon: FolderIcon, current: false},
    {name: 'Change Owner', href: '#', icon: CalendarIcon, current: false},
    {name: 'Get Manufacturer Products', href: '#', icon: InboxIcon, current: false},
    {name: 'Get User Products', href: '#', icon: ChartBarIcon, current: false},
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


export default function VerticalNavigation() {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const dispatch = useDispatch();
    const web3 = useSelector(state => state.web3);
    const state = useSelector(state => state);
    console.log("State======================", state);

    const connect = async () => {
        if (web3.web3 === null) {
            if (window.ethereum) {
                try {
                    const accounts = await window.ethereum.request({
                        method: "eth_requestAccounts",
                    });
                    const account = accounts[0];
                    const web3 = new Web3(window.ethereum);
                    console.log(web3, account);
                    dispatch(SaveWEB3(web3, account));
                } catch (error) {
                    console.log(error);
                }
            } else {
                console.log("Install Metamask");
            }
        } else {
            console.log("Already connected");
        }
    }

    return (
        <>
            <div>
                <Transition.Root show={sidebarOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-40 md:hidden" onClose={setSidebarOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-gray-600 bg-opacity-75"/>
                        </Transition.Child>

                        <div className="fixed inset-0 z-40 flex">
                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="-translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="-translate-x-full"
                            >
                                <Dialog.Panel
                                    className="relative flex w-full max-w-xs flex-1 flex-col bg-gray-800 pt-5 pb-4">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-in-out duration-300"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in-out duration-300"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <div className="absolute top-0 right-0 -mr-12 pt-2">
                                            <button
                                                type="button"
                                                className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                                onClick={() => setSidebarOpen(false)}
                                            >
                                                <span className="sr-only">Close sidebar</span>
                                                <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true"/>
                                            </button>
                                        </div>
                                    </Transition.Child>
                                    <div className="flex flex-shrink-0 items-center px-4">
                                        <img
                                            className="h-8 w-auto"
                                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                            alt="Your Company"
                                        />
                                    </div>
                                    <div className="mt-5 h-0 flex-1 overflow-y-auto">
                                        <nav className="space-y-1 px-2">
                                            {navigation.map((item) => (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className={classNames(
                                                        item.current
                                                            ? 'bg-gray-900 text-white'
                                                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                        'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                                                    )}
                                                >
                                                    <item.icon
                                                        className={classNames(
                                                            item.current ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300',
                                                            'mr-4 flex-shrink-0 h-6 w-6'
                                                        )}
                                                        aria-hidden="true"
                                                    />
                                                    {item.name}
                                                </a>
                                            ))}
                                        </nav>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                            <div className="w-14 flex-shrink-0" aria-hidden="true">
                                {/* Dummy element to force sidebar to shrink to fit close icon */}
                            </div>
                        </div>
                    </Dialog>
                </Transition.Root>

                {/* Static sidebar for desktop */}
                <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
                    {/* Sidebar component, swap this element with another sidebar if you like */}
                    <div className="flex min-h-0 flex-1 flex-col bg-gray-800">
                        <div className="flex h-16 flex-shrink-0 items-center bg-gray-900 px-4">
                            <img
                                className="h-8 w-auto"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                alt="Your Company"
                            />
                        </div>
                        <div className="flex flex-1 flex-col overflow-y-auto">
                            <nav className="flex-1 space-y-1 px-2 py-4">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className={classNames(
                                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                            'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                                        )}
                                    >
                                        <item.icon
                                            className={classNames(
                                                item.current ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300',
                                                'mr-3 flex-shrink-0 h-6 w-6'
                                            )}
                                            aria-hidden="true"
                                        />
                                        {item.name}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:pl-64">
                    <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white shadow">
                        <button
                            type="button"
                            className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
                            onClick={() => setSidebarOpen(true)}
                        >
                            <span className="sr-only">Open sidebar</span>
                            <Bars3BottomLeftIcon className="h-6 w-6" aria-hidden="true"/>
                        </button>
                        {/* Move the following to the right */}
                        <div className="flex-1 flex justify-between px-4 sm:px-6 lg:px-8">

                            <div className="flex flex-1 items-center justify-end">
                                <Menu as="div" className="relative ml-3">
                                    <div>
                                        <button
                                            type="button"
                                            className="inline-flex items-center rounded-md border border-transparent bg-gray-600 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                            onClick={() => connect()}
                                        >
                                            Connect
                                        </button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                    </Transition>
                                </Menu>
                            </div>
                        </div>
                    </div>

                  
                </div>
            </div>
        </>
    )
}
