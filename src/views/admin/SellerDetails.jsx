import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import toast from 'react-hot-toast'
import { useSelector, useDispatch } from 'react-redux'
import { get_seller, seller_status_update, messageClear } from '../../store/reducers/sellerReducer'

const SellerDetails = () => {

    const dispatch = useDispatch()
    const { seller, successMessage } = useSelector(state => state.seller)
    console.log(seller)
    const { sellerId } = useParams()
    useEffect(() => {
        dispatch(get_seller(sellerId))
    }, [sellerId])
    const [status, setStatus] = useState('')
    const submit = (e) => {
        e.preventDefault()
        dispatch(seller_status_update({
            sellerId,
            status
        }))
    }
    useEffect(() => {
        if (successMessage) {
            toast.success(successMessage)
            dispatch(messageClear())
        }
    }, [successMessage])
    useEffect(() => {
        if (seller) {
            setStatus(seller.status)
        }
    }, [seller])

    return (
        <div>
            <div className="px-2 lg:ml-[260px] md:px-7 py-5">
                <div className='w-full p-4 bg-background-100 rounded-md'>
                    <div className='w-full gap-2 flex md:flex-row flex-col flex-wrap text-black-500'>

                        <div className='md:w-3/12 justify-center items-center py-3'>
                            <div>
                                {
                                    seller?.image ? <img className='w-full h-[300px]' src={seller?.image} alt="" /> : <span>Image not uploaded</span>
                                }
                            </div>
                        </div>


                        <div className='md:w-4/12 bg-primary-100 shadow-sm'>
                            <div className='px-0 md:px-5 py-2'>
                                <div className='py-2 text-lg'>
                                    <h2 className='px-4'>Basic Info</h2>
                                </div>
                                <div className='flex justify-between gap-2 p-4 rounded-md flex-col text-sm'>


                                    <div className='flex gap-2'>
                                        <span>Name: {seller?.name || ''} </span>
                                    </div>
                                    <div className='flex gap-2'>
                                        <span>Email: {seller?.email || ''}</span>
                                    </div>
                                    <div className='flex gap-2'>
                                        <span>Phone: {`0${seller?.phone || ''}`}</span>
                                    </div>
                                    <div className='flex gap-2'>
                                        <span>Favorite Bike: {seller?.favoriteBike || ''}</span>
                                    </div>
                                    <div className='flex gap-2'>
                                        <span>Role:</span>
                                        <span>{seller?.role}</span>
                                    </div>
                                    <div className='flex gap-2'>
                                        <span>Status:</span>
                                        <span>{seller?.status}</span>
                                    </div>

                                </div>
                            </div>
                        </div>


                        <div className='md:w-4/12 bg-primary-100 shadow-sm'>
                            <div className='px-0 md:px-5 py-2'>
                                <div className='py-2 text-lg'>
                                    <h2 className='px-4'>Address</h2>
                                </div>
                                <div className='flex justify-between gap-2 p-4 rounded-md flex-col text-sm'>


                                    <div className='flex gap-2'>
                                        <span>Division: {seller?.shopInfo?.division}</span>
                                    </div>
                                    <div className='flex gap-2'>
                                        <span>District: {seller?.shopInfo?.district}</span>
                                    </div>
                                    <div className='flex gap-2'>
                                        <span>Thana: {seller?.shopInfo?.thana}</span>
                                    </div>



                                </div>
                            </div>
                        </div>


                    </div>

                    <div>
                        <form onSubmit={submit} >
                            <div className='flex md:flex-row flex-col gap-4 py-3 '>
                                <select value={status} onChange={(e) => setStatus(e.target.value)}  className='px-4 py-2 hover:border hover:border-primary-500 outline-none rounded-md text-black-500 bg-primary-100' name="" id="">
                                    <option value="">---select status---</option>
                                    <option value="active">Active</option>
                                    <option value="deactive">Deactive</option>

                                </select>
                                <button className="bg-secondary-500 w-[170px] lg:w-[100px]  hover:shadow-sm rounded-md px-7 py-2 my-2 text-white-100 hover:shadow-black-500 ">Submit</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SellerDetails
