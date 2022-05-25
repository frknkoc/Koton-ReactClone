import './App.css';
import Navbar from "./components/Navbar";
import Story from './components/Story';
import Footer from "./components/Footer";
import Slider from "./components/Slider";
import Products from "./components/Products";
import HitCategory from './components/HitCategory';
import Discount from './components/Discount';
import ProductList from './components/ProductList';

function App() {
  return (
    <>
      <Navbar />
      <Story />

      <Slider />

      <Products />

      <HitCategory />

      <Discount />
      <ProductList />
      <Footer />
    </>
  );
}

export default App;
