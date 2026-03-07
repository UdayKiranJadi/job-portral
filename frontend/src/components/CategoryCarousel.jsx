import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from './ui/carousel'
import {Button} from "./ui/button";

const category = [
    "Frontend Developer",
    "Backend Developer",
    "Machine Learning Engineer",
    "UI/UX Designer",
    "FullStack Developer"
]

const CategoryCarousel = () => {
    return (
        <div>
            <Carousel classname="w-full max-w-xl mx-auto my-20">
                <CarouselContent>
                    {
                        category.map((cat, index) => (
                            <CarouselItem classname="md:basis-1/2 lg-basis-1/3">
                                <Button classname>{cat}</Button> 


                            </CarouselItem>
                        ))
                    }



                </CarouselContent>
                <CarouselPrevious>
                    <CarouselNext>

                    </CarouselNext>

                </CarouselPrevious>
            </Carousel>
        </div>
    )
}

export default CategoryCarousel