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
    <div className="flex overflow-x-hidden flex-col font-['Gilroy'] w-full items-center">
      <Carousel
        className="flex mt-[5rem] p-10 w-[70%]"
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent className="ml-[10px]">
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Image src={coment1} />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3 ">
            <Image src={coment2} />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Image src={coment3} />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3 ">
            <Image src={coment4} />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3 ">
            <Image src={coment1} />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Image src={coment2} />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
