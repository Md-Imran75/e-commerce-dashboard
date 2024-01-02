import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { get_admin_order, admin_order_status_update, messageClear } from '../../store/reducers/OrderReducer'

const OrderDetails = () => {
  const { orderId } = useParams()
  const dispatch = useDispatch()

  const { order, errorMessage, successMessage } = useSelector(state => state.order)
console.log(order)
  useEffect(() => {
    dispatch(get_admin_order(orderId))
  }, [orderId])

  const [status, setStatus] = useState('')
  useEffect(() => {
    setStatus(order?.delivery_status)
  }, [order])
  const status_update = (e) => {
    dispatch(admin_order_status_update({ orderId, info: { status: e.target.value } }))
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
    
    <div className='px-2 lg:ml-[260px] text-black-500 md:px-7 pt-5'>
      <div className='w-full p-4 bg-background-100 rounded-md'>
        <div className='flex gap-1 justify-between items-center p-4'>
          <h2 className='text-xl text-black-500'>Order Details</h2>
          <select onChange={status_update} value={status} className='px-4 py-2 focus:border-primary-500 outline-none border border-primary-500 rounded-md text-black-500' name="" id="">
            <option value="pending">Pending</option>
            <option value="processing">Proccessing</option>
            <option value="warehouse">Ware House</option>
            <option value="placed">Placed</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>

        <div className='p-4 flex flex-col'>
          <div className='flex gap-2 flex-col  text-lg text-black-500'>
            <h2>Order Id: #{order._id}</h2>
            <span>Date: {order.date}</span>
          </div>
          <div className='flex flex-col md:flex-row flex-wrap'>
            <div className='w-full md:w-[32%]'>
              <div className='pr-3 text-black-500 text-lg'>
                <div className='flex flex-col gap-1'>
                  <h2 className='pb-2 font-semibold'>Deliver to : <span className='text-secondary-400'>{order.shippingInfo?.name}</span></h2>
                  <p><span className='text-sm'>Addess: {order.shippingInfo?.address} ,{order.shippingInfo?.city} ,{order.shippingInfo?.thana}</span></p>
                  <p><span className='text-sm'>Phone: {order.shippingInfo?.phone}</span></p>
                </div>

                <div className='flex justify-start items-center gap-3'>
                  <h2>Payment status :</h2>
                  <span className='text-base'>{order.payment_status}</span>
                </div>
                <span>Price: BDT {order.price}</span>
                <div className='mt-10 flex flex-col  gap-4'>
                  <div className='text-black-500'>
                    {
                      order?.products && order.products?.map((p, i) => <div key={i} className='flex border border-background-400 mb-5 gap-3 text-sm'>
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

            <div className='w-full md:w-[68%]'>
              <div className='pl-3'>
                <div className='mt-4 flex flex-col'>
                  {
                    order?.suborder?.map((o) => <div key={o._id} className='text-black-500 mb-6'>
                      <div className='flex flex-col md:flex-row justify-start  gap-5'>
                        <h2>SellerId : <span className='text-secondary-400'>{o.sellerId}</span> </h2>
                        <span>Status: {o.delivery_status}</span>
                      </div>
                      {
                        o.products?.map((p, i) => <div key={i} className='flex gap-3 text-md mt-2'>
                          <img className='w-[100px] h-[80px]' src={p.productImages[0]} alt="product Image" />
                          <div>
                            <h2>{p.name}</h2>
                            <p>
                              <span>Brand : </span>
                              <span>{p.brand} </span>
                              <span>{p.model} </span>
                              <span className='text-lg'>Quantity : {p.quantity}</span>
                            </p>
                          </div>
                        </div>)
                      }
                    </div>)
                  }



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
