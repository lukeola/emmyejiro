import "./about.css";
import Cert from "../../img/cert.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://lukeshubstorage.blob.core.windows.net/images/kids.JPG?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          IT Enthusiast
        </p>
        <p className="a-desc">
          I am passionate About Information Technology.
        </p>
        <div className="a-award">
          <img src={Cert} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Microsoft Certified</h4>
            <p className="a-award-desc">
             Azure Solutions Architect Exert
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
