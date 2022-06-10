import React from 'react'
import Gasto from './Gasto'

const ListadoGastos = ({ gastos, setGastoEditar, handleRemoveItem, gastosFiltrados, filtro }) => {
  return (
    <div className='listado-gastos contenedor'>
    
      {
        filtro ? (
          <>  
            <h2>{gastosFiltrados.length ? 'Gastos' : 'No hay gastos aún'}</h2>
            {gastosFiltrados.map(gasto => {
              return (
                <Gasto
                  key={gastos.id}
                  gasto={gasto}
                  setGastoEditar={setGastoEditar}
                  handleRemoveItem={handleRemoveItem}
                />
              )
            })}
          </>
        ) : (
            <>
               {gastos.map(gasto => {
                return (
                  <Gasto
                    key={gastos.id}
                    gasto={gasto}
                    setGastoEditar={setGastoEditar}
                    handleRemoveItem={handleRemoveItem}
                  />
                )
              })}
            </>
            
       
          )
      }

    </div>
  )
}

export default ListadoGastos