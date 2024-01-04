import {AiFillDashboard , AiOutlineShopping , AiOutlinePlus , } from 'react-icons/ai'
import {BiCategory , BiLoaderCircle} from 'react-icons/bi'
import {FiUsers} from 'react-icons/fi'
import {RiProductHuntLine} from 'react-icons/ri'
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
        icon : <AiOutlinePlus/>,
        role: 'admin',
        path: '/admin/dashboard/add-product'
    },
    {
        id: 4 ,
        title: 'All Products',
        icon : <RiProductHuntLine/>,
        role: 'admin',
        path: '/admin/dashboard/all-products'
    },
    {
        id: 5 ,
        title: 'Inhouse Products',
        icon : <RiProductHuntLine/>,
        role: 'admin',
        path: '/admin/dashboard/inhouse-products'
    },
    {
        id: 6 ,
        title: 'Pending Products',
        icon : <RiProductHuntLine/>,
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
        title: 'Add Banner',
        icon : <MdOutlineBrandingWatermark/>,
        role: 'admin',
        path: '/admin/dashboard/add-banner'
    }, {
        id: 10 ,
        title: 'All Banners',
        icon : <MdOutlineBrandingWatermark/>,
        role: 'admin',
        path: '/admin/dashboard/all-banners'
    },
    {
        id: 11 ,
        title: 'Sellers',
        icon : <FiUsers/>,
        role: 'admin',
        path: '/admin/dashboard/sellers'
    },
   
    {
        id: 12 ,
        title: 'Deactive Sellers',
        icon : <FiUsers/>,
        role: 'admin',
        path: '/admin/dashboard/deactive-sellers'
    },
    {
        id: 13 ,
        title: 'Seller Request',
        icon : <BiLoaderCircle/>,
        role: 'admin',
        path: '/admin/dashboard/seller-request'
    },
    {
        id: 14 ,
        title: 'Seller Password Change',
        icon : <BiLoaderCircle/>,
        role: 'admin',
        path: '/admin/dashboard/seller-password-change'
    },
    {
        id: 15 ,
        title: 'Chat Seller',
        icon : <CiChat1/>,
        role: 'admin',
        path: '/admin/dashboard/chat-sellers'
    },



    {
        id: 16 ,
        title: 'Dashboard',
        icon : <AiFillDashboard/>,
        role: 'seller',
        path: '/seller/dashboard'
    },
    {
        id: 16 ,
        title: 'Add Product',
        icon : <AiOutlinePlus/>,
        role: 'seller',
        path: '/seller/dashboard/add-product'
    },
    {
        id: 17 ,
        title: 'All Products',
        icon : <RiProductHuntLine/>,
        role: 'seller',
        path: '/seller/dashboard/products'
    },
    {
        id: 18 ,
        title: 'Orders',
        icon : <AiOutlineShopping/>,
        role: 'seller',
        path: '/seller/dashboard/orders'
    },
    
    {
        id: 19 ,
        title: 'Chat Support',
        icon : <CiChat1/>,
        role: 'seller',
        path: '/seller/dashboard/chat-support'
    },
    {
        id: 20 ,
        title: 'Profile',
        icon : <FiUsers/>,
        role: 'seller',
        path: '/seller/dashboard/profile'
    },

            
]