import React from 'react';

function New() {
    return (
        <>
            <div className='bg-slate-100 h-screen side fixed Z-20 left-0 block'>
                
                <header className='h-full flex-col'>
                    <h1 className='uppercase text-center  text-lg mb-0 mt color font-bold'>To-do list</h1>
                    <button className='add-btn my mx'>
                        Add new task
                    </button>
                    <nav>
                        <ul className='grid gap-two pading-left mb-0'>
                            <li>
                                <a className='pading-x pading-y block color transition '>Today's tasks</a>
                            </li>
                            <li className='border-r-4 border-rose-500'>
                                <a className='pading-x pading-y block color transition text-rose-600 bg-violet-100  '>All tasks</a>
                            </li>
                            <li> 
                                <a className='pading-x pading-y block color transition '>Important tasks</a>
                            </li>
                            <li>
                                <a className='pading-x pading-y block color transition '>Completed tasks</a>
                            </li>
                            <li>
                                <a className='pading-x pading-y block color transition '>Uncompleted tasks</a>
                            </li>
                        </ul>
                    </nav>
                </header>

            </div>
        </>
    );
}

export default New;