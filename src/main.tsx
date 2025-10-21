import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import '@/styles/globals.css'
import { Layout } from './components/Layout'
import HomePage from './app/HomePage'
import AboutPage from './app/AboutPage'
import ProductsPage from './app/ProdutcsPage'
import ContactPage from './app/ContactPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'products', element: <ProductsPage /> },
      { path: 'contact', element: <ContactPage /> },
    ],
  },
])

const root = document.getElementById('root') as HTMLElement

ReactDOM.createRoot(root).render(<RouterProvider router={router} />)
