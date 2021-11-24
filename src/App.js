import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthProvider from './Context/AuthProvider';
import Navbar from './Pages/Navbar/Navbar';
import ScrollToTop from './Pages/Shared/ScrollToTop';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Login from './Pages/Login/Login';
import NotFound from "./Pages/NotFound/NotFound";
import ContactUs from './Pages/Contact Us/ContactUs';
import Register from './Pages/Register/Register';
import ForgatePass from './Pages/Login/ForgatePass/ForgatePass';
import AfterResetPass from './Pages/Login/ForgatePass/AfterResetPass';
import AboutUs from './Pages/AboutUs/AboutUs';
import Home from './Pages/Home/Home';
import Footer from './Pages/Footer/Footer';
import Shop from './Pages/Shop/Shop';
import AddProduct from './Pages/Dashboard/AddProduct/AddProduct';
import ProductDetails from './Pages/Shop/ProductDetails/ProductDetails';
import OrderNow from './Pages/Shop/OrderNow/OrderNow';
import ManageOrders from './Pages/Dashboard/ManageOrders/ManageOrders';
import MyOrders from './Pages/Dashboard/MyOrders/MyOrders';
import Payment from './Pages/Dashboard/Payment/Payment';
import MyReview from './Pages/Dashboard/MyReview/MyReview';
import ManageProducts from './Pages/Dashboard/ManageProducts/ManageProducts';
import Dashboard from './Pages/Dashboard/Dashboard';
import DirectOrder from './Pages/Shop/DirectOrder/DirectOrder';
import ViewProfile from './Pages/Dashboard/ViewProfile/ViewProfile';
import AddToCart from './Pages/Shop/AddToCart/AddToCart';
import AddToCartOrder from './Pages/Shop/AddToCartOrder/AddToCartOrder';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navbar></Navbar>
          <ScrollToTop />
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/shop">
              <Shop></Shop>
            </Route>
            <PrivateRoute exact path="/addToCart">
              <AddToCart></AddToCart>
            </PrivateRoute>
            <Route exact path="/shop/:productId">
              <ProductDetails></ProductDetails>
            </Route>
            <PrivateRoute exact path="/directOrder/:productId">
              <DirectOrder></DirectOrder>
            </PrivateRoute>
            <PrivateRoute exact path="/addToCartOrder/:addToCartId">
              <AddToCartOrder></AddToCartOrder>
            </PrivateRoute>
            <PrivateRoute exact path="/orderNow">
              <OrderNow></OrderNow>
            </PrivateRoute>
            <Route exact path="/aboutUs">
              <AboutUs></AboutUs>
            </Route>
            <Route exact path="/contactUs">
              <ContactUs></ContactUs>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <Route exact path="/forgatePass">
              <ForgatePass></ForgatePass>
            </Route>
            <Route exact path="/afterResetPass">
              <AfterResetPass></AfterResetPass>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute exact path="/addProducts">
              <AddProduct></AddProduct>
            </PrivateRoute>
            <PrivateRoute exact path="/myOrders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute exact path="/manageOrders">
              <ManageOrders></ManageOrders>
            </PrivateRoute>
            <PrivateRoute exact path="/payment">
              <Payment></Payment>
            </PrivateRoute>
            <PrivateRoute exact path="/orderNow/:paymentId">
              <Payment></Payment>
            </PrivateRoute>
            <PrivateRoute exact path="/myReview">
              <MyReview></MyReview>
            </PrivateRoute>
            <PrivateRoute exact path="/viewProfile">
              <ViewProfile></ViewProfile>
            </PrivateRoute>
            <PrivateRoute exact path="/manageProducts">
              <ManageProducts></ManageProducts>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
