import React from 'react';
import { TbBrandWhatsapp } from "react-icons/tb";

const WhatsappButton = ({params}) => {

    const id = params?.id;
    const mobileNo = params?.mobileNo;
    const billNo = params?.billNo;
    const dueDate = params?.dueDate;
    const amount = params?.amount;
    const status = params?.status;
    const message = `Dear Sir, please pay your bill with bill no ${billNo} as soon as possible. Thank you!`;

    // Function
    const notifyForBillPay = () => {
        window.open(`https://wa.me/+88${mobileNo}?text=${message}`, '_blank')
    }

    return (
        <div>
            <button className="btn btn-xs tooltip bg-[#03C755] text-white border-[#00b544]" onClick={notifyForBillPay} data-tip="Notify for Bill Payment"><span><TbBrandWhatsapp className='' /></span><span>Notify</span></button>
        </div>
    );
};

export default WhatsappButton;