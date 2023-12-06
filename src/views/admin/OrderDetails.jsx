import React from 'react'

const OrderDetails = () => {
  return (
    <div className='px-2 lg:ml-[260px] md:px-7 pt-5'>
      <div className='w-full p-4 bg-background-100 rounded-md'>
        <div className='flex justify-between items-center p-4'>
           <h2 className='text-xl text-black-500'>Order Details</h2>
           <select className='px-4 py-2 focus:border-primary-500 outline-none border border-primary-500 rounded-md text-black-500' name="" id="">
            <option value="">Pending</option>
            <option value="">Proccessing</option>
            <option value="">Placed</option>
            <option value="">Canceled</option> 
           </select>
        </div>
         
         <div className='p-4'>
            <div className='flex gap-2 text-lg text-black-500'>
                  <h2>Id: 44422</h2>
                  <span>2 june 2034</span>
            </div>
            <div className='flex flex-wrap'>
                <div className='w-[32%]'>
                  <div className='pr-3 text-black-500 text-lg'>
                     <div className='flex flex-col gap-1'>
                         <h2 className='pb-2 font-semibold'>Deliver to : Bike Haat</h2>
                         <p><span className='text-sm'>Rangpur , Kurigram , Dhaka 1216</span></p>
                     </div>
                     
                     <div className='flex justify-start items-center gap-3'>
                        <h2>Payment status :</h2>
                        <span className='text-base'>Paid</span>
                     </div>
                       <span>Price: $7687</span>
                       <div className='mt-4 flex flex-col gap-4'>
                         <div className='text-black-500'>
                            <div className='flex gap-3 text-md'>
                            <img className="w-[45px] h-[45px] " src="http://localhost:3000/images/logo.png" alt="" />
                            <div>
                                <h2>Best Bike in bd now</h2>
                                <p><span>Brand: Suzuki</span></p>

                            </div>
                            </div>
                         </div>
                       </div>
                  </div>
                </div>
                
                <div className='w-[68%]'>
                  <div className='pl-3'>
                    <div className='mt-4 flex flex-col'>
                        <div className='text-black-500'>
                            <div className='flex justify-start items-center gap-3'>
                               <h2>Seller 1 order: </h2>
                               <span>Pending</span>
                            </div>
                            <div>
                            <div className='flex gap-3 text-md'>
                            <img className="w-[45px] h-[45px] " src="http://localhost:3000/images/logo.png" alt="" />
                            <div>
                                <h2>Best Bike in bd now</h2>
                                <p><span>Brand: Suzuki</span></p>
                            </div>
                            </div>
                           </div>
                           
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
