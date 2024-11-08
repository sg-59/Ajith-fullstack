import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Cart from "./pages/Cart"
import Home from "./pages/Home"

function App(){

  const abc=createBrowserRouter([
    {
      path:'/',
      element:<Home/>
    },
    {
      path:"/cartpage",
      element:<Cart/>
    }
  ])
  return (
    <>
<RouterProvider router={abc}></RouterProvider>
</>
  )
}

export default App