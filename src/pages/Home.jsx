import Video from "../components/home/video";
import HomeHeroText from "../components/home/HomeHeroText";
import HomeButtomText from "../components/home/HomeButtomText";

function Home() {

  return (
    <div className="min-h-screen min-w-screen overflow-hidden"> 
       
        <div className="h-screen w-screen fixed"> 
            <Video/>
        </div>

        <div className="h-screen w-screen relative flex flex-col justify-between pt-2 pb-2">
          <HomeHeroText/>
          <HomeButtomText />
        </div>
    </div>
  );
}

export default Home;