"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation, Pagination } from "swiper/modules";
import Link from "next/link";

const VideoCarousel = ({ videos }) => {
  return (
    <div>
      <Swiper
        modules={[ Navigation]}
        spaceBetween={16}
        slidesPerView={2} // Default for mobile
        breakpoints={{
          380: { slidesPerView: 1 },
          640: { slidesPerView: 2 }, // Mobile
          768: { slidesPerView: 2 }, // Tablet
          1024: { slidesPerView: 4 }, // Desktop
        }}
        pagination={{ clickable: false }}
        navigation
        className="mySwiper"
        effect="fade"
      >
        {videos.map((video, index) => (
          <SwiperSlide key={index} >
             <div className="relative aspect-video bg-gray-100 rounded overflow-hidden">
                <iframe
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  className="absolute inset-0 w-full h-full"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center">
                    <div className="w-0 h-0 border-l-8 border-l-red-600 border-t-6 border-t-transparent border-b-6 border-b-transparent ml-1" />
                  </div>
                </div>
              </div>
              <Link href={""} target="_blank">
              <h3 className="mt-2 text-sm font-medium line-clamp-2">
                {video.title}
              </h3>
              </Link>
              <p className="text-xs text-gray-500 mt-1">{video.date}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default VideoCarousel;
