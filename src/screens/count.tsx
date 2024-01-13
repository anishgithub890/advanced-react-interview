import { useState } from 'react';

const Count = () => {
  const [count, setCount] = useState(0);

  const addCount = () => {
    if (count < 10) {
      setCount(count + 1);
    } else {
      alert('Ooops! Sorry!');
    }
  };

  const minusCount = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert('Ooops! Sorry!');
    }
  };

  return (
    <>
      <h1 className="text-3xl font-semibold underline">Hello World!</h1>
      <div className="flex flex-col pt-4">
        <button
          onClick={addCount}
          className="p-2 text-xl rounded-sm border border-rose-200 bg-red-100 hover:bg-red-300 transition"
        >
          +
        </button>
        <p className="p-4">{count}</p>
        <button
          onClick={minusCount}
          className="p-2 text-xl rounded-sm border border-rose-200 bg-red-100 hover:bg-red-300 transition"
        >
          -
        </button>
      </div>
    </>
  );
};

export default Count;
