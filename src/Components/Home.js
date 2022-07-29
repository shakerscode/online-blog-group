import React, { useState } from 'react';
import { BsFillCaretDownFill } from 'react-icons/bs'
import { HiUserGroup } from 'react-icons/hi'
import { Link } from 'react-router-dom';
import { BiShow, BiShareAlt, BiErrorCircle } from 'react-icons/bi'
import { AiOutlineLogout } from 'react-icons/ai'
import { FaPen} from 'react-icons/fa'
import { allPosts } from './data';
import uLocation from '../assets/images/v-3.png'

const Home = () => {
    const [event, setEvent] = useState(false)
    const [user, setUser] =useState(false)
    return (

        <div className='w-100'>
            <div className='home-bg img-fluid text-white'>
                <div className='home-bg-color h-100'>
                    <div className='position-absolute positioning'>
                        <h1 className='fw-semibold'>Computer Engineering</h1>
                        <p>142,765 Computer Engineers follow this</p>
                    </div>
                </div>

            </div>
            <div className='container mt-4 py-1 d-flex justify-content-between align-items-center border-bottom flex-wrap flex-sm-column-reverse'>
                <div className='flex-wrap d-flex'>
                    <Link className='text-decoration-none me-4 text-black fw-semibold active' to='/'>All Posts(32)</Link>
                    <Link className='text-decoration-none me-4 text-secondary fw-semibold ' to='/'>Article</Link>
                    <Link className='text-decoration-none me-4 text-secondary fw-semibold ' to='/'>Event</Link>
                    <Link className='text-decoration-none me-4 text-secondary fw-semibold ' to='/'>Education</Link>
                    <Link className='text-decoration-none me-4 text-secondary fw-semibold ' to='/'>Job</Link>
                </div>
                <div className='d-flex flex-wrap gap-3'>
                    <button className='border-0 px-3 py-2 rounded fw-semibold '>Write a Post <span className='ps-3'><BsFillCaretDownFill /></span></button>
                    {user ? 
                    <button className='border-0 px-3 py-2 rounded bg-primary text-white'> <span className='pe-1'><AiOutlineLogout className='mb-1' /></span> Leave Group</button> 
                    :
                    <button onClick={()=> setUser(true)} className='border-0 px-3 py-2 rounded bg-primary text-white'> <span className='pe-1'><HiUserGroup className='mb-1' /></span> Join Group</button>}
                </div>
            </div>
            <div className='container mt-4'>
                <div className='row position-lg-relative '>
                    {
                        allPosts && allPosts.map((aP, i) =>
                            <div key={i} class="card mb-3 col-lg-8 ">
                              <img class={ aP.topImg ? "card-img-top w-100" : "d-none"} src={aP.topImg} alt="CardImage" /> 
                                <div class="card-body">
                                    <h5 className='fs-6'>{aP.tag}</h5>
                                    <div className='d-flex justify-content-between align-items-center position-relative'>
                                        <h3 class="fs-5">{aP.tittle}</h3>
                                        <p onClick={() => setEvent(!event)} className='fw-bold fs-4  text-center  hover:bg-light pb-3 px-3 cursor-pointer'>...</p>
                                       { event && <div className='position-absolute end-0 top-50 shadow px-3 rounded'>
                                            <ul>
                                                <li className='list-group-item'> <Link to='/' className='underline-none text-decoration-none text-black'>Edit</Link></li>
                                                <li className='list-group-item'> <Link to='/' className='underline-none text-decoration-none text-black'>Report</Link></li>
                                                <li className='list-group-item'> <Link to='/' className='underline-none text-decoration-none text-black'>Option 3</Link></li>
                                            </ul> 
                                        </div>}
                                    </div>
                                   {aP.icon || aP.location ?
                                   <div className='d-flex justify-content-start gap-5 items-center me-5'> 
                                   <div className='d-flex'>
                                   <img src={aP.icon} alt="" width={'15px'} height={'20px'}/><p class="text-secondary ms-2">{aP.decs}</p>
                                   </div>
                                   <div className='d-flex'>
                                        <img src={uLocation} alt="" width={'15px'} height={'20px'}/>
                                        <p className='ms-2'>{aP.location}</p>
                                    </div>
                                   </div>
                                   :
                                   <p class="text-secondary">{aP.decs}</p>
                                }
                                 
                                </div>
                                <div className='d-flex justify-content-between align-items-center p-2'>
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <img src={aP.userLogo} alt="" />
                                        <h6 className='ms-3'>{aP.userName}</h6>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center gap-4'>
                                        <div className='d-flex justify-content-center align-items-center gap-2 text-muted'>
                                            <BiShow className='fs-6' />
                                            <p className='mt-3 fs-6'>{aP.views}</p>
                                        </div>
                                        <BiShareAlt className='bg-light px-2 py-1 fs-2 rounded' />
                                    </div>
                                </div>
                            </div>
                        )
                    }

                    <div className='col-lg-4 position-lg-absolute top-0 end-0'>
                        <div className='d-flex justify-content-evenly gap-2 border-bottom w-75 mx-auto'>
                            <div className='d-flex gap-2'> 
                            <img src={uLocation} alt="" width={'15px'} height={'20px'}/>
                            <p>Noida, India</p>
                            </div>
                            <FaPen/>
                        </div>
                        <div className='d-flex mt-3 ms-3 text-center'>
                            <BiErrorCircle className='fs-2 text-muted'/>
                            <p>Your location will help us serve better and extend a personalised experience.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>


    );
};

export default Home;