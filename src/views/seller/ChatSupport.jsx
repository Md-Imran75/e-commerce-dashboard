import { useState } from "react"
import { FaList } from "react-icons/fa"
import {IoMdClose} from 'react-icons/io'

const ChatSupport = () => {
    const [show , setShow] = useState(false)
    const sellerId = 12
  return (
    <div className='px-2 lg:ml-[260px] md:px-7 pt-5'>
      <div className="w-full bg-background-100 px-4 py-4 rounded-md h-[calc(100vh-140px)]">
        <div className="flex w-full h-full relative">
         

                
           
           <div className="w-full md:pl-4">
              <div className="flex justify-between items-center">
                
                   
                    <div className="flex justify-start items-center gap-3 ">
                       <div className="relative">
                       <img className="w-[42px] bg-primary-100 h-[42px] border-2 max-w-[42px] rounded-full p-[2px] border-secondary-500  " src="http://localhost:3000/images/logo.png" alt="" />
                      <div className="w-[10px] h-[10px] bg-primary-500 rounded-full absolute right-0 bottom-0 "></div>
                       </div>
                       <h2 className="text-black-400 font-semibold">Support</h2>
                    </div>
                     
               
              </div>


              <div className="py-4">
               <div className="bg-primary-100 h-[calc(100vh-290px)] rounded-md p-3 overflow-y-auto">

                <div className="w-full flex justify-start items-center">
                   <div className="flex justify-start items-start gap-2 md:px-3 py-2 max-w-full lg:max-w-[85%]">
                      <div>
                      <img className="w-[42px] bg-primary-100 h-[42px] border-2 max-w-[42px]  rounded-full p-[3px] border-secondary-500  " src="http://localhost:3000/images/logo.png" alt="" />
                      </div>
                      <div className="flex justify-center items-start flex-col  w-full bg-primary-200 shadow-sm py-1 px-2 rounded-sm ">
                        <span>how are you?</span>
                      </div>
                   </div>
                </div>

                <div className="w-full flex justify-end items-center">
                   <div className="flex justify-start items-start gap-2 md:px-3 py-2 max-w-full lg:max-w-[85%]">
                      
                      <div className="flex justify-center items-start flex-col text-white-100 w-full bg-secondary-400 shadow-sm py-1 px-2 rounded-sm ">
                        <span>how are you?</span>
                      </div>
                      <div>
                      <img className="w-[42px] bg-primary-100 h-[42px] border-2 max-w-[42px]  rounded-full p-[3px] border-secondary-500  " src="http://localhost:3000/images/logo.png" alt="" />
                      </div>
                   </div>
                </div>



               </div>
            </div>
            <form className="flex gap-3">
            <input className="w-full flex bg-primary-200 justify-between px-2 border-primary-500 items-center py-[5px] focus:border-orimary-500 focus:border outline-none text-black-500" type="text"  placeholder="input your message" />
            <button className="bg-secondary-500 shadow-sm hover:bg-primary-500 hover:text-black-500 text-white-100 font-semibold h-[35px] w-[75px] flex justify-center items-center">Send</button>
            </form>


           </div>
            
            

        </div>
      </div>
    </div>
  )
}

export default ChatSupport
