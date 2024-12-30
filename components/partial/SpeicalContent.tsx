import BigContent from "./BigContent";
import HeadTitle from "./HeadTitle";
import SingleNews from "./SingleNews";

const SpeicalContent = ({ title, isImgRight, newsItems,side }) => {
  return (
    <>
      <HeadTitle title={title} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="">
         <BigContent />  {/*  Data will be send main component  */}
        </div>
        <div className="">
        {newsItems.map((item, index) => <SingleNews side={side} isImgRight={isImgRight} item={item} key={index}/> )}
        </div>
      </div>
    </>
  );
};

export default SpeicalContent;
