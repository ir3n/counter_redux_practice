import Counter from "@/components/Counter";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1 className="font-bold text-3xl lg:text-5xl text-center mb-5">
        This is a meaningless counter
      </h1>
      <h2 className=" text-2xl lg:text-4xl text-center mb-10">
        But it works with <strong className="text-redux">Redux</strong>
        <Image
          src="redux.svg"
          alt="Redux"
          width={40}
          height={40}
          className="inline"
        />
      </h2>

      <Counter />
    </>
  );
}
