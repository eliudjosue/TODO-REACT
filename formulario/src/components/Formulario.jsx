import Swal from 'sweetalert2'
import React, { useState } from 'react'

const Formulario = ({addTodo}) => {

    const [todo, setTodo] = useState({
        title: "tarea #1",
        description: "description #1",
        state: "Pendiente",
        priority: true,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim() || !description.trim()) {
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Titulo y descripcion son obligatorios!',
              })
            
        }

        addTodo({
            id:Date.now,
            ...todo,
            state: state === 'completado'
        })

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Todo completado',
            showConfirmButton: false,
            timer: 1500
          })
    }

    const handleChange = (e) => {
        const { value, name, checked, type } = e.target
        setTodo({
            ...todo,
            [name]: type === "checkbox" ? checked : value,
        }
        )
    }

    const { title, description, state, priority } = todo;

    return (
        <div className="container">
            <h3>Formulario</h3>
            <form action="" className='form-control' onSubmit={handleSubmit} >
                <input
                    type="text"
                    placeholder="Ingrese todo"
                    className="form-control mb-2"
                    name="title"
                    value={title}
                    onChange={handleChange}
                />
                <textarea
                    type="text"
                    name="description"
                    placeholder="Ingrese descripcion"
                    className="form-control mb-2"
                    value={description}
                    onChange={handleChange}
                />

                <div className="form-check mb-2">
                    <input
                        type="checkbox"
                        name="priority"
                        className='form-check-input'
                        id='inputcheck'
                        checked={priority}
                        onChange={handleChange} />
                    <label htmlFor="inputcheck">Dar prioridad</label>
                </div>
                <select className="form-select mb-2"
                    name="state"
                    value={state}
                    onChange={handleChange}>

                    <option value="Pendiente">Pendiente</option>
                    <option value="Completado">Completado</option>

                </select>

                <button type="submit" className="btn btn-primary">
                    Agregar Todo
                </button>
            </form>
        </div>

    )
}

export default Formulario;