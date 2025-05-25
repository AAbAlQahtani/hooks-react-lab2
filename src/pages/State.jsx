import { useState } from "react";

function State() {
  const [bg, setBg] = useState("bg-white");

  const toRed = () => {
    setBg("bg-red-500");
  };
  const toBlue = () => {
    setBg("bg-blue-500");
  };

  const toGreen = () => {
    setBg("bg-green-500");
  };
  const toYellow = () => {
    setBg("bg-yellow-500");
  };

  return (
    <div className={`${bg} h-screen`}>
      <h1 className="font-bold text-center text-lg pt-5">Choose color:</h1>
      <div className="flex gap-4 pb-10 pt-5 justify-center">
        <button
          className="bg-gray-300 hover:bg-gray-800 hover:text-white px-4 py-2 rounded"
          onClick={toRed}> Red</button>

        <button
          className="bg-gray-300 hover:bg-gray-800 hover:text-white px-4 py-2 rounded"
          onClick={toBlue}
        >Blue</button>

        <button
          className="bg-gray-300 hover:bg-gray-800 hover:text-white px-4 py-2 rounded"
          onClick={toGreen}> Green</button>

        <button
          className="bg-gray-300 hover:bg-gray-800 hover:text-white px-4 py-2 rounded"
          onClick={toYellow}>Yellow</button>
      </div>
    </div>
  );
}

export default State;
