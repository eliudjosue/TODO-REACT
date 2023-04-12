import React, { useRef, useState } from 'react'


const NoControlado = () => {
  const [error, setError] = useState("")
  const form = useRef(null)


  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    //*capturar datos
    const data = new FormData(form.current)
    //*destructuring
    const { title, description, state } = Object.fromEntries([...data.entries()]);
    //*validar datos
    if (!title.trim() || !description.trim() || !state.trim()) return setError("Debes completar todos los campos");
    //* enviar datos
    console.log(title, description, state);
  }

  return (
    <div className="container">
      <h3>Formulario</h3>
      <form action="" className='form-control' onSubmit={handleSubmit} ref={form}>
        <input
          type="text"
          placeholder="Ingrese todo"
          className="form-control mb-2"
          name="title"
          defaultValue="todo #01"
        />
        <textarea
          type="text"
          name="description"
          placeholder="Ingrese descripcion"
          className="form-control mb-2"
          defaultValue="descripcion #01"
        />
        <select className="form-select mb-2" name="state" defaultValue="Completado">
          <option value="Pendiente">Pendiente</option>
          <option value="Completado">Completado</option>
        </select>

        <button type="submit" className="btn btn-primary">
          Procesar
        </button>
        {error !== "" && error}
      </form>
    </div>

  )
}

export default NoControlado