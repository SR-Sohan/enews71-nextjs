import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn } from 'react-icons/fa';

export default function FootContent() {
  return (

    
<div className="container mx-auto ">
  <div className="grid grid-cols-12 gap-2">
    {/* Logo Section (Left Column) */}
    <div className="col-span-12 lg:col-span-2 text-center">
      <img
        src="/logo.png"
        alt="Logo"
        className="w-32 mx-auto  lg:mx-0"
      />
    </div>

    {/* Content Section (Middle Column) */}
    <div className="col-span-12 lg:col-span-8 py-4 text-center">
      <p>সম্পাদক : মোঃ শওকত হায়দার (জিকো)</p>
      <p>প্রকাশক : ইনিউজ৭১ মিডিয়া লিমিটেড <br/>
      হাউজ: নাম্বার ৫৫ , দ্বিতীয় তলা, রোড নাম্বার ৬/এ , সেক্টর - ১২ উত্তরা, ঢাকা - ১২৩০ ।</p>
      <p>ফোন: +880 258 053 897, ইমেইল: nfo@enews71.com , enewsltd@gmail.com</p>
    </div>

    {/* Social Icons Section (Right Column) */}
    <div className="col-span-12 lg:col-span-2 text-center ">
      <div className="flex justify-center  gap-4">
        <Link
          href="https://facebook.com"
          target="_blank"
          className="flex items-center justify-center w-10 h-10 border-[1px] border-gray-300 dark:border-gray-600 rounded-lg hover:bg-blue-600 hover:text-white transition"
        >
          <FaFacebookF size={18} />
        </Link>
        <Link
          href="https://twitter.com"
          target="_blank"
          className="flex items-center justify-center w-10 h-10 border-[1px] border-gray-300 dark:border-gray-600 rounded-lg hover:bg-blue-400 hover:text-white transition"
        >
          <FaTwitter size={18} />
        </Link>
        <Link
          href="https://youtube.com"
          target="_blank"
          className="flex items-center justify-center w-10 h-10 border-[1px] border-gray-300 dark:border-gray-600 rounded-lg hover:bg-red-600 hover:text-white transition"
        >
          <FaYoutube size={18} />
        </Link>
        <Link
          href="https://linkedin.com"
          target="_blank"
          className="flex items-center justify-center w-10 h-10 border-[1px] border-gray-300 dark:border-gray-600 rounded-lg hover:bg-blue-700 hover:text-white transition"
        >
          <FaLinkedinIn size={18} />
        </Link>
      </div>
    </div>
  </div>
</div>

   
  );
}
