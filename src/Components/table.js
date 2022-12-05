import { Fragment } from 'react'
import {getSelectionRange} from "@testing-library/user-event/dist/utils";

const locations = [
    {
        name: 'Edinburgh',
        people: [
            { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
            { name: 'Courtney Henry', title: 'Designer', email: 'courtney.henry@example.com', role: 'Admin' },
        ],
    },
    // More people...
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Table(props) {
    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h4 className="text-xl focus:outline-none text-gray-900">Owners Queue</h4>
                </div>
            </div>
            <div className="mt-2 flex flex-col">
                <div className="-mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <table className="min-w-full">
                                <thead className="bg-white">
                                <tr>
                                    <th scope="col" className="py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-900 sm:pl-6">
                                        Owner No.
                                    </th>
                                    <th scope="col" className="py-3.5 pl-4 pr-3  text-sm font-semibold text-gray-900 sm:pl-6">
                                        ID
                                    </th>
                                    <th scope="col" className="px-3 py-3.5  text-sm font-semibold text-gray-900">
                                        Bought From
                                    </th>
                                    <th scope="col" className="px-3 py-3.5  text-sm font-semibold text-gray-900">
                                        Sold To
                                    </th>
                                </tr>
                                </thead>
                                <tbody className="bg-white">
                                { props.PreviousOwners.map((owner, i) => (
                                    <Fragment key={owner}>
                                        <tr className="border-t border-gray-200">
                                            <th
                                                scope="colgroup"
                                                className="bg-gray-50 px-4 py-2 text-sm font-semibold text-gray-900 sm:px-6"
                                            >
                                                {i+1}
                                            </th>
                                            <th
                                                colSpan={4}
                                                scope="colgroup"
                                                className="bg-gray-50 px-4 py-2 text-left  text-sm font-semibold text-gray-900 sm:px-6"
                                            >
                                                {props.PreviousOwners[i]}
                                            </th>
                                        </tr>
                                            <tr
                                                key={i}
                                                className={classNames(i === 0 ? 'border-gray-300' : 'border-gray-200', 'border-t')}
                                            >
                                                <td
                                                    className="px-4 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                                </td>
                                                <td className="px-3 py-4 text-sm text-gray-500"></td>
                                                <td className="px-3 py-4 text-sm text-gray-500 text-right">{i==0?props.Manufacturer:props.PreviousOwners[i+1]}</td>
                                                <td className="px-3 py-4 text-sm text-gray-500 text-right">{i==props.PreviousOwners.length-1?'Current Owner':props.PreviousOwners[i]}</td>
                                            </tr>
                                    </Fragment>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
