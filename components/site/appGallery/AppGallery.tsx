import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const images = [
    {
        src: "/Gallery/1.jpg",
        alt: "Image 1"
    },
    {
        src: "/Gallery/2.jpg",
        alt: "Image 2"
    },
    {
        src: "/Gallery/3.jpg",
        alt: "Image 3"
    },
    {
        src: "/Gallery/4.jpg",
        alt: "Image 4"
    },
    {
        src: "/Gallery/5.jpg",
        alt: "Image 5"
    },
    {
        src: "/Gallery/6.jpg",
        alt: "Image 6"
    },
    {
        src: "/Gallery/7.jpg",
        alt: "Image 7"
    }
]

export function AppGallery() {
    return (
        <Carousel className="w-full select-none">
            <CarouselContent className="-ml-1 p-2 w-full gap-3">
                {images.map((image, index) => (
                    <CarouselItem key={index} className="pl-1 w-fit h-[296px] basis-auto gap-6">
                        <div key={index} className="rounded-md drop-shadow-md">
                            <img src={image.src} alt={image.alt} className="h-[296px] w-fit rounded-md drop-shadow-sm object-contain" />
                        </div>
                     </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
