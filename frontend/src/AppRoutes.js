import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Homepage from './Pages/Home/Homepage'
import Foodpage from './Pages/Food/Foodpage'
import CartPage from './Pages/Cart/CartPage'
import Beginner from './Pages/Beginner/Beginner'
import LoginPage from './Pages/Login/LoginPage'
import RegisterPage from './Pages/Register/RegisterPage'
import AuthRoute from './Components/AuthRoute/AuthRoute'
import CheckoutPage from './Pages/Checkout/CheckoutPage'
import PaymentPage from './Pages/Payment/PaymentPage'
import OrderTrackPage from './Pages/OrderTrack/OrderTrackPage'
import ProfilePage from './Pages/Profile/ProfilePage'
import OrderPage from './Pages/Orders/OrderPage'
import Dashboard from './Pages/Dashboard/Dashboard'
import AdminRoute from './Components/AdminRoute/AdminRoute'
import FoodsAdminPage from './Pages/FoodsAdmin/FoodAdminPage'
import FoodEditPage from './Pages/FoodEdit/FoodEditPage'

function AppRoutes() {
  return (
    <Routes>
       <Route path='/' element={<Beginner/>}/>
        <Route path='/home' element={<Homepage/>}/>
        <Route path='/search/:searchTerm' element={<Homepage/>}/>
        <Route path='/tag/:tag' element={<Homepage/>}/>
        <Route path='/food/:id' element={<Foodpage/>}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
      
        <Route 
        path='/checkout'
         element={
          <AuthRoute>
            <CheckoutPage/>
          </AuthRoute>
          }
          />
           <Route
        path="/payment"
        element={
          <AuthRoute>
            <PaymentPage />
          </AuthRoute>
        }
      />
         <Route
        path="/track/:orderId"
        element={
          <AuthRoute>
            <OrderTrackPage/>
          </AuthRoute>
        }
      />
       <Route
        path="/profile"
        element={
          <AuthRoute>
            <ProfilePage />
          </AuthRoute>
        }
      />
      <Route
        path="/orders/:filter?"
        element={
          <AuthRoute>
            <OrderPage />
          </AuthRoute>
        }
      />
      <Route
        path="/dashboard"
        element={
          <AuthRoute>
            <Dashboard />
          </AuthRoute>
        }
      />
      <Route
        path="/admin/foods/:searchTerm?"
        element={
          <AdminRoute>
            <FoodsAdminPage/>
          </AdminRoute>
        }
      />
      <Route
        path="/admin/addFood"
        element={
          <AdminRoute>
            <FoodEditPage/>
          </AdminRoute>
        }
      />
      <Route
        path="/admin/editFood/:foodId"
        element={
          <AdminRoute>
            <FoodEditPage/>
          </AdminRoute>
        }
      />
    </Routes>
  )
}

export default AppRoutes   

