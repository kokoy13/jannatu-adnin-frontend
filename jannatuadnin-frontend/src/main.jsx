import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Article from './pages/Article'
import About from './pages/About'
import Announcement from './pages/Announcement'

// const ProtectedRoute = ({ children }) => {
//   const token = localStorage.getItem("token")

//   if (!token) {
//     return <Navigate to="/login" replace />
//   }

//   return children
// }

// const GuestRoute = ({ children }) => {
//   const token = localStorage.getItem("token")

//   if (token) {
//     return <Navigate to="/" replace />
//   }

//   return children
// }

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      // <ProtectedRoute>
        <Home/>
      // </ProtectedRoute>
    )
  },
  {
    path: "/gallery",
    element: (
      // <ProtectedRoute>
        <Gallery/>
      // </ProtectedRoute>
    )
  },
  {
    path: "/article",
    element: (
      // <ProtectedRoute>
        <Article/>
      // </ProtectedRoute>
    )
  },
  {
    path: "/about",
    element: (
      // <ProtectedRoute>
        <About/>
      // </ProtectedRoute>
    )
  },
  {
    path: "/announcement",
    element: (
      // <ProtectedRoute>
        <Announcement/>
      // </ProtectedRoute>
    )
  },
])

// const theme = localStorage.getItem("theme")
// if (theme === "dark") {
//   document.documentElement.classList.add("dark")
// }

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
