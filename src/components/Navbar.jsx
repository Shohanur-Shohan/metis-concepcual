
import Image from "next/image";
import Link from "next/link";


const NavBar = () => {
  return (
    <div className="w-full h-auto border-b-[1px] border-[#ddd] bg-transparent ">
      <div className="container flex items-center px-2 py-5 mx-auto navbar">
        <div className="navbar-start">

          <Link href={'/'}>
            <Image width={120} height={120} src="/images/logo.svg" alt="logo"/>
          </Link>
          
          
          
          <ul className="hidden gap-2 px-1 lg:flex">
            <li  className="font-medium ml-8 text-[14px] border-transparent transition delay-4000 hover:text-[#1A56DB] hover:border-[#1A56DB] border-b-2"><Link  href={'/'}>Home</Link></li>
            <li  className="font-medium ml-8 text-[14px] border-transparent transition delay-4000 hover:text-[#1A56DB] hover:border-[#1A56DB]  border-b-2"><Link href={'/about'}>About</Link></li>
            <li  className="font-medium ml-8 text-[14px] border-transparent transition delay-4000 hover:text-[#1A56DB] hover:border-[#1A56DB]  border-b-2"><Link href={'/services'}>Services</Link></li>
            <li  className="font-medium ml-8 text-[14px] border-transparent transition delay-4000 hover:text-[#1A56DB] hover:border-[#1A56DB]  border-b-2"><Link href={'/blog'}>Blog</Link></li>
            <li  className="font-medium ml-8 text-[14px] border-transparent transition delay-4000 hover:text-[#1A56DB] hover:border-[#1A56DB]  border-b-2"><Link href={'/contact'}>Contact</Link></li> 
            <li  className="font-medium ml-8 text-[14px] border-transparent transition delay-4000 hover:text-[#1A56DB] hover:border-[#1A56DB]  border-b-2"><Link href={'/dashboard'}>Dashboard</Link></li>           
          </ul>
        </div>

        <div className="navbar-end">
          
          <Link href={'/login'} className="hidden ml-3 px-8 py-2 lg:flex border-[1px] bg-transparent transition delay-4000 border-[#1A56DB] text-[#1A56DB] hover:bg-[#1A56DB] hover:text-white rounded-lg font-medium">Login</Link>
          <Link href={'/signup'} className="hidden ml-3 px-8 py-2 lg:flex border-[1px] bg-[#1A56DB] transition delay-4000 border-[#1A56DB] text-white hover:bg-transparent hover:text-[#1A56DB] rounded-lg font-medium">Sign up</Link>
          
          <div className="dropdown">
            <label tabIndex={0} className="bg-transparent btn border-2 border-transparent hover:border-[#1A56DB] hover:bg-transparent lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="dropdown-content mt-2 z-[1] gap-2 py-4 px-4 shadow bg-base-100 rounded-md w-52 ml-[-170px]">
              <li  className="font-medium text-[14px] mb-2  border-transparent transition delay-4000 hover:text-[#1A56DB] hover:border-[#1A56DB]  border-b-2"><Link href={'/'} >Home</Link></li>
              <li  className="font-medium text-[14px] mb-2  border-transparent transition delay-4000 hover:text-[#1A56DB] hover:border-[#1A56DB]  border-b-2"><Link href={'/about'}>About</Link></li>
              <li  className="font-medium text-[14px] mb-2  border-transparent transition delay-4000 hover:text-[#1A56DB] hover:border-[#1A56DB]  border-b-2"><Link href={'/services'}>Services</Link></li>
              <li  className="font-medium text-[14px] mb-2  border-transparent transition delay-4000 hover:text-[#1A56DB] hover:border-[#1A56DB]  border-b-2"><Link href={'/blog'}>Blog</Link></li>
              <li  className="font-medium text-[14px] mb-2  border-transparent transition delay-4000 hover:text-[#1A56DB] hover:border-[#1A56DB]  border-b-2"><Link href={'/contact'}>Contact</Link></li> 
              <li  className="font-medium text-[14px] mb-2  border-transparent transition delay-4000 hover:text-[#1A56DB] hover:border-[#1A56DB]  border-b-2"><Link href={'/dashboard'}>Dashboard</Link></li> 

              <Link href={'/login'} className="lg:hidden px-8 py-2 mb-2 text-center justify-center flex border-2 bg-transparent border-[#1A56DB] font-medium hover:bg-[#1A56DB] hover:text-white rounded-lg">Login</Link>
              <Link href={'/signup'} className="lg:hidden px-8 py-2 mb-2 flex text-center justify-center border-2 bg-[#1A56DB] transition delay-4000 border-[#1A56DB] text-white hover:bg-transparent hover:text-[#1A56DB] rounded-lg font-medium">Sign up</Link>

            </ul>           
          </div>
        </div>
    </div>
  </div>
  );
};

export default NavBar;
