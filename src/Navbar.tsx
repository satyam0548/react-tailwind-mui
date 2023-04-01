import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
    return (
        <div className=" bg-[url('https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v546batch3-mynt-34-badgewatercolor_1.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=89288ef4b47127f7f34a5998b50e4470')] mx-2 my-4 py-2 px-2 rounded-md"  >
      
     <div className='flex justify-between mt-6 mb-0 mx-4' >
       <img className='flex-none w-20 h-15 mb-2 ' src="https://cdn-icons-png.flaticon.com/512/3159/3159310.png" />
       <h1 className='flex-none w-5 text-5xl text-green-600 mt-6 hover:text-slate-600 decoration-sky-500 text-center px-2 font-bold font-  mx-10 brightness-600'>
          PhotoCAN
      </h1>
     <ul className='flex justify-end space-x-8 mt-6 mb-0 px-20 '>
        <li className=' cursor-pointer text-black hover:text-green-600'>Home</li>
        <li> |</li>
        <li className='cursor-pointer text-black  hover:text-green-600' ><Link to='./Gallary'>Gallary</Link></li>
        <li>|</li>
        <li className='cursor-pointer  text-black hover:text-green-600' ><Link to='./Contacts'>Contact</Link></li>
      </ul>
     </div>
    
     </div >
    );
}

export default Navbar