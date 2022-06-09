import React, { useState, useEffect } from 'react'
import CerrarModal from '../img/cerrar.svg'
import Message from './Message'

const Modal = ({ 
  setModal,
   modal,
  animateModal,
  setAnimateModal,
  guardarGasto, 
  gastoEditar 
  }) => {

  const [nombreGasto, setNombreGasto ] = useState("")
  const [cantidad, setCantidad ] = useState("")
  const [categoria, setCategoria ] = useState("")
  const [mensaje , setMensaje ] = useState("")

  useEffect(()=>{
    if(Object.keys(gastoEditar).length > 0){
       setNombreGasto(gastoEditar.nombreGasto);
       setCantidad(gastoEditar.cantidad)
       setCategoria(gastoEditar.categoria)
    }
  }, [])

   const  handleCloseModal = ()=>{
        setModal(!modal)
        setAnimateModal(!animateModal)
    }

    const  handleSubmit = (e)=>{
      e.preventDefault()
      if([nombreGasto, cantidad, categoria].includes("")){
         setMensaje("Todos los mensajes son obligatorios");
          return
      }
      guardarGasto({nombreGasto, cantidad, categoria})
  }


  return (
    <div className='modal'>
           <div className='cerrar-modal'>
                <img
                  src={CerrarModal}
                  alt="" 
                  onClick={handleCloseModal}
                  />
           </div>
           <form className={`formulario ${animateModal? "animar": ""}`} action="" onSubmit={handleSubmit}>
           <legend>{gastoEditar.nombreGasto?'Editar gasto':'Nuevo gasto'}</legend>
            <div className='campo'>
            <label htmlFor="nombre">Nombre de Gasto</label>
              <input 
              id='nombre'
              type="text"
              onChange={(e)=> setNombreGasto(e.target.value)}
              value={nombreGasto}
              placeholder='Añade el nombre del gasto'
              />
            </div>
            <div className='campo'>
            <label htmlFor="cantidad">Cantidad</label>
              <input 
              id='cantidad'
              type="number"
              onChange={(e)=> setCantidad(e.target.value)}
              value={cantidad}
              placeholder='Añade la cantidad del gasto , ej: 300'
              />
            </div>
            <div className='campo'>
            <label htmlFor="categoria">CategorÍa</label>
            <select name="categoria" id="categoria" onChange={(e)=>setCategoria(e.target.value)} value={categoria}>
                <option value="">-- seleccione --</option>
                <option value="ahorro">Ahorro</option>
                <option value="comida">Comida</option>
                <option value="casa">Casa</option>
                <option value="gastos">Gastos</option>
                <option value="ocio">Ocio</option>
                <option value="salud">Salud</option>
                <option value="suscripciones">Suscripciones</option>
            </select>
            </div>
             <input 
             type="submit"
             value={gastoEditar.nombreGasto?'Guardar cambios':'Añadir gasto'}
             />
           </form>
           { mensaje && <Message tipo="error">{ mensaje }</Message>}
    </div>
  )
}

export default Modal