import React from 'react'

const SellerDetails = () => {
    return (
        <div>
            <div className="px-2 lg:ml-[260px] md:px-7 py-5">
                <div className='w-full p-4 bg-background-100 rounded-md'>
                     <div className='w-full gap-2 flex md:flex-row flex-col flex-wrap text-black-500'>

                        <div className='md:w-3/12 justify-center items-center py-3'>
                           <div>
                            <img className='md:w-[300px] h-[230px]' src="http://localhost:3000/images/logo.png" alt="" />
                           </div>
                        </div>
                        

                        <div className='md:w-4/12 bg-primary-100 shadow-sm'>
                           <div className='px-0 md:px-5 py-2'>
                              <div className='py-2 text-lg'>
                               <h2 className='px-4'>Basic Info</h2>
                              </div>
                              <div className='flex justify-between gap-2 p-4 rounded-md flex-col text-sm'>


                                <div className='flex gap-2'>
                                    <span>Name:</span>
                                </div>
                                <div className='flex gap-2'>
                                    <span>Email:</span>
                                </div>
                                <div className='flex gap-2'>
                                    <span>Phone:</span>
                                </div>
                                <div className='flex gap-2'>
                                    <span>Id Card:</span>
                                </div>
                                <div className='flex gap-2'>
                                    <span>Role:</span>
                                    <span>Seller</span>
                                </div>
                                <div className='flex gap-2'>
                                    <span>Status:</span>
                                    <span>Active</span>
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
                                    <span>Division: Dhaka</span>
                                </div>
                                <div className='flex gap-2'>
                                    <span>District: Dhaka</span>
                                </div>
                                <div className='flex gap-2'>
                                    <span>Sub-District: Mirpur</span>
                                </div>
                               
                        

                              </div>
                           </div>
                        </div>


                     </div> 

                  <div>
                    <form >
                        <div className='flex md:flex-row flex-col gap-4 py-3 '>
                            <select className='px-4 py-2 hover:border hover:border-primary-500 outline-none rounded-md text-black-500 bg-primary-100' name="" id="">
                                <option value="">select status</option>
                                <option value="">Active</option>
                                <option value="">Deactive</option>

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
