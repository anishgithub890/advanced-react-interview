import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Count from './pages/count/counter';
import ProductListing from './pages/products/product-listing';
import ProductDetail from './pages/products/product-details';
import Home from './pages/home';
import ProductHome from './pages/products/product-home';
import BreadCrumbs from './components/breadcrumbs';
import Polyfill from './pages/polyfill/useEffect-hook-polyfill';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <h1 className="text-center font-extrabold text-6xl text-sky-500">
            Code With Anish
          </h1>
          {/* bread-crumbs */}
          <BreadCrumbs />
          {/* Routes */}
          <div className="flex flex-row gap-3 justify-center">
            <div className="text-rose-500 hover:text-rose-600 font-semibold text-center p-2 text-md hover:underline hover:underline-offset-2 transition">
              <Link to="/">Home</Link>
            </div>
            <div className="text-rose-500 hover:text-rose-600 font-semibold text-center p-2 text-md hover:underline hover:underline-offset-2 transition">
              <Link to="/counter">Counter</Link>
            </div>
            <div className="text-rose-500 hover:text-rose-600 font-semibold text-center p-2 text-md hover:underline hover:underline-offset-2 transition">
              <Link to="/product">Product</Link>
            </div>
            <div className="text-rose-500 hover:text-rose-600 font-semibold text-center p-2 text-md hover:underline hover:underline-offset-2 transition">
              <Link to="/polyfill">Polyfill</Link>
            </div>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/counter" element={<Count />} />
            <Route path="/product" element={<ProductHome />} />
            <Route path="/products" element={<ProductListing />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/polyfill" element={<Polyfill />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
