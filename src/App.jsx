import Hello from "./pages/Hello"
import Sample from "./pages/Sample"
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
export const App=()=>{

  const abc=createBrowserRouter([
    {
      path:'/',
      element:<Sample/>
    },
    {
      path:'/cartpage',
      element:<Hello/>
    }
  ])

  return (
    <>
 <RouterProvider router={abc}></RouterProvider>
    </>
  )
}
export default App

