import NavBar from "./NavBar/NavBar";

function Header() {
  return (
    <div className="header-nav-wrapper">
      <header className="site-header">
        <h1>Coquitlam Hair Studio</h1>
        <p>Your style, your confidence</p>
      </header>
      <NavBar />
    </div>
  );
}

export default Header;
