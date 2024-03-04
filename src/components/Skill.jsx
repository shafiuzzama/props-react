import React from 'react'

const Skill = ({skilldata}) => {
  return (
    <div>
        {skilldata.map((item)=>{
            return(
                <>
               <li>{item}</li>
                </>
            )
        })}
    </div>
  )
}

export default Skill