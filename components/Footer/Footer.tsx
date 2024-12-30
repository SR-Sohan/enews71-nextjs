import FootConent from "./FootConent";
import FotItem from "./FotItem";

const Footer = () => {
  return (
    <footer>
      <div className="bg-gray py-8">
        <FootConent />
        <FotItem />
      </div>

      <div className="bg-black text-white py-4">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
            {/* Left Paragraph */}
            <p className="text-muted">স্বত্ব © ইনিউজ৭১.কম |</p>

            {/* Right Paragraph */}
            <p className="text-muted">
              ওয়েবসাইটের কোনো লেখা, ছবি, ভিডিও অনুমতি ছাড়া ব্যবহার বেআইনি।
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
