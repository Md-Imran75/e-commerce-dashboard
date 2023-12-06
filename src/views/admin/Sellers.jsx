import { useState } from "react"
import Pagination from "../Pagination"
import { FaEye } from "react-icons/fa"
import { Link } from "react-router-dom"
const Sellers = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [SearchValue, setSearchValue] = useState('')
    const [perPage, setPerPage] = useState(10)
    const [show, setShow] = useState(false)

  return (
    <div className="px-2 lg:ml-[260px] md:px-7 py-5">
      <div className='w-full p-4 rounded-md bg-background-100 shadow-sm shadow-black-100'>
      <div className="flex justify-between items-center">
                            <select onChange={(e) => setPerPage(parseInt(e.target.value))} className="px-4 py-2 hover:border hover:border-primary-500 outline-none rounded-md text-black-500 bg-primary-100">
                                <option value="5">10</option>
                                <option value="5">15</option>
                                <option value="5">25</option>
                            </select>
                            <input className="px-4 py-2 focus:border focus:border-primary-500 outline-none rounded-md text-black-500 bg-primary-100" type="text" placeholder="search..." />
                        </div>

                        <div className='relative overflow-x-auto'>
                            <table className='w-full text-sm text-left text-black-500'>
                                <thead className='text-xs text-black-500 uppercase border-b border-b-primary-500'>
                                    <tr>
                                        <th scope='col' className='py-2 px-4'>No:</th>
                                        <th scope='col' className='py-2 px-4'>Images</th>
                                        <th scope='col' className='py-2 px-4'>Name</th>
                                        <th scope='col' className='py-2 px-4'>Email</th>
                                        <th scope='col' className='py-2 px-4'>Id Card</th>
                                        <th scope='col' className='py-2 px-4'>Phone</th>
                                        <th scope='col' className='py-2 px-4'>Division</th>
                                        <th scope='col' className='py-2 px-4'>District</th>
                                        <th scope='col' className='py-2 px-4'>Action</th>

                                    </tr>
                                </thead>
                                <tbody className="text-sm font-normal">
                                    {
                                        [1, 2, 3, 4, 5].map((d, i) =>

                                            <tr key={i}>
                                                <td scope='row' className='py-3 font-medium whitespace-nowrap px-4'>{d}</td>
                                                <td scope='row' className='py-3 font-medium whitespace-nowrap px-4'>
                                                    <img className="w-[45px] h-[45px] " src="http://localhost:3000/images/logo.png" alt="" />
                                                </td>
                                                <td scope='row' className='py-3 font-medium whitespace-nowrap px-4'>
                                                    <span>Md Imran Khan</span>
                                                </td>
                                                <td scope='row' className='py-3 font-medium whitespace-nowrap px-4'>
                                                  imran@gmail.com
                                                </td>
                                                <td scope='row' className='py-3 font-medium whitespace-nowrap px-4'>
                                                <img className="w-[45px] h-[45px] " src="http://localhost:3000/images/logo.png" alt="" />
                                                </td>
                                                <td scope='row' className='py-3 font-medium whitespace-nowrap px-4'>
                                                       01933650706
                                                </td>
                                                <td scope='row' className='py-3 font-medium whitespace-nowrap px-4'>
                                                       Dhaka
                                                </td>
                                                <td scope='row' className='py-3 font-medium whitespace-nowrap px-4'>
                                                       Dhaka
                                                </td>
                                                <td scope='row' className='py-3 font-medium whitespace-nowrap px-4'>
                                                       <div className="flex justify-start items-center gap-4">
                                                        <Link to={'/admin/dashboard/seller/details/1'}><FaEye/></Link>
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
                                totalItem={50}
                                perPage={perPage}
                                showItem={3}
                            />
                        </div>

      </div>
    </div>
  )
}

export default Sellers
