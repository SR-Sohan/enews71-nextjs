import Image from "next/image";
import img from "../../public/add1.png";

const AdContent = () => {
  return (
    <div className="container mx-auto my-5 px-4 sm:px-6 lg:px-8">
      <div className="h-[111px] w-full relative">
        <Image
          src={img}
          fill
          alt="Advertisement"
          className="object-contain"
          sizes="(max-width: 640px) 100vw,
                 (max-width: 768px) 100vw,
                 (max-width: 1024px) 100vw,
                 1200px"
        />
      </div>
    </div>
  );
};

export default AdContent;