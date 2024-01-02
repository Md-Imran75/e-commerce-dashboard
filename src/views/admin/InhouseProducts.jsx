import { useState, useEffect } from 'react'
import Search from '../components/Search'
import { FaEdit, FaEye, FaTrash } from "react-icons/fa"
import { Link } from "react-router-dom"
import Pagination from "../Pagination"
import { useDispatch, useSelector } from 'react-redux'
import { get_products, delete_product} from "../../store/reducers/productReducer"


const InhouseProduct = () => {
    const dispatch = useDispatch()
    const { products , totalProduct } = useSelector(state => state.product)
    const [currentPage, setCurrentPage] = useState(1)
    const [searchValue, setSearchValue] = useState('')
    const [perPage, setPerPage] = useState(10)


    const handleDeleteProduct = async (productId) => {
        try {
            await dispatch(delete_product(productId));
            // Fetch the updated product list immediately after deletion
            dispatch(get_products({ perPage, page: currentPage, searchValue }));
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    
    // useEffect for pagination
    useEffect(() => {
        const obj = {
            perPage: parseInt(perPage),
            page: parseInt(currentPage),
            searchValue
        }
        dispatch(get_products(obj))
    }, [searchValue, currentPage, perPage])

  return (
    <div className="px-2 lg:ml-[260px] md:px-7 py-5">
      <div className='w-full p-4 bg-background-100 rounded-md'>
          
            <Search setSearchValue={setSearchValue} SearchValue={searchValue} setPerPage={setPerPage}/>

            <div className='relative mt-10 overflow-x-auto'>
                            <table className='w-full text-sm text-left text-black-500'>
                                <thead className='text-sm text-black-500 uppercase border-b border-b-primary-500'>
                                    <tr>
                                        <th scope='col' className='py-2 px-4'>No:</th>
                                        <th scope='col' className='py-2 px-4'>Images</th>
                                        <th scope='col' className='py-2 px-4'>Model</th>
                                        <th scope='col' className='py-2 px-4'>Brand</th>
                                        <th scope='col' className='py-2 px-4'>Price</th>
                                        <th scope='col' className='py-2 px-4'>Status</th>


                                        <th scope='col' className='py-2 px-4'>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        products?.map((d, i) =>

                                            <tr key={i}>
                                                <td scope='row' className='py-3 font-medium whitespace-nowrap px-4'>{i + 1}</td>
                                                <td scope='row' className='py-3 font-medium whitespace-nowrap px-4'>
                                                    <img className="w-[45px] h-[45px] " src={d.productImages[0]} alt="" />
                                                </td>
                                                <td scope='row' className='py-3 font-medium whitespace-nowrap px-4'>
                                                    <span>{d.model}</span>
                                                </td>
                                                <td scope='row' className='py-3 font-medium whitespace-nowrap px-4'>
                                                    <span>{d.brand}</span>
                                                </td>
                                                <td scope='row' className='py-3 font-medium whitespace-nowrap px-4'>
                                                    <span>{d.price}</span>&#2547;
                                                </td>
                                                <td scope='row' className='py-3 font-medium whitespace-nowrap px-4'>
                                                    <span>{d.status}</span>
                                                </td>
                                                <td scope='row' className='py-3 font-medium whitespace-nowrap px-4'>
                                                    <div className="flex justify-start start items-center gap-4">
        
                                                        <Link to={`/admin/dashboard/edit-product/${d._id}`} className="text-white-100 p-[6px] bg-secondary-500 rounded-sm hover:shadow-md hover:shadow-black-500 "> <FaEdit /> </Link>



                                                        <button onClick={() => handleDeleteProduct(d._id)} className="text-white-100 p-[6px] bg-secondary-500 rounded-sm hover:shadow-md hover:shadow-black-500 "> <FaTrash /> </button>
                                                    </div>
                                                </td>
                                            </tr>

                                        )
                                    }
                                </tbody>
                            </table>
                        </div>


                       {
                        totalProduct <= perPage ? '' :  <div className="w-full flex justify-end mt-4 bottom-4 right-4">
                        <Pagination
                            pageNumber={currentPage}
                            setPageNumber={setCurrentPage}
                            totalItem={totalProduct}
                            perPage={perPage}
                            showItem={3}
                        />
                    </div>
                       }

                 
          
      </div>
    </div>
  )
}

export default InhouseProduct
