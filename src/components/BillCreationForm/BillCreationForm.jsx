import React from 'react';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const BillCreationForm = () => {

    const billCreationSuccessNotify = () => toast.success('Bill Created Successfully !');
    const billCreationErrorNotify = () => toast.error('Failed to create bill !');


    const issuer = [
        {
            id: 1,
            name: "Cpl Kamrul"
        },
        {
            id: 2,
            name: "Sgt Al Amin"
        },
    ];

    const consumerTypes = [
        {
            id: 1,
            name: "CP"
        },
        {
            id: 2,
            name: "OCP"
        },
        {
            id: 3,
            name: "DS"
        },
    ];

    const handleInternetBillAddForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const internetBill = {
            billNo: form.billNo.value,
            consumerName: form.consumerName.value,
            appointment: form.appointment.value,
            unitName: form.unitName.value,
            internetPlan: form.internetPlan.value,
            dishPlan: form.dishPlan.value,
            billingDate: form.billingDate.value,
            currentMonthDue: form.currentMonthDue.value,
            lastMonthDue: form.lastMonthDue.value,
            longTermDue: form.longTermDue.value,
        }
        console.log(internetBill);
        billCreationSuccessNotify();
        // billCreationErrorNotify();
        document.getElementById("new_bill_creation_modal").close();
    };

    const internetPlans = [
        {
            id: 1,
            name: "Basic Pack",
            price: 19,
            remark: { text: "Popular", show: false },
            features: [
                { text: "Up to 100 Mbps download speed", deleted: false },
                { text: "500 GB data usage per month", deleted: false },
                { text: "24/7 customer support", deleted: false },
                { text: "Free installation", deleted: true }
            ]
        },
        {
            id: 2,
            name: "Premium Pack",
            remark: { text: "Most Popular", show: true },
            price: 29,
            features: [
                { text: "Up to 500 Mbps download speed", deleted: false },
                { text: "Unlimited data usage", deleted: false },
                { text: "24/7 customer support", deleted: false },
                { text: "Free installation", deleted: false }
            ]
        }
    ];

    const dishPlans = [
        {
            id: 1,
            name: "Dish TV Pack",
            price: 15,
            remark: { text: "Popular", show: false },
            features: [
                { text: "Access to 100+ channels", deleted: false },
                { text: "HD quality viewing", deleted: false },
                { text: "24/7 customer support", deleted: false },
                { text: "Free installation", deleted: true }
            ]
        },
        {
            id: 2,
            name: "Dish TV Pack Plus",
            price: 25,
            remark: { text: "Most Popular", show: true },
            features: [
                { text: "Access to 200+ channels", deleted: false },
                { text: "4K Ultra HD quality viewing", deleted: false },
                { text: "24/7 customer support", deleted: false },
                { text: "Free installation", deleted: false }
            ]
        }
    ];

    return (
        <div>
            <form onSubmit={handleInternetBillAddForm} className="bg-base-200 border-base-300 rounded-box border p-4">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    <div className='w-full'>
                        <label className="label">Bill No</label>
                        <input type="text" name='billNo' className="input w-full" placeholder="type bill number here" />
                    </div>
                    <div className='w-full'>
                        <label className="label">Consumer Name</label>
                        <input type="text" name='consumerName' className="input w-full" placeholder="type consumer name here" />
                    </div>
                    <div className='w-full'>
                        <label className="label">Appointment</label>
                        <input type="text" name='appointment' className="input w-full" placeholder="type appointment here" />
                    </div>
                    <div className='w-full'>
                        <label className="label">Unit Name</label>
                        <input type="text" name='unitName' className="input w-full" placeholder="type unit name here" />
                    </div>
                    <div className='w-full'>
                        <label className="label">Internet Plan</label>
                        <select name='internetPlan' className='select w-full'>
                            <option value="" className='text-slate-400'>select plan</option>
                            {
                                (internetPlans) &&
                                internetPlans.map((n, i) => <option key={i} value={n.name}>{n.name} - <i className='text-slate-400'>৳ {n.price} Taka (Monthly)</i></option>)
                            }
                        </select>
                    </div>
                    <div className='w-full'>
                        <label className="label">Dish Plan</label>
                        <select name='dishPlan' className='select w-full'>
                            <option value="" className='text-slate-400'>select plan</option>
                            {
                                (dishPlans) &&
                                dishPlans.map((d, i) => <option key={i} value={d.name}>{d.name} - <i className='text-slate-500'> ৳ {d.price} Taka (Monthly)</i></option>)
                            }
                        </select>
                    </div>
                    <div className='w-full'>
                        <label className="label">Billing Date</label>
                        <input name='billingDate' type="date" className="input w-full" placeholder="type billing date" />
                    </div>
                    <div className='w-full'>
                        <label className="label">Current Month Due</label>
                        <input name='currentMonthDue' type="text" className="input w-full" placeholder="type current month due" />
                    </div>
                    <div className='w-full'>
                        <label className="label">Last Month Due</label>
                        <input name='lastMonthDue' type="text" className="input w-full" placeholder="type last month due" />
                    </div>
                    <div className='w-full'>
                        <label className="label">Long Term Due</label>
                        <input name='longTermDue' type="text" className="input w-full" placeholder="type long term due" />
                    </div>
                </div>
                <div className='text-center mt-5'>
                    <button type='submit' className='btn btn-primary w-full'>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default BillCreationForm;