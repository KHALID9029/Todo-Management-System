import './App.css';
import ListTodoComponenet from './components/ListTodoComponenet'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import TodoComponenet from './components/TodoComponenet';

function App() {

  return (
    <>
    <Router>
      <HeaderComponent/>

        <Routes>
          {/* http:localhost:8080 */}
        <Route path='/' element={<ListTodoComponenet/>}/>
           
          {/* http:localhost:8080/todos */}
        <Route path='/todos' element={<ListTodoComponenet/>}/>

          {/* http:localhost:8080/add-todo */}
          <Route path='/add-todo' element={<TodoComponenet/>}/>

          {/* http:localhost:8080/update-todo/1 */}
          <Route path='/update-todo/:id' element={<TodoComponenet/>} />
        </Routes>

       
      <FooterComponent/>
    </Router>
    </>
  )
}

export default App
