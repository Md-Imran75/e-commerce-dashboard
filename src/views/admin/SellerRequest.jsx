import { useState, useEffect } from "react"
import Pagination from "../Pagination"
import { FaEye } from "react-icons/fa"
import { Link } from "react-router-dom"
import { get_seller_request } from '../../store/reducers/sellerReducer'
import Search from '../components/Search'
import { useSelector, useDispatch } from 'react-redux'


const SellerRequest = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [searchValue, setSearchValue] = useState('')
    const [perPage, setPerPage] = useState(10)
    const dispatch = useDispatch()
    const { sellers, totalSeller } = useSelector(state => state.seller)
    useEffect(() => {
        dispatch(get_seller_request({
            perPage,
            searchValue,
            page: currentPage
        }))
    }, [perPage, searchValue, currentPage])

    return (
        <div className="px-2 lg:ml-[260px] md:px-7 py-5">
            <div className='w-full p-4 rounded-md bg-background-100 shadow-sm shadow-black-100'>
                <Search setPerPage={setPerPage} setSearchValue={setSearchValue} searchValue={searchValue} />


                <div className='relative overflow-x-auto'>
                    <table className='w-full text-sm text-left text-black-500'>
                        <thead className='text-xs text-black-500 uppercase border-b border-b-primary-500'>
                            <tr>
                                <th scope='col' className='py-2 px-4'>No:</th>
                                <th scope='col' className='py-2 px-4'>Images</th>
                                <th scope='col' className='py-2 px-4'>Name</th>
                                <th scope='col' className='py-2 px-4'>Email</th>
                                <th scope='col' className='py-2 px-4'>Phone</th>
                                <th scope='col' className='py-2 px-4'>Status</th>
                                <th scope='col' className='py-2 px-4'>Action</th>

                            </tr>
                        </thead>
                        <tbody className="text-sm font-normal">
                            {
                                sellers?.map((d, i) =>

                                    <tr key={i}>
                                        <td scope='row' className='py-3 font-medium whitespace-nowrap px-4'>{i + 1}</td>
                                        <td scope='row' className='py-3 font-medium whitespace-nowrap px-4'>
                                            <img className="w-[45px] h-[45px] " src={d.image} alt="" />
                                        </td>
                                        <td scope='row' className='py-3 font-medium whitespace-nowrap px-4'>
                                            <span>{d.name}</span>
                                        </td>
                                        <td scope='row' className='py-3 font-medium whitespace-nowrap px-4'>
                                            {d.email}
                                        </td>

                                        <td scope='row' className='py-3 font-medium whitespace-nowrap px-4'>
                                            {`0${d.phone}`}
                                        </td>
                                        <td scope='row' className='py-3 font-medium whitespace-nowrap px-4'>
                                            <span>{d.status}</span>
                                        </td>


                                        <td scope='row' className='py-3 font-medium whitespace-nowrap px-4'>
                                            <div className="flex justify-start items-center gap-4">
                                                <Link to={`/admin/dashboard/seller/details/${d._id}`}><FaEye /></Link>
                                            </div>
                                        </td>
                                    </tr>

                                )
                            }
                        </tbody>
                    </table>
                </div>


                {
                    totalSeller <= perPage ? "" : <div className='w-full flex justify-end mt-4 bottom-4 right-4'>
                        <Pagination
                            pageNumber={currentPage}
                            setPageNumber={setCurrentPage}
                            totalItem={totalSeller}
                            perPage={perPage}
                            showItem={3}
                        />
                    </div>
                }

            </div>
        </div>
    )
}

export default SellerRequest
