import React from 'react'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Profile from '../pages/Profile'
import { Route, Routes } from 'react-router-dom'
import Error from '../pages/Error'

function AppRoutes() { //Essa é a rota das páginas
  return (
    <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='login/:nome' element = {<Login />} />
        <Route path='profile' element = {<Profile />} />
        <Route path='*' element = {<Error />} />
    </Routes>
  )
}

export default AppRoutes;