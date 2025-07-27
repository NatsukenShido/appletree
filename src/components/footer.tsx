import { Link } from "react-router-dom";
import { Separator } from "./ui/separator";

export function Footer() {
  return (
    <div className="relative flex flex-col justify-center bg-emerald-800 text-amber-50 h-86 overflow-hidden">
      <div className="absolute inset-0 max-w-full footer-bg" />
      <div className="relative mx-auto px-6 items-center">
        <div className="flex flex-col gap-3 mx-auto max-w-5xl text-center">
          <div className="flex font-inter justify-between">
            <Link to={"/donate"}>
              <p>Donate</p>
            </Link>
            <Link to={"/drop-off-locations"}>
              <p>Drop-off Locations</p>
            </Link>
            <Link to={"/"}>
              <p>Contact</p>
            </Link>
          </div>
          <Separator />
          <div className="flex flex-col space-y-4 md:space-y-0">
            <p className="text-6xl md:text-9xl font-extrabold font-inter inset-0 tracking-wide">appletree™</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-0 justify-items-center md:justify-items-stretch font-inter">
              <div className="flex flex-row items-center gap-1 text-xs">
                <Link to={'https://github.com/NatsukenShido/appletree.github.io'} rel="noreferrer" target="blank">
                  <p className="hover:bg-emerald-900 py-1 px-2 rounded-lg">Github</p>
                </Link>
              </div>
              <p className="text-center md:text-end text-xs">
                &copy; {new Date().getFullYear()}{" "}
                <span>
                  Project Apple Tree, part of School Fundraiser<br/>
                  Made with <span className="text-emerald-300">&lt;3</span> by Ivan, Queen and Nikki
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
