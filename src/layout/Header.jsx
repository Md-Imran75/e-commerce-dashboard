import { FaList } from 'react-icons/fa'

const Header = ({ showSidebar, setShowSidebar }) => {
  return (
    <div className='fixed top-0 left-0 w-full py-5 px-2 lg:px-7 z-40'>
      <div className='ml-0 lg:ml-[260px] rounded-md h-[65px] flex justify-between items-center bg-primary-200 text-black-500 px-5 transition-all'>
        <div className='w-[35px] h-[35px] rounded-sm bg-secondary-500 hover:shadow-primary-500 cursor-pointer items-center justify-center flex lg:hidden ' onClick={() => setShowSidebar(!showSidebar)}>
          <span className='text-white-100'>
            <FaList />
          </span>
        </div>
        <div className='lg:block hidden'>
          <input className='px-3 py-2  outline-none border border-primary-500 bg-primary-100 text-black-500 focus:border-secondary-500 overflow-hidden' type="text" name='search' placeholder='search...' />
        </div>
        <div className='flex justify-center items-center gap-8 relative'>
          <div className='flex justify-center items-center '>
            <div className='flex justify-center items-center gap-3  '>
              <div className='flex justify-center items-center flex-col text-end '>
                <h2 className='text-sm font-bold'>Bike Haat</h2>
                <span className='text-[14px] w-full font-normal'>Admin</span>
              </div>
              <img className='w-[45px] h-[45px] rounded-full overflow-hidden' src="http://localhost:3000/images/logo.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
