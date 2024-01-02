import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { messageClear, get_seller_order, seller_order_status_update } from '../../store/reducers/OrderReducer'

const OrderDetails = () => {


    const { orderId } = useParams()
    const dispatch = useDispatch()

    const { order, errorMessage, successMessage } = useSelector(state => state.order)

    useEffect(() => {
        dispatch(get_seller_order(orderId))
    }, [orderId])

    const [status, setStatus] = useState('')
    useEffect(() => {
        setStatus(order?.delivery_status)
    }, [order])
    const status_update = (e) => {
        dispatch(seller_order_status_update({ orderId, info: { status: e.target.value } }))
        setStatus(e.target.value)
    }

    useEffect(() => {
        if (successMessage) {
            toast.success(successMessage)
            dispatch(messageClear())
        }
        if (errorMessage) {
            toast.error(errorMessage)
            dispatch(messageClear())
        }
    }, [successMessage, errorMessage])


    return (
        <div className='px-2 lg:ml-[260px] md:px-7 py-5'>
            <div className='w-full p-4  rounded-md'>
                <div className='flex justify-between items-center p-4'>
                    <h2 className='text-xl '>Order Details</h2>
                    <select onChange={status_update} value={status} name="" id="" className='px-4 py-2 focus:border-indigo-500 outline-none  border bg-secondary-400 rounded-md text-white-500'>
                        <option value="pending">pending</option>
                        <option value="processing">processing</option>
                        <option value="warehouse">warehouse</option>
                        <option value="cancelled">cancelled</option>
                    </select>
                </div>
                <div className='p-4'>
                    <div className='flex flex-col  gap-2 text-lg '>
                        <h2>#{order._id}</h2>
                        <span>{order.date}</span>
                    </div>
                    <div className='flex flex-wrap'>
                        <div className='w-full md:w-[32%]'>
                            <div className='pr-3  text-lg'>
                                <div className='flex flex-col gap-1'>
                                    <h2 className='pb-2 font-semibold'>Deliver to : {order.shippingInfo}</h2>
                                </div>
                                <div className='flex justify-start items-center gap-3'>
                                    <h2>Payment Status : </h2>
                                    <span className='text-base'>{order.payment_status}</span>
                                </div>
                                <span>Price : ${order.price}</span>
                                <div className='mt-4 flex flex-col gap-4'>
                                    <div className=' flex flex-col gap-6'>
                                        {
                                             order?.products && order?.products?.map((p, i) => <div key={i} className='flex border border-background-400 mb-5 gap-3 text-sm'>
                                             <img className='w-[100px] h-[80px]' src={p.productImages[0]} alt="product Image" />
                                             <div>
                                               <h2>{p.name}</h2>
                                               <div>
                                                  <div>
                                                  <span>Brand : {p.brand} </span>
                                                  </div>
                                                  <div>
                                                  <span>Model : {p.model} </span>
                                                  </div>
                                                 <div>
                                                 <span>Price: {p.price} </span>
                                                 </div>
                                                 <div><span>Quantity : {p.quantity}</span></div>
                                               </div>
                                             </div>
                                           </div>)
                                        }

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderDetails