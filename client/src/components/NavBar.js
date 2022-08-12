import { useRef } from "react";
import "./styles/navBar.css";
import { AiOutlineSearch } from "react-icons/ai";
import { RiWallet3Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";

function NavBar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <Link to="/" className="navBar--logo">
        🛩 KAL2
      </Link>
      <div className="navBar--search--wrapper">
        <input
          type="text"
          size="50"
          placeholder="Search items"
          className="navBar--search--input"
        />
        <div className="search--icon">
          <AiOutlineSearch />
        </div>
      </div>
      <nav className="navBar--link--wrapper" ref={navRef}>
        <Link to="/explore">Explore</Link>
        <Link to="/regist">Regist</Link>
        <Link to="/login">
          <BsPersonCircle />
        </Link>
        <Link to="/myNFT">
          <RiWallet3Line />
        </Link>
      </nav>
    </header>
  );
}

export default NavBar;
