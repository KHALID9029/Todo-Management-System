import React, { useEffect } from 'react'
import { useState } from 'react'
import { saveTodo, getTodo, updateTodo } from '../services/TodoService'
import { useNavigate, useParams } from 'react-router-dom'

const TodoComponenet = () => {

    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [completed,setCompleted] = useState(false)
    const navigator = useNavigate()
    const {id} = useParams()

    function saveOrUpdateTodo(e){
        e.preventDefault()

        const todo = {title,description,completed}
        console.log(todo)

        if(id){

            updateTodo(id,todo).then((response) => {
                console.log(response.data)
                navigator('/todos')
            }).catch((error) => {
                console.error('Error in updating todo',error)
            })
        }else{
            saveTodo(todo).then((response) => {
                console.log(response.data)
                navigator('/todos')
            }).catch((error) => {
                console.error('Error in creating todo',error)
            })
        }    
    }

    function pageTitle(){
        return id ? <h2 className='text-center'>Update Todo</h2> : <h2 className='text-center'>Add Todo</h2>
    }

    useEffect(() => {

        if(id){
            getTodo(id).then((response) => {
                console.log(response.data)
                const todo = response.data
                setTitle(todo.title)
                setDescription(todo.description)
                setCompleted(todo.completed)
            }).catch((error) => {
                console.error('Error in fetching todo',error)
            })
        }
    },[id])

  return (
    <div className='container'>
        <br></br> <br></br>
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                {
                    pageTitle()
                }

                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Todo Title:</label>
                            <input type='text' placeholder='Enter Todo Title' name='title' 
                            className='form-control'
                            value={title} onChange={(e) => setTitle(e.target.value)}/>

                            <label className='form-label'>Todo Description:</label>
                            <input type='text' placeholder='Enter Todo Description' name='description'
                            className='form-control'
                            value={description} onChange={(e) => setDescription(e.target.value)}/>

                            <label className='form-label'>Todo Completed:</label>
                            <select 
                               className='form-control'
                               value={completed}
                               onChange={(e)=>setCompleted(e.target.value)}
                            >
                                <option value={true}>YES</option>
                                <option value={false}>NO</option>

                            </select>

                        </div>

                        <button className='btn btn-success' onClick={(e)=>saveOrUpdateTodo(e)}>Submit</button>
                    </form>

                </div>

            </div>

        </div>

    </div>
  )
}

export default TodoComponenet