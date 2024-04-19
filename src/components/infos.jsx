import "../app/globals.css";
import Image from "next/image";
import img1 from "../../public/img1.png";
import img2 from "../../public/img2.png";
import img3 from "../../public/img3.png";
import img4 from "../../public/img4.png";

export default function Infos() {
  return (
    <div className="flex flex-col gap-[4rem] max-[700px]:gap-[3rem] px-[18rem] my-[5rem] max-[1800px]:px-[12rem] max-[1500px]:px-[6rem] max-[700px]:px-[3rem] ">
      <div className="flex flex-row gap-[5rem] max-[700px]:gap-[2rem] items-center max-[1000px]:flex-col ">
        <Image
          src={img1}
          className="w-[45%] max-[1000px]:w-[75%]"
          alt="pcex1 vortex computadores"
        />
        <div className="flex flex-col gap-5 max-[700px]:gap-2 items-start justify-center w-[100%]">
          <h1 className="font-extrabold text-5xl text-[#161C2D] tracking-wide max-[650px]:text-4xl">
            Processador <span className="text-[#e08a8a]">workaholic</span>
          </h1>
          <p className="font-light text-base text-slate-600">
            Processamento de última geração: INTEL® com linha Core i9 ou Xeon,
            sua máquina com até 56 threads e até 4.9GHz. AMD® com linha
            Threadripper ou Epyc, sua máquina com até 128 threads e até 4.5 GHz.
            Suporte até duas CPUs por máquina.
          </p>
        </div>
      </div>
      <div className="flex flex-row-reverse gap-[5rem] max-[700px]:gap-[2rem] items-center max-[1000px]:flex-col ">
        <Image
          src={img2}
          className="w-[45%] max-[1000px]:w-[75%]"
          alt="pcex2 vortex computadores"
        />
        <div className="flex flex-col gap-5 max-[700px]:gap-2 items-start justify-center w-[100%]">
          <h1 className="font-extrabold text-5xl text-[#161C2D] tracking-wide max-[650px]:text-4xl">
            <span className="text-[#e08a8a]">Potencialize o desempenho</span> do
            seu pc
          </h1>
          <p className="font-light text-base text-slate-600">
            Computador com capacidade de expansão de memória para até 128GB e
            até 5200MHz de velocidade. Suporte a memória ECC e deixe sua máquina
            à prova de falhas.
          </p>
        </div>
      </div>
      <div className="flex flex-row gap-[5rem] max-[700px]:gap-[2rem] items-center max-[1000px]:flex-col ">
        <Image
          src={img4}
          className="w-[45%] max-[1000px]:w-[75%]"
          alt="pcex3 vortex computadores"
        />
        <div className="flex flex-col gap-5 max-[700px]:gap-2 items-start justify-center w-[100%]">
          <h1 className="font-extrabold text-5xl text-[#161C2D] tracking-wide max-[650px]:text-4xl">
            Chip gráfico que{" "}
            <span className="text-[#e08a8a]">não tem medo</span> de render
          </h1>
          <p className="font-light text-base text-slate-600">
            Placa gráfica de última geração com Nvidia GTX, RTX da série 4000. O
            melhor desempenho para aplicações profissionais com linha Nvidia
            Quadro. GPU&apos;s de alta performance para co-processamento com
            Nvidia Tesla e NVidia Volta.
          </p>
        </div>
      </div>
      <div className="flex flex-row-reverse gap-[5rem] max-[700px]:gap-[2rem] items-center max-[1000px]:flex-col ">
        <Image
          src={img3}
          className="w-[45%] max-[1000px]:w-[75%]"
          alt="pcex4 vortex computadores"
        />
        <div className="flex flex-col gap-5 max-[700px]:gap-2 items-start justify-center w-[100%]">
          <h1 className="font-extrabold text-5xl text-[#161C2D] tracking-wide max-[650px]:text-4xl">
            <span className="text-[#e08a8a]">Faça mais</span> em menos tempo
          </h1>
          <p className="font-light text-base text-slate-600">
            8x mais veloz do que um SSD SATA. Até 50x mais rápido que um disco
            rígido convencional. Duplique ainda mais sua velocidade de leitura e
            gravação com armazenamento paralelo em RAID.
          </p>
        </div>
      </div>
    </div>
  );
}
