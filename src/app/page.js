import Banner from "@/components/Banner/Banner";
import FeaturedBooks from "@/components/FeaturedBooks/FeaturedBooks";
import MarqueeText from "@/components/MarqueeText/MarqueeText";
import PopularCategories from "@/components/PopularCategories/PopularCategories";
import Testimonials from "@/components/Testimonials/Testimonials";

export default function Home() {
  return (
    <div>
      <Banner />
      <MarqueeText />
      <FeaturedBooks />
      <PopularCategories />
      <Testimonials />
    </div>
  );
}
