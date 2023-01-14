import { useState } from "react"

export const Input = () => {
    const [input, setInput] = useState('');

    const handleChange = (ev) => {
        setInput(ev.target.value);
    }
    return (
        <>
            <label htmlFor="input">Usuario</label>
            <input type="text" id='input' value={input} onChange={handleChange} />
            <h1>{input}</h1>
        </>
    )
}