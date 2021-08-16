import Link from "next/link";

const Navbar = () => {
  const navStyle = {
    display: "flex",
    background: "lightgrey",
    justifyContent: "space-around",
    padding: "2rem",
  };
  return (
    <div style={navStyle}>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
    </div>
  );
};

export default Navbar;
