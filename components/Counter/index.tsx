"use client";

import { useState } from "react";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "@/store/counterSlice";
import CounterButton from "./CounterButton";
import ErrorMessage from "./ErrorMessage";
import { Message } from "./ErrorMessage";

function Counter() {
  const [message, setMessage] = useState<Message>(Message.None);
  const countData = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  const removeHandler = () => {
    if (countData > 0) {
      dispatch(decrement());
      setMessage(Message.None);
    } else {
      setMessage(Message.Negative);
    }
  };

  const addHandler = () => {
    if (countData < 99) {
      dispatch(increment());
      setMessage(Message.None);
    } else {
      setMessage(Message.Hundred);
    }
  };

  return (
    <div className="py-10 relative">
      <div className="flex justify-center items-center gap-6 md:gap-16 mb-5">
        <CounterButton action="minus" fn={removeHandler} />
        <span className="text-4xl md:text-9xl font-bold w-14 text-center md:w-36">
          {countData}
        </span>
        <CounterButton action="plus" fn={addHandler} />
      </div>
      <ErrorMessage message={message} />
    </div>
  );
}

export default Counter;
