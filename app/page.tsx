import Counter from "@/components/Counter";

export default function Home() {
  return (
    <>
      <h1 className="font-bold text-3xl lg:text-5xl text-center mb-5">
        This is a meaningless counter
      </h1>
      <h2 className=" text-2xl lg:text-4xl text-center mb-10">
        But it works with <strong>Redux</strong>
      </h2>

      <Counter />
    </>
  );
}
