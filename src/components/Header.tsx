import NavBar from "./NavBar/NavBar";
// import animationImg from "../assets/animation.jpg";
// import logoImg from "../assets/logo.png";
function Header() {
  return (
    <div className="header-nav-wrapper">
      <header className="site-header">
        <h1>Coquitlam Hair Studio</h1>
        <p>Your style, your confidence</p>
        {/* <img
          src={animationImg}
          alt="Animation"
          style={{ width: "6%", maxHeight: "300px", objectFit: "cover" }}
        />
        <img
          src={logoImg}
          alt="Animation"
          style={{ width: "6%", maxHeight: "300px", objectFit: "cover" }}
        /> */}
      </header>
      <NavBar />
    </div>
  );
}

export default Header;
