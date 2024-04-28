import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

import Autoplay from "embla-carousel-autoplay";

import Image from "next/image";

import coment1 from "../../public/coment1.png";
import coment2 from "../../public/coment2.png";
import coment3 from "../../public/coment3.png";
import coment4 from "../../public/coment4.png";

export default function Carrossel() {
  return (
    <div className="flex overflow-x-hidden flex-col font-montserrat w-full items-center bg-slate-100 ">
      <Carousel
        className="flex my-[5rem] px-10 w-[70%] max-[1100px]:w-[85%] max-[770px]:h-[100%] max-[770px]:my-[0rem] max-[770px]:px-[0rem]"
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent className="flex">
          <CarouselItem className="max-[770px]:basis-1/2 max-[2000px]:basis-1/3 flex items-center">
            <Image src={coment1} alt="coment1 vortex computadores" />
          </CarouselItem>
          <CarouselItem className="max-[770px]:basis-1/2 max-[2000px]:basis-1/3 flex items-center">
            <Image src={coment2} alt="coment2 vortex computadores" />
          </CarouselItem>
          <CarouselItem className="max-[770px]:basis-1/2 max-[2000px]:basis-1/3 flex items-center">
            <Image src={coment3} alt="coment3 vortex computadores" />
          </CarouselItem>
          <CarouselItem className="max-[770px]:basis-1/2 max-[2000px]:basis-1/3 flex items-center">
            <Image src={coment4} alt="coment4 vortex computadores" />
          </CarouselItem>
          <CarouselItem className="max-[770px]:basis-1/2 max-[2000px]:basis-1/3 flex items-center">
            <Image src={coment1} alt="coment5 vortex computadores" />
          </CarouselItem>
          <CarouselItem className="max-[770px]:basis-1/2 max-[2000px]:basis-1/3 flex items-center">
            <Image src={coment2} alt="coment6 vortex computadores" />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="max-[770px]:hidden" />
        <CarouselNext className="max-[770px]:hidden" />
      </Carousel>
    </div>
  );
}
