import { ImageGallery } from "@/components/ImageGallery";
import { Card } from "@/components/ui/card";

export default function GalleryPage() {
    return (
        <>
            <Card className="p-5 my-6 bg-primary-200 shadow-lg shadow-primary-900">
                <div className="max-w-full">
                    <h2 className="mb-6 flex justify-center text-4xl font-extrabold text-primary-900 dark:text-primary-900">
                        Our Gallery
                    </h2>
                    
                </div>
                <ImageGallery />
            </Card>
        </>
    )
}