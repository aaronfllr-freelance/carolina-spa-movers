import { ImageGallery } from "@/components/ImageGallery";

const GalleryImages = [
    { src: "/assets/images/spas/spa1.jpg", alt: "One", height: 400, width: 400 },
    { src: "/assets/images/spas/spa2.jpg", alt: "Two", height: 400, width: 400 },
    { src: "/assets/images/spas/spa3.jpg", alt: "Three", height: 400, width: 400 },
    { src: "/assets/images/spas/spa4.jpg", alt: "Four", height: 400, width: 400 },
    { src: "/assets/images/spas/spa5.jpg", alt: "Five", height: 400, width: 400 },
    { src: "/assets/images/spas/spa6.jpg", alt: "Six", height: 400, width: 400 },
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