import Columns from '@/components/Columns';
import React from 'react';

const HomePage = () => {
    return (
        <section className='flex h-screen bg-gradient-to-bl from-gray-700'>
            <div className='mx-auto w-full max-w-7xl px-6'>
                <Columns />
            </div>
        </section>
    );
};

export default HomePage;
