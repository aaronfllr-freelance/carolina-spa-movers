"use client"
import React, { useState, useEffect, useRef } from 'react';
import './carousel.css';

export interface CarouselProps {
    images?: { src: string, alt: string, height: number, width: number }[];
}

const defaultImages = [
    { src: "/images/one.jpg", alt: "One", height: 400, width: 400 },
    { src: "/images/two.jpg", alt: "Two", height: 400, width: 400 },
    { src: "/images/three.jpg", alt: "Three", height: 400, width: 400 },
    { src: "/images/four.jpg", alt: "Four", height: 400, width: 400 },
    { src: "/images/five.jpg", alt: "Five", height: 400, width: 400 },
    { src: "/images/six.jpg", alt: "Six", height: 400, width: 400 },
];

const Carousel: React.FC<CarouselProps> = ({ images = defaultImages }) => {


    return (
        <div className="overflow-hidden bg-inherit pt-6 max-w-6xl mx-auto flex justify-center flex-nowrap">
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-7xl animate-infinite-scroll">
                {images.map((image, index) => (
                    <li key={index} className="w-1/3">
                        <img
                            src={image.src}
                            alt={image.alt}
                            height={image.height}
                            width={image.width}
                        />
                    </li>
                ))}
                {/* <li>
                    <img src="./facebook.svg" alt="Facebook" />
                </li> */}
            </ul>
            <div className="w-full inline-flex flex-nowrap">
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                     {images.map((image, index) => (
                    <li key={index} className="w-1/3">
                        <img
                            src={image.src}
                            alt={image.alt}
                            height={image.height}
                            width={image.width}
                        />
                    </li>
                ))}
            </ul>       
        </div>         
        </div>
    );
};

export default Carousel;


// "use client"
// import React, { useState } from 'react';
// import './carousel.css';

// export interface CarouselProps {
//     images?: { src: string, alt: string, height: number, width: number }[];
// }

// const defaultImages = [
//     { src: "/images/one.jpg", alt: "One", height: 400, width: 400 },
//     { src: "/images/two.jpg", alt: "Two", height: 400, width: 400 },
//     { src: "/images/three.jpg", alt: "Three", height: 400, width: 400 },
//     { src: "/images/four.jpg", alt: "Four", height: 400, width: 400 },
//     { src: "/images/five.jpg", alt: "Five", height: 400, width: 400 },
//     { src: "/images/six.jpg", alt: "Six", height: 400, width: 400 },
// ];

// const Carousel: React.FC<CarouselProps> = ({ images = defaultImages }) => {
//     const [currentIndex, setCurrentIndex] = useState(0);

//     const prevSlide = () => {
//         const isFirstSlide = currentIndex === 0;
//         const newIndex = isFirstSlide ? Math.max(images.length - 3, 0) : currentIndex - 1;
//         setCurrentIndex(newIndex);
//     };

//     const nextSlide = () => {
//         const isLastSlide = currentIndex === Math.max(images.length - 3, 0);
//         const newIndex = isLastSlide ? 0 : currentIndex + 1;
//         setCurrentIndex(newIndex);
//     };

//     return (
//         <div className="carousel">
//             <div className="carousel-inner">
//                 <button className="carousel-button prev" onClick={prevSlide}>
//                     &#10094;
//                 </button>
//                 <div
//                     className="carousel-images"
//                     style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
//                 >
//                     {images.map((image, index) => (
//                         <div className="carousel-image" key={index}>
//                             <img
//                                 src={image.src}
//                                 alt={image.alt}
//                                 height={image.height}
//                                 width={image.width}
//                             />
//                         </div>
//                     ))}
//                 </div>
//                 <button className="carousel-button next" onClick={nextSlide}>
//                     &#10095;
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default Carousel;
