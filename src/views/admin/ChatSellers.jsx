import { useState, useEffect, useRef } from "react"
import { FaList } from "react-icons/fa"
import { IoMdClose } from 'react-icons/io'
import { useParams, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { BsEmojiSmile } from 'react-icons/bs'
import toast from 'react-hot-toast'
import { send_message_seller_admin, messageClear, get_admin_message, updateSellerMessage , get_sellers } from '../../store/reducers/chatReducer'
import { socket } from '../../utils/utils'

const ChatSellers = () => {

   const scrollRef = useRef()

   const { sellerId } = useParams()
   const dispatch = useDispatch()
   const { sellers, activeSellers, seller_admin_message, currentSeller, successMessage } = useSelector(state => state.chat)
   const [show, setShow] = useState(false)
   const [recevedMessage, setRecevedMessage] = useState('')

   const [text, setText] = useState('')
   useEffect(() => {
      dispatch(get_sellers())
   }, [])

   const send = (e) => {
      e.preventDefault()
      dispatch(send_message_seller_admin({
         senderId: '',
         receverId: sellerId,
         message: text,
         senderName: 'Bike Haat Support'
      }))
      setText('')
   
   }
   socket.emit('send_message_seller_to_admin', { /* message data */ })
   useEffect(() => {
      if (sellerId) {
         dispatch(get_admin_message(sellerId))
      }
   }, [sellerId])

   useEffect(() => {
      console.log('suc' , successMessage)
      if (successMessage) {
         socket.emit('send_message_admin_to_seller', seller_admin_message[seller_admin_message.length - 1])
         dispatch(messageClear())
      }
   }, [successMessage])


   useEffect(() => {
      socket.on('receved_seller_message', msg => {
         console.log('Received seller message:', msg);
          setRecevedMessage(msg);
      });
  }, []);
  

   useEffect(() => {
      if (recevedMessage) {
         if (recevedMessage.senderId === sellerId && recevedMessage.receverId === '') {
            dispatch(updateSellerMessage(recevedMessage))
         } else {
            toast.success(recevedMessage.senderName + ' send a message')
         }
      }
   }, [recevedMessage])

   useEffect(() => {
      scrollRef.current?.scrollIntoView({ behavior: 'smooth' })
   }, [seller_admin_message])


   return (
      <div className='px-2 lg:ml-[260px] md:px-7 pt-5'>
         <div className="w-full bg-background-100 px-4 py-4 rounded-md h-[calc(100vh-140px)]">
            <div className="flex w-full h-full relative">
               <div className={`w-[280px] h-full absolute z-10 ${show ? '-left-[16px]' : '-left-[1000px]'} md:left-0 md:relative transition-all`}>
                  <div className="w- pt-5 h-[calc(100vh-177px)] bg-black-500 md:bg-black-500 overflow-y-auto">
                     <div className="flex text-xl justify-between items-center p-4 md:p-0 md:px-3 md:pb-3 text-white-500">
                        <h2>Sellers</h2>
                        <span onClick={() => setShow(false)} className="block cursor-pointer md:hidden"> <IoMdClose /> </span>
                     </div>
                     {
                        sellers?.map((s) => <Link key={s._id} to={`/admin/dashboard/chat-sellers/${s._id}`} className={`h-[60px] flex justify-start gap-2 items-center text-white-100 px-2 rounded-sm py-2  cursor-pointer ${sellerId === s._id ? 'bg-secondary-400 text-white-100' : ''}`}>
                           <div className='relative'>
                              <img className='w-[38px] h-[38px] border-white-100 border-2 max-w-[38px] p-[2px] rounded-full' src={s?.image} alt="image" />
                              {
                                 activeSellers?.some(a => a.sellerId === s._id) && <div className='w-[10px] h-[10px] bg-primary-400 rounded-full absolute right-0 bottom-0'></div>
                              }
                           </div>
                           <div className='flex justify-center items-start flex-col w-full'>
                              <div className='flex justify-between items-center w-full'>
                                 <h2 className='text-base font-semibold'>{s.name}</h2>
                              </div>
                           </div>
                        </Link>)
                     }

                  </div>
               </div>


               <div className="md:w-[calc(100%-200px)] w-full md:pl-4">
                  <div className="flex justify-between items-center">
                     {
                        sellerId && <div className='flex justify-start items-center gap-3'>
                           <div className='relative'>
                              <img className='w-[42px] h-[42px] border-primary-500 border-2 max-w-[38px] p-[2px] rounded-full' src={currentSeller?.image} alt="admin" />
                              <div className='w-[10px] h-[10px] bg-primary-500 rounded-full absolute right-0 bottom-0'></div>
                           </div>
                           <span className='text-white'>{currentSeller?.name}</span>
                        </div>
                     }
                     <div onClick={() => setShow(!show)} className="w-[35px] flex md:hidden h-[35px] rounded-sm bg-primary-100 shadow-sm justify-center cursor-pointer items-center text-black-500">
                        <span><FaList /></span>
                     </div>
                  </div>


                  <div className="py-4">
                     <div className="bg-primary-100 h-[calc(100vh-290px)] rounded-md p-3 overflow-y-auto">

                        {
                           sellerId ? seller_admin_message?.map((m) => {
                              if (m.senderId === sellerId) {
                                 return (
                                    <div ref={scrollRef} key={m._id} className='w-full flex justify-start items-center'>
                                       <div className='flex justify-start items-start gap-2 md:px-3 py-2 max-w-full lg:max-w-[85%]'>
                                          <div>
                                             <img className='w-[38px] h-[38px] border-2 border-black-500 rounded-full max-w-[38px] p-[3px]' src={currentSeller?.image} alt="" />
                                          </div>
                                          <div className='flex justify-center items-start flex-col w-full bg-secondary-400 message-content shadow-lg break-words text-white-500 py-1 px-2 rounded-sm'>
                                             <div>{m.message}</div>
                                          </div>
                                       </div>
                                    </div>
                                 )
                              } else {
                                 return (
                                    <div ref={scrollRef} key={m._id} className='w-full flex justify-end items-center'>
                                       <div className='flex justify-start items-start gap-2 md:px-3 py-2 max-w-full lg:max-w-[85%]'>
                                          <div className='flex justify-center items-start flex-col w-full bg-secondary-400 shadow-md message-content  text-white-100 py-1 px-2 rounded-sm'>
                                             <span>{m.message}</span>
                                          </div>
                                          <div>
                                             <img className='w-[38px] h-[38px] border-2  rounded-full max-w-[38px] p-[3px]' src="http://localhost:3000/images/logo.png" alt="admin" />
                                          </div>
                                       </div>
                                    </div>
                                 )
                              }
                           }) : <div className='w-full h-full flex justify-center items-center flex-col gap-2 text-white'>
                              <span><BsEmojiSmile /></span>
                              <span>Select seller</span>
                           </div>
                        }


                     </div>
                  </div>
                  <form onSubmit={send} className='flex gap-3'>
                     <input value={text} onChange={(e) => setText(e.target.value)} readOnly={sellerId ? false : true} className='w-full flex justify-between px-2  items-center py-[5px]  rounded-md outline-none  text-black-500' type="text" placeholder='input your message' />
                     <button disabled={sellerId ? false : true} className='shadow-lg bg-secondary-400 text-white-100  text-semibold w-[75px] h-[35px] rounded-md text-white flex justify-center items-center'>Send</button>
                  </form>


               </div>



            </div>
         </div>
      </div>
   )
}

export default ChatSellers
