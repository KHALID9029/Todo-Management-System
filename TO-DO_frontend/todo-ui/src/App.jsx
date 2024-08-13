import { useState } from 'react'
import './App.css'
import ListTodoComponenet from './components/ListTodoComponenet'
import HeaderComponenet from './components/HeaderComponenet'
import FooterComponent from './components/FooterComponent'
import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import TodoComponenet from './components/TodoComponenet'
import RegisterComponent from './components/RegisterComponent'
import LogInComponent from './components/LogInComponent'
import { isUserLoggedIn } from './services/AuthService'

function App() {

  function AuthenticatedRoute({children}){

    const isAuth = isUserLoggedIn();

    if(isAuth){
      return children;
    }
    
    return <Navigate to="/"></Navigate>
  }

  return (
    <>
    <BrowserRouter>

      <HeaderComponenet />

      <Routes>
        {/* http://localhost:8080 */}
        <Route path='/' element={<LogInComponent />} />

        {/* http://localhost:8080/todos */}
        <Route path='/todos' element={
          <AuthenticatedRoute>
            <ListTodoComponenet/>
          </AuthenticatedRoute>
        } />

        {/* http://localhost:8080/add-todo */}
        <Route path='/add-todo' element={
          <AuthenticatedRoute>
            <TodoComponenet/>
          </AuthenticatedRoute>
        } />

        {/* http://localhost:8080/update-todo/1 */}
        <Route path='/update-todo/:id' element={
          <AuthenticatedRoute>
            <TodoComponenet/>
          </AuthenticatedRoute>
        } />

        {/* http://localhost:8080/register */}
        <Route path='/register' element={<RegisterComponent/>} />

        {/* http://localhost:8080/login */}
        <Route path='/login' element={<LogInComponent/>} />

      </Routes>
      
      <FooterComponent />

    </BrowserRouter>
    </>
  )
}

export default App
