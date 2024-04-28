import "../app/globals.css";

import Image from "next/image";
import Head from "next/head";

import { Icon } from "@iconify/react";

import Banner from "@/components/banner";
import Computers from "@/components/computers";
import Carrossel from "@/components/carrossel";
import Infos from "@/components/infos";
import Certificates from "@/components/certificates";

import clouds from "../../public/clouds.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>Vortex Computadores</title>
      </Head>
      <div className="flex overflow-x-hidden flex-col font-montserrat w-full items-center">
        <Banner></Banner>
        <Image src={clouds} className="max-[850px]:hidden" />
        <Computers></Computers>
        <Carrossel></Carrossel>
        <Infos></Infos>
        <Certificates></Certificates>
        <div className="flex flex-col w-full px-[18rem] items-center py-[7rem] justify-center gap-4 max-[974px]:px-[2rem] max-[680px]:py-[5rem]">
          <h1 className="text-4xl text-[#5F2AB9] font-extrabold tracking-wide max-[400px]:text-base">
            VORTEX{" "}
            <span className="text-[#F74D4D] text-3xl text-center">
              COMPUTADORES
            </span>
          </h1>
          <p className=" text-center text-slate-800 max-[680px]:text-start max-[400px]:text-base">
            40849 Salvador Rodovia - Belém de São Francisco, GO / 83007-096
          </p>
        </div>
      </div>
    </>
  );
}
