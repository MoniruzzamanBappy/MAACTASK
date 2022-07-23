import React from 'react';
import group1 from '../../Media/Group1.png';
import group2 from '../../Media/Group2.png';
import centerPhone from '../../Media/phoneCenter.png';

const ProductFeatures = () => {
    return (
        <div className="mt-20">
            <h1 className="text-primary text-center">Products Features</h1>
            <h1 className="text-4xl font-bold text-center">Make more out of your data</h1>
            <div className='flex flex-col lg:flex-row gap-4 items-center justify-around mt-12'>
               <img src={group1} alt="" />
               <img  className='shadow-2xl m-0 p-0 rounded-2xl' src={centerPhone} alt="" />
               <img src={group2} alt="" />
            </div>
        </div>
    );
};

export default ProductFeatures;