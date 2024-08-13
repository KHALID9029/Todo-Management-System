import React, { useState } from 'react'
import { loginAPICall, saveLoggedInUser, storeToken } from '../services/AuthService'
import { useNavigate } from 'react-router-dom'

const LogInComponent = () => {

    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    async function handleLogInForm(e) {

        e.preventDefault()

        await loginAPICall(username, password).then((response) => {
            console.log('User Logged In Successfully', response.data)

            const token = 'Basic '+ window.btoa(username + ":" + password);
            storeToken(token);
            saveLoggedInUser(username);

            navigate('/todos')

            window.location.reload(false);
        }).catch((error) => {
            console.error('Error while logging in user', error)
        })
    }


  return (
    <div className='conatiner'>
        <br></br> <br></br>
        <div className='row'>
            <div className='col-md-6 offset-md-3'>
                <div className='card'>
                    <div className='card-header'>
                        <h2 className='text-center'>LogIn Form</h2>
                    </div>

                    <div className='card-body'>
                        <form>
                            <div className='row mb-3'>
                                <label className='col-md-3 control-label'>Username Or Email</label>

                                <div className='col-md-9'>
                                    <input 
                                        type='text' 
                                        name='username'
                                        className='form-control'
                                        placeholder='Enter Username Or Email' 
                                        value={username} 
                                        onChange={(e) => setUserName(e.target.value)} 
                                    />
                                </div>
                            </div>

                            <div className='row mb-3'>
                                <label className='col-md-3 control-label'>Password</label>

                                <div className='col-md-9'>
                                    <input 
                                        type='password' 
                                        name='password'
                                        className='form-control'
                                        placeholder='Enter Password' 
                                        value={password} 
                                        onChange={(e) => setPassword(e.target.value)} 
                                    />
                                </div>
                            </div>

                            <div className='form-group mb-3'>
                                <button className='btn btn-primary' onClick={(e) => handleLogInForm(e)}>LogIn</button>
                            </div>

                        </form>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default LogInComponent