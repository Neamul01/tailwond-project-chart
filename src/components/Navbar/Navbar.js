import React, { useState } from 'react';
import Nav from './Nav/Nav';
import { MenuIcon, XIcon } from '@heroicons/react/solid'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const navItem = [
        { id: 1, name: 'Home', link: './home' },
        { id: 2, name: 'Menu', link: './menu' },
        { id: 3, name: 'Cart', link: './cart' },
        { id: 4, name: 'Contact', link: './contact' },
    ]
    return (
        <nav className='bg-indigo-100'>
            <div onClick={() => setOpen(!open)} className='w-6 h-6 md:hidden'>
                {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
            </div>
            <ul className={`md:flex md:static justify-center absolute duration-500 ease-in bg-indigo-100 w-full ${open ? 'top-6' : 'top-[-130px]'}`}>
                {
                    navItem.map(nav => <Nav
                        key={nav.id}
                        nav={nav}
                    ></Nav>)
                }
            </ul>
        </nav >
    );
};

export default Navbar;