import React from 'react'

const Name = ({name}) => {
    const data=true
  return (
    <div>Name
  {data ? <h1>{name}</h1> : null}
    </div>
  )
}

export default Name