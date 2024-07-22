import './imageGallery.css';

export interface GalleryProps {
    images?: { src: string, alt: string, height: number, width: number }[];
}

const defaultImages = [
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