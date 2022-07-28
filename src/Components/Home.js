import React from 'react';
import { BsFillCaretDownFill } from 'react-icons/bs'
import { HiUserGroup } from 'react-icons/hi'

const Home = () => {
    return (
        <div className='w-100'>
            <div className='home-bg text-white'>
                <div className='home-bg-color h-100'>
                    <div className='position-absolute top-50 end-50 mt-5'>
                        <h1 className='fw-semibold'>Computer Engineering</h1>
                        <p>142,765 Computer Engineers follow this</p>
                    </div>
                </div>

            </div>
            <div className='container w-full mt-4 py-1 d-flex justify-content-between align-items-center border-bottom'>
                <div>
                    <ul className=' d-flex align-items-center'>
                        <li className='list-unstyled me-4 mt-2'> Hello</li>
                        <li className='list-unstyled me-4 mt-2'> Hello</li>
                        <li className='list-unstyled me-4 mt-2'> Hello</li>
                        <li className='list-unstyled me-4 mt-2'> Hello</li>
                        <li className='list-unstyled me-4 mt-2'> Hello</li>
                    </ul>
                </div>
                <div className='d-flex gap-3'>
                    <button className='border-0 px-3 py-2 rounded fw-semibold '>Write a Post <span  className='ps-3'><BsFillCaretDownFill/></span></button>
                    <button className='border-0 px-3 py-2 rounded bg-primary text-white'> <span className='pe-1'><HiUserGroup className='mb-1'/></span> Join Group</button>
                </div>
            </div> 
        </div>
    );
};

export default Home;