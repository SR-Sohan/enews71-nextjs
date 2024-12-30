const HeadTitle = ({ title }) => {
  return (
    <div className=" w-full flex items-center justify-center mb-2">
      {/* Left Line */}
      <div className="flex-1">
        <div className="h-[2px] bg-blue"></div>
        <div className="h-[2px] bg-blue mt-[2px] "></div>
        <div className="my-1"></div>
        <div className="h-[2px] bg-blue"></div>
        <div className="h-[2px] bg-blue mt-[2px]"></div>
      </div>
      <div className="px-4">
        <h1 className="text-sm lg:text-2xl text-blue font-bold text-center text-gray-800 dark:text-gray-200">
          {title}
        </h1>
      </div>

      <div className="flex-1">
        <div className="h-[2px] bg-blue"></div>
        <div className="h-[2px] bg-blue mt-[2px] "></div>
        <div className="my-1"></div>
        <div className="h-[2px] bg-blue"></div>
        <div className="h-[2px] bg-blue mt-[2px]"></div>
      </div>
    </div>
  );
};

export default HeadTitle;
