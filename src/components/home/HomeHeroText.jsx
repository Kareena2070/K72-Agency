import Video from "./video";

function HomeHeroText() {
  return (
    <div className="font-[font1] pt-5 text-center text-white ">
      <div className="text-[10vw] uppercase leading-[8vw] flex items-center justify-center">The spark for</div>
      <div className="text-[10vw] uppercase leading-[8vw] flex items-center justify-center ">all <div className="h-[7vw] w-[16vw] rounded-full -mt-10 overflow-hidden"><Video /></div> things</div>
      <div className="text-[10vw] uppercase leading-[8vw] flex items-center justify-center">creative</div>
    </div>
  );
}

export default HomeHeroText;