import { BsCurrencyDollar } from 'react-icons/bs'
import { RiProductHuntLine } from 'react-icons/ri'
import { FaUser } from 'react-icons/fa'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import Chart from 'react-apexcharts'
import { Link } from 'react-router-dom'


const AdminDashboard = () => {

  const state = {
    series: [
      {
        name: 'orders',
        data: [54, 545, 21, 215, 45, 46, 454, 24, 21, 32, 65, 54]
      },
      {
        name: 'Revenue',
        data: [58, 54, 28, 28, 47, 49, 44, 244, 25, 72, 95, 24]
      },
      {
        name: 'Sellers',
        data: [58, 54, 28, 28, 47, 49, 44, 244, 25, 72, 95, 24]
      },

    ],

    options: {
      color: ['#181ee8', '#181ee8'],
      plotOptions: {
        radius: 30
      },
      chart: {
        background: 'transparent',
        foreColor: '#222222'
      },
      dataLabels: {
        enabled: false
      },

      stroke: {
        show: true,
        curve: ['smooth', 'straight', 'stepline'],
        colors: '#222222',
        width: .5,
        dashArray: 0,

      },

      xasis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apl', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      legend: {
        position: 'top'
      },
      responsive: [
        {
          breakpoint: 565,
          yasis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apl', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
          },
          options: {
            plotOptions: {
              bar: {
                horizontal: true
              }
            },
            chart: {
              height: '550px'
            }
          }
        }
      ]
    }
  }

  return (
    <div className="px-2 lg:ml-[260px] md:px-7 py-5">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7">

        {/* first item */}
        <div className="flex justify-between items-center p-5 bg-primary-200 rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-black-500">
            <h2 className="text-lg font-bold">$ 545454554</h2>
            <span className="text-md font-medium">Total Sales</span>
          </div>
          <div className='w-[46px] rounded-full  h-[47px] bg-primary-100 flex justify-center items-center text-lg'>
            <BsCurrencyDollar className='text-secondary-500 shadow-lg' />
          </div>
        </div>


        {/* second item */}
        <div className="flex justify-between items-center p-5 bg-primary-200 rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-black-500">
            <h2 className="text-lg font-bold">20</h2>
            <span className="text-md font-medium">Products</span>
          </div>
          <div className='w-[46px] rounded-full  h-[47px] bg-primary-100 flex justify-center items-center text-lg'>
            <RiProductHuntLine className='text-secondary-500 shadow-lg' />
          </div>
        </div>


        {/* third item */}
        <div className="flex justify-between items-center p-5 bg-primary-200 rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-black-500">
            <h2 className="text-lg font-bold">5454</h2>
            <span className="text-md font-medium">Sellers</span>
          </div>
          <div className='w-[46px] rounded-full  h-[47px] bg-primary-100 flex justify-center items-center text-lg'>
            <FaUser className='text-secondary-500 shadow-lg' />
          </div>
        </div>


        {/* fourth item */}
        <div className="flex justify-between items-center p-5 bg-primary-200 rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-black-500">
            <h2 className="text-lg font-bold">54</h2>
            <span className="text-md font-medium">Orders</span>
          </div>
          <div className='w-[46px] rounded-full  h-[47px] bg-primary-100 flex justify-center items-center text-lg'>
            <AiOutlineShoppingCart className='text-secondary-500 shadow-lg' />
          </div>
        </div>
      </div>






      {/* chart item and chat start */}

      <div className='w-full flex flex-wrap mt-7'>
        <div className='w-full lg:w-7/12 lg:pr-3'>
          <div className='w-full bg-primary-200 p-4 rounded-md'>
            <Chart
              options={state.options}
              series={state.series}
              type='bar'
              height={350}
            />
          </div>
        </div>


        <div className='w-full lg:w-5/12 lg:pl-4 mt-6 lg:mt-0'>
          <div className='w-full bg-primary-200 p-4 rounded-md text-black-500'>
            <div className='flex justify-between items-center'>
              <h2 className='font-semibold text-lg text-black-500 pb-3'>
                Recent Seller Message
              </h2>
              <Link className='font-semibold text-sm text-black-500'>View All</Link>
            </div>
            <div className='flex ml-4 flex-col gap-2 pt-6 text-black-500'>
              <ul className='relative border-1 border-primary-500'>
                <li className='mb-3 ml-6'>
                  <div className='flex absolute -left-6 shadow-sm  justify-center items-center w-10 h-10 p-[5px] bg-primary-500 rounded-full z-10'>
                    <img className='rounded-full w-full h-full shadow-lg' src="http://localhost:3000/images/logo.png" alt="" />
                  </div>
                  <div className='p-3 bg-primary-100 rounded-lg border border-primary-500 shadow-sm'>
                    <div className='flex justify-between items-center mb-2'>
                      <Link className='text-md font-normal '>Admin</Link>
                      <time className='mb-1 text-sm font-normal sm:order-last sm:mb-0'>4 days ago</time>
                    </div>
                    <div className='p-2 text-sm font-normal bg-black-500 rounded-md border text-white-100 border-primary-500'>
                      How are you
                    </div>
                  </div>
                </li>

                <li className='mb-3 ml-6'>
                  <div className='flex absolute -left-6 shadow-sm  justify-center items-center w-10 h-10 p-[5px] bg-primary-500 rounded-full z-10'>
                    <img className='rounded-full w-full h-full shadow-lg' src="http://localhost:3000/images/logo.png" alt="" />
                  </div>
                  <div className='p-3 bg-primary-100 rounded-lg border border-primary-500 shadow-sm'>
                    <div className='flex justify-between items-center mb-2'>
                      <Link className='text-md font-normal '>Admin</Link>
                      <time className='mb-1 text-sm font-normal sm:order-last sm:mb-0'>4 days ago</time>
                    </div>
                    <div className='p-2 text-sm font-normal bg-black-500 rounded-md border text-white-100 border-primary-500'>
                      How are you
                    </div>
                  </div>
                </li>


                <li className='mb-3 ml-6'>
                  <div className='flex absolute -left-6 shadow-sm  justify-center items-center w-10 h-10 p-[5px] bg-primary-500 rounded-full z-10'>
                    <img className='rounded-full w-full h-full shadow-lg' src="http://localhost:3000/images/logo.png" alt="" />
                  </div>
                  <div className='p-3 bg-primary-100 rounded-lg border border-primary-500 shadow-sm'>
                    <div className='flex justify-between items-center mb-2'>
                      <Link className='text-md font-normal '>Admin</Link>
                      <time className='mb-1 text-sm font-normal sm:order-last sm:mb-0'>4 days ago</time>
                    </div>
                    <div className='p-2 text-sm font-normal bg-black-500 rounded-md border text-white-100 border-primary-500'>
                      How are you
                    </div>
                  </div>
                </li>
              </ul>
            </div>
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
                      [1,2,3,4,5].map((d , i) => 
                      
                      <tr key={i}>
                      <td scope='row' className='py-3 font-medium whitespace-nowrap px-4'>#54545d54</td>
                      <td scope='row' className='py-3 font-medium whitespace-nowrap px-4'>$565</td>
                      <td scope='row' className='py-3 font-medium whitespace-nowrap px-4'>
                        <span>pending</span>
                      </td>
                      <td scope='row' className='py-3 font-medium whitespace-nowrap px-4'><span>pending</span></td>
                      <td scope='row' className='py-3 font-medium whitespace-nowrap px-4'>
                        <Link>View</Link>
                      </td>
                    </tr>
                      
                      )
                    }
                  </tbody>
              </table>
        </div>
      </div>

    </div>
  )
}

export default AdminDashboard

