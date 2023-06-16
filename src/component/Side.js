import React from 'react';
import Home from './Home';

function Side(props) {
    return (
        <>
            <div className='bg-slate-100 h-screen w-60 fixed z-20 top-0 right-0 block'>
                <section className='paddin flex-col block h-full'>
                    <span className='block text-center'>
                        <span className='font-medium'>Hi, User!</span>
                    </span>

                    <span className='margin-top-side block pt-4 border-top'>
                    No tasks today
                    </span>
                </section>
            </div>
        </>
    );
}

export default Side;