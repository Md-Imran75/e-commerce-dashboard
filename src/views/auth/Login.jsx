import { useState , useEffect } from 'react'
import {Link , useNavigate} from 'react-router-dom'
import  {toast} from 'react-hot-toast'
import {useDispatch , useSelector} from 'react-redux'
import {PropagateLoader} from 'react-spinners'
import { overrideStyleForButtonLoader } from '../../utils/utils'
import { messageClear, seller_login} from '../../store/reducers/authReducers'


const InitialState = {
  email:'',
  password:''
}

const Login = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [user , setUser] = useState(InitialState)

  const {loader , errorMessage , successMessage} = useSelector(state => state.auth)


   const handler = (e) => {
    setUser({
      ...user,
      [e.target.name] : e.target.value
    })
   }

   

   const submit = (e) => {
    e.preventDefault()
    setUser(InitialState)
    dispatch(seller_login(user))
   
   }

   
   

   useEffect(() => {
    if(successMessage){
      toast.success(successMessage)
      dispatch(messageClear())
      navigate('/')
    }
    if(errorMessage){
      toast.error(errorMessage)
      dispatch(messageClear())
    }
  },[successMessage , errorMessage])

    return (
      <section className="text-black-500 mx-5 md:mx-10   ">
  
        <div className='flex flex-col md:w-1/3 md:mx-auto shadow-sm mt-20  px-10  py-10 bg-primary-100'>
          <div className='flex justify-between'>
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Login</h2>
          </div>
          <form onSubmit={submit}>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" required onChange={handler} value={user.email} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="relative mb-4">
            <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
            <input type="password" id="password" name="password" required onChange={handler} value={user.password} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <button disabled={loader ? true : false} className="text-white bg-secondary-500 text-primary-100 w-full  bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            {
              loader ? <PropagateLoader color='#ffffff' cssOverride={overrideStyleForButtonLoader}/>  : 'Login'
            }
          </button>
          </form>
          <p className="text-xs text-gray-500 mt-3">Don't have any account?
            <Link to={'/register'}>Sing up</Link></p>
        </div>
  
  
  
      </section>
    )
  }
  
  export default Login
  