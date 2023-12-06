import { useState } from "react"
import { BsArrowBarDown } from "react-icons/bs"
import { Link } from "react-router-dom"
import Pagination from "../Pagination"

const Orders = () => {
    const [currentPage , setCurrentPage] = useState(1)
    const [SearchValue , setSearchValue] = useState('')
    const [perPage , setPerPage] = useState(10)
    const [show , setShow] = useState(false)

  return (
    <div className='px-2  lg:px-7 pt-5 lg:ml-[260px]'>
      <div className="w-full  p-4 bg-primary-200 rounded-md">
        
        <div className="flex justify-between items-center">
            <select onChange={(e) => setPerPage(parseInt(e.target.value))} className="px-4 py-2 hover:border hover:border-primary-500 outline-none rounded-md text-black-500 bg-primary-100">
                <option value="5">10</option>
                <option value="5">15</option>
                <option value="5">25</option>
            </select>
            <input className="px-4 py-2 focus:border focus:border-primary-500 outline-none rounded-md text-black-500 bg-primary-100" type="text" placeholder="search..." />
        </div>

        <div className="relative mt-5 overflow-x-auto">
          
          <div className="w-full text-sm text-left text-black-500">
             <div className="text-sm  uppercase border-b border-b-primary-500">
               <div className="flex justify-between items-start">
                  <div className="py-3 w-[25%]">Order Id</div>
                  <div className="py-3 w-[17%]">Price</div>
                  <div className="py-3 w-[18%]">Payment Status</div>
                  <div className="py-3 w-[18%]">Order Status</div>
                  <div className="py-3 w-[14%]">Action</div>
                  <div className="py-3 w-[8%]">
                    <BsArrowBarDown/>
                  </div>
               </div>
             </div>

             <div> 
                <div className="flex border-b  border-b-primary-500 justify-between items-start">
                   <div className="py-4 font-medium whitespace-nowrap w-[25%]">554554545</div>
                   <div className="py-4 w-[17%]">$445454</div>
                   <div className="py-4 w-[18%]">pending</div>
                   <div className="py-4 w-[18%]">pending</div>
                   <div className="py-4 w-[14%]">
                    <Link to={'/admin/dashboard/order/details/1'}>
                    view
                    </Link>
                   </div>
                   <div onClick={() => setShow(!show)} className="py-4 cursor-pointer w-[8%]">
                    <BsArrowBarDown/>
                  </div>
                </div>
                
                <div className={show? 'block border-b border-primary-500 bg-primary-100' : 'hidden'}>
                   <div>
                   <div className="flex px-2 border-b border-b-primary-500 justify-start items-start">
                   <div className="py-4 font-medium whitespace-nowrap w-[25%]">554554545</div>
                   <div className="py-4 w-[13%]">$445454</div>
                   <div className="py-4 w-[18%]">pending</div>
                   <div className="py-4 w-[18%]">pending</div>
                </div>
                
                   </div>
                </div>
             </div>
          </div>
        </div>
          
         <div className="w-full flex justify-end mt-4 bottom-4 right-4">
         <Pagination
          pageNumber={currentPage}
          setPageNumber={setCurrentPage}
          totalItem={50}
          perPage={perPage}
          showItem={3}
          />
         </div>

      </div>
    </div>
  )
}

export default Orders
