import Home from "./Pages/Home";
import About from "./Pages/About";
import {createBrowserRouter,RouterProvider,createRoutesFromElements,Route,Link} from "react-router-dom";
import './App.css'
import RootLayOut from "./Components/RootLayOut";
 


function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<RootLayOut/>}>
      <Route path='/' element={<Home/>}/>
      {/* <Route path='/courses' element={<Courses/>}/> */}
      <Route path='/about' element={<About/>}/>
      {/* <Route path='/pricing' element={<Pricing/>}/>
      <Route path='/contact' element={<Contact/>}/> */}

      </Route>
 
  ))

 

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
