import { useState } from 'react'
import Search from '../components/Search'
import { FaEdit, FaEye, FaTrash } from "react-icons/fa"
import { Link } from "react-router-dom"
import Pagination from "../Pagination"

const Orders = () => {

    const [currentPage, setCurrentPage] = useState(1)
    const [SearchValue, setSearchValue] = useState('')
    const [perPage, setPerPage] = useState(10)

    return (
        <div className="px-2 lg:ml-[260px] md:px-7 py-5">
            <div className='w-full p-4 bg-background-100 rounded-md'>

                <Search setSearchValue={setSearchValue} SearchValue={SearchValue} setPerPage={setPerPage} />


                <div className='relative overflow-x-auto'>
                    <table className='w-full text-sm text-left text-black-500'>
                        <thead className='text-sm text-black-500 uppercase border-b border-b-primary-500'>
                            <tr>
                                <th scope='col' className='py-3 px-4'>Order Id</th>
                                <th scope='col' className='py-3 px-4'>Price</th>
                                <th scope='col' className='py-3 px-4'>Payment Status</th>
                                <th scope='col' className='py-3 px-4'>Order Status</th>
                                <th scope='col' className='py-3 px-4'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                [1, 2, 3, 4, 5].map((d, i) =>

                                    <tr key={i}>
                                        <td scope='row' className='py-3 font-medium whitespace-nowrap px-4'>#54545d54</td>
                                        <td scope='row' className='py-3 font-medium whitespace-nowrap px-4'>$565</td>
                                        <td scope='row' className='py-3 font-medium whitespace-nowrap px-4'>
                                            <span>pending</span>
                                        </td>
                                        <td scope='row' className='py-3 font-medium whitespace-nowrap px-4'><span>pending</span></td>
                                        <td scope='row' className='py-3 font-medium whitespace-nowrap px-4'>
                                            <Link>View</Link>
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
