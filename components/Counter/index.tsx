import React from "react";
import CounterButton from "./CounterButton";

function Counter() {
  return (
    <div className="flex justify-center items-center gap-6 md:gap-20 p-10">
      <CounterButton action="minus" />
      <span className="text-4xl md:text-9xl font-bold">{20}</span>
      <CounterButton action="plus" />
    </div>
  );
}

export default Counter;
