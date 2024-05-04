import { useState } from 'react'
import Login from './Ui/pages/Login/Login'
import Router from './Router/Router'
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <>
      <Router />
      <ToastContainer />
    </>
  )
}

export default App
