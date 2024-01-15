import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setProduct(res);
      });
  }, [id]);

  console.log(product);

  return (
    <>
      <div>
        <h1 className="text-center justify-center text-2xl font-semibold">
          Product -- Details
        </h1>
        <div className="pt-8 grid">
          {product ? (
            <div className="border-4 pt-2 flex flex-col rounded-sm justify-center items-center">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="border-2"
              />
              <h3>{product.brand}</h3>
              <h3>{product.title}</h3>
              <h3 className="font-bold">$: {product.price}</h3>
              <h3 className="text-sm">Description: {product.description}</h3>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
