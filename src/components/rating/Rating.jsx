import img1 from "/src/assets/motionarteffect-img2.png";
import img2 from "/src/assets/motionarteffect-img1.png";
import img3 from "/src/assets/motionarteffect-img3.png";
import rateImg from "/src/assets/motionarteffect-img4.png";

export const Rating = () => {
  let image = [img1, img2, img3];

  return (
    <div className="container px-0 mt-4">
      <div className="d-flex justify-content-center align-items-center">
        <h5 style={{ color: "#EEE5FF" }}>
          Trusted by thousands of users around the world
        </h5>
      </div>
      <div className="row my-5 ">
        {image.map((val, ind) => {
          return (
            <div
              key={ind}
              className="col d-flex justify-content-center align-items-end gap-2 pb-4"
            >
              <img src={val} alt={`img ${ind}`} />
              <div>
                <img src={rateImg} alt="rating img" />
                <p className="pt-3">4.5 Score, 9 Reviews</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
