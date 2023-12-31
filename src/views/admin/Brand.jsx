import { useState, useEffect } from "react"
import toast from 'react-hot-toast'
import { useSelector, useDispatch } from 'react-redux'
import { get_brand, brandAdd, messageClear , delete_brand } from "../../store/reducers/brandReducer"
import BrandAndModel from "../components/brandandmodel/BrandAndModel"


const InitialState = {
    name: '',
    image: ''
}

const Brand = () => {
    const dispatch = useDispatch()
    const { loader, successMessage, brands, errorMessage, totalbrand } = useSelector(state => state.brand);
    const [currentPage, setCurrentPage] = useState(1)
    const [searchValue, setSearchValue] = useState('')
    const [perPage, setPerPage] = useState(10)
    const [show, setShow] = useState(false)
    const [imageShow, setImage] = useState('')

    const [state, setState] = useState({ ...InitialState });


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

    //form submit 
    const addbrand = async (e) => {
        e.preventDefault();
        try {

            if (!state.name || !state.image) {
                toast.error("Please provide both name and image.");
                return;
            }
            await dispatch(brandAdd(state));
        } catch (error) {
            toast.error("Failed to add the brand. Please try again.");
        }
    };

    const handleDeleteBrand = async (brandId) => {
        try {
            await dispatch(delete_brand(brandId));
            dispatch(get_brand({ perPage, page: currentPage, searchValue }));
        } catch (error) {
            toast.error("Failed to delete brand");
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
                name: '',
                image: ''
            })
            setImage('')
        }
    }, [successMessage, errorMessage])

    // useEffect for pagination
    useEffect(() => {
        const obj = {
            perPage: parseInt(perPage),
            page: parseInt(currentPage),
            searchValue
        }
        dispatch(get_brand(obj))
    }, [searchValue, currentPage, perPage])

    return (
        <div>
            <BrandAndModel deleteMethod={handleDeleteBrand} total={totalbrand} name={'Brand'} names={'Brands'} setCurrentPage={setCurrentPage} setPerPage={setPerPage} setSearchValue={setSearchValue} data={brands} currentPage={currentPage} imageHandle={imageHandle} imageShow={imageShow} loader={loader} setShow={setShow} show={show} submit={addbrand} state={state} setState={setState} perPage={perPage} />
        </div>
    )
}

export default Brand
