import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './components/Root/Root.jsx'
import Home from './components/Home/Home.jsx'
import ErrorPage from './components/ErrorPage/ErrorPage.jsx'
import Statistic from './components/Statistic/Statistic.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import AboutUs from './components/AboutUs/AboutUs.jsx'
import Products from './components/Products/Products.jsx'
import ProductDetails from './components/ProductDetails/ProductDetails.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('../categories.json'),
        children: [
          {
            path: '/',
            loader: () => fetch('../ghproducts.json'),
            element: <Products></Products>
          },
          {
            path: '/category/:category_id',
            loader: () => fetch('../ghproducts.json'),
            element: <Products></Products>
          }

        ]
      },
      {
        path: '/product/:product_id',
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch('../ghproducts.json')
      },
      {
        path: '/statistic',
        element: <Statistic></Statistic>

      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
      },
      {
        path: '/about-us',
        element: <AboutUs></AboutUs>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
