import FirstConent from "@/components/Home/FirstConent";
import SecondContent from "@/components/Home/SecondConent";
import ThirdConent from "@/components/Home/ThirdConent";
import ViedoNews from "@/components/Home/VideoNews";
import AdContent from "@/components/partial/AdContent";

export default function Home() {
  return (
    <>
      <FirstConent/>
      <AdContent/>
      <SecondContent/>
      <ViedoNews/>
      <AdContent/>
      <ThirdConent/>
    </>
  );
}
