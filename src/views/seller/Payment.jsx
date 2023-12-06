import { BsCurrencyDollar } from 'react-icons/bs'
import {FixedSizeList as List} from 'react-window'
import { forwardRef } from 'react'

function handleOnWheel({deltaY}) {
    console.log('handleoOnWheel' , deltaY)
   }
   
   const outerElementType = forwardRef((props , ref) => (
       <div ref={ref} onWheel={handleOnWheel} {...props} />
   ))

const Payment = () => {

    const Row = ({index , style}) => {
        return(
           <div style={style} className='flex text-sm'>
             <div className='w-[25%] p-2 whitespace-nowrap'>
                {index + 1}
             </div>
             <div className='w-[25%] p-2 whitespace-nowrap'>
                $4542
             </div>
             <div className='w-[25%] p-2 whitespace-nowrap'>
                <span className='py-[1px] px-[5px] bg-primary-200 text-black-500 rounded-md text-xs'>Pending</span>
             </div>
             <div className='w-[25%] p-2 whitespace-nowrap'>
                10July 2023
             </div>
             
           </div>
        )
    }

    return (
        <div className="px-2 lg:ml-[260px] md:px-7 py-5">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7">

                {/* first item */}
                <div className="flex justify-between items-center p-5 bg-primary-200 rounded-md gap-3">
                    <div className="flex flex-col justify-start items-start text-black-500">
                        <h2 className="text-lg font-bold">$ 545454554</h2>
                        <span className="text-sm font-medium">Total Sales</span>
                    </div>
                    <div className='w-[46px] rounded-full  h-[47px] bg-primary-100 flex justify-center items-center text-lg'>
                        <BsCurrencyDollar className='text-secondary-500 shadow-lg' />
                    </div>
                </div>


                {/* second item */}
                <div className="flex justify-between items-center p-5 bg-primary-200 rounded-md gap-3">
                    <div className="flex flex-col justify-start items-start text-black-500">
                        <h2 className="text-lg font-bold">$20</h2>
                        <span className="text-sm font-medium">Available Amount</span>
                    </div>
                    <div className='w-[46px] rounded-full  h-[47px] bg-primary-100 flex justify-center items-center text-lg'>
                        <BsCurrencyDollar className='text-secondary-500 shadow-lg' />
                    </div>
                </div>


                {/* third item */}
                <div className="flex justify-between items-center p-5 bg-primary-200 rounded-md gap-3">
                    <div className="flex flex-col justify-start items-start text-black-500">
                        <h2 className="text-lg font-bold">$5454</h2>
                        <span className="text-sm font-medium">Withdrawal Amount</span>
                    </div>
                    <div className='w-[46px] rounded-full  h-[47px] bg-primary-100 flex justify-center items-center text-lg'>
                        <BsCurrencyDollar className='text-secondary-500 shadow-lg' />
                    </div>
                </div>


                {/* fourth item */}
                <div className="flex justify-between items-center p-5 bg-primary-200 rounded-md gap-3">
                    <div className="flex flex-col justify-start items-start text-black-500">
                        <h2 className="text-lg font-bold">$54</h2>
                        <span className="text-sm font-medium">Pending Amount</span>
                    </div>
                    <div className='w-[46px] rounded-full  h-[47px] bg-primary-100 flex justify-center items-center text-lg'>
                        <BsCurrencyDollar className='text-secondary-500 shadow-lg' />
                    </div>
                </div>
            </div>


            <div className='w-full mt-5 grid grid-cols-1 md:grid-cols-2 gap-3 pb-4 '>
                <div className='bg-primary-200 text-black-500 rounded-md p-2' >
                    <h2 className='text-lg'>Send Request</h2>
                    <div className='py-5'>
                        <form>
                            <div className='flex gap-3 flex-wrap'>
                                <input placeholder='0' className='px-4 py-2 hover:border hover:border-primary-500 outline-none rounded-md text-white-500 bg-primary-100' type="number" min={0} />
                                <button className="bg-primary-500 text-sm  hover:shadow-sm rounded-md px-5 py-2  text-black-500 font-semibold hover:shadow-black-500 ">Send</button>
                            </div>

                        </form>
                    </div>

                    <div className=''>
                        <h2 className='text-lg pb-4'>
                            Pending request
                        </h2>
                        <div>
                            <div className='w-full overflow-x-auto'>


                                <div className='flex text-white-100 bg-secondary-400 uppercase text-xs min-w-[340px] '>
                                    <div className='w-[25%] p-2'>No:</div>
                                    <div className='w-[25%] p-2'>Amount</div>
                                    <div className='w-[25%] p-2'>Status</div>
                                    <div className='w-[25%] p-2'>Date</div>
                                    
                                </div>


                                {
                                    <List
                                        style={{ minWidth: '340px', overflowX: 'hidden' }}
                                        className='List'
                                        height={350}
                                        itemCount={10}
                                        itemSize={35}
                                        outerElementType={outerElementType}
                                    >
                                        {Row}
                                    </List>
                                }

                            </div>

                        </div>
                    </div>

                </div>









                <div className='bg-primary-200 text-black-500 rounded-md p-2' >

                    <div className=''>
                        <h2 className='text-lg pb-4'>
                            Success Withdrawal
                        </h2>
                        <div>
                            <div className='w-full overflow-x-auto'>


                                <div className='flex text-white-100 bg-secondary-400 uppercase text-xs min-w-[340px] '>
                                    <div className='w-[25%] p-2'>No:</div>
                                    <div className='w-[25%] p-2'>Amount</div>
                                    <div className='w-[25%] p-2'>Status</div>
                                    <div className='w-[25%] p-2'>Date</div>
                                    
                                </div>


                                {
                                    <List
                                        style={{ minWidth: '340px', overflowX: 'hidden' }}
                                        className='List'
                                        height={350}
                                        itemCount={10}
                                        itemSize={35}
                                        outerElementType={outerElementType}
                                    >
                                        {Row}
                                    </List>
                                }

                            </div>

                        </div>
                    </div>

                </div>




            </div>
        </div>
    )
}

export default Payment
