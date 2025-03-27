import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  const reset = () => {
    setCount(0);
  };
  return (
    <div className="container py-20 text-center bg-gray-400 mt-10">
      <h1 className="text-3xl text-white mb-5">Counter: {count}</h1>
      <button
        className="px-4 py-2 border border-blue-500 rounded-l-lg text-2xl"
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
      <button
        className="px-4 py-2 border border-blue-500 text-2xl"
        onClick={() => setCount(count - 1)}
      >
        -
      </button>
      <button
        onClick={reset}
        className="px-3 py-2 border border-blue-500 rounded-r-lg text-2xl"
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
