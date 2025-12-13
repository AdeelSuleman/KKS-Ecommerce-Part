import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Page404 from '../pages/Page404'
import AppLayout from '../layouts/AppLayout'

const AppRoutes = () => {
  return (
    <BrowserRouter> 
        <Routes>
            <Route path="/" element=<AppLayout/> />
            <Route path="/shop" element=<AppLayout/> />
            <Route path="/product/:id" element=<AppLayout/> />
            <Route path="/cart" element=<AppLayout/> />
            <Route path='*' element=<Page404/> />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes