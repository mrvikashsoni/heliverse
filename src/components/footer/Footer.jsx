import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <div
      className="container-fluid py-2 "
      style={{ background: "var(--gradient)" }}
    >
      <div className="container ">
        <div className={`row d-flex ${styles.resp_row}`}>
          <div className={`col-lg-8 col-12 ${styles.resp_col1}`}>
            <span className={styles.resp_i}>
              <i
                className={`fa-regular fa-copyright `}
                style={{
                  color: "var(--text_white_low)",
                  fontSize: "12px",
                  paddingTop: "2px",
                }}
              ></i>
            </span>
            <span style={{ color: "var(--text_white_low)", fontSize: "12px" }}>
              2023 Copywrite. All rights reserved by QodeMatrix
            </span>
          </div>
          <div className={`col-lg-3 col-6 text-end ${styles.resp_col2}`}>
            <Link
              to={import.meta.env.VITE_footer_docUrl}
              target="_blank"
              className={`btn ${styles.Link}`}
              style={{ color: "var(--text_white_low)", fontSize: "12px" }}
            >
              Documentation
            </Link>
          </div>
          <div className={`col-lg-1 col-6 text-end ${styles.resp_col3}`}>
            <Link
              to={import.meta.env.VITE_footer_supportUrl}
              target="_blank"
              className={`btn ${styles.Link}`}
              style={{ color: "var(--text_white_low)", fontSize: "12px" }}
            >
              Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
