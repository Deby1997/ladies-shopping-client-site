
import './App.css';
import Header from './Components/Header/Header';
import NotFound from './Components/NotFound/NotFound';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import LogIn from './Components/LogIn/LogIn/LogIn';
import Register from './Components/LogIn/Register/Register';
import Products from './Components/Products/Products';
import Checkout from './Components/Checkout/Checkout';
import RequireAuth from './Components/LogIn/RequireAuth/RequireAuth';




function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/product" element={<Products></Products>} />
        <Route path='/inventory/:productId' element={<ProductDetail></ProductDetail>} />
        <Route path="/login" element={<LogIn></LogIn>} />
        <Route path="/register" element={<Register></Register>} />
        <Route path="/checkout" element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        } />
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>




    </div>
  );
}

export default App;
