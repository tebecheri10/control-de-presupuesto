import React from 'react'
import Gasto from './Gasto'

const ListadoGastos = ({ gastos, setGastoEditar }) => {
  return (
    <div className='listado-gastos contenedor'>
        <h2>{gastos.length? 'Gastos': 'No hay gastos aún'}</h2>
        {gastos.map(gasto =>{
            return (
                <Gasto
                key={gastos.id}
                gasto={gasto}
                setGastoEditar={setGastoEditar}
                />
            )
        })}
    </div>
  )
}

export default ListadoGastos