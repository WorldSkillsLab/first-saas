import { useState } from "react";

const Example = () => {
  // Hooks should be at the root of the component
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="py-48 px-8 flex items-center gap-4">
      <button className="btn" onClick={decrementCounter}>
        - Remove
      </button>

      <div className="text-3xl font-bold w-12 text-center">
        {counter}
      </div>

      <button className="btn" onClick={incrementCounter}>
        + Add
      </button>
    </div>
  );
};

export default Example;
