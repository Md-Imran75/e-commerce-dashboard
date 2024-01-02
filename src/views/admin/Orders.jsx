import { useState , useEffect } from "react"
import { BsArrowBarDown } from "react-icons/bs"
import { Link } from "react-router-dom"
import Pagination from "../Pagination"
import { useSelector, useDispatch } from 'react-redux'
import { get_admin_orders } from '../../store/reducers/OrderReducer'
import Search from "../components/Search"

const Orders = () => {
  const dispatch = useDispatch()
  const { totalOrder, myOrders } = useSelector(state => state.order)
  const [currentPage, setCurrentPage] = useState(1)
  const [searchValue, setSearchValue] = useState('')
  const [perPage, setPerPage] = useState(10)
  const [show, setShow] = useState('')

  useEffect(() => {
      dispatch(get_admin_orders({
          perPage: parseInt(perPage),
          page: parseInt(currentPage),
          searchValue
      }))
  }, [perPage,currentPage,searchValue])

  return (
    <div className='px-2   lg:px-7 pt-5 lg:ml-[260px]'>
      <div className="w-full overflow-x-auto p-4 bg-primary-200 rounded-md">
        
        <Search setPerPage={setPerPage} setSearchValue={setSearchValue} searchValue={searchValue} />

        <div className='relative mt-5 overflow-x-auto'>
                    <div className='w-full text-sm text-left text-black-500'>
                        <div className='text-sm text-black-500 uppercase border-b border-black-500'>
                            <div className='flex justify-between items-start'>
                                <div className='py-3 w-[25%]'>Order Id</div>
                                <div className='py-3 w-[13%]'>Price</div>
                                <div className='py-3 w-[18%]'>Payment Status</div>
                                <div className='py-3 w-[18%]'>Order Status</div>
                                <div className='py-3 w-[18%]'>Action</div>
                                <div className='py-3 w-[8%]'>
                                    <BsArrowBarDown />
                                </div>
                            </div>
                        </div>

             {
                            myOrders?.map((o) => <div key={o._id} className=' text-black-500'>
                                <div className='flex justify-between items-start border-b border-black-500'>
                                    <div className='py-4 w-[25%] font-medium '>{o._id}</div>
                                    <div className='py-4 w-[13%]'>${o.price}</div>
                                    <div className='py-4 w-[18%]'>{o.payment_status}</div>
                                    <div className='py-4 w-[18%]'>{o.delivery_status}</div>
                                    <div className='py-4 w-[18%]'>
                                        <Link to={`/admin/dashboard/order/details/${o._id}`}>view</Link>
                                    </div>
                                    <div onClick={(e) => setShow(o._id)} className='py-4 cursor-pointer w-[8%]'>
                                        <BsArrowBarDown />
                                    </div>
                                </div>
                                <div className={show === o._id ? 'block border-b border-black-500 bg-primary-100' : 'hidden'}>
                                    {
                                        o.suborder?.map((so) => <div key={so._id} className='flex justify-start items-start border-b border-black-500'>
                                            <div className='py-4 w-[25%] font-medium whitespace-nowrap pl-3'>${so._id}</div>
                                            <div className='py-4 w-[13%]'>${so.price}</div>
                                            <div className='py-4 w-[18%]'>{so.payment_status}</div>
                                            <div className='py-4 w-[18%]'>{so.delivery_status}</div>
                                        </div>)
                                    }
                                </div>
                            </div>)
                        }
          </div>
        </div>
          
         <div className="w-full flex justify-end mt-4 bottom-4 right-4">
         <Pagination
          pageNumber={currentPage}
          setPageNumber={setCurrentPage}
          totalItem={totalOrder}
          perPage={perPage}
          showItem={3}
          />
         </div>

      </div>
    </div>
  )
}

export default Orders
