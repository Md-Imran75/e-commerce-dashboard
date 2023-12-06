import { useState } from "react"
import { FaEdit, FaTrash } from "react-icons/fa"
import { Link } from "react-router-dom"
import Pagination from "../Pagination"
import { BsImage } from "react-icons/bs"
import { GrClose } from 'react-icons/gr'

const Model = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [SearchValue, setSearchValue] = useState('')
    const [perPage, setPerPage] = useState(10)
    const [show, setShow] = useState(false)


    return (
        <div className='px-2 lg:ml-[260px] md:px-7 pt-5'>
            <div className="flex lg:hidden justify-between items-center mb-5 p-4 bg-primary-100 rounded-md">
                <h1 className="font-semibold text-lg ">Models</h1>

                <button onClick={() => setShow(true)} className="bg-secondary-500 shadow-sm px-4 py-2 cursor-pointer text-white-100 rounded-sm text-sm">Add</button>
            </div>
            <div className='flex flex-wrap w-full'>
                <div className='w-full lg:w-7/12'>
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
                                <thead className='text-sm text-black-500 uppercase border-b border-b-primary-500'>
                                    <tr>
                                        <th scope='col' className='py-2 px-4'>No:</th>
                                        <th scope='col' className='py-2 px-4'>Images</th>
                                        <th scope='col' className='py-2 px-4'>Name</th>
                                        <th scope='col' className='py-2 px-4'>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        [1, 2, 3, 4, 5].map((d, i) =>

                                            <tr key={i}>
                                                <td scope='row' className='py-3 font-medium whitespace-nowrap px-4'>{d}</td>
                                                <td scope='row' className='py-3 font-medium whitespace-nowrap px-4'>
                                                    <img className="w-[45px] h-[45px] " src="http://localhost:3000/images/logo.png" alt="" />
                                                </td>
                                                <td scope='row' className='py-3 font-medium whitespace-nowrap px-4'>
                                                    <span>Suzuki</span>
                                                </td>
                                                <td scope='row' className='py-3 font-medium whitespace-nowrap px-4'>
                                                    <div className="flex justify-start start items-center gap-4">
                                                        <Link className="text-white-100 p-[6px] bg-secondary-500 rounded-sm hover:shadow-md hover:shadow-black-500 "> <FaEdit /> </Link>

                                                        <Link className="text-white-100 p-[6px] bg-secondary-500 rounded-sm hover:shadow-md hover:shadow-black-500 "> <FaTrash /> </Link>
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


                <div className={`w-[320px] translate-x-100 lg:relative lg:right-0 fixed ${show ? 'right-0' : '-right-[340px]'} lg:w-5/12 z-[9999] transition-all top-0 duration-200`}>
                    <div className="w-full pl-5">
                        <div className=" p-4 bg-white-100 shadow-sm shadow-black-100 h-screen lg:h-auto px-3 py-2 lg:rounded-md text-black-500">
                            <div className="flex justify-between items-center">
                                <h1 className="text-black-500 font-semibold text-xl mb-4 ">Add New Model</h1>
                                <div onClick={() => setShow(false)} className="block mb-3 lg:hidden">
                                    <GrClose className="cursor-pointer" />
                                </div>

                            </div>
                            <form >
                                <div className="flex flex-col w-full fap-1 mb-3">
                                    <label htmlFor="name">Model Name</label>
                                    <input name="model_name" id="name" className="px-4 py-2 mt-2 focus:border focus:border-primary-500 outline-none rounded-md text-black-500 bg-primary-100" type="text" placeholder="Model name" />
                                </div>
                                <div>
                                    <label className="flex justify-center items-center flex-col h-[238px] cursor-pointer border border-dashed hover:border-primary-500 w-full border-black-500 " htmlFor="image">
                                        <span><BsImage /></span>
                                        <span>Select Image</span>
                                    </label>
                                    <input className="hidden" type="file" name="image" id="image" />
                                </div>
                                <div>
                                    <button className="bg-secondary-500 w-full hover:shadow-sm rounded-md px-7 py-2 my-2 text-white-100 hover:shadow-black-500 ">Add Model</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Model
