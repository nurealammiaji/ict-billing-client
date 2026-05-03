import React from 'react';
import PackCard from '../../components/PackCard/PackCard';

const Dish = () => {

  const dishPackOne = {
    name: "Dish TV Pack",
    price: 15,
    remark: { text: "Popular", show: false },
    features: [
      { text: "Access to 100+ channels", deleted: false },
      { text: "HD quality viewing", deleted: false },
      { text: "24/7 customer support", deleted: false },
      { text: "Free installation", deleted: true }
    ]
  };
  const dishPackTwo = {
    name: "Dish TV Pack Plus",
    price: 25,
    remark: { text: "Most Popular", show: true },
    features: [
      { text: "Access to 200+ channels", deleted: false },
      { text: "4K Ultra HD quality viewing", deleted: false },
      { text: "24/7 customer support", deleted: false },
      { text: "Free installation", deleted: false }
    ]
  };

  return (
    <div>
      <div className='pt-10'>
        <div>
          <h1 className='text-4xl font-bold text-center text-white underline underline-offset-10'>Dish Packs</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 justify-center mt-10 w-[80%] mx-auto pt-10'>
          <div>
            <PackCard packDetails={dishPackOne} />
          </div>
          <div>
            <PackCard packDetails={dishPackTwo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dish;