import Search from '../Search'
import Button from '../Button'
import { overrideStyleForButtonLoader } from '../../../utils/utils'
import { PropagateLoader } from 'react-spinners'
import Pagination from "../../../views/Pagination"
import { BsImage } from "react-icons/bs"
import { GrClose } from 'react-icons/gr'
import { FaEdit, FaTrash } from "react-icons/fa"
import { Link } from "react-router-dom"



const BrandAndModel = ({name , names , setPerPage, perPage ,setSearchValue, currentPage, setCurrentPage, show , setShow , submit , data , imageShow , imageHandle , loader , state , setState}) => {
  return (
    <div className='px-2 lg:ml-[260px] md:px-7 pt-5'>
            <div className="flex lg:hidden justify-between items-center mb-5 p-4 bg-primary-100 rounded-md">
                <h1 className="font-semibold text-lg ">{names}</h1>

                <button onClick={() => setShow(true)} className="bg-secondary-500 shadow-sm px-4 py-2 cursor-pointer text-white-100 rounded-sm text-sm">Add</button>
            </div>
            <div className='flex flex-wrap w-full'>
                <div className='w-full lg:w-7/12'>
                    <div className='w-full p-4 rounded-md bg-background-100 shadow-sm shadow-black-100'>
                        
                            <Search setPerPage={setPerPage} setSearchValue={setSearchValue} />


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
                                        data?.map((d, i) =>

                                            <tr key={i}>
                                                <td scope='row' className='py-3 font-medium whitespace-nowrap px-4'>{i + 1}</td>
                                                <td scope='row' className='py-3 font-medium whitespace-nowrap px-4'>
                                                    <img className="w-[45px] h-[45px] " src={d.image} alt={d.name} />
                                                </td>
                                                <td scope='row' className='py-3 font-medium whitespace-nowrap px-4'>
                                                    <span>{d.name}</span>
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
                            <form onSubmit={submit} >
                                <div className="flex flex-col w-full fap-1 mb-3">
                                    <label htmlFor="name">{name} Name</label>
                                    <input value={state.name} onChange={(e) => setState({ ...state, name: e.target.value })} name="name" id="name" className="px-4 py-2 mt-2 focus:border focus:border-primary-500 outline-none rounded-md text-black-500 bg-primary-100" type="text" placeholder={`${name} name`} />
                                </div>
                                <div>
                                    <label className="flex justify-center items-center flex-col h-[238px] cursor-pointer border border-dashed hover:border-primary-500 w-full border-black-500 " htmlFor="image">
                                        {
                                            imageShow ? <img className='w-full h-full' src={imageShow} /> : <>
                                                <span><BsImage /></span>
                                                <span>select Image</span>
                                            </>
                                        }
                                    </label>
                                    <input onChange={imageHandle} className="hidden" type="file" name="image" id="image" />
                                </div>
                                <div className='mt-4'>
                                    
                                    <Button disabled={loader ? true : false}  >
                                        {
                                            loader ? <PropagateLoader color='#fff' cssOverride={overrideStyleForButtonLoader} /> : 'Add Model'
                                        }

                                    </Button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
  )
}

export default BrandAndModel
