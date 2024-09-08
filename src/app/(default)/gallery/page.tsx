import { ImageGallery } from "@/components/ImageGallery";
import { Card } from "@/components/ui/card";

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
            <Card className="p-5 my-6 bg-primary-50 shadow-lg shadow-primary-900">
                <div className="max-w-full">
                    <h2 className="mb-6 flex justify-center text-4xl font-extrabold text-primary-900 dark:text-primary-900">
                        Our Gallery
                    </h2>
                    
                </div>
                <ImageGallery images={GalleryImages}/>
            </Card>
        </>
    )
}