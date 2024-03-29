import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react'

function FocusableInput() {

    const inputRef = useRef(null)
    const mountRef = useRef(false)


    useEffect(() => {
        if (!mountRef.current){
            mountRef.current = true;
            inputRef.current?.focus()
            console.log("componente montato");            
        } else {
            return          
        }

    })
    
  return (
    <div>
        <h2>Focus Input</h2>
        <input ref={inputRef} type="text" name="name" id="" />
    </div>
  )
}

export default FocusableInput