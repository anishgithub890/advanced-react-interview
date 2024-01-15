import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Count from './pages/count/counter';
import ProductListing from './pages/products/product-listing';
import ProductDetail from './pages/products/product-details';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <h1 className="text-center font-bold text-3xl text-sky-500">
            Code With Anish
          </h1>
          <div className="flex flex-row gap-3 justify-center">
            <div className="text-rose-500 hover:text-rose-600 font-semibold text-center p-2 text-md hover:underline hover:underline-offset-2 transition">
              <Link to="/">Home</Link>
            </div>
            <div className="text-rose-500 hover:text-rose-600 font-semibold text-center p-2 text-md hover:underline hover:underline-offset-2 transition">
              <Link to="/counter">Counter</Link>
            </div>
            <div className="text-rose-500 hover:text-rose-600 font-semibold text-center p-2 text-md hover:underline hover:underline-offset-2 transition">
              <Link to="/products">Products</Link>
            </div>
          </div>
          <Routes>
            <Route path="/" element={''} />
            <Route path="/counter" element={<Count />} />
            <Route path="/products" element={<ProductListing />} />
            <Route path="/products/:id" element={<ProductDetail />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
