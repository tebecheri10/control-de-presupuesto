import React, { useState, useEffect } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"

const ControlPresupuesto = ({ 
    presupuesto,
    gastos,
    setGastos,
    setPresupuesto,
    setIsValid
    }) => {
    const [disponible, setDisponible ] = useState(0)
    const [gastado, setGastado ] = useState(0)
    const [porcentaje, setPorcentaje ] = useState(0)



    useEffect(()=>{
            const totalGastado = gastos.reduce((total, gasto)=> Number(gasto.cantidad) + total, 0)
            setGastado(Number(totalGastado))

            const totalDisponible = presupuesto - totalGastado
            setDisponible(totalDisponible)

            const nuevoPorcentaje = ((presupuesto - totalDisponible )/ presupuesto) * 100;
            setPorcentaje(nuevoPorcentaje)
    },[gastos])
    

    const formatCurrency = (amount)=>{
        return amount.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }
   const handleResetApp = ()=>{
      const resultado = window.confirm("¿Deseas vaciar reiniciar tu presupuesto y tus gastos?")
    if(resultado){
        setGastos([])
        setPresupuesto([])
        setIsValid(false)
    }
    }

  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <div className=''>
        <CircularProgressbar
        value={porcentaje}
        styles={ buildStyles({
            pathColor: disponible < 0 ?"red" :"#3b82f6",
            trailColor: "#f5f5f5",
            textColor: disponible < 0 ?"red" :"#3b82f6"
       })}
       text={`${porcentaje.toFixed(2)}% Gastado`}
        />
        </div>
        <div className="contenido-presupuesto">
            <button
             className='reset-app'
             type='button'
             onClick={handleResetApp}
             >
                Resetear presupuesto
            </button>
            <p>
                <span> Presupuesto:</span> {formatCurrency(presupuesto) }
            </p>
            <p className={ `${disponible < 0 ? "negativo": ""}`}>
                <span> Disponible:</span> {formatCurrency(disponible) }
            </p>
            <p>
                <span> Gastado:</span> {formatCurrency(gastado) }
            </p>
        </div>

    </div>
  )
}

export default ControlPresupuesto