import { Link } from "react-router-dom";
import FloatingButton from "./floating-button";
import { Button } from "./ui/button";
import FadeContent from "./react-bits/fade-content";

export function Hero() {
  return (
    <div className="relative bg-amber-50 flex flex-col justify-center text-emerald-700 h-screen">
      <div className="relative max-w-5xl mx-auto px-6 items-center">
        <div className="mx-auto text-center space-y-5">
          <FadeContent
            duration={1000}
            easing="ease-out"
            initialOpacity={0}
            delay={0.1}
          >
            <div className="flex flex-col mx-auto text-center justify-center items-center space-y-5">
              <img src="https://raw.githubusercontent.com/kogskogskogs/appletree/e843eb5d6a701459171552ecfe3543355e5baba9/src/img/Financial%20Literacy%201.svg" className="w-60"/>
              <p className="text-lg md:text-2xl font-semibold font-inter">
                we are <span className="font-black">project apple tree.</span>
              </p>
              <p className="text-6xl font-instrument">
                Help make a difference <br/> in education.
              </p>
            </div>
          </FadeContent>
          <FadeContent
            duration={1000}
            easing="ease-out"
            initialOpacity={0}
            delay={0.3}
          >
            <p className="mx-auto leading-[22px] font-inter text-center font-medium md:text-xl">
              Support our school fundraiser.
            </p>
          </FadeContent>
          <div className="flex flex-row mx-auto gap-4 justify-center">
            <FadeContent
              duration={1000}
              easing="ease-out"
              initialOpacity={0}
              delay={0.5}
            >
              <Link to={"/donate"}>
                <Button className="bg-emerald-700 hover:bg-emerald-800 text-amber-50 font-inter font-medium">
                  Donate
                </Button>
              </Link>
            </FadeContent>
            <FadeContent
              duration={1000}
              easing="ease-out"
              initialOpacity={0}
              delay={0.8}
            >
              <Link to={"/drop-off-locations"}>
                <Button className="bg-transparent border border-emerald-700 hover:bg-emerald-800/10 text-emerald-788 font-inter font-medium">
                  See Drop-Off Locations
                </Button>
              </Link>
            </FadeContent>
          </div>
        </div>
      </div>
      <div className="absolute flex flex-col gap-3 bottom-8 left-1/2 transform -translate-x-1/2 justify-center items-center font-inter">
        <FadeContent
          duration={1000}
          easing="ease-out"
          initialOpacity={0}
          delay={0.9}
        >
          <p className="text-xs md:text-base">what <span>project apple tree</span> aims </p>
        </FadeContent>
        <FadeContent
          duration={1000}
          easing="ease-out"
          initialOpacity={0}
          delay={1.0}
        >
          <FloatingButton />
        </FadeContent>
      </div>
    </div>
  );
}
