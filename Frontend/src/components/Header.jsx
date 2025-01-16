import React from "react"
import VideoEarth from "./VideoEarth"
import Typed from "typed.js"
import VideoPath from "../../28049-367411286.mp4"

const Header = () => {

  const VideoClass = "z-0 relative ml-[40%]"
  // const VideoPath = "../../28049-367411286.mp4"

  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Check the weather powered with AI.^600', 'Read a new article about weather and climat.'],
      typeSpeed: 60,
      showCursor: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="w-[100%] h-[20%] pt-[30px] mb-16 bg-black">
      <h1 className="mx-[18%] mt-[10%] pb-5 text-[90px] text-white font-bold z-10 absolute">MétéoMonde.</h1>
      <div className="mt-[15%] py-[40px] w-[650px] h-[250px] mx-[15%] z-10 absolute text-center">
        <div className="flex">
          <span ref={el} className="text-slate-200 text-[30px]" />
        </div>
        <button className="mt-[30px] bg-violet-500 p-[10px] rounded-md hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
          Check the Weather in Your Location
        </button>
      </div>
      <VideoEarth Videocss={VideoClass} VideoPath={VideoPath} />
    </div>
  )
}

export default Header
