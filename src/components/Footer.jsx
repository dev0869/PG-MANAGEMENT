import React from 'react';
import { Link } from 'react-router-dom';
import './component.css'
const Footer = () => {
  return (
      <footer className="w-full text-gray-700 bg-gray-100 body-font">
        <div className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
          <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
          <p 
          
             className="flex text-2xl items-center  justify-center font-bold text-red-500 title-font md:justify-start">
            Noida PG
            </p>
          
          
          </div>
          <div className="md:flex  md:justify-end md:gap-[140px] flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
            <div className=" px-4 ">
              <h2 className="mb-3 font-bold text-sm  tracking-widest text-red-600 uppercase title-font">Company</h2>
              <nav className="mb-10 list-none">
                <li className="mt-3">
                <a href={"/#home"} className="foot cursor-pointer hover:text-gray-900">Home</a>
                </li>
                <li className="mt-3">
                <a href={"/#services"} className="foot cursor-pointer hover:text-gray-900">Services</a>
                </li>
                <li className="mt-3">
                  <a className="foot cursor-pointer hover:text-gray-900">About Us</a>
              </li>
              <li className="mt-3">
                <a href='/#contact' className="foot cursor-pointer hover:text-gray-900">Contact Us</a>
              </li>
              </nav>
            </div>
            <div className=" px-4 ">
              <h2 className="mb-3 font-bold text-sm  tracking-widest text-red-600 uppercase title-font">Legal</h2>
              <nav className="mb-10 list-none">
                <li className="mt-3">
                  <a className= " foot text-gray-500 cursor-pointer hover:text-gray-900">TERMS & Conditions</a>
                </li>
                <li className="mt-3">
                  <a className="foot text-gray-500 cursor-pointer hover:text-gray-900">Privacy Policy</a>
                </li>
            
              </nav>
            </div>
            {/* <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2 className="mb-3 font-bold text-sm  tracking-widest text-gray-900 uppercase title-font">Company</h2>
            <nav className="mb-10 list-none">
              <li className="mt-3">
                <a href={"/#home"} className="foot cursor-pointer hover:text-gray-900">Home</a>
              </li>
              <li className="mt-3">
                <a href={"/#services"} className="foot cursor-pointer hover:text-gray-900">Services</a>
              </li>
              <li className="mt-3">
                <a className="foot cursor-pointer hover:text-gray-900">About Us</a>
              </li>
              <li className="mt-3">
                <a href='/#contact' className="foot cursor-pointer hover:text-gray-900">Contact Us</a>
              </li>
            </nav>
            </div>
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">Contact</h2>
              <nav className="mb-10 list-none">
                <li className="mt-3">
                  <a className="text-gray-500 cursor-pointer hover:text-gray-900">Send a Message</a>
                </li>
                <li className="mt-3">
                  <a className="text-gray-500 cursor-pointer hover:text-gray-900">Request a Quote</a>
                </li>
                <li className="mt-3">
                  <a className="text-gray-500 cursor-pointer hover:text-gray-900">+123-456-7890</a>
                </li>
              </nav>
            </div> */}
          </div>
        </div>
        <div className="bg-gray-300">
          <div className="container px-5 py-4 mx-auto">
            <p className="text-sm text-gray-700 capitalize xl:text-center">© 2023 All rights reserved</p>
          </div>
        </div>
      </footer>
   
  );
};

export default Footer;
