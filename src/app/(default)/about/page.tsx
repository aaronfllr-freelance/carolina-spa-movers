import Carousel from "@/components/Carousel/Carousel";
import { ImageGallery } from "@/components/ImageGallery";

export default function AboutPage() {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center md:gap-8">
        <div className="max-w-3xl flex-1 lg:mr-6">
          <h2 className="mb-4 text-4xl font-extrabold text-primary-50 dark:text-primary-50">
            About Us
          </h2>
          <p className="my-6 font-normal text-primary-300 sm:text-xl dark:text-primary-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit
            amet tempus quam, non auctor odio. Vivamus vel quam quis dui
            fermentum suscipit. Maecenas metus tellus, dictum vitae blandit id,
            luctus sed leo. Curabitur laoreet eros felis, a iaculis lectus
            pharetra non. Sed nisi nibh, pulvinar at eleifend sit amet, faucibus
            a ligula. Nulla facilisi. Sed nec luctus diam, quis tristique
            libero. Nulla blandit tempus aliquet. Ut molestie aliquet mattis.
            Morbi ac tincidunt erat. Suspendisse volutpat varius posuere. Aenean
            nunc urna, pulvinar nec eleifend sed, convallis et libero. Phasellus
            mi eros, tempor non tristique ut, tincidunt porttitor ipsum.
            Vestibulum a vestibulum lacus. Praesent convallis sodales enim et
            malesuada. Pellentesque habitant morbi tristique senectus et netus
            et malesuada fames ac turpis egestas. Quisque placerat vitae nisi
            sed cursus. Nullam sollicitudin est euismod maximus tincidunt. Nunc
            nibh eros, suscipit id neque ut, commodo euismod urna. Curabitur
            euismod ut sapien non venenatis. Maecenas imperdiet lorem quis
            cursus accumsan. Phasellus mattis lorem vel tellus posuere, gravida
            tincidunt nisi viverra. Aliquam interdum aliquet venenatis. Sed in
            mollis neque.
          </p>
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
    </>
  );
}
{/* <iframe
  width="540"
  height="303"
  src="https://www.youtube.com/embed/GyWjyRhK1Vc"
  title="Hot Tub Taxi Moving a Spa"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerpolicy="strict-origin-when-cross-origin"
  allowfullscreen
></iframe>; */}
