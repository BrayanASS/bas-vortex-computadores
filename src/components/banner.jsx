import "../app/globals.css";
import Image from "next/image";
import logo from "../../public/logo.png";
import pcBanner from "../../public/pcBannerFixed.png";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export default function Banner() {
  return (
    <div className="flex w-screen bg-[url('../../public/background.png')] mb-5 font-montserrat">
      <div className="flex align-middle  w-screen h-screen flex-col max-[1024px]:h-auto ">
        <nav className="flex align-start justify-items-start  w-screen p-8">
          <Image
            src={logo}
            alt="logo vortex computadores"
            className="w-12 h-12  "
          />
        </nav>
        <section className="flex flex-row justify-center items-center self-center max-[1024px]:flex-col max-[1024px]:gap-10 align-middle">
          <div className="w-[40%] max-[1024px]:w-full max-[1024px]:px-[5rem] max-[700px]:px-[3rem] flex gap-6 flex-col">
            <p className="text-slate-100 font-extrabold text-5xl max-[650px]:text-4xl ">
              Vortex Computadores
            </p>
            <p className="text-slate-100 font-light text-3xl w-[75%] tracking-wider max-[650px]:text-2xl">
              Computadores para profissionais{" "}
              <label className=" font-extrabold tracking-wider">
                incríveis
              </label>
               alcançarem o
              <label className=" font-extrabold tracking-wider">
                {" "}
                extraordinário
              </label>
              .
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <button className="text-slate-100 bg-[#F74D4D] py-4 px-8 rounded-[8px] font-regular w-fit mt-10 tracking-widest flex self-start max-[400px]:px-[1rem] max-[400px]:text-base">
                  Orçamento Personalizado
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] items-center text-slate-50 ">
                <h1 className="text-slate-50 ">BOTÃO MERAMENTE ILUSTRATIVO</h1>
              </DialogContent>
            </Dialog>
          </div>
          <Image
            src={pcBanner}
            className="w-[30rem] max-[1280px]:w-[30rem] max-[940px]:w-[25rem] max-[940px]:pb-[2rem]"
            alt="pc vortex computadores"
            priority
          />
        </section>
      </div>
    </div>
  );
}
