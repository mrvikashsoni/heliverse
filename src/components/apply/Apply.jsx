import imgCart1 from "/src/assets/motionarteffect-img11.png";
import imgCart2 from "/src/assets/motionarteffect-img10.png";
import styles from "./Apply.module.css";

export const Apply = () => {
  return (
    <div className="container p-5">
      <div className="text-center p-5">
        <h1>
          Apply On Any Section Or Enable <br /> For Whole Page
        </h1>
      </div>
      <div className="row  gap-4">
        <div className={`col-lg col-md-12 ${styles.resp_col1}`}>
          <h3>Apply On Section </h3>
          <p className="py-3">
            Apply on section is a game-changer, offering an unparalleled way to
            manage applications directly from your website.{" "}
          </p>
          <img src={imgCart1} alt="apply img" className="img-fluid" />
        </div>
        <div className={`col-lg col-md-12 ${styles.resp_col2}`} style={{}}>
          <h3>Apply On Page</h3>
          <p className="py-3">
            Take your website to new heights with Motion Art for Elementor.
            Embrace the power of motion and animation.
          </p>
          <img src={imgCart2} alt="apply img" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};
