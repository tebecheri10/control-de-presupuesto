import React, { useState } from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'
import Modal from './Modal'
import Filtros from './Filtros'
import ControlPresupuesto from './ControlPresupuesto'
import IconoNuevoGasto from '../img/nuevo-gasto.svg'
import ListadoGastos from './ListadoGastos'

const Header = ({ 
    presupuesto,
    setPresupuesto,
    isValid, 
    setIsValid,
    guardarGasto,
    gastos, 
    setGastoEditar,
    modal,
    setModal,
    animateModal,
    setAnimateModal,
    handleNuevoGasto,
    gastoEditar,
    handleRemoveItem,
    filtro,
    setFiltro,
    gastosFiltrados,
    setGastos
 }) => {
    


    return (
    <div className={modal && 'fijar'}>
        <header>
            <h1>Planificador de gastos</h1>
            {isValid? (
                <ControlPresupuesto
                presupuesto={presupuesto}
                setPresupuesto={ setPresupuesto}
                gastos={ gastos }
                setGastos={ setGastos }
                setIsValid = { setIsValid }
                />
            ):
            (
                <NuevoPresupuesto
                presupuesto={presupuesto}
                setPresupuesto={setPresupuesto}
                setIsValid={setIsValid}
              />
            )


            }
          
        </header>
        {isValid && (
        <>
        <main>
            <Filtros
            filtro= { filtro }
            setFiltro = { setFiltro}
            />
            <ListadoGastos
            gastos={ gastos }
            setGastoEditar = {setGastoEditar}
            handleRemoveItem = { handleRemoveItem }
            gastosFiltrados = { gastosFiltrados }
            filtro={ filtro } 
            />
        </main>
        <div className='nuevo-gasto'>
                <img
                 src={IconoNuevoGasto}
                 alt="nuevo gasto"
                 onClick={handleNuevoGasto}
                  />
        </div>
        </>
        )}
        

        {modal && 
        <Modal 
        setModal={setModal}
        modal={modal}
        animateModal={animateModal}
        setAnimateModal={setAnimateModal}
        guardarGasto={ guardarGasto }
        gastoEditar={ gastoEditar }
        setGastoEditar = { setGastoEditar }
        />

        }
    

    </div>
  )
}

export default Header