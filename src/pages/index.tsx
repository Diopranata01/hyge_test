import { Inter } from "next/font/google";
import { Portofolio } from "./portofolio";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="w-full relative overflow-hidden [background:linear-gradient(180deg,_#051533,_rgba(17,_17,_17,_0.07)),_#111] pt-[1460px] h-[1965px] py-12 flex flex-col items-center justify-center font-plus-jakarta-sans text-neutral-30 gap-8">
        <Portofolio />
      </div>
    </>
  );
}
