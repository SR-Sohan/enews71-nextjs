import SideAdd from "../partial/SideAdd";
import SpeicalContent from "../partial/SpeicalContent";

const ThirdConent = () => {
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
    }
  ];
  return (
    <div className="container mx-auto  py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 ">
        <div className="lg:col-span-8">
         <SpeicalContent newsItems={newsItems} isImgRight={true} title={"বিশেষ সংবাদ"}/>
        </div>

        <div className="hidden lg:block lg:col-span-3">
          <SideAdd width={"328px"} height={"475px"}/>
        </div>
      </div>
    </div>
  );
};

export default ThirdConent;
