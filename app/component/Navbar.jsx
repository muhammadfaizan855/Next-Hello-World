import Link from 'next/link'
import React from 'react'


const Navbar = () => {
  return (
    <>
    <div className="navbar bg-neutral text-neutral-content flex">
   <div> 
   <button className="btn btn-ghost text-xl">daisyUI</button>
   </div>
   <nav className="grid grid-flow-col gap-4 flex justify-end">
    
  <ul className="menu menu-vertical lg:menu-horizontal">
   <li>
    <a className="link link-hover"><Link href={'/'}>Home</Link></a>
    </li> 
    <li>
      <a className="link link-hover"><Link href={'/about'}>About</Link></a>
      </li>
   <li>
    <a className="link link-hover"><Link href={'/contact'}>Contact</Link></a>
    </li> 
    <li>
      <a className="link link-hover"><Link href={'/service'}>Service</Link></a>
      </li>
</ul>
  </nav>
   </div>
   
    </>
  )
}

export default Navbar