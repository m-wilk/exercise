import { useState } from "react";
import { evaluate } from "mathjs";

const Calculator = () => {
  const [input, setInput] = useState<string>("");

  const handleButtonClick = (value: string) => {
    setInput(input + value);
  };

  const handleCalculate = () => {
    try {
      setInput(evaluate(input).toString());
    } catch {
      setInput("Error");
    }
  };

  const handleClear = () => {
    setInput("");
  };

  return (
    <div className="flex justify-center py-20 h-screen bg-gray-200">
      <div className="min-w-2xl sm:w-1/4 md:w-2/5 bg-gray-600 p-10 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 mb-5 min-h-[40px]">
          <div className="bg-gray-100 text-gray-500 py-2 px-4 rounded-md">
            {input}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-5">
          <button
            className="bg-gray-300 text-white py-2 px-4 rounded-md"
            onClick={() => handleButtonClick("7")}
          >
            7
          </button>
          <button
            className="bg-gray-300 text-white py-2 px-4 rounded-md"
            onClick={() => handleButtonClick("8")}
          >
            8
          </button>
          <button
            className="bg-gray-300 text-white py-2 px-4 rounded-md"
            onClick={() => handleButtonClick("9")}
          >
            9
          </button>
          <button
            className="bg-yellow-400 text-white py-2 px-4 rounded-md"
            onClick={() => handleButtonClick("/")}
          >
            /
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-5">
          <button
            className="bg-gray-300 text-white py-2 px-4 rounded-md"
            onClick={() => handleButtonClick("4")}
          >
            4
          </button>
          <button
            className="bg-gray-300 text-white py-2 px-4 rounded-md"
            onClick={() => handleButtonClick("5")}
          >
            5
          </button>
          <button
            className="bg-gray-300 text-white py-2 px-4 rounded-md"
            onClick={() => handleButtonClick("6")}
          >
            6
          </button>
          <button
            className="bg-yellow-400 text-white py-2 px-4 rounded-md"
            onClick={() => handleButtonClick("*")}
          >
            *
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-5">
          <button
            className="bg-gray-300 text-white py-2 px-4 rounded-md"
            onClick={() => handleButtonClick("1")}
          >
            1
          </button>
          <button
            className="bg-gray-300 text-white py-2 px-4 rounded-md"
            onClick={() => handleButtonClick("2")}
          >
            2
          </button>
          <button
            className="bg-gray-300 text-white py-2 px-4 rounded-md"
            onClick={() => handleButtonClick("3")}
          >
            3
          </button>
          <button
            className="bg-yellow-400 text-white py-2 px-4 rounded-md"
            onClick={() => handleButtonClick("-")}
          >
            -
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-5">
          <button
            className="bg-gray-300 text-white py-2 px-4 rounded-md"
            onClick={() => handleButtonClick("0")}
          >
            0
          </button>
          <button
            className="bg-gray-300 text-white py-2 px-4 rounded-md"
            onClick={() => handleButtonClick(".")}
          >
            .
          </button>
          <button
            className="bg-red-500 text-white py-2 px-4 rounded-md"
            onClick={() => handleClear()}
          >
            C
          </button>
          <button
            className="bg-yellow-400 text-white py-2 px-4 rounded-md"
            onClick={() => handleButtonClick("+")}
          >
            +
          </button>
        </div>
        <div className="grid grid-cols-1">
          <button
            className="bg-blue-400 text-white py-2 px-4 rounded-md"
            onClick={handleCalculate}
          >
            SUM
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
