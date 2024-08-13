import React, { useEffect } from 'react'
import { useState } from 'react'
import { getTodo, saveTodo, updateTodo } from '../services/TodoService'
import { useNavigate, useParams } from 'react-router-dom'

const TodoComponenet = () => {

    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [completed,setCompleted] = useState(false)
    const navigate = useNavigate()
    const {id} = useParams()


    function saveOrUpdateTodo(e) {

        e.preventDefault()

        const todo = {title,description,completed}
        console.log(todo)

        if(id){
            updateTodo(id,todo).then((response) => {
                console.log('Todo Updated Successfully', response)
                navigate('/todos')
            }).catch((error) => {
                console.error('Error while updating Todo', error)
            })
        }else{
            saveTodo(todo).then((response) => {
                console.log('Todo Added Successfully', response)
                navigate('/todos')
            }).catch((error) => {
                console.error('Error while adding Todo', error)
            })
        }
    }


    function pageTitle(){
        if(id){
            return <h2 className='text-center'>Update TODO</h2>
        }else{
            return <h2 className='text-center'>Add TODO</h2>
        }
    }


    useEffect(() => {

        if(id){
            getTodo(id).then((response) => {
                console.log('Todo:', response.data)
                setTitle(response.data.title)
                setDescription(response.data.description)
                setCompleted(response.data.completed)
            }).catch((error) => {
                console.error('Error fetching todo by id:', error)
            })
        }
    }, [id])


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
                            <input 
                                type='text' 
                                placeholder='Enter Todo Title' 
                                name='title' 
                                className='form-control' 
                                value={title} onChange={(e) => setTitle(e.target.value)} 
                            />
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Todo Description:</label>
                            <input 
                                type='text' 
                                placeholder='Enter Todo Description' 
                                name='description' 
                                className='form-control' 
                                value={description} onChange={(e) => setDescription(e.target.value)} 
                            />
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Todo Completed:</label>
                            <select
                                className='form-control'
                                value={completed}
                                onChange={(e) => setCompleted(e.target.value)}
                            >
                                <option value='false'>No</option>
                                <option value='true'>Yes</option>
                            </select>
                        </div>

                        <button className='btn btn-success' onClick={(e)=> saveOrUpdateTodo(e)}>Add Todo</button>
                    </form>

                </div>

            </div>

        </div>

    </div>
  )
}

export default TodoComponenet