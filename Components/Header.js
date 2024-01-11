'use client'
import { MyContext } from '@/Helper/Context'
import React , {useContext} from 'react'
import Nav from './Nav'

const Header = (props) => {
     const username = useContext(MyContext)
    
  return (
    <div className='bg-yellow-300 p-5'>Header {username}
    <Nav num = {props.num}/>
    </div>
  )
}

export default Header