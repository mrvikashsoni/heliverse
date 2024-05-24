import { Header } from "../Header";
import { HeroSection } from "../heroSection/HeroSection";
import styles from "./AnimeCur.module.css";
import useScript from "./useScript";

export const AnimCur = (url) => {
  useScript(url);
  return (
    <div id={styles.canvas}>
      <Header />
      <div className={styles.b_title}>
        <HeroSection />
      </div>
      <canvas />
    </div>
  );
};
