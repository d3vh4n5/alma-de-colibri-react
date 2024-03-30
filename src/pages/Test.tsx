import { useState, useEffect } from "react"


export const Test = () => {

  const [cantidad, setCantidad] = useState('')

  const guardarContador = (n: string): void =>{
    localStorage.setItem('counter', n)
  }

  function handleClick() {
    // window.dispatchEvent(new Event("storage"));
    guardarContador(cantidad)
    // setCantidad('')
  }
  
  
  
  useEffect(()=>{
    const storageEvent = new StorageEvent("storage", {
      key: "counter",
      oldValue: localStorage.getItem("counter"),
      newValue: localStorage.getItem("counter"),
      storageArea: localStorage,
    });
    window.dispatchEvent(storageEvent);
    
    // const cantidadGuardada = localStorage.getItem('counter')
    // if (cantidadGuardada != null) setCantidad(cantidadGuardada)
    
    window.addEventListener('storage', (e): void => {
      console.warn('Se actualizó el storage', e.newValue)
      if (e.newValue === null) return
      setCantidad(e.newValue)
    })
  }, [])


  // console.log(cantidad)

  return (
    <div>
      <h1>
        Test Page
      </h1>

      <h3>
        Esto funciona solo si hay mas de 1 pestaña abierta
      </h3>
      <p>cantidad:  {cantidad}</p>
      <input type="number" name="" id="" onChange={(ev)=>setCantidad( ev.target.value)} value={cantidad}/>
      <button onClick={handleClick}>cargar</button>
    </div>
  )
}
