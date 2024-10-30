import Image from "next/image";
import Greetings from "./components/Greetings/Greetings";

export default function Home() {
  return (
    <main className="flex flex-col">
      <div>
        <Image
          src="/plant1.jpg"
          alt="Plant logo"
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-45vh md:h-70vh"
        />
      </div>
      <Greetings />
      <div>1</div>
      <div>1</div>
      <div>1</div>
    </main>
  );
}
