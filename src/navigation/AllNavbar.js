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
        title: 'Model',
        icon : <BiCategory/>,
        role: 'admin',
        path: '/admin/dashboard/model'
    },
    {
        id: 5 ,
        title: 'Brand',
        icon : <MdOutlineBrandingWatermark/>,
        role: 'admin',
        path: '/admin/dashboard/brand'
    },
    {
        id: 6 ,
        title: 'Sellers',
        icon : <FiUsers/>,
        role: 'admin',
        path: '/admin/dashboard/sellers'
    },
    {
        id: 7 ,
        title: 'Payment request',
        icon : <BsCurrencyDollar/>,
        role: 'admin',
        path: '/admin/dashboard/payment-request'
    },
    {
        id: 8 ,
        title: 'Deactive Sellers',
        icon : <FiUsers/>,
        role: 'admin',
        path: '/admin/dashboard/deactive-sellers'
    },
    {
        id: 9 ,
        title: 'Seller Request',
        icon : <BiLoaderCircle/>,
        role: 'admin',
        path: '/admin/dashboard/seller-request'
    },
    {
        id: 10 ,
        title: 'Chat Seller',
        icon : <CiChat1/>,
        role: 'admin',
        path: '/admin/dashboard/chat-sellers'
    },



    {
        id: 11 ,
        title: 'Dashboard',
        icon : <AiFillDashboard/>,
        role: 'seller',
        path: '/seller/dashboard'
    },
    {
        id: 12 ,
        title: 'Add Product',
        icon : <AiOutlinePlus/>,
        role: 'seller',
        path: '/seller/dashboard/add-product'
    },
    {
        id: 13 ,
        title: 'All Products',
        icon : <RiProductHuntLine/>,
        role: 'seller',
        path: '/seller/dashboard/products'
    },
    {
        id: 14 ,
        title: 'Orders',
        icon : <AiOutlineShopping/>,
        role: 'seller',
        path: '/seller/dashboard/orders'
    },
    {
        id: 15 ,
        title: 'Payments',
        icon : <BsCurrencyDollar/>,
        role: 'seller',
        path: '/seller/dashboard/payments'
    },
    {
        id: 16 ,
        title: 'Chat Support',
        icon : <CiChat1/>,
        role: 'seller',
        path: '/seller/dashboard/chat-support'
    },
    {
        id: 17 ,
        title: 'Profile',
        icon : <FiUsers/>,
        role: 'seller',
        path: '/seller/dashboard/profile'
    },

            
]