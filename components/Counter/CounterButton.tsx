type Action = "plus" | "minus";

type CounterButtonProps = {
  action: Action;
  fn: () => void;
};

function CounterButton({ action, fn }: CounterButtonProps) {
  return (
    <button
      onClick={fn}
      aria-label={`${action === "plus" ? "Add one" : "Remove one"}`}
      className="w-12 h-12 md:w-16 md:h-16 bg-redux rounded-xl text-white flex items-center justify-center text-4xl cursor-pointer lg:hover:scale-110 transition duration-500"
    >
      <span className="pointer-events-none">
        {action === "plus" ? "+" : "-"}
      </span>
    </button>
  );
}

export default CounterButton;
