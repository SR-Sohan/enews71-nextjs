import Link from "next/link";
import Image from "next/image";

const SingleNews = ({ isImgRight, item, side }) => {
  return (
    <div
      className={`flex gap-4 mb-6 last:mb-0 items-center justify-end ${
        !isImgRight ? "flex-row-reverse" : ""
      }`}
    >
      <Link href="/">
        <h3 className="flex-1 text-sm md:text-base lg:text-lg  leading-tight text-black dark:text-gray-200 hover:text-blue-500 transition-colors duration-200">
          {item.title}
        </h3>
      </Link>
      <div className={`${ !side ? 'w-[168px]' : 'w-[118px]'} ${ !side ? 'h-[99px]' : 'h-[66px]'} flex-shrink-0 overflow-hidden rounded-md shadow-md relative`}>
        <Image
          src={item.imageUrl}
          alt={item.title}
          layout="fill"
          objectFit="cover"
          className="rounded-md transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>
  );
};

export default SingleNews;
