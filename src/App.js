import React, { useState, useEffect } from 'react'
import { GenerateId } from './helpers'
import './App.css';
import Header from './components/Header'

function App() {

  const[ presupuesto, setPresupuesto ] = useState(0)
  const[ isValid, setIsValid ] = useState(false)

  const[ gastos, setGastos ] = useState([])
  const[ gastoEditar, setGastoEditar ] = useState([])

  const [modal , setModal ] = useState(false)
  const [animateModal , setAnimateModal ] = useState(false)


    const handleNuevoGasto = ()=>{
      setModal(!modal)
      setGastoEditar({})
      setTimeout(()=>{
        setAnimateModal(true)
    },1500)
    }
  
  useEffect(()=>{
    if(Object.keys(gastoEditar).length > 0){
      setModal(!modal)
      setTimeout(()=>{
          setAnimateModal(true)
      },1500)
    }
  
  }, [gastoEditar])

  const guardarGasto = (gasto)=>{
    gasto.id = GenerateId()
    gasto.fecha = Date.now();
     setGastos([...gastos, gasto])
   
  }
  console.log(gastos)
  return (
    <div className="App">
      <Header
      presupuesto={ presupuesto }
      setPresupuesto={ setPresupuesto }
      isValid={ isValid }
      setIsValid={ setIsValid }
      guardarGasto = { guardarGasto }
      gastos = { gastos }
      setGastoEditar={setGastoEditar}
      modal={ modal }
      setModal={ setModal}
      animateModal={ animateModal }
      setAnimateModal={setAnimateModal}
      handleNuevoGasto={ handleNuevoGasto }
      gastoEditar = { gastoEditar}
      />
    </div>
  );
}

export default App;
