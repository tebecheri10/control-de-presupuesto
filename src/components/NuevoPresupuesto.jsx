import React, { useState } from 'react'
import Message from './Message'

const NuevoPresupuesto = ({ presupuesto, setPresupuesto, setIsValid }) => {

    const [ message, setMessage ] = useState("")

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(!presupuesto || presupuesto < 0 ){
            setMessage("No es un presupuesto válido")
            return
        }else{
            setIsValid(true)
        }
    }

    return (
        <div className="contenedor-presupuesto contenedor sombra">
            <form onSubmit={handleSubmit} className='formulario' action="">
                <div className='campo'>
                    <label htmlFor="">Definir presupuesto</label>
                    <input
                        className="nuevo-presupuesto"
                        type="number"
                        placeholder='Añade tu presupuesto'
                        onChange={(e) => setPresupuesto(Number(e.target.value))}
                    />
                </div>
                <input
                    type="submit"
                    value="Añadir"
                />
                { message && <Message tipo="error">{message}</Message> }
            </form>
        </div>
    )
}

export default NuevoPresupuesto