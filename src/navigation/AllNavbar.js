import {AiFillDashboard , AiOutlineShopping} from 'react-icons/ai'
import {BiCategory , BiLoaderCircle} from 'react-icons/bi'
import {FiUsers} from 'react-icons/fi'
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
        id: 11 ,
        title: 'Add Product',
        icon : <AiFillDashboard/>,
        role: 'admin',
        path: '/admin/dashboard/add-product'
    },
    {
        id: 3 ,
        title: 'Model',
        icon : <BiCategory/>,
        role: 'admin',
        path: '/admin/dashboard/model'
    },
    {
        id: 4 ,
        title: 'Brand',
        icon : <MdOutlineBrandingWatermark/>,
        role: 'admin',
        path: '/admin/dashboard/brand'
    },
    {
        id: 5 ,
        title: 'Sellers',
        icon : <FiUsers/>,
        role: 'admin',
        path: '/admin/dashboard/sellers'
    },
    {
        id: 6 ,
        title: 'Payment request',
        icon : <BsCurrencyDollar/>,
        role: 'admin',
        path: '/admin/dashboard/payment-request'
    },
    {
        id: 7 ,
        title: 'Deactive Sellers',
        icon : <FiUsers/>,
        role: 'admin',
        path: '/admin/dashboard/deactive-sellers'
    },
    {
        id: 8 ,
        title: 'Seller Request',
        icon : <BiLoaderCircle/>,
        role: 'admin',
        path: '/admin/dashboard/seller-request'
    },
    {
        id: 9 ,
        title: 'Chat Seller',
        icon : <CiChat1/>,
        role: 'admin',
        path: '/admin/dashboard/chat-sellers'
    },



    {
        id: 10 ,
        title: 'Dashboard',
        icon : <AiFillDashboard/>,
        role: 'seller',
        path: '/seller/dashboard'
    },
    {
        id: 11 ,
        title: 'Add Product',
        icon : <AiFillDashboard/>,
        role: 'seller',
        path: '/seller/dashboard/add-product'
    },
    {
        id: 12 ,
        title: 'Product',
        icon : <AiFillDashboard/>,
        role: 'seller',
        path: '/seller/dashboard/product'
    },
    {
        id: 13 ,
        title: 'Orders',
        icon : <AiFillDashboard/>,
        role: 'seller',
        path: '/seller/dashboard/orders'
    },
    {
        id: 14 ,
        title: 'Payments',
        icon : <AiFillDashboard/>,
        role: 'seller',
        path: '/seller/dashboard/payments'
    },
    {
        id: 15 ,
        title: 'Chat Support',
        icon : <AiFillDashboard/>,
        role: 'seller',
        path: '/seller/dashboard/chat-support'
    },
    {
        id: 16 ,
        title: 'Profile',
        icon : <AiFillDashboard/>,
        role: 'seller',
        path: '/seller/dashboard/profile'
    },

            
]