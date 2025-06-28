import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import {
  Banner,
  Footer,
  Hero,
  Navbar,
  Products,
  Subscribe,
  Testimoinals,
  TopProducts,
} from "./components/indes";

function App() {
  const [orderPopUp, setOrderPopUp] = useState(false);

  const handleOrderPopUp = () => {
    setOrderPopUp(!orderPopUp);
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <div className="bg-white duration-200"></div>
      <Navbar handleOrderPopUp={handleOrderPopUp} />
      <Hero handleOrderPopUp={handleOrderPopUp} />
      <Products />
      <TopProducts handleOrderPopUp={handleOrderPopUp} />
      <Banner />
      <Subscribe />
      <Testimoinals />
      <Footer />
    </>
  );
}

export default App;
