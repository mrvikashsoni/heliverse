import img from "/src/assets/browser.png";

export const Support = () => {
  return (
    <div
      className="container p-5 text-center mb-5"
      style={{ background: "var(--gradient_blue)", borderRadius: "20px" }}
    >
      <h3>Supported by All Popular Browsers</h3>
      <p className="py-3">
        Rest assured, Motion Art is designed to be compatible <br /> with all
        major web browsers.
      </p>
      <img src={img} alt="browser" />
    </div>
  );
};
