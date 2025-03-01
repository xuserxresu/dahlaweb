"use client";

import AutoScroll from "embla-carousel-auto-scroll";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface Logos3Props {
  heading?: string;
  logos?: Logo[];
  className?: string;
}

const Logos3 = ({
  heading = "Our Partners",
  logos = [
    {
      id: "logo-1",
      description: "Partner 1",
      image: "https://ik.imagekit.io/sharfi/partner1.png",
      className: "h-16 w-auto",
    },
    {
      id: "logo-2",
      description: "Partner 2",
      image: "https://ik.imagekit.io/sharfi/partner2.png",
      className: "h-16 w-auto",
    },
    {
      id: "logo-3",
      description: "Partner 3",
      image: "https://ik.imagekit.io/sharfi/partner3.png",
      className: "h-16 w-auto",
    },
    {
      id: "logo-4",
      description: "Partner 4",
      image: "https://ik.imagekit.io/sharfi/partner4.png",
      className: "h-16 w-auto",
    },
    {
      id: "logo-5",
      description: "Partner 5",
      image: "https://ik.imagekit.io/sharfi/partner5.png",
      className: "h-16 w-auto",
    },
    {
      id: "logo-6",
      description: "Partner 6",
      image: "https://ik.imagekit.io/sharfi/partner6.png",
      className: "h-16 w-auto",
    }
  ],
}: Logos3Props) => {
  return (
    <section className="py-32 bg-gray-50">
      <div className="container flex flex-col items-center text-center">
        <h1 className="my-6 text-pretty text-2xl font-bold lg:text-4xl text-navy">
          {heading}
        </h1>
      </div>
      <div className="pt-10 md:pt-16 lg:pt-20">
        <div className="relative mx-auto flex items-center justify-center lg:max-w-5xl">
          <Carousel
            opts={{ loop: true }}
            plugins={[AutoScroll({ playOnInit: true, speed: 1 })]}
          >
            <CarouselContent className="ml-0">
              {logos.map((logo) => (
                <CarouselItem
                  key={logo.id}
                  className="flex basis-1/3 justify-center pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
                >
                  <div className="mx-10 flex shrink-0 items-center justify-center">
                    <div>
                      <img
                        src={logo.image}
                        alt={logo.description}
                        className={logo.className}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-gray-50 to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-gray-50 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export { Logos3 };
