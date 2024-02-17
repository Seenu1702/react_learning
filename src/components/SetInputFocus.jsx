/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'

function SetInputFocus({inputRef}) {

    // set the focus of the input
    useEffect(() =>{
        inputRef.current.focus();
    })
  return (
    <div>

    </div>
  )
}

export default SetInputFocus