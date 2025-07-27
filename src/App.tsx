import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { siteConfig } from "@/utils/site";

import IndexPage from "./pages";
import DonatePage from "./pages/actions/donate";
import DropOffPage from "./pages/actions/drop-off";

function App() {
  const location = useLocation();
  const isLandingPage = location.pathname === '/'

  useEffect(() => {
    const pathName = location.pathname;
    const page = siteConfig.pages.find((i) => i.href === pathName);
    
    document.title = siteConfig.title(page?.label);
  }, [location]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    if (isLandingPage) {
      document.documentElement.style.setProperty('--primary-color', '#065f46')
      document.documentElement.style.setProperty('--bg-color', '#fffbeb')
    } else {
      document.documentElement.style.setProperty('--primary-color', '#fffbeb')
      document.documentElement.style.setProperty('--bg-color', '#065f46')
    }
  }, [isLandingPage])

  return (
    <div>
      <Routes location={location}>
        <Route element={<IndexPage />} path="/" />

        <Route element={<DonatePage />} path="/donate" />
        <Route element={<DropOffPage />} path="/drop-off-locations" />
      </Routes>
    </div>
  );
}

export default App;
