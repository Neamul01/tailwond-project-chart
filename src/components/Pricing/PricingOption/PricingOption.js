import { ArrowRightIcon } from '@heroicons/react/solid';
import React from 'react';
import Features from './Features/Features';

const PricingOption = (props) => {
    const { name, price, benefits } = props.option;
    return (
        <div className='bg-white rounded-lg p-4'>
            <h2 className="text-xl bg-indigo-300 py-2 rounded font-bold">{name}</h2>
            <p>
                <span className='text-5xl font-bold'>{price}</span>
                <span className='text-xl font-bold text-gray-500'>/mo</span>
            </p>
            <div>
                <h3 className="text-xl text-left mb-4">Benefits:</h3>
                {
                    benefits.map(benefit => <Features
                        features={benefit}
                    ></Features>)
                }
                <button className='flex justify-center w-full bg-green-500 py-2 mt-8 rounded text-white hover:text-green-700'>
                    Buy Now <ArrowRightIcon className='h-6 w-6 ml-2'></ArrowRightIcon>
                </button>
            </div>
        </div>
    );
};

export default PricingOption;