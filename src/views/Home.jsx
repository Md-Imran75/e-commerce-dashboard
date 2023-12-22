import {Navigate} from 'react-router-dom'
import {useSelector } from "react-redux"

const Home = () => {

  const {role} = useSelector(state => state.auth.userInfo)
  console.log(role)
  
  if(role === 'seller') return <Navigate to='/seller/dashboard' replace />
  else if (role === 'admin') return <Navigate to='/admin/dashboard' replace/>
  else return <Navigate to='/login' replace/>

  
}

export default Home
