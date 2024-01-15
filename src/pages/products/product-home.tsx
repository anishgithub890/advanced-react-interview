import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ProductHome = () => {
  const [trendingProducts, setTrendingProduct] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((res) => {
        const sliceTrending = res.products.slice(0, 8);
        setTrendingProduct(sliceTrending);
      });
  }, []);

  return (
    <>
      <div>
        <span className="text-center justify-center text-2xl font-semibold">
          Trending Products 🔥🔥🔥
        </span>
        <div
          className="pt-8
                grid 
                grid-cols-1 
                sm:grid-cols-1 
                md:grid-cols-2 
                lg:grid-cols-4
                xl:grid-cols-4
                2xl:grid-cols-4
                gap-4"
        >
          {trendingProducts?.map((product) => {
            return (
              <div key={product.id} className="border-2  rounded-sm">
                <Link to={`/products/${product.id}`}>
                  <img src={product.thumbnail} alt={product.thumbnail} />
                  <h3>{product.brand}</h3>
                  <h3>{product.title}</h3>
                  <h3>$: {product.price}</h3>
                  <h3 className="text-sm">
                    Description: {product.description}
                  </h3>
                </Link>
              </div>
            );
          })}
        </div>
        <div className="pt-2">
          <Link to="/products">
            <button className="w-full p-3 border-2">View All Products</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProductHome;
