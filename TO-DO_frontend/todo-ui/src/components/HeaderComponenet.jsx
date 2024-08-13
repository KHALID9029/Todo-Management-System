import React from 'react'
import { NavLink } from 'react-router-dom'
import { isUserLoggedIn, logOut } from '../services/AuthService'
import { useNavigate } from 'react-router-dom'

const HeaderComponenet = () => {


    const isAuth = isUserLoggedIn();
    const navigate = useNavigate()

    function handleLogOut() {
        logOut();
        navigate('/login')
    }

  return (
    <div>
        <header>
            <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                <div><a href='http://localhost:3000' className='navbar-brand'>TODO Management Application</a></div>

                <div className='collapse navbar-collapse'>
                    <ul className='navbar-nav'>
                        {
                            isAuth && (
                                <li className='nav-item'>
                                    <NavLink to="/todos" className="nav-link">TODOS</NavLink>
                                </li>
                            )
                        }
                        
                    </ul>
                </div>

                    <ul className='navbar-nav'>
                        {
                            !isAuth && (
                                <li className='nav-item'>
                                    <NavLink to="/register" className="nav-link">Register</NavLink>
                                </li>
                            )
                        }
                        
                        {
                            !isAuth && (
                                <li className='nav-item'>
                                    <NavLink to="/login" className="nav-link">LogIn</NavLink>
                                </li>
                            )
                        }

                        {
                            isAuth && (
                                <li className='nav-item'>
                                    <NavLink to="/login" className="nav-link" onClick={handleLogOut}>LogOut</NavLink>
                                </li>
                            )
                        }
                    </ul>
            </nav>
        </header>
    </div>
  )
}

export default HeaderComponenet