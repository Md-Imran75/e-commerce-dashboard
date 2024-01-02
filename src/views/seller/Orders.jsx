import { useState , useEffect } from 'react'
import Search from '../components/Search'
import { FaEdit, FaEye, FaTrash } from "react-icons/fa"
import { Link } from "react-router-dom"
import Pagination from "../Pagination"
import { useSelector, useDispatch } from 'react-redux'
import { get_seller_orders } from '../../store/reducers/OrderReducer'


const Orders = () => {

    const dispatch = useDispatch()
    const { totalOrder, myOrders } = useSelector(state => state.order)
    const { userInfo } = useSelector(state => state.auth)
    const [currentPage, setCurrentPage] = useState(1)
    const [searchValue, setSearchValue] = useState('')
    const [perPage, setPerPage] = useState(10)
    console.log(myOrders)

    useEffect(() => {
        dispatch(get_seller_orders({
            perPage: parseInt(perPage),
            page: parseInt(currentPage),
            searchValue,
            sellerId: userInfo._id
        }))
    }, [perPage, currentPage, searchValue])


    return (
        <div className="px-2 lg:ml-[260px] md:px-7 py-5">
            <div className='w-full p-4 bg-background-100 rounded-md'>

                <Search setSearchValue={setSearchValue} SearchValue={searchValue} setPerPage={setPerPage} />


                <div className='relative overflow-x-auto'>
                    <table className='w-full text-sm text-left text-black-500'>
                        <thead className='text-sm text-black-500 uppercase border-b border-b-primary-500'>
                            <tr>
                                <th scope='col' className='py-3 px-4'>Order Id</th>
                                <th scope='col' className='py-3 px-4'>Price</th>
                                <th scope='col' className='py-3 px-4'>Payment Status</th>
                                <th scope='col' className='py-3 px-4'>Order Status</th>
                                <th scope='col' className='py-3 px-4'>Date</th>
                                <th scope='col' className='py-3 px-4'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                                myOrders?.map((d) => <tr key={d._id}>
                                    <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>#{d?._id}</td>
                                    <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>BDT {d?.price}</td>
                                    <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>
                                        <span>{d?.payment_status}</span>
                                    </td>
                                    <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>
                                        <span>{d?.delivery_status}</span>
                                    </td>
                                    <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>{d?.date}</td>
                                    <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>
                                        <Link to={`/seller/dashboard/order/details/${d?._id}`} className='p-[6px] w-[30px] bg-secondary-400 rounded text-white-100 flex justify-center items-center'><FaEye /></Link>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
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
