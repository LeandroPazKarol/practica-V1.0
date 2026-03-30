import React, { useState} from 'react'


export const Ejercicio1 = () => {

    const [valor, setValor]=useState(0);
    const incrementar=()=>{
        setValor(valor+1);
    }
    const decrementar=()=>{
        setValor(valor-1);
    }
    const restablecer=()=>{
        setValor(0);
    }

    return (
    <div>
        <h2>Ejercicio 1</h2>
        <h2>Contador</h2>
        <div>{valor}</div>
        <button onClick={decrementar}>Decrementar</button>
        <button onClick={restablecer}>Restablecer</button>
        <button onClick={incrementar}>Incrementar</button>
    </div>
 )
}
