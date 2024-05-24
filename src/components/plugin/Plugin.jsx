import img1 from "/src/assets/motionarteffect-img9.png";
import img2 from "/src/assets/motionarteffect-img6.png";
import img3 from "/src/assets/motionarteffect-img7.png";

export const Plugin = () => {
  return (
    <div className="container p-5 ">
      <div className="text-center">
        <h1>
          An All-Round Plugin With <br /> Powerful Features
        </h1>
        <p className="py-3">
          Whether you're a seasoned web designer or just starting out, Motion
          Art for <br /> Elementor seamlessly integrates with the Elementor
          platform, providing you <br /> with a seamless and intuitive
          experience.
        </p>
      </div>
      <div className="row gap-4">
        <div
          className="col"
          style={{
            borderRadius: "20px",
            padding: "25px",
            background: "var(--gradient_blue)",
          }}
        >
          <img src={img1} alt="img1" />
          <h3 className="py-3">Light Weight</h3>
          <p>Motion Art for Elementor is designed to be lightweight.</p>
        </div>
        <div
          className="col"
          style={{
            borderRadius: "20px",
            padding: "25px",
            background: "var(--gradient_blue)",
          }}
        >
          <img src={img2} alt="img2" />
          <h3 className="py-3">100% Responsive</h3>
          <p>Create a consistent visual experience across all devices.</p>
        </div>
        <div
          className="col"
          style={{
            borderRadius: "20px",
            padding: "25px",
            background: "var(--gradient_blue)",
          }}
        >
          <img src={img3} alt="img3" />
          <h3 className="py-3">User Friendly Interface</h3>
          <p>
            Ensure a smooth experience for both applicants and administrators.
          </p>
        </div>
      </div>
    </div>
  );
};
