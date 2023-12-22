import {privateRoutes} from './privateRoutes'
import MainLayout from '../../layout/MainLayout'
import ProtectRoutes from './ProtectRoutes'
export const getRoutes = () => {
    const allRoute = []
    privateRoutes.map( route => {
         route.element = <ProtectRoutes route={route} >{route.element}</ProtectRoutes>
    })
    return{
        path : '/',
        element : <MainLayout/>,
        children : privateRoutes
    }
}