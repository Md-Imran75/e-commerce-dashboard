import {Navigate} from 'react-router-dom'
import {useSelector } from "react-redux"

const Home = () => {

  const {userInfo} = useSelector(state => state.auth)
  const role = userInfo.role
  
  if(role === 'seller') return <Navigate to='/seller/dashboard' replace />
  else if (role === 'admin') return <Navigate to='/admin/dashboard' replace/>
  else return <Navigate to='/login' replace/>

  
}

export default Home
