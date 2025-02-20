// import Grid from "./components/Grid";
import Hero from "./components/Hero";
import BugReportButton from "./components/ui/BugReportButton";
import { FloatingNav } from "./components/ui/floating-navbar";
import RecentProjects from "./components/ui/RecentProjects";
import { navItems } from "../data/index";
import GlowingTestGrid from "./components/GlowingTestGrid"
;

// import Image from "next/image";

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col  overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={navItems}
        />
        <Hero />
        {/* <Grid /> */}
        <GlowingTestGrid />
        <RecentProjects />
        <BugReportButton />
        
      </div>
    </main>
  );
}
