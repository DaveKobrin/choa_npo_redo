import React from 'react'
import { NavItem } from '@/styles/navStyles'

export default function MainLink({ pos,title, menuOpen, setMenuOpen, setMenu2Open, setMenu3Open }) {
    
    return (
        <NavItem>
          <button
            className='flex items-center relative '
            onClick={()=>{
                setMenuOpen(!menuOpen)
                setMenu2Open(false)
                setMenu3Open(false)
              }}
            >
            {title}
            {
                menuOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 ml-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                  </svg>

                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-3 h-3 ml-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                )
              }
              {
                menuOpen ? 
                <div className={`w-0 h-0 top-5 ${pos} absolute
                    border-l-[50px] border-l-transparent
                    border-b-[75px] border-b-white
                    border-r-[50px] border-r-transparent `}>
                </div>
                :
                null
            }
            </button>
            
        </NavItem>
    )
}