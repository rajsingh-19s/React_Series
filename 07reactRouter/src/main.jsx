import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/home/home'
import About from './components/About/About'
import Contact from './components/Contact/ContactUs'
import User from './components/User/User'


// const router = createBrowserRouter([
//   {
//     path: `/`,
//     element:<Layout/>,

//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"About",
//         element:<About/>
//       },

//       {
//         path:"COntact",
//         element:<Contact/>
//       }
//     ]
// }
// ]
// )
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='About' element={<About/>}/>
      <Route path='Contact' element={<Contact/>}/>
      <Route path='User/:userId' element={<User/>}/> 



    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>,
)
