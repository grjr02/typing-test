import React, { useState, useEffect } from 'react'

export default function DynamicInput() {
    const [input, setInput] = useState('');

    useEffect(() => {

        console.log(input)
        
    }, [input])

    const eventHandler = (e) => {
        setInput(e.target.value);
    }

    return (
        <input className="typingInput" type="text" value={input} onChange={(e) => eventHandler(e)}/>
    )
}
