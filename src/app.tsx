import { useState, useEffect } from "preact/hooks";
import Header from "./components/Header";
import Navigation from "./components/Navigation/Navigation";
import Content from "./components/Content";

export function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => setIsNavOpen(!isNavOpen);

  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isNavOpen]);

  return (
    <>
      <Header isNavOpen={isNavOpen} toggleNav={toggleNav} />
      <div class="flex w-screen">
        <Navigation isOpen={isNavOpen} toggleNav={toggleNav} />
        <Content />
      </div>
    </>
  );
}
