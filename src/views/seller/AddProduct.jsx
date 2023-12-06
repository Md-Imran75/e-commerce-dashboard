import { useState } from "react"
import { BsImages } from "react-icons/bs"
import { Link } from "react-router-dom"
import { IoCloseSharp } from 'react-icons/io5'




const useImageInput = () => {
  const [images, setImages] = useState([]);
  const [imageShow, setImageShow] = useState([]);

  const handleImageChange = (files) => {
    const length = files.length;

    if (length > 0) {
      setImages([...images, ...files]);
      let imageUrl = [];

      for (let i = 0; i < length; i++) {
        imageUrl.push({ url: URL.createObjectURL(files[i]) });
      }

      setImageShow([...imageShow, ...imageUrl]);
    }
  };

  const changeImage = (img, index) => {
    if (img) {
      let tempImages = images;
      let tempUrl = imageShow;

      tempImages[index] = img;
      tempUrl[index] = { url: URL.createObjectURL(img) };
      setImageShow([...tempUrl]);
      setImages([...tempImages]);
    }
  };

  const removeImage = (i) => {
    const filterImage = images.filter((img, index) => index !== i);
    const filterImageUrl = imageShow.filter((img, index) => index !== i);
    setImages(filterImage);
    setImageShow(filterImageUrl);
  };

  return { images, imageShow, handleImageChange, changeImage, removeImage };
};


const AddProduct = () => {

  const imageInput1 = useImageInput();
  const imageInput2 = useImageInput();

  const models = [
    {
      id: 1,
      name: 'suzuki'
    },
    {
      id: 2,
      name: 'yamaha'
    }, {
      id: 3,
      name: 'toyota'
    }, {
      id: 4,
      name: 'tesla'
    }, {
      id: 5,
      name: 'toyota'
    }, {
      id: 6,
      name: 'suzuki'
    },
  ]

  const brands = [
    {
      id: 1,
      name: 'suzuki'
    },
    {
      id: 2,
      name: 'yamaha'
    }, {
      id: 3,
      name: 'toyota'
    }, {
      id: 4,
      name: 'tesla'
    }, {
      id: 5,
      name: 'toyota'
    }, {
      id: 6,
      name: 'suzuki'
    },
  ]

  // state for models
  const [modelShow, setModelShow] = useState(false)
  const [allModel, setAllModel] = useState(models)
  const [model, setModel] = useState('')
  const [searchValue, setSearchValue] = useState('')

  //state for brands
  const [brandShow, setBrandShow] = useState(false)
  const [allBrand, setAllBrand] = useState(models)
  const [brand, setBrand] = useState('')

  //demo data 
  const [state, setState] = useState({
    name: '',
    model: '',
    brand: '',
    regYear: '',
    cc: '',
    ml: '',
    kilometerAs: '',
    taxValid: '',
    fi: '',
    abs: '',
    stock:'1',
    description:''
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
      setAllBrand(models)
    }
  }





  // const [images, setImages] = useState([])
  // const [imageShow, setImageShow] = useState([])

  // const [docImages, setDocImages] = useState([])
  // const [docImageShow, setDocImageShow] = useState([])

  // const imageHandle = (e) => {
  //   const files = e.target.files
  //   const length = files.length

  //   if (length > 0) {
  //     setImages([...images, ...files])
  //     let imageUrl = []

  //     for (let i = 0; i < length; i++) {

  //       imageUrl.push({ url: URL.createObjectURL(files[i]) })
  //     }

  //     setImageShow([...imageShow, ...imageUrl])

  //   }
  // }

  // const docImageHandle = (e) => {
  //   const files = e.target.files
  //   const length = files.length

  //   if (length > 0) {
  //     setDocImages([...docImages, ...files])
  //     let imageUrl = []

  //     for (let i = 0; i < length; i++) {

  //       imageUrl.push({ url: URL.createObjectURL(files[i]) })
  //     }

  //     setDocImageShow([...docImageShow, ...imageUrl])

  //   }
  // }



  // const changeImage = (img, index) => {
  //   if (img) {
  //    let tempImages = images
  //  let tempUrl = imageShow
    
  //     tempImages[index] = img
  //     tempUrl[index] = { url: URL.createObjectURL(img) }
  //     setImageShow([...tempUrl])
  //     setImages([...tempImages])

  //   }
  // }


  // const changeDocImage = (img, index) => {
  //   if (img) {
  //    let tempImages = docImages
  //  let tempUrl = docImageShow
    
  //     tempImages[index] = img
  //     tempUrl[index] = { url: URL.createObjectURL(img) }
  //     setDocImageShow([...tempUrl])
  //     setDocImages([...tempImages])

  //   }
  // }

  // const removeImage = (i) => {
  //   const filterImage = images.filter((img, index) => index !== i)
  //   const filterImageUrl = imageShow.filter((img, index) => index !== i)
  //   setImages(filterImage)
  //   setImageShow(filterImageUrl)
  // }


  // const removeDocImage = (i) => {
  //   const filterImage = docImages.filter((img, index) => index !== i)
  //   const filterImageUrl = docImageShow.filter((img, index) => index !== i)
  //   setDocImages(filterImage)
  //   setDocImageShow(filterImageUrl)
  // }

   console.log('img 1',imageInput1.imageShow)
   console.log('img 2',imageInput2.imageShow)

  return (
    <div className="px-2 lg:ml-[260px] md:px-7 py-5">
      <div className='w-full p-4 bg-background-100 rounded-md'>
        <div className='flex justify-between items-center pb-4'>
          <h1 className="text-black-500 text-xl font-semibold">Add New Bike</h1>
          <Link to={'/seller/dashboard/products'} className="bg-primary-100  hover:shadow-sm text-black-500 rounded-md px-7 my-2 py-2">Bikes</Link>
        </div>
        <div>
          <form>
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
                      allModel.map((c, i) => (
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
                      allBrand.map((c, i) => (
                        <span key={i} className={`px-4 py-2 hover:bg-secondary-400 hover:text-white-100 w-full cursor-pointer ${model === c.name && 'bg-primary-500'}`} onClick={() => {
                          setBrandShow(false)
                          setBrand(c.name)
                          setSearchValue('')
                          setAllBrand(models)
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
                <input className="px-4 py-2 focus:border-primary-500 focus:border outline-none text-black-500 rounded-md bg-primary-100" name="taxValid" value={state.taxValid} placeholder="e.g. 150" onChange={changeHandeler} type="number" min={0} />
              </div>

              <div className="flex flex-col w-full gap-1">
                <label htmlFor="fi">FI</label>
                <input className="px-4 py-2 focus:border-primary-500 focus:border outline-none text-black-500 rounded-md bg-primary-100" name="fi" value={state.fi} placeholder="e.g. 2021" onChange={changeHandeler} type="text" />
              </div>
            </div>


            <div className="flex flex-col mb-3 md:flex-row gap-4 w-full text-black-500">

              <div className="flex flex-col w-full gap-1">
                <label htmlFor="abs">ABS</label>
                <input className="px-4 py-2 focus:border-primary-500 focus:border outline-none text-black-500 rounded-md bg-primary-100" name="abs" value={state.abs} placeholder="e.g. 150" onChange={changeHandeler} type="text"  />
              </div>

              <div className="flex flex-col w-full gap-1">
                <label htmlFor="description">Description</label>
                <textarea className="px-4 h-[100px] py-2 focus:border-primary-500 focus:border outline-none text-black-500 rounded-md bg-primary-100" name="description" value={state.description}  onChange={changeHandeler} type="text"  />
              </div>
            </div>




            <div className="mt-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 sm:gap-4 md:gap-4 gap-3 xs:gap-4 w-full text-black-500 mb-4">
              {imageInput1.imageShow.map((img, i) => (
                <div key={i} className="h-[180px]  relative">
                  <label htmlFor={i}>
                    <img className="w-full h-full rounded-sm" src={img.url} alt="" />
                  </label>
                  <input onChange={(e) => imageInput1.changeImage(e.target.files[0], i)} type="file" id={i} className="hidden" />
                  <span onClick={() => imageInput1.removeImage(i)} className="p-2 z-10 cursor-pointer bg-secondary-500 hover:shadow-md hover:shadow-primary-500 absolute text-white-100 top-1 right-1 rounded-full"><IoCloseSharp /></span>
                </div>
              ))}
              <label className="flex justify-center items-center flex-col h-[180px] cursor-pointer border border-dashed hover:border-dashed hover:border-secondary-500 w-full border-primary-500" htmlFor="image1">
                <span><BsImages /></span>
                <span>select bike images</span>
              </label>
              <input multiple  onChange={(e) => imageInput1.handleImageChange(e.target.files)} className="hidden" type="file" id="image1" />
            </div>

            <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 sm:gap-4 md:gap-4 gap-3 xs:gap-4 w-full text-black-500 mb-4">
              {imageInput2.imageShow.map((img, i) => (
                <div key={i} className="h-[180px]  relative">
                  <label htmlFor={i}>
                    <img className="w-full h-full rounded-sm" src={img.url} alt="" />
                  </label>
                  <input onChange={(e) => imageInput2.changeImage(e.target.files[0], i)} type="file" id={i} className="hidden" />
                  <span onClick={() => imageInput2.removeImage(i)} className="p-2 z-10 cursor-pointer bg-secondary-500 hover:shadow-md hover:shadow-primary-500 absolute text-white-100 top-1 right-1 rounded-full"><IoCloseSharp /></span>
                </div>
              ))}
              <label className="flex justify-center items-center flex-col h-[180px] cursor-pointer border border-dashed hover:border-dashed hover:border-secondary-500 w-full border-primary-500" htmlFor="image2">
                <span><BsImages /></span>
                <span>select Registration certificate , Tax Token , NID images</span>
              </label>
              <input multiple  onChange={(e) => imageInput2.handleImageChange(e.target.files)} className="hidden" type="file" id="image2" />
            </div>


            <div className="flex">
              <button className="bg-secondary-500  hover:shadow-sm rounded-md px-7 py-2 my-2 text-white-100 hover:shadow-black-500 ">Add Product</button>
            </div>
          </form>

        </div>
      </div>
    </div>
  )
}

export default AddProduct
