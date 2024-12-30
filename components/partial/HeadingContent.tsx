import Image from "next/image";

export default function HeadingContent() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 container mx-auto px-4">
      <div className="relative w-full aspect-[479/355]">
        <Image
          src="/Frame 959.png"
          alt="Banner Image"
          fill
          className="object-cover rounded-lg"
          sizes="(max-width: 768px) 100vw,
                 (max-width: 1024px) 50vw,
                 479px"
          priority
        />
      </div>
      <div className="w-full space-y-2">
        <p className="text-gray text-sm sm:text-base">বাণিজ্য</p>
        <h2 className="text-black text-xl sm:text-2xl lg:text-3xl font-bold">
          ২৮ দিনে ২ বিলিয়ন ডলারের বেশি রেমিট্যান্স এসেছে দেশে
        </h2>
        <p className="text-gray-600 text-sm sm:text-base py-4 leading-relaxed">
          ২০২৪-২৫ অর্থবছরের সেপ্টেম্বর মাসের প্রথম ২৮ দিনে প্রবাসী বাংলাদেশীরা প্রায় ২.১১ বিলিয়ন মার্কিন ডলার রেমিট্যান্স পাঠিয়েছেন। আজ রোববার বাংলাদেশ ব্যাংকের দেওয়া তথ্য অনুসারে, রাষ্ট্রীয় মালিকানাধীন এবং বিশেষায়িত ব্যাংকের মাধ্যমে রেমিট্যান্স এসেছে ৬৭৯.১০ মিলিয়ন মার্কিন ডলার। আর বেসরকারি ব্যাংকগুলোর মাধ্যমে এসেছে ১.৪৩ বিলিয়ন মার্কিন ডলার।
        </p>
        <span className="text-gray2 text-xs sm:text-sm">১ ঘন্টা আগে আপডেট</span>
      </div>
    </div>
  );
}