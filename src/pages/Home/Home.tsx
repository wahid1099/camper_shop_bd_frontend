import CategoriesProduct from "@/components/Home/Categorie";
import HeroSection from "@/components/Home/HeroSection/Herosection";
import BestSelling from "../BestSellingProduct/BestSellingProduct";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import FeaturedTourGroups from "@/components/Home/UniqueSection/FeaturedTourGroups ";
import FAQSection from "@/components/Home/Faqsection/FAQSection";

const Home = () => {
  return (
    <>
      <HeroSection></HeroSection>
      <div className="mx-auto container">
        <div className="container">
          <BestSelling></BestSelling>
        </div>
        <CategoriesProduct></CategoriesProduct>
        <FeaturedProducts></FeaturedProducts>
        <FeaturedTourGroups></FeaturedTourGroups>
        <FAQSection></FAQSection>
      </div>
    </>
  );
};

export default Home;
