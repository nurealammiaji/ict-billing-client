import React from 'react';
import PackCard from '../../components/PackCard/PackCard';

const Internet = () => {

    const internetPackOne = {
        name: "Basic Pack",
        price: "$19",
        remark: { text: "Popular", show: false },
        features: [
            { text: "Up to 100 Mbps download speed", deleted: false },
            { text: "500 GB data usage per month", deleted: false },
            { text: "24/7 customer support", deleted: false },
            { text: "Free installation", deleted: true }
        ]
    };

    const internetPackTwo = {
        name: "Premium Pack",
        remark: { text: "Most Popular", show: true },
        price: "$29",
        features: [
            { text: "Up to 500 Mbps download speed", deleted: false },
            { text: "Unlimited data usage", deleted: false },
            { text: "24/7 customer support", deleted: false },
            { text: "Free installation", deleted: false }
        ]
    };

    return (
        <div>
            <div className='pt-10'>
                <div>
                    <h1 className='text-4xl font-bold text-center text-white underline underline-offset-10'>Internet Packs</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 justify-center mt-10 w-3/4 mx-auto pt-10'>
                    <div>
                        <PackCard packDetails={internetPackOne} />
                    </div>
                    <div>
                        <PackCard packDetails={internetPackTwo} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Internet;