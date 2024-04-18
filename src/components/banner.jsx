import "../app/globals.css";
import Image from "next/image";
import logo from "../../public/logo.png";
import pcBanner from "../../public/pcBannerFixed.png";

export default function Banner() {
  return (
    <div className="flex w-screen bg-[url('../../public/background.png')] flex-row mb-5">
      <div className="flex align-middle  w-screen h-screen flex-col ">
        <nav className="flex align-start justify-items-start  w-screen p-8">
          <Image
            src={logo}
            alt="logo vortex computadores"
            className="w-12 h-12"
          />
        </nav>
        <section className="flex flex-row justify-center items-center self-center ">
          <div className="w-[40%] flex gap-6 flex-col">
            <p className="text-slate-100 font-extrabold text-5xl">
              Vortex Computadores
            </p>
            <p className="text-slate-100 font-light text-3xl w-[75%] tracking-wider">
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
            <button className="text-slate-100 bg-[#F74D4D] py-4 px-8 rounded-[8px] font-regular w-fit mt-10 tracking-widest">
              Orçamento Personalizado
            </button>
          </div>
          <Image src={pcBanner} className="w-[40rem]" priority />
        </section>
      </div>
    </div>
  );
}
