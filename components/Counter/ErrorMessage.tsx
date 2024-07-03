import React from "react";

export enum Message {
  None = "",
  Hundred = "Ok, stop clicking and get a life!",
  Negative = "Nah, no negatives here.",
}
function ErrorMessage({ message }: { message: Message }) {
  return (
    <>
      {message !== "" && (
        <div className="text-center text-rose-500 absolute bottom-5 left-0 right-0 m-auto">
          {message}
        </div>
      )}
    </>
  );
}

export default ErrorMessage;
