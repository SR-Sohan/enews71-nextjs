import Image from "next/image";
import Link from "next/link";

export interface NewSingleCard {
  imageUrl: string;
  title: string;
}

const SingleCard: React.FC<NewSingleCard> = ({ imageUrl, title }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center px-2">
      <div className="w-full max-w-[277px] h-auto aspect-[277/152] relative">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 90vw,
                 (max-width: 768px) 45vw,
                 (max-width: 1024px) 30vw,
                 277px"
        />
      </div>
      <Link href="/hello">
        <h2 className="mt-2 text-sm sm:text-base lg:text-lg font-medium leading-tight line-clamp-2 hover:text-blue-600 transition-colors">
          {title}
        </h2>
      </Link>
    </div>
  );
};

export default SingleCard;