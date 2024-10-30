import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Hai from "./Pages/Hai"
import Sample from "./pages/Sample"

function App(){

  const abc=createBrowserRouter([
    {
path:'/',
element:<Sample/>
  },
  {
    path:"/cartpage",
    element:<Hai/>
  }
])

  return (
<RouterProvider router={abc}></RouterProvider>
  )
}

export default App