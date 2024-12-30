import SingleCard from "./SingleCard";

const JoinCard = () => {


    const newsItems = [
        {
          imageUrl: "/image.png",
          title: "ঢাকায় অটোরিকশা চলাচলে আর কোনো বাধা নেই"
        },
        {
          imageUrl: "/image.png",
          title: "তরুণি সন্ধা ভাঙল বৈশ্বরবিরোধী ছাত্র আন্দোলন"
        },
        {
          imageUrl: "/image.png",
          title: "ঢাকাকে ১৬ দালান আইএফ, বিজিং মেয়রে জেল-জরিমানা"
        },
        {
            imageUrl: "/image.png",
            title: "ঢাকায় অটোরিকশা চলাচলে আর কোনো বাধা নেই"
          },
          {
            imageUrl: "/image.png",
            title: "তরুণি সন্ধা ভাঙল বৈশ্বরবিরোধী ছাত্র আন্দোলন"
          },
          {
            imageUrl: "/image.png",
            title: "ঢাকাকে ১৬ দালান আইএফ, বিজিং মেয়রে জেল-জরিমানা"
          }
      ];
      return (
        <div className= "my-10 px-4">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {newsItems.map((item, index) => (
              <SingleCard key={index} {...item} />
            ))}
          </div>
        </div>
      );

}

export default JoinCard;