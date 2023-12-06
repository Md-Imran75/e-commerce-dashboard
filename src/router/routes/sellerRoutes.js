import {lazy} from 'react'

const Home = lazy(() => import('../../views/Home'))
const SellerDashboard = lazy(() => import('../../views/seller/SellerDashboard'))
const AddProduct = lazy(() => import('../../views/seller/AddProduct'))
const Product = lazy(() => import('../../views/seller/Product'))
const Orders = lazy(() => import('../../views/seller/Orders'))
const Payment = lazy(() => import('../../views/seller/Payment'))
const ChatSupport = lazy(() => import('../../views/seller/ChatSupport'))
const Profile = lazy(() => import('../../views/seller/Profile'))






export const sellerRoutes = [
    {
        path : '/',
        element: <Home/>,
        ability : ['admin' , 'seller']
    },
    {
        path : '/seller/dashboard',
        element: <SellerDashboard/>,
        ability :  'seller'
    },
    {
        path : '/seller/dashboard/add-product',
        element: <AddProduct/>,
        ability :  'seller'
    },
    {
        path : '/seller/dashboard/product',
        element: <Product/>,
        ability :  'seller'
    },
    {
        path : '/seller/dashboard/orders',
        element: <Orders/>,
        ability :  'seller'
    },
    {
        path : '/seller/dashboard/payments',
        element: <Payment/>,
        ability :  'seller'
    },
    {
        path : '/seller/dashboard/chat-support',
        element: <ChatSupport/>,
        ability :  'seller'
    },
    {
        path : '/seller/dashboard/profile',
        element: <Profile/>,
        ability :  'seller'
    },
]