import React, { useState } from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'
import Modal from './Modal'
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
    gastoEditar
 }) => {
    


    return (
    <div className={modal && 'fijar'}>
        <header>
            <h1>Planificador de gastos</h1>
            {isValid? (
                <ControlPresupuesto
                presupuesto={presupuesto}
                gastos={ gastos }
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
            <ListadoGastos
            gastos={ gastos }
            setGastoEditar = {setGastoEditar}
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
        />

        }
    

    </div>
  )
}

export default Header