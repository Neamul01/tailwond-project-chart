import { CheckCircleIcon } from '@heroicons/react/solid';
import React from 'react';

const Features = ({ features }) => {
    return (
        <p className='flex items-center pt-3'><CheckCircleIcon className='w-4 h-4 text-green-500 mr-2'></CheckCircleIcon>{features}</p>
    );
};

export default Features;