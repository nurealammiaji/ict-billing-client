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
        //     studentClass: form.studentClass.value,
        //     session: form.session.value,
        //     section: form.section.value,
        //     seat: form.seat.value,
        //     bed: form.bed.value,
        //     breakfast: form.breakfast.value,
        //     lunch: form.lunch.value,
        //     snacks: form.snacks.value,
        //     dinner: form.dinner.value,
        //     father: form.father.value,
        //     mother: form.mother.value,
        //     guardian: form.mother.value,
        //     present: form.present.value,
        //     permanent: form.permanent.value,
        }
        console.log(internetBill);
        billCreationSuccessNotify();
        // billCreationErrorNotify();
        document.getElementById("new_bill_creation_modal").close();
    };

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
                        <label className="label">Date of Issue</label>
                        <input type="date" name='dateOfIssue' className='input w-full' placeholder='type dob here' />
                    </div>
                    <div className='w-full'>
                        <label className="label">Issued by</label>
                        <select name='session' className='select w-full'>
                            <option value="" className='text-slate-400'>select issuer</option>
                            {
                                (issuer) &&
                                issuer.map((s, i) => <option key={i} value={s.name}>{s.name}</option>)
                            }
                        </select>
                    </div>
                    <div className='w-full'>
                        <label className="label">Issued to</label>
                        <select name='section' className='select w-full'>
                            <option value="" className='text-slate-400'>select section</option>
                            {
                                (consumerTypes) &&
                                consumerTypes.map((c, i) => <option key={i} value={c.name}>{c.name}</option>)
                            }
                        </select>
                    </div>
                    <div className='w-full'>
                        <label className="label">Contact No</label>
                        <input name='father' type="text" className="input w-full" placeholder="type contact no here" />
                    </div>
                    <div className='w-full'>
                        <label className='label'>Item's Condition</label>
                        <textarea name='permanent' className='textarea w-full' placeholder='type address here'></textarea>
                    </div>
                    <div className='w-full'>
                        <label className='label'>Remarks</label>
                        <textarea name='permanent' className='textarea w-full' placeholder='type address here'></textarea>
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