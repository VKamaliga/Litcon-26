import "./loader.css";
import logo from "../../assets/logo.png";

function Loader() {
  return (
    <div className="loader">
      <div className="web-bg"></div>

      <div className="corner-web top-left"></div>
      <div className="corner-web top-right"></div>
      <div className="corner-web bottom-left"></div>
      <div className="corner-web bottom-right"></div>

      <img src={logo} alt="Litcon" className="logo" />

      <h1 className="title">LITCON</h1>

      <p className="subtitle">
        Entering the Spider-Verse...
      </p>

      <div className="loader-bar">
        <div className="loader-fill"></div>
      </div>
    </div>
  );
}

export default Loader;