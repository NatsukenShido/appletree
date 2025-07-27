import { Footer } from "@/components/footer";
import { NavigationBar } from "@/components/navigation-bar";

export default function ActionLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className="relative flex flex-col select-none mx-0 tracking-wide">
        <NavigationBar />
        <main className="flex mx-auto max-w-5xl xl:max-w-7xl py-30">{children}</main>
        <Footer />
      </div>
    );
  }