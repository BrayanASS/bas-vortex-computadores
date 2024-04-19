import "../app/globals.css";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import Image from "next/image";

import logo from "../../public/logo.png";
import pcInfo from "../../public/pcInfo.png";

export default function Certificates() {
  return (
    <div className="flex flex-row gap-[7rem] px-[18rem] py-[3rem] mt-[5rem]  max-[1500px]:px-[6rem] max-[700px]:px-[3rem] items-center bg-[url('../../public/background.png')] max-[1000px]:flex-col max-[700px]:gap-[2rem]">
      <div className="flex flex-col gap-5 max-[700px]:gap-[2rem] ">
        <div className="flex flex-row items-center gap-5 max-[700px]:flex-col max-[700px]:items-start">
          <Image src={logo} className="" />
          <div>
            <h1 className="font-extrabold text-3xl text-slate-50 tracking-wide">
              Certificados por quem entende do assunto
            </h1>
          </div>
        </div>
        <p className="text-xl text-slate-50 ">
          Certificados para os melhores e mais utilizados softwares e aplicações
          profissionais do mercado. Máquinas com componentes certificados para
          alta performance e componentes de alta durabilidade e capacidade de
          expansão.
        </p>
        <Dialog>
          <DialogTrigger asChild>
            <button className="text-slate-100 bg-[#F74D4D] py-4 px-8 rounded-[8px] font-regular w-fit mt-10 tracking-widest">
              Escolher máquina
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] items-center text-slate-50 ">
            <h1 className="text-slate-50 ">BOTÃO MERAMENTE ILUSTRATIVO</h1>
          </DialogContent>
        </Dialog>
      </div>
      <Image src={pcInfo} className="w-[130rem]" />
    </div>
  );
}
