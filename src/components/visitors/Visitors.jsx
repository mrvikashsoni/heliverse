import { Link } from "react-router-dom";
import img from "/src/assets/motionarteffect-img5.png";
import styles from "./Visitors.module.css";

export const Visitors = () => {
  return (
    <div className={`container p-5 ${styles.resp_cont}`}>
      <div className={`row px-5 d-flex justify-content-between `}>
        <div className={`col-xl-8 col-lg-6 col-md-12 ${styles.resp_col1}`}>
          <h1>
            Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors
          </h1>
          <p className="py-3" style={{ color: "var(--text_white_low)" }}>
            Motion Art for Elementor is a groundbreaking plugin that empowers
            you to effortlessly infuse your website with visually stunning
            motion art elements.
          </p>
          <Link
            to={import.meta.env.VITE_visitors_url}
            className={`btn btn-lg p-3 ${styles.Link}`}
            target="_blank"
          >
            <small>Purchase From Envato</small>
            <i className="fa-solid fa-arrow-right-long ps-3"></i>
          </Link>
        </div>
        <div className="col"></div>
        <div className="col-lg-3 col-md-10">
          <img src={img} alt="magic pen" />
        </div>
      </div>
    </div>
  );
};
