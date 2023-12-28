import { useState, useEffect } from "react"
import toast from 'react-hot-toast'
import { useSelector, useDispatch } from 'react-redux'
import { get_model, modelAdd, messageClear } from "../../store/reducers/modelReducer"
import BrandAndModel from "../components/brandandmodel/BrandAndModel"


const InitialState = {
    name: '',
    image: ''
}

const Model = () => {

    const dispatch = useDispatch()
    const { loader, successMessage, models, errorMessage , totalmodel } = useSelector(state => state.model);
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
    const addModel = async (e) => {
        e.preventDefault();
        try {

            if (!state.name || !state.image) {
                toast.error("Please provide both name and image.");
                return;
            }
            await dispatch(modelAdd(state));
        } catch (error) {
            toast.error("Failed to add the model. Please try again.");
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
        dispatch(get_model(obj))
    }, [searchValue, currentPage, perPage])

    return (
        <div>
            <BrandAndModel total={totalmodel} name={'Model'} names={'Models'} setCurrentPage={setCurrentPage} setPerPage={setPerPage} setSearchValue={setSearchValue} data={models} currentPage={currentPage} imageHandle={imageHandle} imageShow={imageShow} loader={loader} setShow={setShow} show={show} submit={addModel} state={state} setState={setState} perPage={perPage} />
        </div>
    )
}

export default Model
