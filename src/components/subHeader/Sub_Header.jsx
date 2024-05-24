import { Link } from "react-router-dom";
import styles from "./Sub_Header.module.css";
import img from "/src/assets/MotionArtEffect-logo.png";

export const Sub_Header = () => {
  return (
    <div
      className={`container d-flex justify-content-between align-items-center text-center p-5 ${styles.resp_cont}`}
      style={{ height: "54px" }}
    >
      <div>
        <img src={img} alt="logo" />
      </div>
      <div>
        <Link
          to={import.meta.env.VITE_sub_header_url}
          className={`btn btn-lg ${styles.btn_light} ${styles.resp_btn} `}
          target="_blank"
        >
          <span className="  fs-6 px-3">Purchase Now</span>
        </Link>
      </div>
    </div>
  );
};
