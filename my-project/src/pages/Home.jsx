import Video from "../../src/components/home/Video.jsx";
import HomeHeroText from "../../src/components/home/HomeHeroText.jsx";
import HomeBottomText from "../../src/components/home/HeroBottomText.jsx";


const Home = () => {
  return (
    <div className="text-white">
      <div className="h-screen w-screen fixed top-0 left-0">
        <Video />
      </div>

      <div className="h-screen w-screen relative pb-5 overflow-hidden flex flex-col justify-between">
        <HomeHeroText />
        <HomeBottomText />
      </div>
    </div>
  );
};

export default Home;