import "../app/globals.css";
import Image from "next/image";
import Banner from "@/components/banner";
import warrior from "../../public/warrior.png";
import titan from "../../public/titan.png";
import berserker from "../../public/berserker.png";
import { Icon } from "@iconify/react";

export default function Computers() {
  const pcs = [
    {
      id: "0",
      nome: "Warrior",
      image: warrior,
      processor: "AMD Ryzen 5 5600g",
      graphicCard: "Radeon Vega 7 (Integrada)",
      ssd: "SSD 480GB",
      ram: "16GB",
      value: "2500,00",
    },
    {
      id: "1",
      nome: "Berserker",
      image: berserker,
      processor: "Intel I7 11700",
      graphicCard: "RTX 3070 8GB",
      ssd: "SSD 480GB",
      ram: "16GB",
      value: "5400,00",
    },
    {
      id: "2",
      nome: "Titan",
      image: titan,
      processor: "Intel I7 12700f",
      graphicCard: "RTX 4070 12GB",
      ssd: "SSD 1TB",
      ram: "16GB",
      value: "9720,00",
    },
  ];
  return (
    <div className="flex flex-col gap-10 items-center mt-[5rem] ">
      <div className="flex flex-row items-center justify-center gap-20 ">
        {pcs.map((pc) => {
          return (
            <div className="flex flex-col items-center justify-center ">
              <h1 className="text-2xl font-['Roboto'] font-bold tracking-wide text-[#F74D4D]">
                {pc.nome}
              </h1>
              <div className="flex flex-col items-center justify-center shadow-inner p-5 rounded-[15px] mt-5 gap-5 bg-slate-100">
                <Image src={pc.image} width={300} />
                <div className="flex flex-col gap-3 items-start mt-5">
                  <div className="flex flex-row items-center justify-center gap-4">
                    <Icon
                      icon="uil:processor"
                      className="text-3xl text-slate-300"
                    />
                    <p className="text-slate-500">{pc.processor}</p>
                  </div>
                  <div className="flex flex-row items-center justify-center gap-4">
                    <Icon
                      icon="ph:graphics-card-fill"
                      className="text-3xl text-slate-300"
                    />
                    <p className="text-slate-500">{pc.graphicCard}</p>
                  </div>
                  <div className="flex flex-row items-center justify-center gap-4">
                    <Icon
                      icon="clarity:ssd-solid"
                      className="text-3xl text-slate-300"
                    />
                    <p className="text-slate-500">{pc.ssd}</p>
                  </div>
                  <div className="flex flex-row items-center justify-center gap-4">
                    <Icon
                      icon="ri:ram-fill"
                      className="text-3xl text-slate-300"
                    />
                    <p className="text-slate-500">{pc.ram}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center mt-5 font-['Roboto']">
                <p className="font-light">A partir de</p>
                <p className="font-bold text-3xl text-slate-500">
                  R$ {pc.value}
                </p>
                <p className="font-light">em até 12 vezes sem juros.</p>
              </div>
            </div>
          );
        })}
      </div>
      <button className="text-slate-100 bg-[#F74D4D] py-2 px-12 rounded-[8px]  font-regular w-fit tracking-widest">
        Fazer Orçamento
      </button>
    </div>
  );
}
