import FluidConent from "../partial/FluidConent";
import HeadingContent from "../partial/HeadingContent";
import JoinCard from "../partial/JoinCard";
import NewsTab from "../partial/NewsTab";
import SideAdd1 from "../partial/SideAdd";

export default function FirstConent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 ">
    

        <div className="lg:col-span-8">
          <HeadingContent />
          <FluidConent/>
          <JoinCard/>
        </div>

       
        <div className="hidden lg:block lg:col-span-3">
          <SideAdd1 width={"470px"} height={"380px"}/>
          <NewsTab/>
          <SideAdd1 width={"407px"} height={"264px"}/>
        </div>

      </div>
    </div>
  );
}
