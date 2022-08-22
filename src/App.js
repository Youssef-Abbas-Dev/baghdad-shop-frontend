import './App.css';
import { products } from "./data/products";
import Category from './components/category/Category';
import HeaderBanner from './components/header-banner/HeaderBanner';
import Header from './components/header/Header';
import Slider from './components/slider/Slider';
import HeadingTitle from './components/heading-title/HeadingTitle';
import SpecialOffers from './components/special-offers/SpecialOffers';
import Brands from './components/brands/Brands';

function App() {
  const laptops = products.slice(0, 10);
  const mobiles = products.slice(10, 24);

  return (
    <div>
      <Header />
      <HeaderBanner />
      <Category />
      <SpecialOffers />
      <HeadingTitle title="الجدید من اللابتوبات" />
      <Slider data={laptops} />
      <HeadingTitle title="الجدید من الجوالات" />
      <Slider data={mobiles} />
      <HeadingTitle title="تسوق حسب المارک" />
      <Brands />
    </div>
  );
}

export default App;
