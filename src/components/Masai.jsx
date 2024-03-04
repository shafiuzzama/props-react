import React from 'react'

const Masai = () => {
    const handleClick=()=>{
        alert("you click on masai")
    }
  return (
    <div>Masai
       <button type="button" onClick={handleClick}>masai</button> 
    </div>
  )
}

export default Masai