import { useState, useEffect } from "react"
import Pagination from "../Pagination"
import { FaEye } from "react-icons/fa"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { get_deactive_sellers } from '../../store/reducers/sellerReducer'

import Search from "../components/Search"
const DeactiveSellers = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [searchValue, setSearchValue] = useState('')
    const [perPage, setPerPage] = useState(10)

    const { sellers, totalSeller } = useSelector(state => state.seller)
    const dispatch = useDispatch()

    useEffect(() => {
        const obj = {
            perPage: parseInt(perPage),
            page: parseInt(currentPage),
            searchValue
        }
        dispatch(get_deactive_sellers(obj))
    }, [searchValue, currentPage, perPage])
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
                                sellers?.map((d) =>

                                    <tr key={d._id}>
                                        <td scope='row' className='py-3 font-medium whitespace-nowrap px-4'>{d._id}</td>
                                        <td scope='row' className='py-3 font-medium whitespace-nowrap px-4'>
                                            <img className="w-[45px] h-[45px] " src={d?.image} alt="image" />
                                        </td>
                                        <td scope='row' className='py-3 font-medium whitespace-nowrap px-4'>
                                            <span>{d.name}</span>
                                        </td>
                                        <td scope='row' className='py-3 font-medium whitespace-nowrap px-4'>
                                            {d.email}
                                        </td>
                                        <td scope='row' className='py-3 font-medium whitespace-nowrap px-4'>
                                            0{d.phone}
                                        </td>
                                        <td scope='row' className='py-3 font-medium whitespace-nowrap px-4'>
                                            {d.status}
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


                <div className="w-full flex justify-end mt-4 bottom-4 right-4">
                    <Pagination
                        pageNumber={currentPage}
                        setPageNumber={setCurrentPage}
                        totalItem={totalSeller}
                        perPage={perPage}
                        showItem={3}
                    />
                </div>

            </div>
        </div>
    )
}

export default DeactiveSellers
