import React from "react";

type Action = "plus" | "minus";

function CounterButton({ action, fn }) {
  return (
    <button
      onClick={fn}
      className="w-12 h-12 md:w-16 md:h-16 bg-redux rounded-xl text-white flex items-center justify-center text-4xl cursor-pointer"
    >
      <span className="pointer-events-none">
        {action === "plus" ? "+" : "-"}
      </span>
      <span className="sr-only">{`${
        action === "plus" ? "Add one" : "Remove one"
      }`}</span>
    </button>
  );
}

export default CounterButton;
