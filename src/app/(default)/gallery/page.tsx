import { ImageGallery } from "@/components/ImageGallery";

const GalleryImages = [
    { src: "/images/one.jpg", alt: "One", height: 400, width: 400 },
    { src: "/images/two.jpg", alt: "Two", height: 400, width: 400 },
    { src: "/images/three.jpg", alt: "Three", height: 400, width: 400 },
    { src: "/images/four.jpg", alt: "Four", height: 400, width: 400 },
    { src: "/images/five.jpg", alt: "Five", height: 400, width: 400 },
    { src: "/images/six.jpg", alt: "Six", height: 400, width: 400 },
    { src: "/images/seven.jpg", alt: "Seven", height: 400, width: 400 },
    { src: "/images/eight.jpg", alt: "Eight", height: 400, width: 400 },
    { src: "/images/nine.jpg", alt: "Nine", height: 400, width: 400 },
    { src: "/images/one.jpg", alt: "One", height: 400, width: 400 },
    { src: "/images/two.jpg", alt: "Two", height: 400, width: 400 },
    { src: "/images/three.jpg", alt: "Three", height: 400, width: 400 },
    { src: "/images/four.jpg", alt: "Four", height: 400, width: 400 },
    { src: "/images/five.jpg", alt: "Five", height: 400, width: 400 },
    { src: "/images/six.jpg", alt: "Six", height: 400, width: 400 },
    { src: "/images/seven.jpg", alt: "Seven", height: 400, width: 400 },
    { src: "/images/eight.jpg", alt: "Eight", height: 400, width: 400 },
    { src: "/images/nine.jpg", alt: "Nine", height: 400, width: 400 },

];

export default function GalleryPage() {
    return (
        <>
            <div className="max-w-full">
                <h2 className="mb-6 flex justify-center text-4xl font-extrabold text-primary-50 dark:text-primary-50">
                    Our Gallery
                </h2>
                
            </div>
            <ImageGallery images={GalleryImages}/>
        </>
    )
}