import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
  } from "@/components/ui/navigation-menu";
  import { Link } from "react-router-dom";
  
  export const NavigationBar = () => (
    <div className="relative z-1">
      <div className="fixed top-0 right-0 left-0 pt-4 bg-[var(--bg-color)]/90 text-[var(--primary-color)] backdrop-blur-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 mx-auto md:h-13 max-w-7xl items-center place-content-between px-10 py-2 md:py-0">
          <h1 className="col-span-1 place-self-center md:justify-self-start md:place-self-center">
            <Link to={"/"}>
              <div className="flex flex-row gap-2 text-center items-center md:my-0 my-1">
                <p className="font-extrabold font-inter">project apple tree</p>
              </div>
            </Link>
          </h1>
          <div className="col-span-1 place-self-center md:place-self-end font-inter py-2 md:py-0">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to={"/donate"}>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Donate
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to={"/drop-off-locations"}>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Drop-off Locations
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </div>
    </div>
  );
  