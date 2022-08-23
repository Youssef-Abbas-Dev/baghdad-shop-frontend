import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';

function App() {

  return (
    <BrowserRouter>
      <Header />
         <Routes>
             <Route path='/' element={<Home />} />
             <Route path='/cart' element={<Cart />} />
         </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
