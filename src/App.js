import React from 'react'
import Assignment from './components/Assignment'
import Assignment1 from './components/Assignment1'
import Masai from './components/Masai'
import UserProfile from './components/UserProfile'
import myimg from './Asset/treeImg.jpg'
const App = () => {
  const userdata=[{name:"pyare",img:myimg,title:"software developer" ,skill:"react.js"}]
  return (
    <div>
 {/* < Assignment/> */}
 {/* <Assignment1/> */}
 {/* <Masai/> */}
 <UserProfile userdata={userdata}/>
    </div>
  )
}

export default App