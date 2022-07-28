import React from 'react';
import { BsFillCaretDownFill } from 'react-icons/bs'
import { HiUserGroup } from 'react-icons/hi'
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <div className=''>
            <div className='home-bg text-white'>
                <div className='home-bg-color h-100'>
                    <div className='position-absolute top-50 end-50 mt-5'>
                        <h1 className='fw-semibold'>Computer Engineering</h1>
                        <p>142,765 Computer Engineers follow this</p>
                    </div>
                </div>

            </div>
            <div className='container mt-4 py-1 d-flex justify-content-between align-items-center border-bottom'>
                <div className=''> 
                    <Link className='text-decoration-none me-4 text-black fw-semibold active' to='/'>All Posts(32)</Link>
                    <Link className='text-decoration-none me-4 text-secondary fw-semibold ' to='/'>Article</Link>
                    <Link className='text-decoration-none me-4 text-secondary fw-semibold ' to='/'>Event</Link>
                    <Link className='text-decoration-none me-4 text-secondary fw-semibold ' to='/'>Education</Link>
                    <Link className='text-decoration-none me-4 text-secondary fw-semibold ' to='/'>Job</Link> 
                </div>
                <div className='d-flex gap-3'>
                    <button className='border-0 px-3 py-2 rounded fw-semibold '>Write a Post <span className='ps-3'><BsFillCaretDownFill /></span></button>
                    <button className='border-0 px-3 py-2 rounded bg-primary text-white'> <span className='pe-1'><HiUserGroup className='mb-1' /></span> Join Group</button>
                </div>
            </div>
        </div>
    );
};

export default Home;