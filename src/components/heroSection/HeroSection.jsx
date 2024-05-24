import { Sub_Header } from "../subHeader/Sub_Header";
import styles from "./HeroSection.module.css";

export const HeroSection = () => {
  return (
    <>
      <Sub_Header />
      <div className={`container p-5 ${styles.resp_cont}`}>
        <div className="row">
          <div className="col-lg col-md-3">
            <span className={`${styles.gradient}`}>
              Transform <br /> Your Website
            </span>
            <p className="pt-3" style={{ color: "var(--text_white_high)" }}>
              With Motion Art <br /> Effect
            </p>
          </div>
          <div className={`col-lg-6 col-md-8`}>
            <div className={styles.hero_tx_lg}>
              <p>
                Attract Your Visitors Attention With Colorful <br />
                <span className={styles.gradient}>Motion Art Effect</span>
              </p>
            </div>

            <p className={styles.resp_p}>
              Unleash the power of creativity with Motion Art for Elementor -
              your ultimate solution for seamlessly integrating captivating
              animations into your website.
            </p>
          </div>
          <div className={`col-lg ${styles.resp_col3}`}></div>
        </div>
      </div>
    </>
  );
};
