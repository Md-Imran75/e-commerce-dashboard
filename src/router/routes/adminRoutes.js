import { lazy } from 'react'

const AdminDashboard = lazy(() => import('../../views/admin/AdminDashboard'))
const Orders = lazy(() => import('../../views/admin/Orders'))
const Model = lazy(() => import('../../views/admin/Model'))
const Brand = lazy(() => import('../../views/admin/Brand'))
const Sellers = lazy(() => import('../../views/admin/Sellers'))
const DeactiveSellers = lazy(() => import('../../views/admin/DeactiveSellers'))
const SellerRequest = lazy(() => import('../../views/admin/SellerRequest'))
const SellerDetails = lazy(() => import('../../views/admin/SellerDetails'))
const ChatSellers = lazy(() => import('../../views/admin/ChatSellers'))
const OrderDetails = lazy(() => import('../../views/admin/OrderDetails'))
const AddProduct = lazy(() => import('../../views/seller/AddProduct'))
const AllProducts = lazy(() => import('../../views/admin/AllProducts'))

export const adminRoutes = [
    {
        path: '/admin/dashboard',
        element: <AdminDashboard />,
        role: 'admin'
    },
    {
        path: '/admin/dashboard/orders',
        element: <Orders />,
        role: 'admin'
    },
    {
        path: '/admin/dashboard/add-product',
        element: <AddProduct />,
        role: 'admin'
    },
    {
        path: '/admin/dashboard/all-products',
        element: <AllProducts />,
        role: 'admin'
    },
    {
        path: '/admin/dashboard/model',
        element: <Model />,
        role: 'admin'
    },
    {
        path: '/admin/dashboard/brand',
        element: <Brand />,
        role: 'admin'
    },
    
    {
        path: '/admin/dashboard/sellers',
        element: <Sellers />,
        role: 'admin'
    },
    {
        path: '/admin/dashboard/deactive-sellers',
        element: <DeactiveSellers />,
        role: 'admin'
    },
    {
        path: '/admin/dashboard/seller-request',
        element: <SellerRequest />,
        role: 'admin'
    },
    {
        path: '/admin/dashboard/seller/details/:sellerId',
        element: <SellerDetails />,
        role: 'admin'
    },
    {
        path: '/admin/dashboard/chat-sellers',
        element: <ChatSellers/>,
        role: 'admin'
    },
    {
        path: '/admin/dashboard/chat-sellers/:sellerId',
        element: <ChatSellers/>,
        role: 'admin'
    },
    {
        path: '/admin/dashboard/order/details/:orderId',
        element: <OrderDetails/>,
        role: 'admin'
    },

]