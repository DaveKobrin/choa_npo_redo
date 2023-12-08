
import {  NavItem,  Menu, } from '@/styles/navStyles';
import Link from 'next/link';
import {calendar, location, findDoc, portal} from '/src/data/icons.js';
import Image from 'next/image'

export default function DropDownLink({menuOpen, setMenuOpen, title}) {

  const closeMenu = () => {
    // Close the menu by setting menuOpen state to false
    setMenuOpen(false);
  };
  
  const  main = [
      {icon:calendar,title:'Request an appointment',href:'#'},
      {icon:location,title:'Find a location',href:'#'},
      {icon:findDoc,title:'Find a doctor',href:'#'},
      {icon:portal,title:'Patient portal',href:'#'},
    ]
  const mainlinkList = main.map((link,index) => {
    return (
      <table key={index} className='m-3'>
        <tr >
          <td className='w-9'>{link.icon}</td>
          <td className='pl-4 pb-2 pt-2'>
            <Link  href={link.href} onClick={closeMenu}>
              <span className='text-black'>{link.title}</span>
            </Link>
          </td>
        </tr>
      </table>
    )
  })
  
  const titlesub1 = 'Services'
  const  linkssub1=[
        {title:'Medical Services',href:'#'},
        {title:'Departments',href:'#'},
        {title:'Conditions & Treatments',href:'#'},
        {title:'Programs',href:'#'},
      ]
  const sub1 = linkssub1.map((link,index) => {
    return (

      <div key={index}  className='flex-col'>
        <Link className='text-xs' href={link.href} onClick={closeMenu}>
          <span className='text-black'>{link.title}</span>
        </Link>
    </div>
    )
  })
  const titlesub2 = 'Visit Types'
  const  linkssub2= [
        {title:'Emergency',href:'#'},
        {title:'Urgent Care',href:'/urgentcare'},
        {title:'Primary Care',href:'/primarycare'},
        {title:'Telemed',href:'/telemed'},
      ]
  const sub2 = linkssub2.map((link,index) => {
    return (
      <div key={index}  className='flex-col'>
      <Link className='text-xs' href={link.href} onClick={closeMenu}>
        <span className='text-black'>{link.title}</span>
      </Link>
    </div>
    )
  }) 
  const titlesub3 = 'Resources'
  const linkssub3 = [
        {title:'Health Education',href:'#'},
        {title:'What to Expect',href:'#'},
        {title:'Medical Records',href:'#'},
        {title:'Finance & Billing',href:'#'},
        {title:'Visitor info',href:'#'},
        {title:'Volunteering & Fundraising',href:'#'},
      ]

  const sub3 = linkssub3.map((link,index) => {
    return (
      <div key={index}  className='flex-col'>
        <Link className='text-xs' href={link.href} onClick={closeMenu}>
          <span className='text-black'>{link.title}</span>
        </Link>
      </div>
        
    )
  })
  
      

    
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
              <>
              <div className="w-0 h-0 absolute
                  border-l-[50px] border-l-transparent
                  border-b-[75px] border-b-white
                  border-r-[50px] border-r-transparent ">
                </div>
              <Menu >
                <div className='flex justify-between'>
                  <div className='flex'>
                    <h5>{title}</h5>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-3 h-3 ml-2 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </div>
                  <div className='cursor-pointer' onClick={()=>setMenuOpen(!menuOpen)}>
                    <Image src={'/close_icon.png'} alt="logo" width={20} height={20} />
                  </div>
                </div>
                <div className="grid grid-cols-3 mt-8">
                    <div>
                      {mainlinkList}
                    </div>
                    <div >
                      <div className='border-l-2 border-[#00A94F] pl-6' >
                        <h6 className='text-base mt-5'>{titlesub1}</h6>
                        {sub1}
                        <h6 className='text-base mt-5'>{titlesub2}</h6>
                        {sub2}
                      
                      </div>
                    </div>
                    <div>
                      <h6 className='text-base mt-5'>{titlesub3}</h6>
                      {sub3}
                    </div>
                </div>
                
                
              </Menu>
            </>
            ) : null}
          </NavItem>
        
        )
      }