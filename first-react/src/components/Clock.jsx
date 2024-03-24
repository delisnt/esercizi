import React, { useEffect, useState } from 'react'

function Clock() {
    const [date, setDate] = useState(new Date());
    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }

    }, [])
  return (
    <div>
        <h2>{date.toLocaleTimeString()}</h2>
    </div>
  )
}

export default Clock