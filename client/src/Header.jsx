import { Link } from "react-router-dom";
import {useContext} from "react";
import {UserContext} from "./UserContext.jsx";
export default function Header(){
  const {user} = useContext(UserContext);
    return(
        <div >
<header className='flex flex-col md:flex-row justify-between border-b border-gray-300 py-4 md:p-3   shadow-bottom '>
  <Link to={'/'} className='flex gap-4 items-center'>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-logo">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
    </svg>
    <span className='font-bold hover:underline text-2xl md:text-3xl text-logo'>JobNexus</span>
  </Link>
  <div className='flex flex-col  md:flex-row p-5 gap-4 md:gap-8 py-2 px-4  text-logo text-xl md:text-xl items-center'>
    <Link to={'/job-description'} className="hover:underline">Job Description</Link>
    <Link to={'/job-prep'} className="hover:underline">Job Preparation</Link>
    <Link to={'/contact-form'} className="hover:underline">Contact Us</Link>
  </div>

</header>


    </div>
    );
}

// http://localhost:5173/