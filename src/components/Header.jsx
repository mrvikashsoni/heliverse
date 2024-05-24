import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <div
        className="container-fluid d-flex justify-content-between align-items-center text-center px-5"
        style={{ backgroundColor: "#262626", height: "54px" }}
      >
        <div>
          <Link className="btn " to={import.meta.env.VITE_header_url1}>
            <img
              src="https://i.ibb.co/NN9zm2q/logo.png"
              alt="logo"
              height="14px"
            />
            <span
              style={{ fontSize: "22px", padding: "0 1px", color: "white" }}
            >
              envato
            </span>
            <span
              style={{
                fontSize: "22px",
                color: "var(--color_green)",
                fontWeight: "300",
              }}
            >
              market
            </span>
          </Link>
        </div>
        <div>
          <Link
            to={import.meta.env.VITE_header_url2}
            className="btn btn-sm"
            style={{ backgroundColor: "var(--color_green)", color: "white" }}
          >
            Buy now
          </Link>
        </div>
      </div>
    </>
  );
};
