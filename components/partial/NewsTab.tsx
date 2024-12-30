"use client"
import Link from "next/link";
import { useState } from "react";
import SingleNews from "./SingleNews";

const NewsTab = () => {
  const [activeTab, setActiveTab] = useState("latest");

  const newsItems = [
    {
      title: "বৈশ্বরবিরোধী আন্দোলনে 'শক্তিধর' তাহরিমা, যারফাত ও দেবরাজ বলে",
      imageUrl: "/img.png",
    },
    {
      title:
        "সিভিলে মর্চা গাড়ির দর্শনে জাতীয় বিশ্ববিদ্যালয়ে ভাঙচুরের প্রতিবাদ কেন্দ্র",
      imageUrl: "/img.png",
    },
    {
      title: "নেতামতীর রাতে কুয়াশায় আন্দোলন শেষ হটিল",
      imageUrl: "/img.png",
    },
    {
      title: "টি-টোয়েন্টিতে নতুন দুই এড়ি, বিস্ময়ের বিস্তার",
      imageUrl: "/img.png",
    },
    {
      title: "টি-টোয়েন্টিতে নতুন দুই এড়ি, বিস্ময়ের বিস্তার",
      imageUrl: "/img.png",
    },
    {
      title: "টি-টোয়েন্টিতে নতুন দুই এড়ি, বিস্ময়ের বিস্তার",
      imageUrl: "/img.png",
    },
    {
      title: "টি-টোয়েন্টিতে নতুন দুই এড়ি, বিস্ময়ের বিস্তার",
      imageUrl: "/img.png",
    },
    {
      title: "টি-টোয়েন্টিতে নতুন দুই এড়ি, বিস্ময়ের বিস্তার",
      imageUrl: "/img.png",
    },
    {
      title: "টি-টোয়েন্টিতে নতুন দুই এড়ি, বিস্ময়ের বিস্তার",
      imageUrl: "/img.png",
    },
    {
      title: "টি-টোয়েন্টিতে নতুন দুই এড়ি, বিস্ময়ের বিস্তার",
      imageUrl: "/img.png",
    },
    {
      title: "টি-টোয়েন্টিতে নতুন দুই এড়ি, বিস্ময়ের বিস্তার",
      imageUrl: "/img.png",
    },
  ];

  return (
 <div className="max-w-2xl border border-gray rounded-lg mt-6 h-[402px] flex flex-col">
      {/* Tab Headers */}
      <div className="flex border-b shrink-0">
        <button
          className={`flex-1 py-2 text-center font-medium ${
            activeTab === "latest"
              ? "bg-blue text-white"
              : "bg-gray text-gray-700"
          }`}
          onClick={() => setActiveTab("latest")}
        >
          সর্বশেষ সংবাদ
        </button>
        <button
          className={`flex-1 py-2 text-center font-medium ${
            activeTab === "featured"
              ? "bg-blue text-white"
              : "bg-gray text-gray-700"
          }`}
          onClick={() => setActiveTab("featured")}
        >
          জনপ্রিয়
        </button>
      </div>

      {/* News List with custom scrollbar */}
      <div className="flex-1 overflow-y-auto p-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 scrollbar-thumb-rounded-sm">
        {newsItems.map((item, index) => <SingleNews side={true} isImgRight={true} item={item} key={index}/> )}
      </div>

      {/* Bottom Section */}
      <div className="border-t p-2 shrink-0 bg-red text-center rounded-xl">
        <button className="text-white text-sm font-bold">সব খবর</button>
      </div>
    </div>
  )
};

export default NewsTab;
