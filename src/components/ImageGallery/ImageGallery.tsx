import './imageGallery.css';

export interface GalleryProps {
    images?: { src: string, alt: string, height: number, width: number }[];
}

const defaultImages = [
    { src: "/assets/images/spas/spa1.jpg", alt: "One", height: 400, width: 400 },
    { src: "/assets/images/spas/spa2.jpg", alt: "Two", height: 400, width: 400 },
    { src: "/assets/images/spas/spa3.jpg", alt: "Three", height: 400, width: 400 },
    { src: "/assets/images/spas/spa4.jpg", alt: "Four", height: 400, width: 400 },
    { src: "/assets/images/spas/spa5.jpg", alt: "Five", height: 400, width: 400 },
    { src: "/assets/images/spas/spa6.jpg", alt: "Six", height: 400, width: 400 },
];

export const ImageGallery: React.FC<GalleryProps> = ({ images = defaultImages }) => {

    return (
    <>
        <div className='hidden mb-24 lg:flex'>
            <div className="gallery flex items-center">
            {/* <img src="https://picsum.photos/id/1028/300/300" alt="a forest after an apocalypse" /> */}
                {images.map((image, index) => (
                    <img
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    height={image.height}
                    width={image.width}
                    />
                ))}
            </div>
        </div>
    </>
    )
}

export default ImageGallery;