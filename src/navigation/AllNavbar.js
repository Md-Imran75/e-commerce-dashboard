import {AiFillDashboard , AiOutlineShopping , AiOutlinePlus , } from 'react-icons/ai'
import {BiCategory , BiLoaderCircle} from 'react-icons/bi'
import {FiUsers} from 'react-icons/fi'
import {RiProductHuntLine} from 'react-icons/ri'
import {BsCurrencyDollar} from 'react-icons/bs'
import {CiChat1} from 'react-icons/ci'
import { MdOutlineBrandingWatermark } from "react-icons/md"




export const allNav = [
    {
        id: 1 ,
        title: 'Dashboard',
        icon : <AiFillDashboard/>,
        role: 'admin',
        path: '/admin/dashboard'
    },
    {
        id: 2 ,
        title: 'Orders',
        icon : <AiOutlineShopping/>,
        role: 'admin',
        path: '/admin/dashboard/orders'
    },
    {
        id: 3 ,
        title: 'Add Product',
        icon : <AiFillDashboard/>,
        role: 'admin',
        path: '/admin/dashboard/add-product'
    },
    {
        id: 4 ,
        title: 'All Products',
        icon : <AiFillDashboard/>,
        role: 'admin',
        path: '/admin/dashboard/all-products'
    },
    {
        id: 5 ,
        title: 'Inhouse Products',
        icon : <AiFillDashboard/>,
        role: 'admin',
        path: '/admin/dashboard/inhouse-products'
    },
    {
        id: 6 ,
        title: 'Pending Products',
        icon : <AiFillDashboard/>,
        role: 'admin',
        path: '/admin/dashboard/pending-products'
    },
    {
        id: 7 ,
        title: 'Model',
        icon : <BiCategory/>,
        role: 'admin',
        path: '/admin/dashboard/model'
    },
    {
        id: 8 ,
        title: 'Brand',
        icon : <MdOutlineBrandingWatermark/>,
        role: 'admin',
        path: '/admin/dashboard/brand'
    },
    {
        id: 9 ,
        title: 'Sellers',
        icon : <FiUsers/>,
        role: 'admin',
        path: '/admin/dashboard/sellers'
    },
   
    {
        id: 10 ,
        title: 'Deactive Sellers',
        icon : <FiUsers/>,
        role: 'admin',
        path: '/admin/dashboard/deactive-sellers'
    },
    {
        id: 11 ,
        title: 'Seller Request',
        icon : <BiLoaderCircle/>,
        role: 'admin',
        path: '/admin/dashboard/seller-request'
    },
    {
        id: 12 ,
        title: 'Seller Password Change',
        icon : <BiLoaderCircle/>,
        role: 'admin',
        path: '/admin/dashboard/seller-password-change'
    },
    {
        id: 13 ,
        title: 'Chat Seller',
        icon : <CiChat1/>,
        role: 'admin',
        path: '/admin/dashboard/chat-sellers'
    },



    {
        id: 14 ,
        title: 'Dashboard',
        icon : <AiFillDashboard/>,
        role: 'seller',
        path: '/seller/dashboard'
    },
    {
        id: 15 ,
        title: 'Add Product',
        icon : <AiOutlinePlus/>,
        role: 'seller',
        path: '/seller/dashboard/add-product'
    },
    {
        id: 16 ,
        title: 'All Products',
        icon : <RiProductHuntLine/>,
        role: 'seller',
        path: '/seller/dashboard/products'
    },
    {
        id: 17 ,
        title: 'Orders',
        icon : <AiOutlineShopping/>,
        role: 'seller',
        path: '/seller/dashboard/orders'
    },
    
    {
        id: 18 ,
        title: 'Chat Support',
        icon : <CiChat1/>,
        role: 'seller',
        path: '/seller/dashboard/chat-support'
    },
    {
        id: 19 ,
        title: 'Profile',
        icon : <FiUsers/>,
        role: 'seller',
        path: '/seller/dashboard/profile'
    },

            
]