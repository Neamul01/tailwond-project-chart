import React from 'react';
import PricingOption from './PricingOption/PricingOption';

const Pricing = () => {
    const pricingOption = [
        {
            id: 1, name: 'Free', price: 0, benefits: [
                'Lifetime free',
                'Awesome features',
                'Unlimited deals',
                'Localize deals',
                'Crazy deals'
            ]
        },
        {
            id: 2, name: 'Regular', price: 9.99, benefits: [
                'Everything on free',
                'Awesome features',
                'Unlimited deals',
                'Localize deals',
                'Crazy deals'
            ]
        },
        {
            id: 3, name: 'Premium', price: 19.99, benefits: [
                'Everything on Regular',
                'Awesome features',
                'Unlimited deals',
                'Localize deals',
                'Crazy deals'
            ]
        },
    ]
    return (
        <div className='bg-indigo-300 p-4 m-8'>
            <h2 className="text-5xl">Best Deals of the Town</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi saepe exercitationem provident enim harum quisquam, officiis autem? Porro, itaque ea.</p>
            <div className='grid md:grid-cols-3 gap-4 mt-8'>
                {
                    pricingOption.map(option =>
                        <PricingOption
                            key={option.id}
                            option={option}
                        ></PricingOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;