/*
'use client'
import Header from '@/Components/Header'
import { MyContext } from '@/Helper/Context'
import React , {useContext, useState} from 'react'

const page = () => {
  const username=  useContext(MyContext)

  const [num, setnum] = useState(10)

 
  return (
    <div> This is Home page {username}
       <Header num = {num}/>
    </div>
    
  )
}

export default page

'use client'
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const page = () => {
  const notify = () =>{

    toast.info('Login Sucessfull !', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }
  
  return (
    <div>
      <button onClick={notify}>Login</button>
      <ToastContainer/>
    </div>
  )
}

export default page
*/
'use client'
import axios from 'axios'
import React  , {useState} from 'react'


const page = () => {

  const [userdata, setuserdata] = useState("")
  const [num, setnum] = useState(10)
  const getData = async () => {

    const response =  await  axios.get("https://picsum.photos/v2/list")
    const a= JSON.stringify(response.data)
    setuserdata(a)




  }
  return (
    <div>

      <button onClick={getData}>Click</button>
      {userdata}
    </div>
  )
}

export default page