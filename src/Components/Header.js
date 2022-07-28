import React from 'react';
import logo from '../assets/images/i1.png'
import { BsFillCaretDownFill, BsSearch } from 'react-icons/bs'


const Header = () => {
  return (
    <header>
      <nav class="navbar navbar-expand-lg bg-white px-4 shadow-sm">
        <div class="container-fluid">

          <a class="navbar-brand text-green fs-3" href="/">AGT.<span className='text-gray'>W<img className='mb-2' src={logo} alt="logo" height={'25px'} width={'24px'} />RLD</span></a>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent"> 
                <div class="input-group w-50 m-auto py-2 d-flex justify-content-center align-items-center">
                  <span class="input-group-text py-2 bg-light custom-span" id="basic-addon1"> <BsSearch/></span>
                  <input type="text" class="form-control bg-light border-start-0 custom-input" placeholder="Search for your favorite groups in ATG" aria-label="Search"/>
                </div>  
            <ul class="navbar-nav ms-auto">
              <li className='fw-semibold'>Create account. <a href="/" className='text-primary fw-bold text-decoration-none'>It’s free!</a><BsFillCaretDownFill className='ms-1' /></li>
            </ul>

          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;