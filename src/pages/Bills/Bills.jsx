import React from 'react';
import { LuFilePlus } from "react-icons/lu";
import BillCreationForm from '../../components/BillCreationForm/BillCreationForm';

const Bills = () => {

    const internetBills = [
        {
            id: 1,
            name: "John Doe",
            amount: 50,
            dueDate: "2024-07-15",
            status: "Unpaid"
        },
        {
            id: 2,
            name: "Jane Smith",
            amount: 75,
            dueDate: "2024-07-20",
            status: "Paid"
        },
        {
            id: 3,
            name: "Alice Johnson",
            amount: 100,
            dueDate: "2024-07-25",
            status: "Unpaid"
        }
    ];

    return (
        <div>
            <div className='pt-10'>
                <div>
                    <h1 className='text-4xl font-bold text-center text-white underline underline-offset-10'>All Bills</h1>
                </div>
                <div className='pt-10 w-[80%] mx-auto'>
                    <div className='flex flex-row-reverse justify-between'>
                        <div className='text-end'>
                            <label className="input w-[60%]">
                                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <g
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                        strokeWidth="2.5"
                                        fill="none"
                                        stroke="currentColor"
                                    >
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <path d="m21 21-4.3-4.3"></path>
                                    </g>
                                </svg>
                                <input type="search" required placeholder="Search" />
                            </label>
                        </div>
                        <div>
                            <button className="btn" onClick={() => document.getElementById('new_bill_creation_modal').showModal()}><LuFilePlus className='text-xl mr-2' /> <span className=''>Create New Bill</span></button>
                            <dialog id="new_bill_creation_modal" className="modal">
                                <div className="modal-box w-11/12 max-w-5xl">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn btn-sm btn-circle btn-error btn-outline absolute right-2 top-2 tooltip tooltip-left" data-tip={"Close"}>✕</button>
                                    </form>
                                    <h3 className="font-bold text-lg text-center">New Bill</h3>
                                    <div className='divider'></div>
                                    <div className="py-4">
                                        <BillCreationForm />
                                    </div>
                                </div>
                            </dialog>
                        </div>
                    </div>
                    <br />
                    <div>
                        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>S/N</th>
                                        <th>Name</th>
                                        <th>Due Date</th>
                                        <th>Amount</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    {(internetBills) ? internetBills.map((bill, index) => (
                                        <tr key={bill.id}>
                                            <th>{index + 1}</th>
                                            <td>{bill.name}</td>
                                            <td>{bill.dueDate}</td>
                                            <td>৳ {bill.amount.toFixed(2)} Taka</td>
                                            <td><span className={`badge badge-xs ${bill.status === 'Paid' ? 'badge-success' : 'badge-error'}`}>{bill.status}</span></td>
                                            <td>
                                                <div>
                                                    <button className="btn btn-sm btn-primary" onClick={() => document.getElementById('view_bill_modal').showModal()}>View</button>
                                                    <dialog id="view_bill_modal" className="modal">
                                                        <div className="modal-box w-11/12 max-w-5xl">
                                                            <form method="dialog">
                                                                {/* if there is a button in form, it will close the modal */}
                                                                <button className="btn btn-sm btn-circle btn-error btn-outline absolute right-2 top-2 tooltip tooltip-left" data-tip={"Close"}>✕</button>
                                                            </form>
                                                            <h3 className="font-bold text-lg text-center">View Bill</h3>
                                                            <div className='divider'></div>
                                                            <div className="py-4">
                                                                {/* <PayBillSubmissionForm /> */}
                                                            </div>
                                                        </div>
                                                    </dialog>
                                                </div>
                                            </td>
                                            <td>
                                                {
                                                    bill.status === 'Unpaid' ? (
                                                        <div>
                                                            <button className="btn btn-sm btn-success" onClick={() => document.getElementById('pay_bill_modal').showModal()}>Pay</button>
                                                            <dialog id="pay_bill_modal" className="modal">
                                                                <div className="modal-box w-11/12 max-w-5xl">
                                                                    <form method="dialog">
                                                                        {/* if there is a button in form, it will close the modal */}
                                                                        <button className="btn btn-sm btn-circle btn-error btn-outline absolute right-2 top-2 tooltip tooltip-left" data-tip={"Close"}>✕</button>
                                                                    </form>
                                                                    <h3 className="font-bold text-lg text-center">Pay Bill</h3>
                                                                    <div className='divider'></div>
                                                                    <div className="py-4">
                                                                        {/* <PayBillSubmissionForm /> */}
                                                                    </div>
                                                                </div>
                                                            </dialog>
                                                        </div>

                                                    ) : (
                                                        <button className="btn btn-sm btn-success" disabled>Paid</button>
                                                    )

                                                }

                                            </td>
                                        </tr>
                                    )) : ''}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bills;