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
      <h1 className="text-xl font-semibold underline underline-offset-2">
        Conditional Check Add and Minus Numbers
      </h1>
      <div className="flex flex-row pt-4 justify-center">
        <button
          onClick={minusCount}
          className="w-48 shadow-md p-2 text-xl rounded-sm border border-rose-200 bg-red-100 hover:bg-red-300 transition"
        >
          -
        </button>
        <p className="p-4 w-48">{count}</p>
        <button
          onClick={addCount}
          className="w-48 shadow-md p-2 text-xl rounded-sm border border-rose-200 bg-red-100 hover:bg-red-300 transition"
        >
          +
        </button>
      </div>
    </>
  );
};

export default Count;
