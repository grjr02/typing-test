import React, { useState, useEffect } from 'react'

export default function Timer() {
    const [count, setCount] = useState(59);
    const [time, setTime] = useState("01:00");

    const [color, setColor] = useState('whitesmoke');


    useEffect(() => {
        
        const timeout = setTimeout(timer, 1000)

        if(count === 0){
            setTime(`00:0${count}`)
            clearTimeout(timeout);
            setColor("rgba(255, 0, 0, .25)")
        }

    },[count])

    const timer = () => {
        setCount(count-1);

        if(count >= 10) setTime(`00:${count}`)
        else setTime(`00:0${count}`)
        
    }
    return (
        <div className="timercard" style={{border:`2px solid ${color}` }}>
            <span className="timerText">
                {time}
            </span> 
                
           
        </div>
    )
}
