import AreaSearch from "./AreaSearch";
import SideAdd from "./SideAdd";

const AreaNews = () => {
  return (
    <div>
      <div>
        <h4 className="text-blue text-lg lg:text-2xl ml-3">আপনার এলাকার খবর</h4>
        <div className="relative w-full h-[1px]">
          {/* Border Gradient */}
          <div
            className="absolute inset-0 h-full"
            style={{
              background: "linear-gradient(to right, red 30%, blue 30%)",
            }}
          ></div>
        </div>
      </div>

      <AreaSearch/>

      <SideAdd width={'285px'} height={'258px'}/>
    </div>
  );
};

export default AreaNews;
