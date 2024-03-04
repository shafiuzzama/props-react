import React, { useState } from 'react'
import myImg  from '../Asset/treeImg.jpg'
import Name from './Name';

const Assignment = () => {
    const data= false;
    const name="pyare siddiqui"
   
  return (

    <div>
       {data ? <img src={myImg}  alt='' style={{border:"1rem solid red"}}/> :<img src={myImg}  alt='' style={{borderRadius:"50%"}}/> }
       {/* { hidename ? <h1> pyare siddiqui</h1> : null}  */}
       <Name name={name}/>
    </div>
    
   
  )
}

export default Assignment