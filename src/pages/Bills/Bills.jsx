import React from 'react';
import { LuFilePlus } from "react-icons/lu";

const Bills = () => {
    return (
        <div>
            <div className='mt-14 w-[80%] mx-auto'>
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
                                <h3 className="font-bold text-lg">New Bill</h3>
                                <div className='divider'></div>
                                <div className="py-4">
                                    {/* <BillCreationForm /> */}
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
                                    <th></th>
                                    <th>Name</th>
                                    <th>Job</th>
                                    <th>Favorite Color</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                <tr>
                                    <th>1</th>
                                    <td>Cy Ganderton</td>
                                    <td>Quality Control Specialist</td>
                                    <td>Blue</td>
                                </tr>
                                {/* row 2 */}
                                <tr>
                                    <th>2</th>
                                    <td>Hart Hagerty</td>
                                    <td>Desktop Support Technician</td>
                                    <td>Purple</td>
                                </tr>
                                {/* row 3 */}
                                <tr>
                                    <th>3</th>
                                    <td>Brice Swyre</td>
                                    <td>Tax Accountant</td>
                                    <td>Red</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bills;