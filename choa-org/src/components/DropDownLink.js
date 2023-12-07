
import {  NavItem,  Menu, } from '@/styles/navStyles';
import Link from 'next/link';
import {calendar, location, findDoc, portal} from '/src/data/icons.js';

export default function DropDownLink({menuOpen, setMenuOpen, title}) {

 

  // const sub1liks = links.sub1.map((link) => {
  //   return (
  //     <div>
  //       <h6>{link.title}</h6>
  //       {link.links.map((link) => {
  //         return (
  //           <Link className='text-black' href={link.href}>
  //             {link.title}
  //           </Link>
  //         )
  //       })}
  //     </div>
  //   )})
  
  const  main = [
      {icon:calendar,title:'Request an appointment',href:'#'},
      {icon:location,title:'Find a location',href:'#'},
      {icon:findDoc,title:'Find a doctor',href:'#'},
      {icon:portal,title:'Patient portal',href:'#'},
    ]
  const mainlinkList = main.map((link) => {
    return (
      <div className='flex items-center mt-5'>
        <div className='m-1'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
        </div>
        
        <p className='text-black'>
          {link.title}
        </p>
      </div>
    )
  })
  const titlesub1 = 'Services'
  const  linkssub1=[
        {title:'Medical Services',href:'#'},
        {title:'Departments',href:'#'},
        {title:'Conditions & Treatments',href:'#'},
        {title:'Programs',href:'#'},
      ]
  const titlesub2 = 'Visit Types'
  const  linkssub2= [
        {title:'Emergency',href:'#'},
        {title:'Urgent Care',href:'#'},
        {title:'Primary Care',href:'#'},
        {title:'Telemed',href:'#'},
      ]
      
  const titlesub3 = 'Resources'
  const linksub3 = [
        {title:'Emergency',href:'#'},
        {title:'Urgent Care',href:'#'},
        {title:'Primary Care',href:'#'},
        {title:'Telemed',href:'#'},
      ]
      
      

    
    return (
        <NavItem>
          <button
            className='flex items-center'
            onClick={()=>setMenuOpen(!menuOpen)}
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
            </button>
            {menuOpen ? (
              <Menu >
                <h5>{title}</h5>
                <div className="grid grid-cols-3 ">
                    <div>
                      
                      {mainlinkList}
                    </div>
                    <div >
                      <div className='border-x-gray-600'>

                      second column
                      </div>
                    </div>
                    <div>
                      third column
                    </div>
                </div>
                
                
              </Menu>
            ) : null}
          </NavItem>
        
    )
}