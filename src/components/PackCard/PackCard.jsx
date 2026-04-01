import React from 'react';
import Swal from 'sweetalert2';

const PackCard = ({ packDetails }) => {

    const handleSubscribe = () => {
        Swal.fire({
            title: `Are you sure, to subscribe to the ${packDetails?.name} plan?`,
            text: `${packDetails?.price} per month will be charged to your account.`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, subscribe!"
        }).then((result) => {
            if (result.isConfirmed) Swal.fire({
                title: "Subscribed!",
                text: `You have successfully subscribed to the ${packDetails?.name} plan.`,
                icon: "success"
            });
        });
    };

    return (
        <div>
            <div className="card w-full bg-base-100 shadow-sm">
                <div className="card-body">
                    {
                        packDetails?.remark?.show ?
                            <span className="badge badge-xs badge-warning mb-1">
                                {packDetails?.remark?.text}
                            </span> : <br />
                    }
                    <div className="flex justify-between">
                        <h2 className="text-3xl font-bold">{packDetails?.name}</h2>
                        <span className="text-xl">{packDetails?.price}/mo</span>
                    </div>
                    <ul className="mt-6 flex flex-col gap-2 text-xs text-start ps-15">
                        {packDetails?.features && packDetails.features.length > 0 && packDetails.features.map((feature, index) => (
                            <li key={index}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className={feature.deleted ? "line-through" : ""}>
                                    {feature.text}
                                </span>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-6">
                        <button onClick={handleSubscribe} className="btn btn-primary btn-block">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PackCard;