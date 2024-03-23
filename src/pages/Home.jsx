import CategoryList from "../components/CategoryList";
import FeaturedJob from "../components/FeaturedJob";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div className='w-[80%] mx-auto'>
      <Hero />
      <CategoryList />
      <FeaturedJob />
    </div>
  );
};

export default Home;
