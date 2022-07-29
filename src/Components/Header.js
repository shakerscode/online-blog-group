import React, { useState } from 'react';
import logo from '../assets/images/i1.png'
import { BsFillCaretDownFill, BsSearch } from 'react-icons/bs'
import { BiShow } from 'react-icons/bi'
import { AiFillCloseCircle } from 'react-icons/ai'
import Group from '../assets/images/Group 3.png'
import Facebook from '../assets/images/facebook (1).png'
import Google from '../assets/images/search.png'
import userLogo from '../assets/images/user-logo-2.png'


const Header = () => {
    const [toggle, setToggle] = useState(false)
    const [user, setUser] = useState(true)


  return (
    <header>
      <nav class="navbar navbar-expand-lg bg-white px-4 shadow-sm ">
        <div class="container-fluid">

          <a class="navbar-brand text-green fs-3 " href="/">AGT.<span className='text-gray'>W<img className='mb-2' src={logo} alt="logo" height={'25px'} width={'24px'} />RLD</span></a>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div class="input-group w-50 m-auto py-2">
              <span class="input-group-text py-2 bg-light custom-span" id="basic-addon1"> <BsSearch /></span>
              <input type="text" class="form-control bg-light border-start-0 custom-input" placeholder="Search for your favorite groups in ATG" aria-label="Search" />
            </div>
            <ul class="navbar-nav ms-auto">

              {/* modal btn */}

             { user ? 
             <div>
               <img src={userLogo} alt="" />
               <span className='text-primary fw-bold text-decoration-none btn ' data-bs-toggle="modal" data-bs-target="#exampleModal">Nitala A.</span><BsFillCaretDownFill className='ms-1' />
             </div> 
              
             :
             <li className='fw-semibold text-center text-md-start text-lg-start'>Create account. <span className='text-primary fw-bold text-decoration-none btn ' data-bs-toggle="modal" data-bs-target="#exampleModal">It’s free!</span><BsFillCaretDownFill className='ms-1' /></li>
             }

              {/* Modal */}
              <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg ">
                  {!toggle ? <div class="modal-content">
                    <div class="position-relative">
                      <button type="button" class="modal-btn-positioning" data-bs-dismiss="modal" aria-label="Close"><AiFillCloseCircle /></button>
                    </div>
                    <div>
                      <p class="modal-p py-2" id="exampleModalLabel">Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
                    </div>
                    <div class="modal-body">
                      <div className='d-flex justify-content-between flex-wrap'>
                        <h4 className='fs-4 fw-bold'>Create Account</h4>
                        <p className='font-size-14'>Already have an account? 
                         <span onClick={()=> setToggle(!toggle)} className='text-primary ps-1 cursor-pointer'>Sign In</span></p>
                      </div>
                      <div className='row justify-content-center align-items-center px-3'>
                        <div className='col d-flex justify-content-center align-items-center flex-column '>
                          <form className='text-center w-100'>
                            <div className='d-flex flex-column flex-md-row flex-lg-row '>
                              <input className='input-border py-2 px-2 bg-gray border' placeholder='First name' type="text" />
                              <input className='input-border py-2 px-2 bg-gray border' placeholder='Last name' type="text" />
                            </div>
                            <div className='d-flex flex-column position-relative'>
                              <input className='input-border py-2 px-2 bg-gray border' placeholder='Email' type="email" name="" id="" />
                              <input className='input-border py-2 px-2 bg-gray border' placeholder='Password' type="pass" name="" id="" />
                              <div className='svg-positioning'>
                                <BiShow className='fs-4 text-secondary' />
                              </div>
                              <input className='input-border py-2 px-2 bg-gray border' placeholder='Confirm password' type="pass" name="" id="" />
                            </div>
                            <div className=' my-4'>
                              <input type="submit" value="Create Account" className='font-size-14 fw-semibold btn btn-primary w-100 rounded-pill' />
                            </div>
                          </form>
                          <div className='w-100 gap-5'>
                            <div className='d-flex justify-content-center align-items-center w-100 mb-2 border gap-1'>
                              <img className='' src={Facebook} alt="" width={'20px'} />
                              <p className='text-center pt-3 cursor-pointer'>Sign up with Facebook</p>
                            </div>
                            <div className='d-flex justify-content-center align-items-center w-100 border gap-2'>
                              <img className='' src={Google} alt="" width={'20px'} />
                              <p className='text-center pt-3 cursor-pointer'>Sign up with Google</p>
                            </div>
                          </div>
                        </div>
                        <div className='col d-md-flex d-none flex-column justify-content-center align-items-center fs-11'>
                          <img src={Group} alt="Group" className='w-75' />
                          <p className='text-center'>By signing up, you agree to our Terms & conditions, Privacy policy</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  :
                  <div class="modal-content">
                    <div class="position-relative">
                      <button type="button" class="modal-btn-positioning" data-bs-dismiss="modal" aria-label="Close"><AiFillCloseCircle /></button>
                    </div>
                    <div>
                      <p class="modal-p py-2" id="exampleModalLabel">Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
                    </div>
                    <div class="modal-body">
                      <div className='d-flex justify-content-between flex-wrap'>
                        <h4 className='fs-4 fw-bold'>Sign In</h4>
                        <p className='font-size-14'>Don’t have an account yet?  <span
                        onClick={()=> setToggle(false)} className='text-primary ps-1 cursor-pointer'>Create new for free!</span></p>
                      </div>
                      <div className='row justify-content-center align-items-center px-3'>
                        <div className='col'>
                          <form className=''> 
                            <div className='d-flex flex-column position-relative'>
                              <input className='input-border py-2 px-2 bg-gray border w-100 ' placeholder='Email' type="email" name="" id="" />
                              <input className='input-border py-2 px-2 bg-gray border w-100 ' placeholder='Password' type="pass" name="" id="" />
                              <div className='svg-positioning'>
                                <BiShow className='fs-4 text-secondary' />
                              </div> 
                            </div>
                            <div className=' my-4'>
                              <input type="submit" value="Sign In" className='font-size-14 fw-semibold btn btn-primary w-100 rounded-pill' />
                            </div>
                            
                          </form>
                          <div className='w-100 gap-5'>
                            <div className='d-flex justify-content-center align-items-center w-100 mb-2 border gap-1 cursor-pointer '>
                              <img className='' src={Facebook} alt="" width={'20px'} />
                              <p className='text-center pt-3'>Sign up with Facebook</p>
                            </div>
                            <div className='d-flex justify-content-center align-items-center w-100 border gap-2 cursor-pointer'>
                              <img className='' src={Google} alt="" width={'20px'} />
                              <p className='text-center pt-3'>Sign up with Google</p>
                            </div>
                            <p className='fs-6 mt-2 fw-semibold text-center text-black'>Forgot Password?</p>
                          </div>
                        </div>
                        <div className='col d-md-flex d-lg-flex d-none flex-column justify-content-center align-items-center fs-11'>
                          <img src={Group} alt="Group" className='w-75' />
                          <p className='text-center'>By signing up, you agree to our Terms & conditions, Privacy policy</p>
                        </div>
                      </div>
                    </div>
                  </div>}
                </div>
              </div>
            </ul>

          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;