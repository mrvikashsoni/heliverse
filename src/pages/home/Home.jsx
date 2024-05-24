import { Header } from "../../components/Header";
import { Apply } from "../../components/apply/Apply";
import { Footer } from "../../components/footer/Footer";
import { HeroSection } from "../../components/heroSection/HeroSection";
import { Plugin } from "../../components/plugin/Plugin";
import { Rating } from "../../components/rating/Rating";
import { Support } from "../../components/support/Support";
import { SweetAlert } from "../../components/sweetAlert/SweetAlert";
import { Visitors } from "../../components/visitors/Visitors";

// Animation

import styles from "./AnimeCur.module.css";
import useScript from "./useScript";

export const Home = (url) => {
  useScript(url);
  return (
    <div>
      <SweetAlert />
      <Header />
      <div className={styles.b_title} style={{ height: "100vh" }}>
        <HeroSection />
        <Rating />
        <Visitors />
        <Apply />
        <Support />
        <Plugin />
        <Footer />
      </div>

      <canvas />
    </div>
  );
};
