import {FixedSizeList as List} from 'react-window'
import { forwardRef } from 'react'

function handleOnWheel({deltaY}) {
 console.log('handleoOnWheel' , deltaY)
}

const outerElementType = forwardRef((props , ref) => (
    <div ref={ref} onWheel={handleOnWheel} {...props} />
))


const PaymentRequest = () => {

    
   
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
             <div className='w-[25%] p-2 whitespace-nowrap'>
                <button className='bg-secondary-400 px-2 py-1 text-white-100  shadow-sm hover:shadow-black-500 cursor-pointer text-white rounded-sm text-sm'>Confirm</button>
             </div>
           </div>
        )
    }

  return (
    <div className="px-2 lg:ml-[260px] md:px-7 py-5">
      <div className='w-full p-4 bg-primary-200 rounded-md'>
        <h2 className='text-xl font-medium pb-5'>Withdrawal Request</h2>
        <div className='w-full'>
         
          <div className='w-full overflow-x-auto'>


             <div className='flex text-white-100 bg-secondary-400 uppercase text-xs min-w-[340px] '>
                <div className='w-[25%] p-2'>No:</div>
                <div className='w-[25%] p-2'>Amount</div>
                <div className='w-[25%] p-2'>Status</div>
                <div className='w-[25%] p-2'>Date</div>
                <div className='w-[25%] p-2'>Action</div>
             </div>

            
            {
               <List 
               style={{minWidth:'340px' , overflowX:'hidden'}}
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
  )
}

export default PaymentRequest
