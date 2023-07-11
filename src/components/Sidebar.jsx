import { Link } from 'react-router-dom';
import { HiMenuAlt3 } from 'react-icons/hi';
import { AiFillHome } from 'react-icons/ai';
import { BiCalendarEvent, BiChurch, BiMessageDots } from 'react-icons/bi';
import {ImBooks } from 'react-icons/im';
import React, { useState } from 'react';


const Sidebar = () => {
  const menus = [
    {name:"Home", link:'/',icon: AiFillHome},
    {name:"Event", link:'/event',icon: BiCalendarEvent},
    {name:"Pelayanan", link:'/pelayanan',icon: BiChurch},
    {name:"Buku", link:'/buku',icon: ImBooks},
    {name:"Jadwal", link:'/jadwal',icon: BiMessageDots},
  ];
  const [open,setOpen] = useState(true);

  return (
    <section className='flex gap-6'>
      <div
        className={`bg-[#0e0e0e] min-h-screen ${
          open ? "w-72" : "w-16"
        } duration-500 text-gray-100 px-4`}
      >
        <div className="py-3 flex justify-end">
        <HiMenuAlt3 
        size={26} 
        className="cursor-pointer" 
        onClick={()=>setOpen(!open)} 
        />
        </div>
        <div className='my-4 flex flex-col gap-4 relative'>
        {

        menus?.map((menu,i)=>(
          <Link to={menu?.link} 
          key={i} 
          className='group flex item-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-500 rounded-md'>
          
          <div>{React.createElement(menu?.icon, { size: '20' })}</div>
          <h2 
          style={{
            transitionDelay: `${i + 3}00ms`,
          }}
          className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}>{menu?.name}
          </h2>
          <h2 className={`${open && "hidden"} absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}>
            {menu?.name}
          </h2>
          </Link>
          ))
        }
        </div>
      </div>
      <div className='m-3 text-xl text-gray-900 font-semibold'>
          Home
      </div>
    </section>

      
  );
};

export default Sidebar;