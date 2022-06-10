import React, { useState, useEffect } from 'react'
import { GenerateId } from './helpers'
import './App.css';
import Header from './components/Header'

function App() {

  const[ presupuesto, setPresupuesto ] = useState(
    Number(localStorage.getItem("presupuesto"))??0
  )
  const[ isValid, setIsValid ] = useState(false)
  const[ gastos, setGastos ] = useState(
    localStorage.getItem("gastos") ? JSON.parse(localStorage.getItem("gastos")): []
  )
  const[ gastoEditar, setGastoEditar ] = useState([])

  const [modal , setModal ] = useState(false)
  const [animateModal , setAnimateModal ] = useState(false)
  const [filtro , setFiltro ] = useState("")
  const [gastosFiltrados, setGastosFiltrados ] = useState([])
  

    const handleNuevoGasto = ()=>{
      setModal(!modal)
      setGastoEditar({})
      setTimeout(()=>{
        setAnimateModal(true)
    },1500)
    }

    const handleRemoveItem = (id)=>{
          setGastos(gastos.filter(item=>item.id !== id))
    }

  useEffect(()=>{
    if(Object.keys(gastoEditar).length > 0){
      setModal(!modal)
      setTimeout(()=>{
          setAnimateModal(true)
      },1500)
    }
  
  }, [gastoEditar])

  useEffect(()=>{
      localStorage.setItem("presupuesto", presupuesto ?? 0)
  }, [presupuesto])

  useEffect(()=>{
   localStorage.setItem("gastos", JSON.stringify(gastos)?? [])
}, [gastos])
  
  useEffect(()=>{
    const presupuestoLS = Number(localStorage.getItem("presupuesto"))
    if(presupuestoLS > 0){
      setIsValid(true)
    }
}, [])

useEffect(()=>{
  if(filtro){
    const gastosFiltrados = gastos.filter(gasto=> gasto.categoria === filtro)
    setGastosFiltrados(gastosFiltrados)
  }
}, [filtro])

  const guardarGasto = (gasto)=>{
    if(gasto.id){
        const gastosActualizados = gastos.map(gastoState=> gastoState.id === gasto.id? gasto : gastoState)
    setGastos(gastosActualizados)
    setGastoEditar({})
      }else{
      gasto.id = GenerateId()
      gasto.fecha = Date.now();
       setGastos([...gastos, gasto])
    }
    setAnimateModal(false)
    
      setTimeout(()=>{
        setModal(!modal)
      },500)
   
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
      handleRemoveItem = { handleRemoveItem}
      filtro = { filtro }
      setFiltro = { setFiltro }
      gastosFiltrados={ gastosFiltrados }
      setGastos={ setGastos }
      />
    </div>
  );
}

export default App;
