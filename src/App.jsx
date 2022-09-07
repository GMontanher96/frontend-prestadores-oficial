import React from 'react'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import AppRoutes from './AppRoutes'
import GlobalStyle from './styles/global'

const App = () => {
  return (
    <div className='app'>
    <AppRoutes />
    <GlobalStyle />
    </div>
  )
}

export default App