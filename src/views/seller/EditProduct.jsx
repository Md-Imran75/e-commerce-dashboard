import { useEffect, useState } from "react"
import { BsImages } from "react-icons/bs"
import { Link, useParams } from "react-router-dom"
import { IoCloseSharp } from 'react-icons/io5'
import { useSelector, useDispatch } from 'react-redux'
import { PropagateLoader } from 'react-spinners'
import toast from 'react-hot-toast'
import { get_model } from '../../store/reducers/modelReducer'
import { get_brand } from '../../store/reducers/brandReducer'
import { get_product, messageClear, update_product, product_image_update, document_image_update } from '../../store/reducers/productReducer'
import { overrideStyleForButtonLoader } from '../../utils/utils'
import Button from '../components/Button'



// product image input funtion

export const useProductImageInput = (productId) => {
  const dispatch = useDispatch()
  const [images, setImages] = useState([]);
  const [imageShow, setImageShow] = useState([]);


  const changeImage = (img, files) => {


    if (files.length > 0) {
      dispatch(product_image_update({
        oldImage: img,
        newImage: files[0],
        productId
      }))
    }
  }

  return { images, imageShow, setImages, changeImage, setImageShow };
};

// document image input

export const useDocumentImageInput = (productId) => {
  const dispatch = useDispatch()
  const [images, setImages] = useState([]);
  const [imageShow, setImageShow] = useState([]);




  const changeImage = (img, files) => {
    if (files.length > 0) {
      dispatch(document_image_update({
        oldImage: img,
        newImage: files[0],
        productId
      }))
    }
  }

  return { images, imageShow, setImages, changeImage, setImageShow };
};








const EditProduct = () => {

  const { productId } = useParams()
  const dispatch = useDispatch()
  const { models } = useSelector(state => state.model)
  const { brands } = useSelector(state => state.brand)

  const { product, loader, errorMessage, successMessage } = useSelector(state => state.product)
  const imageInput1 = useProductImageInput(productId);
  const imageInput2 = useDocumentImageInput(productId);

  useEffect(() => {
    dispatch(get_model({
      searchValue: '',
      parPage: '',
      page: ""
    }))
  }, [])

  useEffect(() => {
    dispatch(get_brand({
      searchValue: '',
      parPage: '',
      page: ""
    }))
  }, [])

  useEffect(() => {
    dispatch(get_product(productId))
  }, [productId])

  // state for models
  const [modelShow, setModelShow] = useState(false)
  const [allModel, setAllModel] = useState(models)
  const [model, setModel] = useState('')
  const [searchValue, setSearchValue] = useState('')

  //state for brands
  const [brandShow, setBrandShow] = useState(false)
  const [allBrand, setAllBrand] = useState(models)
  const [brand, setBrand] = useState('')

  //state 
  const [state, setState] = useState({
    name: '',
    regYear: '',
    cc: '',
    ml: '',
    kilometerAs: '',
    taxValid: '',
    fi: '',
    abs: '',
    stock: '',
    description: '',
    price: ''
  });




  // onchange handler
  const changeHandeler = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  //search for models
  const modelSearch = (e) => {
    const value = e.target.value
    setSearchValue(value)
    if (value) {
      let srchValue = allModel.filter(c => c.name.toLowerCase().indexOf(value.toLowerCase()) > -1)
      setAllModel(srchValue)
    } else {
      setAllModel(models)
    }
  }


  // search for brands
  const BrandSearch = (e) => {
    const value = e.target.value
    setSearchValue(value)
    if (value) {
      let srchValue = allBrand.filter(c => c.name.toLowerCase().indexOf(value.toLowerCase()) > -1)
      setAllBrand(srchValue)
    } else {
      setAllBrand(brands)
    }
  }



  useEffect(() => {
    setState({
      name: product.name || '',
      model: product.model || '',
      brand: product.brand || '',
      regYear: product.regYear || '',
      cc: product.cc || '',
      ml: product.ml || '',
      kilometerAs: product.kilometerAs || '',
      taxValid: product.taxValid || '',
      fi: product.fi || '',
      abs: product.abs || '',
      stock: product.stock || '',
      description: product.description || '',
      price: product.price || ''
    });

    setBrand(product.brand || '');
    setModel(product.model || '');
    imageInput1.setImageShow(product.productImages || []);
    imageInput2.setImageShow(product.documentImages || []);
  }, [product]);




  useEffect(() => {
    if (models.length > 0) {
      setAllModel(models)
    }
  }, [models])

  useEffect(() => {
    if (brands.length > 0) {
      setAllBrand(brands)
    }
  }, [brands])


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



  const update = (e) => {
    e.preventDefault()
    const obj = {
      name: state.name,
      regYear: state.regYear,
      cc: state.cc,
      ml: state.ml,
      kilometerAs: state.kilometerAs,
      taxValid: state.taxValid,
      fi: state.fi,
      abs: state.abs,
      stock: state.stock,
      description: state.description,
      price: state.price,
      model: model,
      brand: brand,
      productId: productId
    }
    dispatch(update_product(obj))
  }


  return (
    <div className="px-2 lg:ml-[260px] md:px-7 py-5">
      <div className='w-full p-4 bg-background-100 rounded-md'>
        <div className='flex justify-between items-center pb-4'>
          <h1 className="text-black-500 text-xl font-semibold">Add New Bike</h1>
          <Link to={'/seller/dashboard/products'} className="bg-primary-100  hover:shadow-sm text-black-500 rounded-md px-7 my-2 py-2">Bikes</Link>
        </div>
        <div>
          <form onSubmit={update}>
            <div className="flex flex-col mb-3 md:flex-row gap-4 w-full text-black-500">

              <div className="flex flex-col w-full gap-1">
                <label htmlFor="name">Bike Title</label>
                <input className="px-4 py-2 focus:border-primary-500 focus:border outline-none text-black-500 rounded-md bg-primary-100" name="name" value={state.name} placeholder="e.g. New condition super bike" onChange={changeHandeler} type="text" />
              </div>

              <div className="flex flex-col w-full gap-1 relative">
                <label htmlFor="model">Model</label>
                <input readOnly onClick={() => setModelShow(!modelShow)} className="px-4 py-2 focus:border-primary-500 focus:border outline-none text-black-500 rounded-md bg-primary-100" id="model" value={model} placeholder="--select model--" onChange={changeHandeler} type="text" />

                <div className={`absolute top-[101%] bg-primary-200 w-full transition-all z-50 ${modelShow ? 'scale-100' : 'scale-0'}`}>
                  <div className="w-full px-4 py-2 fixed">
                    <input value={searchValue} onChange={modelSearch} className="px-3 py-1 w-full focus:border-primary-200 outline-none focus:border rounded-md text-black-500 overflow-hidden" type="text" placeholder="search..." />
                  </div>
                  <div className="pt-14 "></div>
                  <div className="flex justify-start items-start flex-col h-[200px] overflow-x-scroll ">
                    {
                      allModel?.map((c, i) => (
                        <span key={i} className={`px-4 py-2 hover:bg-secondary-400 hover:text-white-100 w-full cursor-pointer ${model === c.name && 'bg-primary-500'}`} onClick={() => {
                          setModelShow(false)
                          setModel(c.name)
                          setSearchValue('')
                          setAllModel(models)
                        }}>{c.name}</span>
                      ))
                    }
                  </div>
                </div>

              </div>
            </div>





            <div className="flex flex-col mb-3 md:flex-row gap-4 w-full text-black-500">

              <div className="flex flex-col w-full gap-1">
                <label htmlFor="regYear">Reg. Year</label>
                <input className="px-4 py-2 focus:border-primary-500 focus:border outline-none text-black-500 rounded-md bg-primary-100" name="regYear" value={state.regYear} placeholder="e.g. 2021" onChange={changeHandeler} type="number" min={0} />
              </div>

              <div className="flex flex-col w-full gap-1 relative">
                <label htmlFor="model">Brand</label>
                <input readOnly onClick={() => setBrandShow(!brandShow)} className="px-4 py-2 focus:border-primary-500 focus:border outline-none text-black-500 rounded-md bg-primary-100" id="model" value={brand} placeholder="--select brand--" onChange={changeHandeler} type="text" />

                <div className={`absolute top-[101%] bg-primary-200 w-full transition-all z-50 ${brandShow ? 'scale-100' : 'scale-0'}`}>
                  <div className="w-full px-4 py-2 fixed">
                    <input value={searchValue} onChange={BrandSearch} className="px-3 py-1 w-full focus:border-primary-200 outline-none focus:border rounded-md text-black-500 overflow-hidden" type="text" placeholder="search..." />
                  </div>
                  <div className="pt-14"></div>
                  <div className="flex  justify-start items-start flex-col h-[200px] overflow-x-scroll ">
                    {
                      allBrand?.map((c, i) => (
                        <span key={i} className={`px-4 py-2 hover:bg-secondary-400 hover:text-white-100 w-full cursor-pointer ${brand === c.name && 'bg-primary-500'}`} onClick={() => {
                          setBrandShow(false)
                          setBrand(c.name)
                          setSearchValue('')
                          setAllBrand(brands)
                        }}>{c.name}</span>
                      ))
                    }
                  </div>
                </div>

              </div>
            </div>






            <div className="flex flex-col mb-3 md:flex-row gap-4 w-full text-black-500">

              <div className="flex flex-col w-full gap-1">
                <label htmlFor="cc">CC</label>
                <input className="px-4 py-2 focus:border-primary-500 focus:border outline-none text-black-500 rounded-md bg-primary-100" name="cc" value={state.cc} placeholder="e.g. 150" onChange={changeHandeler} type="number" min={0} />
              </div>

              <div className="flex flex-col w-full gap-1">
                <label htmlFor="kilometerAs">Kilometer As/Per As</label>
                <input className="px-4 py-2 focus:border-primary-500 focus:border outline-none text-black-500 rounded-md bg-primary-100" name="kilometerAs" value={state.kilometerAs} placeholder="e.g. 2021" onChange={changeHandeler} type="text" />
              </div>
            </div>




            <div className="flex flex-col mb-3 md:flex-row gap-4 w-full text-black-500">

              <div className="flex flex-col w-full gap-1">
                <label htmlFor="taxValid">Tax Valid</label>
                <input className="px-4 py-2 focus:border-primary-500 focus:border outline-none text-black-500 rounded-md bg-primary-100" name="taxValid" value={state.taxValid} placeholder="e.g. 150" onChange={changeHandeler} type="text" />
              </div>

              <div className="flex flex-col w-full gap-1">
                <label htmlFor="fi">FI</label>
                <input className="px-4 py-2 focus:border-primary-500 focus:border outline-none text-black-500 rounded-md bg-primary-100" name="fi" value={state.fi} placeholder="e.g. 2021" onChange={changeHandeler} type="text" />
              </div>
              <div className="flex flex-col w-full gap-1">
                <label htmlFor="ml">ML</label>
                <input className="px-4 py-2 focus:border-primary-500 focus:border outline-none text-black-500 rounded-md bg-primary-100" name="ml" value={state.ml} placeholder="e.g. 2021" onChange={changeHandeler} type="number" />
              </div>
            </div>


            <div className="flex flex-col mb-3 md:flex-row gap-4 w-full text-black-500">

              <div className="flex flex-col w-full gap-1">
                <label htmlFor="abs">ABS</label>
                <input className="px-4 py-2 focus:border-primary-500 focus:border outline-none text-black-500 rounded-md bg-primary-100" name="abs" value={state.abs} placeholder="e.g. 150" onChange={changeHandeler} type="text" />
              </div>
              
              <div className="flex flex-col w-full gap-1">
                <label htmlFor="stock">Stock</label>
                <input className="px-4 py-2 focus:border-primary-500 focus:border outline-none text-black-500 rounded-md bg-primary-100" name="stock" min={0} value={state.stock} placeholder="e.g. 150" onChange={changeHandeler} type="number" />
              </div>

              <div className="flex flex-col w-full gap-1">
                <label htmlFor="price">Price</label>
                <input className="px-4 py-2 focus:border-primary-500 focus:border outline-none text-black-500 rounded-md bg-primary-100" name="price" value={state.price} placeholder="e.g. 150" onChange={changeHandeler} type="number" required />
              </div>
            </div>


            <div>
              <div className="flex flex-col w-full gap-1">
                <label htmlFor="description">Description</label>
                <textarea className="px-4 h-[100px] py-2 focus:border-primary-500 focus:border outline-none text-black-500 rounded-md bg-primary-100" name="description" value={state.description} onChange={changeHandeler} type="text" />
              </div>
            </div>


            <div className="flex flex-col">
              <h2 className="font-semibold text-lg">Bike Images</h2>
              <div className="mt-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 sm:gap-4 md:gap-4 gap-3 xs:gap-4 w-full text-black-500 mb-4">



                {
                  (imageInput1.imageShow && imageInput1.imageShow.length > 0) && imageInput1.imageShow.map((img, i) => (
                    <div key={i} className="h-[200px] w-[200px]">
                      <label htmlFor={`productImage_${i}`}>
                        <img className="h-full w-full" src={img} alt="product images" />
                      </label>
                      <input onChange={(e) => imageInput1.changeImage(img, e.target.files)} type="file" id={`productImage_${i}`}className="hidden" />
                    </div>
                  ))
                }


              </div>
            </div>


            <div>
              <h2 className="font-semibold text-lg">Documents Images</h2>
              <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 sm:gap-4 md:gap-4 gap-3 xs:gap-4 w-full text-black-500 mb-4">
                {
                  (imageInput2.imageShow && imageInput2.imageShow.length > 0) && imageInput2.imageShow.map((img, i) => (
                    <div key={i} className="h-[200px] w-[200px]">
                      <label htmlFor={`documentImage_${i}`}>
                        <img className="h-full w-full" src={img} alt="document images" />
                      </label>
                      <input onChange={(e) => imageInput2.changeImage(img, e.target.files)} type="file" id={`documentImage_${i}`}
                        className="hidden" />
                    </div>
                  ))
                }

              </div>
            </div>


            <div className="flex">
              <Button disabled={loader ? true : false}  >
                {
                  loader ? <PropagateLoader color='#fff' cssOverride={overrideStyleForButtonLoader} /> : 'Update Bike'
                }

              </Button>
            </div>
          </form>

        </div>
      </div>
    </div>
  )
}

export default EditProduct
