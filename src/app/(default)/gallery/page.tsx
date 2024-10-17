import { ImageGallery } from "@/components/ImageGallery";
import { Card } from "@/components/ui/card";

export default function GalleryPage() {
    return (
        <>
            <Card className="p-5 my-6 bg-primary-200 shadow-lg shadow-primary-900">
                <div className="container mx-auto py-8">
                    <h2 className=" flex justify-center text-4xl font-extrabold text-primary-900 dark:text-primary-900">
                        Gallery
                    </h2>
                    
                </div>
                <div className="container mx-auto py-8">
                <ImageGallery />
                </div>
            </Card>
        </>
    )
}