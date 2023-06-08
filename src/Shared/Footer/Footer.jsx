import React from 'react';
import imgLogo from '../../assets/image/logo.png'
import { AiFillYoutube } from 'react-icons/ai';
import { BsTwitter,BsFacebook } from 'react-icons/bs';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
   <div>
     <footer className="footer p-12 bg-base-200 justify-between text-base-content">
  <div>
    <span className="footer-title">contact</span>
  
    <p>asadur@gmail.com</p> 
    <p>++88023-45843-583</p> 
    <p>++88023-45843-582</p> 
   
  </div> 
  <div>
    <span className="footer-title">Address</span> 
    <p>Feni, Town</p> 
    <p>near ssk road</p> 
    <p>Ac market ,5th floor</p> 
    
  </div> 
  <div className="grid-col mb-5">
   <img className='w-1/2 relative bottom-4' src={imgLogo} alt="" />
   <div>
    <div className="grid grid-flow-col gap-4">
      <Link><BsTwitter style={{fontSize: '2rem'}}></BsTwitter></Link> 
      <Link><AiFillYoutube style={{fontSize: '2rem'}}></AiFillYoutube></Link>
      <Link><BsFacebook style={{fontSize: '2rem'}}></BsFacebook></Link>
    </div>
    <p className='mt-5'>@ Sports Academy 2023</p>
  </div>
    

    
  </div>
  
</footer>

   </div>
  );
};

export default Footer;
