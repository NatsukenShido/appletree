import { LocationCard } from "@/components/location-card";
import FadeContent from "@/components/react-bits/fade-content";
import ActionLayout from "@/layouts/ActionLayout";
import { PackageOpen } from "lucide-react";

export default function DonatePage() {
  return (
    <ActionLayout>
      <div className="flex flex-col pt-5 pb-10 w-5xl mx-auto font-inter text-amber-50">
        <div className="relative mx-auto px-6 items-center">
          <div className="mx-auto max-w-5xl text-center space-y-7">
            <FadeContent
              duration={1000}
              easing="ease-out"
              initialOpacity={0}
              delay={0.1}
            >
              <div className="mx-auto">
                <div className="flex items-center justify-center">
                  <PackageOpen size={120} />
                </div>
              </div>
            </FadeContent>
            <FadeContent
              duration={1000}
              easing="ease-out"
              initialOpacity={0}
              delay={0.1}
            >
              <div className="mx-auto text-center">
                <p className="text-5xl md:text-8xl font-instrument">
                  Donating on-site?
                </p>
              </div>
            </FadeContent>
            <FadeContent
              duration={1000}
              easing="ease-out"
              initialOpacity={0}
              delay={0.1}
            >
              <p className="mx-auto leading-[22px] font-inter w-100 text-center">
                Here are the official drop-off points for in-kind donations.
                Please coordinate with the location contact before delivering
                any items.
              </p>
            </FadeContent>
            <div className="flex flex-row mx-auto gap-4 justify-center">
              <FadeContent
                duration={1000}
                easing="ease-out"
                initialOpacity={0}
                delay={0.1}
              >
                <LocationCard />
              </FadeContent>
            </div>
          </div>
        </div>
      </div>
    </ActionLayout>
  );
}
