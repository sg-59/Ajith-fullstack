import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Hey from "./Pages/Hey"
import Sample from "./Pages/Sample"
import Hello from './Pages/Hello'


function App(){

  const router=createBrowserRouter([
    {
      path:"/",
      element:<Sample/>
    },
    {
      path:"/hello",
      element:<Hello/>
    },
    {
      path:"/hey",
      element:<Hey/>
    }
  ])


  return (
    <>
<RouterProvider router={router}></RouterProvider>

</>
  )
}

export default App