import React from 'react';
import { LuBanknote, LuEye, LuFilePlus, LuPencilLine, LuTrash2 } from "react-icons/lu";
import BillCreationForm from '../../components/BillCreationForm/BillCreationForm';
import Swal from 'sweetalert2';
import WhatsappButton from '../../components/WhatsappButton/WhatsappButton';

const Bills = () => {

    const internetBills = [
        {
            id: 1,
            name: "John Doe",
            mobileNo: "01913112871",
            amount: 50,
            dueDate: "2024-07-15",
            status: "Unpaid",
            billNo: "INT-000001"
        },
        {
            id: 2,
            name: "Jane Smith",
            mobileNo: "01913112872",
            amount: 75,
            dueDate: "2024-07-20",
            status: "Paid",
            billNo: "INT-000002"

        },
        {
            id: 3,
            name: "Alice Johnson",
            mobileNo: "01913112873",
            amount: 100,
            dueDate: "2024-07-25",
            status: "Unpaid",
            billNo: "INT-000003"
        },
    ];

    const handleDeleteBill = () => {
        Swal.fire({
            title: `Are you sure, to delete this bill?`,
            text: `This action cannot be undone.`,
            icon: "warning",
            showCancelButton: true,
            customClass: {
                confirmButton: 'btn btn-info btn-outline mr-3',
                cancelButton: 'btn btn-error btn-outline'
            },
            buttonsStyling: false,
            confirmButtonText: "Yes, delete!"
        }).then((result) => {
            if (result.isConfirmed) Swal.fire({
                title: "Deleted!",
                text: `The bill has been deleted.`,
                icon: "success"
            });
        });
    };

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
                                        <th>Bill No</th>
                                        <th>Due Date</th>
                                        <th>Amount</th>
                                        <th>Status</th>
                                        <th>Notification</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    {(internetBills) ? internetBills.map((bill, index) => (
                                        <tr key={bill.id}>
                                            <th>{index + 1}</th>
                                            <td>{bill.name}</td>
                                            <td><button className='' onClick={() => document.getElementById('view_bill_modal').showModal()}>{bill.billNo}</button></td>
                                            <td>{bill.dueDate}</td>
                                            <td>৳ {bill.amount.toFixed(2)} Taka</td>
                                            <td>
                                                <span className={`badge badge-soft badge-outline badge-xs ${bill.status === 'Paid' ? 'badge-success' : 'badge-error'}`}>{bill.status}</span>
                                            </td>
                                            <td>
                                                {bill.status === 'Unpaid' ? <WhatsappButton params={bill} /> : <span className='text-sm text-gray-500'>No action needed</span>}
                                            </td>
                                            <td>
                                                <div className="join join-vertical lg:join-horizontal">
                                                    <>
                                                        <button className="btn btn-xs btn-outline join-item btn-info" onClick={() => document.getElementById('view_bill_modal').showModal()}><LuEye className='text-sm' /> View</button>
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
                                                    </>
                                                    {
                                                        bill.status === 'Unpaid' ? (
                                                            <>
                                                                <button className="btn btn-xs btn-outline btn-success join-item" onClick={() => document.getElementById('pay_bill_modal').showModal()}><LuBanknote className='text-sm' /> Pay</button>
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
                                                            </>

                                                        ) : (
                                                            <button className="btn btn-xs join-item btn-success" disabled><LuBanknote className='text-sm' /> Paid</button>
                                                        )

                                                    }
                                                    <>
                                                        <button className="btn btn-outline btn-xs join-item btn-warning" onClick={() => document.getElementById('edit_bill_modal').showModal()}><LuPencilLine className='text-sm' /> Edit</button>
                                                        <dialog id="edit_bill_modal" className="modal">
                                                            <div className="modal-box w-11/12 max-w-5xl">
                                                                <form method="dialog">
                                                                    {/* if there is a button in form, it will close the modal */}
                                                                    <button className="btn btn-sm btn-circle btn-error btn-outline absolute right-2 top-2 tooltip tooltip-left" data-tip={"Close"}>✕</button>
                                                                </form>
                                                                <h3 className="font-bold text-lg text-center">Edit Bill</h3>
                                                                <div className='divider'></div>
                                                                <div className="py-4">
                                                                    {/* <PayBillSubmissionForm /> */}
                                                                </div>
                                                            </div>
                                                        </dialog>
                                                    </>
                                                    <button onClick={handleDeleteBill} className="btn btn-outline btn-xs btn-error join-item"><LuTrash2 className='text-sm' /> Delete</button>
                                                </div>
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