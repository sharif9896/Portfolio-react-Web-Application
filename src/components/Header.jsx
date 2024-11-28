import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  let [baaroverly, setbararoverly] = useState("baarsoverly");
  let [bar, setbar] = useState("baaar");

  const barrOverlay = () => {
    setbararoverly("baarsoverlay show");
    setbar("baaar show");
  };

  const deletebar = () => {
    setbararoverly("baarsoverlay");
    setbar("baaar");
  };

  return (
    <>
      <header>
        <div className="nav">
          <div className="logo">
            <h3>Portfolio.</h3>
          </div>
          <div className="homelist">
            <Link to="/" className="textstyle">
              <div className="home1">Home</div>
            </Link>
            <Link to="/Projects" className="textstyle">
              <div className="home1">Projects</div>
            </Link>
            <Link to="/Experience" className="textstyle">
              <div className="home1">Experience</div>
            </Link>
            {/* <Link to="/MyBooking" className="textstyle"><div className="home1">MyBooking <b style={{fontSize:"14px", color: "white",backgroundColor:"#303030",padding:"1px 6px",borderRadius:"100%"}}>{booking.length}</b></div></Link> */}
            <Link to="/ContactMe" className="textstyle">
              <div className="home1">Contact</div>
            </Link>
            <Link to="/AboutMe" className="textstyle">
              <div className="home1">About</div>
            </Link>
            <div className="baar" onClick={barrOverlay}>
              <img src="./images/aaaaw.png" alt="" />
            </div>
          </div>
        </div>

        <div className={baaroverly}></div>
        <div className={bar}>
          <div className="cross" onClick={deletebar}>
            <img src="./images/sde...png" alt="" />
          </div>
          <div className="hhmc">
            <Link to="/" className="textstyle">
              <div
                className="home4"
                style={{
                  borderTop: "1px solid #3635354b",
                  borderBottom: "1px solid #3635354b",
                }}
              >
                Home
              </div>
            </Link>
            <Link to="/Projects" className="textstyle">
              <div
                className="home4 "
                style={{ borderBottom: "1px solid #3635354b" }}
              >
                Project
              </div>
            </Link>

            <Link to="/Experince" className="textstyle">
              <div
                className="home4 "
                style={{ borderBottom: "1px solid #3635354b" }}
              >
                Experience
              </div>
            </Link>

            <Link to="/AboutMe" className="textstyle">
              <div
                className="home4 "
                style={{ borderBottom: "1px solid #3635354b" }}
              >
                About
              </div>
            </Link>
            <Link to="/ContactMe" className="textstyle">
              <div
                className="home4 "
                style={{ borderBottom: "1px solid #3635354b" }}
              >
                Contact
              </div>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
