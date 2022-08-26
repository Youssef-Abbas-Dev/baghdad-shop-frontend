import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';
import Products from './pages/products/Products';
import SingleProduct from './pages/single-product/SingleProduct';
import SpecialOffersPage from './pages/special-offers-page/SpecialOffersPage';

function App() {

  return (
    <BrowserRouter>
      <Header />
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/products/:id' element={<SingleProduct />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/special-offers/:id' element={<SpecialOffersPage />} />
         </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
