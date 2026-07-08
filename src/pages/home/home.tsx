import "./home.css";
import logo from "../../assets/logo.png";

function Home() {
  return (
    <div className="home">
      <div className="red-glow"></div>
      <div className="blue-glow"></div>
      <div className="particles"></div>

      <div className="particles-container">
  {[...Array(40)].map((_, i) => (
    <span
      key={i}
      className="particle"
      style={{
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 10}s`,
        animationDuration: `${6 + Math.random() * 8}s`,
      }}
    />
  ))}
</div>

      <div className="hero-content">
        <img
          src={logo}
          alt="Litcon"
          className="hero-logo"
        />

        <h1 className="hero-title">LITCON</h1>

        <p className="hero-subtitle">
          Every Hero Has an Origin.
          <br />
          Every Idea Has a Universe.
          <br />
          <br />
          Welcome to LITCON,
          <br />
          ENLIT Club's Spider-Verse of Literature and Technology.
        </p>

        <button className="hero-btn">
          Explore Events
        </button>

        <div className="scroll">
          ↓ Scroll to Enter
        </div>
      </div>
    </div>
  );
}

export default Home;