import HeadTitle from "../partial/HeadTitle";
import VideoCarousel from "../partial/VideoCarousel";

const ViedoNews = () => {
    const videos = [
        {
          id: '1',
          youtubeId: 'VIDEO_ID_1',
          title: 'ভারতে ইস্পাত ও প্রতি নিয়ে নতুন সিদ্ধান্ত বানিজ্য মন্ত্রণালয়ের',
          date: '১৭ সেপ্টেম্বর, ২০২৪'
        },
        {
          id: '2',
          youtubeId: 'VIDEO_ID_2',
          title: 'বিনায়কপল্লীতে বাণিসূত্র ড. শীর্ষেন্দু মুখী আহত',
          date: '১৭ সেপ্টেম্বর, ২০২৪'
        },
        {
          id: '3',
          youtubeId: 'VIDEO_ID_3',
          title: 'শেখ হাসিনার বিচার নিয়ে আওয়ামী লীগের বক্তব্য',
          date: '১৭ সেপ্টেম্বর, ২০২৪'
        },
        {
          id: '4',
          youtubeId: 'VIDEO_ID_4',
          title: 'ইউএস মার্কেটে ভাঙছে বিশ্ব রিটেল বিনিয়োগ',
          date: '১৭ সেপ্টেম্বর, ২০২৪'
        },
        {
            id: '5',
            youtubeId: 'VIDEO_ID_4',
            title: 'ইউএস মার্কেটে ভাঙছে বিশ্ব রিটেল বিনিয়োগ',
            date: '১৭ সেপ্টেম্বর, ২০২৪'
          },
          {
            id: '6',
            youtubeId: 'VIDEO_ID_4',
            title: 'ইউএস মার্কেটে ভাঙছে বিশ্ব রিটেল বিনিয়োগ',
            date: '১৭ সেপ্টেম্বর, ২০২৪'
          }
      ];

    return (
        <div className="container mx-auto my-4">
            <HeadTitle title={"ভিডিও সংবাদ"}/>
            <VideoCarousel videos={videos}/>
        </div>
    );
}


export default ViedoNews;