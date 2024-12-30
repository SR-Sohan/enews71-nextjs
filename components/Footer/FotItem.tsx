import Link from 'next/link';

export default function FotItem() {
  return (
    <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 dark:text-gray-300 pt-8 px-2">
      <Link href="/privacy-policy" className=" w-auto text-center hover:underline">
        গোপনীয়তার নীতি
      </Link>
      <Link href="/terms-of-use" className=" w-auto text-center hover:underline">
        ব্যবহারের শর্তাবলি
      </Link>
      <Link href="/contact" className=" w-auto text-center hover:underline">
        যোগাযোগ
      </Link>
      <Link href="/about-us" className=" w-auto text-center hover:underline">
        আমাদের সম্পর্কে
      </Link>
      <Link href="/about" className=" w-auto text-center hover:underline">
        আমরা
      </Link>
      <Link href="/archive" className=" w-auto text-center hover:underline">
        আর্কাইভ
      </Link>
      <Link href="/advertisement" className=" w-auto text-center hover:underline">
        বিজ্ঞাপন
      </Link>
    </div>
  );
}
