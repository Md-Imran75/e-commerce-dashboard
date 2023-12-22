import { lazy } from 'react'



const SellerDashboard = lazy(() => import('../../views/seller/SellerDashboard'))
const AddProduct = lazy(() => import('../../views/seller/AddProduct'))
const Product = lazy(() => import('../../views/seller/Product'))
const Orders = lazy(() => import('../../views/seller/Orders'))
const Payment = lazy(() => import('../../views/seller/Payment'))
const ChatSupport = lazy(() => import('../../views/seller/ChatSupport'))
const Profile = lazy(() => import('../../views/seller/Profile'))
const EditProduct = lazy(() => import('../../views/seller/EditProduct'))
const Pending = lazy(() => import("../../views/Pending"))
const Deactive = lazy(() => import("../../views/Deactive"))






export const sellerRoutes = [

    {
        path: '/seller/account-pending',
        element: <Pending />,
        ability: 'seller'
    },
    {
        path: '/seller/account-deactive',
        element: <Deactive />,
        ability: 'seller'
    },

    {
        path: '/seller/dashboard',
        element: <SellerDashboard />,
        role: 'seller',
        status: 'active'
    },
    {
        path: '/seller/dashboard/add-product',
        element: <AddProduct />,
        role: 'seller',
        status: 'active'
    },
    {
        path: '/seller/dashboard/edit-product/:productId',
        element: <EditProduct />,
        role: 'seller',
        status: 'active'
    },
    {
        path: '/seller/dashboard/products',
        element: <Product />,
        role: 'seller',
        status: 'active'
    },
    {
        path: '/seller/dashboard/orders',
        element: <Orders />,
        role: 'seller',
        visibility: ['active', 'deactive']
    },
    {
        path: '/seller/dashboard/payments',
        element: <Payment />,
        role: 'seller',
        status: 'active'

    },
    {
        path: '/seller/dashboard/chat-support',
        element: <ChatSupport />,
        role: 'seller',
        visibility: ['active', 'deactive', 'pending']
    },
    {
        path: '/seller/dashboard/profile',
        element: <Profile />,
        role: 'seller',
        visibility: ['active', 'deactive', 'pending']
    },
]