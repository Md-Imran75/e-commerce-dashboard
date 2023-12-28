import { FaEdit } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import { BsImage } from 'react-icons/bs'
import { PropagateLoader } from 'react-spinners'
import { FadeLoader } from 'react-spinners'
import { useSelector, useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
import { overrideStyleForButtonLoader } from '../../utils/utils'
import { profile_image_upload, messageClear, profile_info_add } from '../../store/reducers/authReducers'
import Button from '../components/Button'

const Profile = () => {

    const [state, setState] = useState({
        division: '',
        district: '',
        phone: '',
        thana: ''
    })



    const dispatch = useDispatch()
    const { userInfo, loader, successMessage } = useSelector(state => state.auth)
    

    const add_image = (e) => {
        console.log(e.target.files[0])
        if (e.target.files.length > 0) {
            const formData = new FormData()
            formData.append('image', e.target.files[0])
            dispatch(profile_image_upload(formData))
        }
    }
    useEffect(() => {
        if (successMessage) {
            toast.success(successMessage)
            messageClear()
        }
    }, [successMessage])


    const add = (e) => {
        e.preventDefault()
        dispatch(profile_info_add(state))
    }

    const inputHandle = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }


    return (
        <div className="px-2 lg:ml-[260px] md:px-7 py-5">
            <div className='w-full flex flex-wrap'>
                <div className='w-full md:w-6/12'>
                    <div className='w-full p-4 rounded-md text-black-500'>
                        <div className='flex justify-center items-center py-3'>
                            {
                                userInfo?.image ?
                                    <label htmlFor='img' className='h-[400px] w-[400px] relative p-3 cursor-pointer overflow-hidden '>
                                        <img className='w-full h-full' src={userInfo.image} alt="Profile Image" />
                                        {
                                            loader &&
                                            <div className='left-0 w-full bg-secondary-500 top-0 h-full z-20 absolute justify-center items-center flex'>
                                                <FadeLoader />
                                            </div>
                                        }
                                    </label> : <label className='flex justify-center items-center flex-col h-[210px] w-[300px] cursor-pointer border border-dashed hover:border-secondary-500 border-primary-500 relative' htmlFor="img">
                                        <span><BsImage /></span>
                                        <span>Add Profile Picture</span>
                                        {
                                            loader &&
                                            <div className='left-0 w-full bg-secondary-500 top-0 h-full z-20 absolute justify-center items-center flex'>
                                                <FadeLoader />
                                            </div>
                                        }
                                    </label>
                            }

                            <input onChange={add_image} type="file" className='hidden' id='img' />

                        </div>

                        <div className='px-0 md:px-5 py-2'>
                            <div className='flex justify-between text-sm flex-col gap-2 p-4 bg-primary-200 rounded-md relative'>
                                <span className='p-[6px] bg-secondary-500 rounded right-2 text-white-100 top-2 absolute cursor-pointer '> <FaEdit /></span>

                                <div className='flex gap-2'>
                                    <span>Name:  </span>
                                    <span>{userInfo?.name}</span>
                                </div>
                                <div className='flex gap-2'>
                                    <span>Email: </span>
                                    <span>{userInfo?.email}</span>
                                </div>
                                <div className='flex gap-2'>
                                    <span>Role: </span>
                                    <span>{userInfo?.role}</span>
                                </div>
                                <div className='flex gap-2'>
                                    <span>Status: </span>
                                    <span>{userInfo?.status}</span>
                                </div>


                            </div>
                        </div>


                        <div className='px-0 md:px-5 py-2'>
                            {
                                !userInfo?.shopInfo ?

                                    <form onSubmit={add}>


                                        <div className="flex flex-col w-full gap-1">
                                            <label htmlFor="division">Division</label>
                                            <input value={state.division} onChange={inputHandle} className="px-4 py-2 focus:border-primary-500 focus:border outline-none text-black-500 rounded-md bg-primary-100" name="division" placeholder="e.g. Dhaka" type="text" required />
                                        </div>

                                        <div className="flex flex-col w-full gap-1">
                                            <label htmlFor="district">District</label>
                                            <input value={state.district} onChange={inputHandle} className="px-4 py-2 focus:border-primary-500 focus:border outline-none text-black-500 rounded-md bg-primary-100" name="district" placeholder="e.g. Dhaka" type="text" required />
                                        </div>

                                        <div className="flex flex-col w-full gap-1">
                                            <label htmlFor="phone">Phone</label>
                                            <input value={state.phone} onChange={inputHandle} className="px-4 py-2 focus:border-primary-500 focus:border outline-none text-black-500 rounded-md bg-primary-100" name="phone" placeholder="e.g. 01*********" type="number" min={0} required />
                                        </div>

                                        <div className="flex mb-3 flex-col w-full gap-1">
                                            <label htmlFor="thana">Thana</label>
                                            <input onChange={inputHandle} value={state.thana} className="px-4 py-2 focus:border-primary-500 focus:border outline-none text-black-500 rounded-md bg-primary-100" name="thana" placeholder="e.g. Kafrul" type="text" required />
                                        </div>

                                        <Button disabled={loader ? true : false}  >
                                            {
                                                loader ? <PropagateLoader color='#fff' cssOverride={overrideStyleForButtonLoader} /> : 'Update Info'
                                            }

                                        </Button>

                                    </form>

                                    :

                                    <div className='flex justify-between text-sm flex-col gap-2 p-4 bg-primary-200 rounded-md relative'>
                                        <span className='p-[6px] bg-secondary-500 rounded right-2 text-white-100 top-2 absolute cursor-pointer '> <FaEdit /></span>

                                        <div className='flex gap-2'>
                                            <span>Division: </span>
                                            <span>{userInfo?.shopInfo?.division}</span>
                                        </div>
                                        <div className='flex gap-2'>
                                            <span>District: </span>
                                            <span>{userInfo?.shopInfo?.district}</span>
                                        </div>
                                        <div className='flex gap-2'>
                                            <span>Phone: </span>
                                            <span>{userInfo?.shopInfo?.phone}</span>
                                        </div>
                                        <div className='flex gap-2'>
                                            <span>Thana: </span>
                                            <span>{userInfo?.shopInfo?.thana}</span>
                                        </div>


                                    </div>


                            }
                        </div>

                    </div>
                </div>

                <div className='w-full md:w-6/12'>
                    <div className='w-full pl-0 md:pl-7 mt-6 md:mt-0 bg-primary-200 rounded-md text-black-500'>
                        <div className='py-5 px-2'>
                            <h2 className='text-lg mb-2 font-bold text-black-500'>Change Password</h2>
                            <form >
                                <div className="flex flex-col w-full gap-1">
                                    <label htmlFor="email">email</label>
                                    <input className="px-4 py-2 focus:border-primary-500 focus:border outline-none text-black-500 rounded-md bg-primary-100" name="email" placeholder="enter your email" type="text" />
                                </div>

                                <div className="flex flex-col w-full gap-1">
                                    <label htmlFor="o_password">Old Password</label>
                                    <input className="px-4 py-2 focus:border-primary-500 focus:border outline-none text-black-500 rounded-md bg-primary-100" name="o_password" placeholder="enter your old password" type="password" />
                                </div>

                                <div className="flex flex-col w-full gap-1">
                                    <label htmlFor="n_password">New Password</label>
                                    <input className="px-4 py-2 focus:border-primary-500 focus:border outline-none text-black-500 rounded-md bg-primary-100" name="n_password" placeholder="enter your new password" type="password" />
                                </div>

                                <button className="bg-secondary-500  hover:shadow-sm rounded-md px-7 py-2 my-2 text-white-100 mt-5 hover:shadow-black-500 ">Submit</button>

                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Profile
