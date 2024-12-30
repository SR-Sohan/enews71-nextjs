export default function SideAdd({width,height}) {
  return (
    <>
      <div className="w-full h-auto bg-gray-200 rounded-lg flex items-center justify-center">
        <img
          src="/img.png"
          alt="Ad Section"
          className="w-full h-auto rounded-lg"
          style={{ width: width, height: height }}
        />
      </div>
    </>
  );
}
