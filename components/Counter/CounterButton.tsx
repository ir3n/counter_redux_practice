import React from "react";

type Action = "plus" | "minus";

function CounterButton({ action }: { action: Action }) {
  return (
    <button className="w-12 h-12 md:w-16 md:h-16 bg-indigo-500 rounded-xl text-white flex items-center justify-center text-4xl cursor-pointer">
      {action === "plus" ? "+" : "-"}
      <span className="sr-only">{`${
        action === "plus" ? "Add one" : "Remove one"
      }`}</span>
    </button>
  );
}

export default CounterButton;
