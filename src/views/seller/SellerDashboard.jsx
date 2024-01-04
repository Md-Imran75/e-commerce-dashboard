import { BsCurrencyDollar } from 'react-icons/bs'
import { RiProductHuntLine } from 'react-icons/ri'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import Chart from 'react-apexcharts'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { get_seller_dashboard_index_data} from '../../store/reducers/dashboardIndexReducer'
import moment from 'moment'
import { useEffect } from 'react'

const SellerDashboard = () => {
  const {userInfo} = useSelector(state=>state.auth)
  const { 
    // totalSale,
      totalOrder,
      totalProduct,
      totalPendingOrder,
      totalSeller,
      recentOrders,
      recentMessage } = useSelector(state => state.dashboardIndex)


      const dispatch = useDispatch()

      useEffect(() => {
          dispatch(get_seller_dashboard_index_data())
      }, [])

  

  return (
    <div className="px-2 lg:ml-[260px] md:px-7 py-5">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-7">

        {/* first item */}
        {/* <div className="flex justify-between items-center p-5 bg-primary-200 rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-black-500">
            <h2 className="text-lg font-bold">$ 545454554</h2>
            <span className="text-md font-medium">Total Sales</span>
          </div>
          <div className='w-[46px] rounded-full  h-[47px] bg-primary-100 flex justify-center items-center text-lg'>
            <BsCurrencyDollar className='text-secondary-500 shadow-lg' />
          </div>
        </div> */}


        {/* second item */}
        <div className="flex justify-between items-center p-5 bg-primary-200 rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-black-500">
            <h2 className="text-lg font-bold">{totalProduct}</h2>
            <span className="text-md font-medium">Products</span>
          </div>
          <div className='w-[46px] rounded-full  h-[47px] bg-primary-100 flex justify-center items-center text-lg'>
            <RiProductHuntLine className='text-secondary-500 shadow-lg' />
          </div>
        </div>


        {/* third item */}
        <div className="flex justify-between items-center p-5 bg-primary-200 rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-black-500">
            <h2 className="text-lg font-bold">{totalOrder}</h2>
            <span className="text-md font-medium">Orders</span>
          </div>
          <div className='w-[46px] rounded-full  h-[47px] bg-primary-100 flex justify-center items-center text-lg'>
            <AiOutlineShoppingCart className='text-secondary-500 shadow-lg' />
          </div>
        </div>


        {/* fourth item */}
        <div className="flex justify-between items-center p-5 bg-primary-200 rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-black-500">
            <h2 className="text-lg font-bold">{totalPendingOrder}</h2>
            <span className="text-md font-medium">Pending Orders</span>
          </div>
          <div className='w-[46px] rounded-full  h-[47px] bg-primary-100 flex justify-center items-center text-lg'>
            <AiOutlineShoppingCart className='text-secondary-500 shadow-lg' />
          </div>
        </div>
      </div>






      

        




      {/* recent order */}

      <div className='w-full p-4 bg-primary-200 rounded-md mt-6 '>
        <div className='flex justify-between items-center'>
          <h2 className='font-semibold text-lg text-black-500 pb-3'>
            Recent Orders
          </h2>
          <Link className='font-semibold text-sm text-black-500'>View All</Link>
        </div>
        <div className='relative overflow-x-auto'>
              <table className='w-full text-sm text-left text-black-500'>
                  <thead className='text-sm text-black-500 uppercase border-b border-b-primary-500'>
                    <tr>
                      <th scope='col' className='py-3 px-4'>Order Id</th>
                      <th scope='col' className='py-3 px-4'>Price</th>
                      <th scope='col' className='py-3 px-4'>Payment Status</th>
                      <th scope='col' className='py-3 px-4'>Order Status</th>
                      <th scope='col' className='py-3 px-4'>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                  {
                                recentOrders?.map((d, i) => <tr key={i}>
                                    <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>#{d._id}</td>
                                    <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>{d.price}</td>
                                    <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>
                                    <span>{d.payment_status}</span>

                                    </td>
                                    <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>
                                        <span>{d.delivery_status}</span>

                                    </td>
                                    <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>
                                        <Link to={`/seller/dashboard/order/details/${d._id}`}>view</Link>
                                    </td>
                                </tr>)
                            }
                  </tbody>
              </table>
        </div>
      </div>

    </div>
  )
}

export default SellerDashboard

