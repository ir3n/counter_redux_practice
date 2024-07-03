"use client";

import { useState } from "react";
import CounterButton from "./CounterButton";
import { UseDispatch, useDispatch, useSelector } from "react-redux";
import { ADD, REMOVE } from "@/store/action";

enum Message {
  None = "",
  Hundred = "Ok, stop clicking and get a life!",
  Negative = "Nah, no negatives here.",
}

function Counter() {
  const [message, setMessage] = useState<Message>(Message.None);
  const countData = useSelector((state) => state.operationReducer.count);
  const dispatch = useDispatch();

  const removeHandler = () => {
    if (countData > 0) {
      dispatch(REMOVE());
      setMessage(Message.None);
    } else {
      setMessage(Message.Negative);
    }
  };

  const addHandler = () => {
    if (countData < 99) {
      dispatch(ADD());
      setMessage(Message.None);
    } else {
      setMessage(Message.Hundred);
    }
  };

  return (
    <div className="py-10 relative">
      <div className="flex justify-center items-center gap-6 md:gap-16 mb-5">
        <CounterButton action="minus" fn={() => removeHandler()} />
        <span className="text-4xl md:text-9xl font-bold w-14 text-center md:w-36">
          {countData}
        </span>
        <CounterButton action="plus" fn={() => addHandler()} />
      </div>
      {message !== "" && (
        <div className="text-center text-rose-500 absolute bottom-5 left-0 right-0 m-auto">
          {message}
        </div>
      )}
    </div>
  );
}

export default Counter;
