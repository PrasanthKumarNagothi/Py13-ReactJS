import { useState } from 'react'
import Home from './components/Home'
import Counter from './components/Counter'
import PasswordGenerator from './components/PasswordGenerator'
import Backend from './components/Backend'
import Todos from './components/Todos'
import Layout from './Layout'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements (
      <>
        <Route path='/' element={<Layout />}>
          <Route path='' element={<Home />} />
          <Route path='counter' element={ <Counter /> } />
          <Route path='password' element={ <PasswordGenerator /> } />
          <Route path='todo' element={ <Todos /> } />
        </Route>
        
      </>
    )
  )
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
