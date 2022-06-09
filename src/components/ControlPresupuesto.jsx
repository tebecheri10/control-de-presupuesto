import React, { useState, useEffect } from 'react'


const ControlPresupuesto = ({ presupuesto, gastos}) => {
    const [disponible, setDisponible ] = useState(0)
    const [gastado, setGastado ] = useState(0)



    useEffect(()=>{
            const totalGastado = gastos.reduce((total, gasto)=> Number(gasto.cantidad) + total, 0)
            setGastado(Number(totalGastado))

            const totalDisponible = presupuesto - totalGastado
            setDisponible(totalDisponible)
    },[gastos])
    

    const formatCurrency = (amount)=>{
        return amount.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }

  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <div className=''>
            <p>Grafica</p>
        </div>
        <div className="contenido-presupuesto">
            <p>
                <span> Presupuesto:</span> {formatCurrency(presupuesto) }
            </p>
            <p>
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