import Carousel from "@/components/Carousel/Carousel";
import { ImageGallery } from "@/components/ImageGallery";
import { Card } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <>
      <Card className="p-5 my-6 bg-primary-50 shadow-lg shadow-primary-900">
        <div className="flex flex-col md:flex-row items-center md:gap-8">
          <div className="max-w-3xl flex-1 lg:mr-6">
            <h2 className="mb-4 text-4xl font-extrabold text-primary-50 dark:text-primary-900">
              About Us
            </h2>
            <p className="my-6 font-normal text-primary-900 sm:text-xl dark:text-primary-900">
              <b>We Specialize in Local & Long distance Spa & Hot Tub Moves</b> 
            </p>
            <p className="my-6 font-normal text-primary-900">
              We provide services from moving to maintenance and everything in between. We are everything hot tubs! 
              Reach out today for a free estimate.
            </p>
            <ul className="my-6 font-normal text-primary-900 sm:text-xl dark:text-primary-900">
              <li>Transport & Move</li>
              <li>Disposal</li>
              <li>Consignment & Sale</li>
              <li>Repos</li>
              <li>Inspections</li>
              <li>Cranes For Limited Access Moves</li>
              <li>Service & Repair</li>
              <li>Spa Products</li>
              <li>Deck Construction Referrals</li>
              <li>Electrical Referrals</li>
              <li>Drop Shipping</li>
              <li>Troubleshooting Advice</li>
            </ul>
          </div>
          <div className="flex-1 mx-auto">
            <iframe
              style={{ maxWidth: "100%", width: "100%" }}
              // width= {530}
              // height= {303}
              width={530}
              height={303}
              src="https://www.youtube.com/embed/GyWjyRhK1Vc?si=yusZ6j78dGgb4Rq5"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </Card>
    </>
  );
}
