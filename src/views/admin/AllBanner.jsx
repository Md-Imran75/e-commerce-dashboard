
import Pagination from "../../views/Pagination"
import toast from 'react-hot-toast'
import { useSelector, useDispatch } from 'react-redux'
import { FaTrash } from "react-icons/fa"
import { useState , useEffect } from "react"
import { get_banner, delete_banner , messageClear } from "../../store/reducers/bannerReducer"



const AllBanner = () => {

  const dispatch = useDispatch()
  const { successMessage, banners, errorMessage, totalBanner } = useSelector(state => state.banner);


  const handleDeleteModel = async (bannerId) => {
    try {
      await dispatch(delete_banner(bannerId));
      dispatch(get_banner());
    } catch (error) {
      toast.error("Failed to delete brand");
    }
  };

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage)
      dispatch(messageClear())
    }
    if (successMessage) {
      toast.success(successMessage)
      dispatch(messageClear())
    }
  }, [successMessage, errorMessage])

  // useEffect for pagination
  useEffect(() => {
    dispatch(get_banner())
  }, [])


  return (
    <div className='px-2 lg:ml-[260px] md:px-7 pt-5'>
      <div className="flex  justify-between items-center mb-5 p-4  rounded-md">

        <div>
          {banners?.map((img) => (
            <div className="border border-background-500 my-5" key={img._id}>
              <div>
                <div>
                  <img className="h-[400px] w-[1200px]" src={img?.image} alt="banner images" />
                </div>
                <div>
                  <button onClick={() => handleDeleteModel(img._id)} className="bg-secondary-400 text-white-100 px-3 w-[150px] my-5 mx-5 py-1" >Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </div>
  );
}

export default AllBanner
