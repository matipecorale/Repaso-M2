import { useState } from 'react'

export default function Contador() {
    const [numero, setNumero] = useState(0);

    const aumentarNum = () => {
        setNumero(numero + 1)
    }
    const disminuirNum = () => {
        if (numero > 0) {
            setNumero(numero - 1);
        }
    }
    return (
        <>
            <h1>{numero}</h1>
            <button onClick={aumentarNum}>Aumentar</button>
            <button disabled={numero === 0} onClick={disminuirNum}>Disminuir</button>
        </>
    );
}