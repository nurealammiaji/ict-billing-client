import React from 'react';
import { TbBrandWhatsapp } from "react-icons/tb";

const WhatsappButton = () => {

    // Data from Server
    const number = "01913112871";
    const complaintNo = "455";
    const complaintURL = `http://erp.dscsc.mil.bd:8088/complaint/complaints/${complaintNo}`;
    const message = `Dear Sir, please give a feedback on your solved complaint. URL: ${complaintURL}`;

    // Function
    const notifyForFeedback = () => {
        window.open(`https://wa.me/+88${number}?text=${message}`, '_blank')
    }

    return (
        <div>
            <button className="btn tooltip bg-[#03C755] text-white border-[#00b544]" onClick={notifyForFeedback} data-tip="Notify for Feedback"><span><TbBrandWhatsapp className='' /></span><span>Notify</span></button>
        </div>
    );
};

export default WhatsappButton;