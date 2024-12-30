import Link from "next/link";

export default function FluidSingle({ 
    imageUrl, 
    title, 
    content 
  }) {
  return (
    <article className="relative overflow-hidden mb-4">
      <Link href="#" >
      <img 
        src={imageUrl} 
        alt={title}
        className="float-left w-32 h-32 object-cover rounded mr-4"
      />
      
      {/* Title and content will wrap around and flow under the image */}
      <h2 className="text-sm lg:text-lg font-semibold mb-2 leading-tight">
        {title}
      </h2>
      <p className="text-xs lg:text-sm text-gray-700">
        {content}
      </p>
      </Link>
    </article>
  );
}
