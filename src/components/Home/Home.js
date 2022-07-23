import React from "react";
import background from "../../Media/bgdot.png";
import Header from "../Header/Header";
import AboutUs from "./AboutUs";
import TopSection from "./TopSection";
import ProductFeatures from './ProductFeatures';
import CommonQuestion from './CommonQuestion';
import Clins from "./Clins";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      <div style={{ backgroundImage: `url(${background})` }}>
        <Header />
        <TopSection />
      </div>
      <ProductFeatures />
      <div className="mt-20">
      <AboutUs/>
      </div>
      <div className="mt-20">
      <CommonQuestion/>
      </div>
      <div className="mt-20">
      <Clins/>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
