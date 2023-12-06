import { FaEdit } from 'react-icons/fa'
import { BsImage } from 'react-icons/bs'
import { FadeLoader } from 'react-spinners'

const Profile = () => {
    const image = true
    const loader = false
    const userInfo = true

    return (
        <div className="px-2 lg:ml-[260px] md:px-7 py-5">
            <div className='w-full flex flex-wrap'>
                <div className='w-full md:w-6/12'>
                    <div className='w-full p-4 rounded-md text-black-500'>
                        <div className='flex justify-center items-center py-3'>
                            {
                                image ?
                                    <label className='h-[210px] w-[300px] relative p-3 cursor-pointer overflow-hidden '>
                                        <img className='w-full h-full' src="http://localhost:3000/images/logo.png" alt="" />
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

                            <input type="file" className='hidden' id='img' />

                        </div>

                        <div className='px-0 md:px-5 py-2'>
                            <div className='flex justify-between text-sm flex-col gap-2 p-4 bg-primary-200 rounded-md relative'>
                                <span className='p-[6px] bg-secondary-500 rounded right-2 text-white-100 top-2 absolute cursor-pointer '> <FaEdit /></span>

                                <div className='flex gap-2'>
                                    <span>Name: </span>
                                    <span>Bike Haat</span>
                                </div>
                                <div className='flex gap-2'>
                                    <span>Email: </span>
                                    <span>Bike Haat</span>
                                </div>
                                <div className='flex gap-2'>
                                    <span>Role: </span>
                                    <span>Bike Haat</span>
                                </div>
                                <div className='flex gap-2'>
                                    <span>Status: </span>
                                    <span>Active</span>
                                </div>


                            </div>
                        </div>


                        <div className='px-0 md:px-5 py-2'>
                            {
                                !userInfo ?

                                    <form>


                                        <div className="flex flex-col w-full gap-1">
                                            <label htmlFor="name">Division</label>
                                            <input className="px-4 py-2 focus:border-primary-500 focus:border outline-none text-black-500 rounded-md bg-primary-100" name="name" placeholder="e.g. New condition super bike" type="text" />
                                        </div>

                                        <div className="flex flex-col w-full gap-1">
                                            <label htmlFor="name">Dictrict</label>
                                            <input className="px-4 py-2 focus:border-primary-500 focus:border outline-none text-black-500 rounded-md bg-primary-100" name="name" placeholder="e.g. New condition super bike" type="text" />
                                        </div>

                                        <div className="flex mb-3 flex-col w-full gap-1">
                                            <label htmlFor="name">Thana</label>
                                            <input className="px-4 py-2 focus:border-primary-500 focus:border outline-none text-black-500 rounded-md bg-primary-100" name="name" placeholder="e.g. New condition super bike" type="text" />
                                        </div>

                                        <button className="bg-secondary-500  hover:shadow-sm rounded-md px-7 py-2 my-2 text-white-100 hover:shadow-black-500 ">Submit</button>

                                    </form>

                                    :

                                    <div className='flex justify-between text-sm flex-col gap-2 p-4 bg-primary-200 rounded-md relative'>
                                        <span className='p-[6px] bg-secondary-500 rounded right-2 text-white-100 top-2 absolute cursor-pointer '> <FaEdit /></span>

                                        <div className='flex gap-2'>
                                            <span>Division: </span>
                                            <span>Bike Haat</span>
                                        </div>
                                        <div className='flex gap-2'>
                                            <span>District: </span>
                                            <span>Bike Haat</span>
                                        </div>
                                        <div className='flex gap-2'>
                                            <span>Thana: </span>
                                            <span>Bike Haat</span>
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
