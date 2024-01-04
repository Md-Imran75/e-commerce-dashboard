import { useState , useEffect } from 'react'
import { overrideStyleForButtonLoader } from '../../utils/utils'
import { PropagateLoader } from 'react-spinners'
import { BsImage } from "react-icons/bs"
import { useSelector, useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
import {  bannerAdd, messageClear } from "../../store/reducers/bannerReducer"
import Button from '../components/Button'

const InitialState = {
    image: ''
}


const AddBanner = () => {
    const dispatch = useDispatch()

    const {loader, successMessage, errorMessage  } = useSelector(state => state.banner);

    const [imageShow, setImage] = useState('')

    const [state, setState] = useState({ ...InitialState });

console.log(state)
    //handle image input
    const imageHandle = (e) => {
        let files = e.target.files
        if (files.length > 0) {
            setImage(URL.createObjectURL(files[0]))
            setState({
                ...state,
                image: files[0]
            })
        }
    }

    const addBanner = async (e) => {
        e.preventDefault();
        try {
            await dispatch(bannerAdd(state));
        } catch (error) {
            toast.error("Failed to add the banner.");
        }
    };

    // useEffect for success and errormessage
    useEffect(() => {
        if (errorMessage) {
            toast.error(errorMessage)
            dispatch(messageClear())
        }
        if (successMessage) {
            toast.success(successMessage)
            dispatch(messageClear())
            setState({
                image: ''
            })
            setImage('')
        }
    }, [successMessage, errorMessage])

 
  return (
    <div className="px-2 lg:ml-[260px] md:px-7 py-5">
    <div className='w-full p-4 bg-background-100 rounded-md'>


                            </div>
                            <form onSubmit={addBanner} >
                               
                                <div>
                                    <label className="flex justify-center items-center flex-col h-[238px] cursor-pointer border border-dashed hover:border-primary-500 w-full border-black-500 " htmlFor="image">
                                        {
                                            imageShow ? <img className='w-full h-full' src={imageShow} /> : <>
                                                <span><BsImage /></span>
                                                <span>select Image</span>
                                            </>
                                        }
                                    </label>
                                    <input onChange={imageHandle}  className="hidden" type="file" name="image" id="image" />
                                </div>
                                <button className='bg-secondary-400 text-white-100 px-3 w-[150px] py-1 mt-5'  disabled={loader ? true : false}  >
                                        {
                                            loader ? <PropagateLoader color='#fff' cssOverride={overrideStyleForButtonLoader} /> : 'Add Banner'
                                        }

                                    </button>
                            </form>

                  </div>
  
  )
}

export default AddBanner
