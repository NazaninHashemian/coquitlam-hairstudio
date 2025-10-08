function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#222",
        padding: "10px",
        color: "white",
        marginTop: "50px",
      }}
    >
      <p>
        © {new Date().getFullYear()} Coquitlam Hair Studio. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
