import { useEffect, useState } from "react"
import { Link , useLocation } from "react-router-dom"
import {getNavs} from '../navigation/index'
import { BiLogOut } from "react-icons/bi"

const Sidebar = ({setShowSidebar , showSidebar}) => {
   const {pathname} = useLocation()
    const [allNav , setAllNav] = useState([])

    useEffect(() => {
     const navs = getNavs('seller')
     setAllNav(navs)
    },[])

  return (
    <div>
      <div onClick={() => setShowSidebar(false)} className={`fixed duration-200 ${!showSidebar ? 'invisible' :'visible'} w-screen h-screen bg-white-100 top-0 left-0 z-10`}></div>
      <div className={`w-[260px] fixed bg-white-100 z-50 top-0 h-screen shadow-[0_0_15px_0_rgb(34_41_47_/_5%)] transition-all ${showSidebar ? 'left-0' : '-left-[260px] lg:left-0'}`}>
         <div className='h-[70px] flex justify-center items-center'>
            <Link className="w-[100px] h-[100px]" to={'/'}>
            <img className="w-full h-full" src="http://localhost:3000/images/logo.png" alt="" />
            </Link>
         </div>
         <div className="px-[16px]">
           <ul className="mt-5">
            {
              allNav.map((nav , index) => <li key={index} >
                <Link to={nav.path} className={`${pathname === nav.path ? 'bg-primary-100 shadow-sm text-black-500' :'text-black-500'} px-[12px] py-[9px] rounded-sm flex justify-start items-center gap-[12px] hover:pl-4 transition-all w-full mb-1 `}>
                <span>{nav.icon}</span>
                <span>{nav.title}</span>

                </Link>
              </li> )
            }
            <li>
              <button className="text-black-500'} px-[12px] py-[9px] rounded-sm flex justify-start items-center gap-[12px] hover:pl-4 transition-all w-full mb-1 ">
                <span>
                  <BiLogOut/>
                </span>
                <span>
                  Logout
                </span>
              </button>
            </li>
           </ul>
         </div>
      </div>
    </div>
  )
}

export default Sidebar
