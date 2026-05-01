import Banner from "@/components/Banner/Banner";
import FeaturedBooks from "@/components/FeaturedBooks/FeaturedBooks";
import MarqueeText from "@/components/MarqueeText/MarqueeText";
import PopularCategories from "@/components/PopularCategories/PopularCategories";


export default function Home() {
  return (
    <div className="">
      <Banner />
      <MarqueeText />
      <FeaturedBooks />
      <PopularCategories/>
    </div>
  );
}
