import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Compass, SquareArrowOutUpRight } from "lucide-react";
import AnimatedContent from "./react-bits/animated-content";
import { Link } from "react-router-dom";
import { LocationData } from "@/utils/locations";
import { Button } from "./ui/button";

export function LocationCard() {
  return (
    <div className="relative flex flex-col mx-auto">
      <div className="relative grid grid-cols-2 gap-8 w-5xl my-5">
        {LocationData.map((item, index) => (
          <Link to={item.brandlink} key={index}>
            <AnimatedContent
              distance={50}
              direction="vertical"
              reverse={false}
              duration={1}
              ease="power3.out"
              initialOpacity={0.0}
              animateOpacity
              scale={1.0}
              threshold={0.2}
              delay={item.id * 0.1}
            >
              <div>
                <div className="absolute inset-0 pointer-events-none rounded-xl">
                  
                </div>
                <Card
                  className="cursor-pointer bg-amber-50 font-ceribri text-emerald-700 border-0 shadow-xl rounded-lg transition-all active:scale-95"
                  key={index}
                >
                  <CardHeader>
                    <CardDescription className="font-cerebri text-start z-1">
                      {item.entry}
                    </CardDescription>
                    <CardTitle className="text-4xl text-start font-extrabold z-1">
                      {item.title}
                    </CardTitle>
                    {/* <CardAction>
                      <SquareArrowOutUpRight />
                    </CardAction> */}
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="font-bold text-start z-1">
                      {item.address}
                    </CardDescription>
                    <CardDescription className="font-bold text-start z-1">
                      {item.contact} <span className="font-medium">#{item.number}</span>
                    </CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Link to={item.brandlink}>
                      <Button className="bg-emerald-700 hover:bg-emerald-800 w-full"> <Compass /> Get Directions</Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </AnimatedContent>
          </Link>
        ))}
      </div>
    </div>
  );
}
