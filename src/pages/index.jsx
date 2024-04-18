import "../app/globals.css";

import Image from "next/image";
import { Icon } from "@iconify/react";

import Banner from "@/components/banner";
import Computers from "@/components/computers";
import Carrossel from "@/components/carrossel";

import clouds from "../../public/clouds.png";

export default function Home() {
  return (
    <div className="flex overflow-x-hidden flex-col font-['Gilroy'] w-full items-center">
      <Banner></Banner>
      <Image src={clouds} />
      <Computers></Computers>
      <Carrossel></Carrossel>
      <div>
        <div>
          <Image />
          <div>
            <h1>AAAAAAAAAAAAA</h1>
            <p>BBBBBBBBBBBBB</p>
          </div>
        </div>
        <div>
          <Image />
          <div>
            <h1>AAAAAAAAAAAAA</h1>
            <p>BBBBBBBBBBBBB</p>
          </div>
        </div>
        <div>
          <Image />
          <div>
            <h1>AAAAAAAAAAAAA</h1>
            <p>BBBBBBBBBBBBB</p>
          </div>
        </div>
        <div>
          <Image />
          <div>
            <h1>AAAAAAAAAAAAA</h1>
            <p>BBBBBBBBBBBBB</p>
          </div>
        </div>
      </div>
    </div>
  );
}
