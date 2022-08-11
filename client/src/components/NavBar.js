import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./styles/navBar.css";
import { TbShip } from "react-icons/tb";
import { RiWallet3Line } from "react-icons/ri";
import { BsPersonCircle } from "react-icons/bs";

function NavBar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <div>
        <TbShip />
      </div>
      <h2>Opensea</h2>
      <input
        typ="text"
        size="50"
        laceholder="Search items, collections, and accounts"
      />

      <nav ref={navRef}>
        <a href="/#">Explore</a>
        <a href="/#">Stats</a>
        <a href="/#">Resoures</a>
        <a href="/#">Create</a>
        <a>
          <BsPersonCircle />
        </a>
        <a>
          <RiWallet3Line />
        </a>

        <button ClassName="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>

      <button ClassName="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default NavBar;
