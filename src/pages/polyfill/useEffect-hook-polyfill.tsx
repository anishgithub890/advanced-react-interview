import { useEffect, useState } from 'react';

const Polyfill = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts`
      );
      if (!response.ok) {
        throw new Error('Server Not Response!');
      }
      const fetchedData = await response.json();
      setData(fetchedData);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>
        {data.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </div>
    </>
  );
};

export default Polyfill;
