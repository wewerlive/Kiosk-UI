"use client"

import type { NextPage } from "next";
import Image from 'next/image';
import Link from "next/link";

import WidthWrapper from "@/components/WidthWrapper";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Page: NextPage = () => {
  return (
    <>
      <WidthWrapper className="mt-28 sm:mt-20 flex flex-col items-center justify-center text-center px-4">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="w-full max-w-xs"
        >
          <CarouselContent>
            {Array.from({ length: 3 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex  items-center justify-center p-4">

                        <Image
                          alt="Caraousel"
                          width={400}
                          height={400}
                          src={`/Caraousel_${index + 1}.jpeg`}
                          className="rounded-lg"
                        />

                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <div className="mt-5">
          <h1 className="text-2xl font-bold mt-6 mb-3">New Arrivals</h1>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="w-full max-w-sm"
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-4">
                    <Image
                          alt="New_Arrival"
                          width={200}
                          height={200}
                          className="rounded-lg"
                          src={`/card_${index + 1}.jpeg`}
                        />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <Link
          href='/user/selector'
          className={buttonVariants({
            size: 'lg',
            className: 'mt-9',
          })}
        >
          Try Now <ArrowRight className='ml-2 h-5 w-5' />
        </Link>

      </WidthWrapper>
    </>
  );
};

export default Page;