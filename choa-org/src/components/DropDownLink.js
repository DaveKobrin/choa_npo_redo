
import {  NavItem,  Menu1, } from '@/styles/navStyles';
import Link from 'next/link';

export default function DropDownLink({menuOpen, setMenuOpen , links}) {
    return (
        <NavItem>
          <Link
            className='flex items-center'
            onClick={()=>setMenuOpen(!menuOpen)}
            href="/">
            {links.title}
            {
                menuOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                  </svg>

                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-4 h-4 ml-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                )
              }
            </Link>
            {menuOpen ? (
              <Menu1 >
                {
                    links.sub.map((link, index) => (
                        <li className="menu-item" key={index}>
                            <button>{link}</button>
                        </li>
                    ))
                }
              </Menu1>
            ) : null}
          </NavItem>
        
    )
}