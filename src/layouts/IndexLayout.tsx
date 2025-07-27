import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { NavigationBar } from "@/components/navigation-bar";

export default function IndexLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className="relative flex flex-col select-none mx-0 tracking-wide">
        <NavigationBar />
        <Hero />
        <main className="flex mx-auto max-w-5xl pt-10 px-5">{children}</main>
        <Footer />
      </div>
    );
  }