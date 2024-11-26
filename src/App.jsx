import './App.css'
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router'
import MainLayout from './layouts/MainLayout'
import Products from './pages/Products'

const App = () => {

  const router= createBrowserRouter(
    createRoutesFromElements(
      <Route path ='/' element={<MainLayout/>}>
        <Route path='/products' element={<Products/>}/>
      </Route>
    )
  )
  return <RouterProvider router={router}/>
 
}

export default App