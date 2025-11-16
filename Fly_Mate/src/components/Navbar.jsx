import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import "../styles/navbar.css";

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenu, setUserMenu] = useState(false);

  return (
    <nav>
      {/* ------------ Logo ------------ */}
      <div className="logo">
        <Link to="/">Fly<span>Mate</span></Link>
      </div>

      {/* ------------ Links ------------ */}
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
        <Link to="/services" onClick={() => setMenuOpen(false)}>Service</Link>
        <Link to="/mytrip" onClick={() => setMenuOpen(false)}>My Trip</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
      </div>

      {/* ------------ Right Section ------------ */}
      <div className="nav-right">
        <button
          className="book-btn"
          onClick={() =>
            document.getElementById("book-section")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Book Now
        </button>

        <div className="icons-right">
          {/* <div className="user-icon" onClick={() => setUserMenu(!userMenu)}>
            <FaUser size={20} />
            {userMenu && (
              <div className="user-menu">
                <Link to="/signup">Sign Up</Link>
                <Link to="/login">Log In</Link>
              </div>
            )}

          </div> */}
            {/* USER icon */}
<div className="user-icon" onClick={(e)=>{ e.stopPropagation(); setUserMenu(v=>!v); }}>
  <FaUser size={20}/>
  <div className={`user-menu ${userMenu ? "open" : ""}`}>
    <Link to="/signup" onClick={()=> setUserMenu(false)}>Sign Up</Link>
    <Link to="/login" onClick={()=> setUserMenu(false)}>Log In</Link>
  </div>
</div>

          <button className="theme-btn" onClick={toggleTheme}>
            {theme === "light" ? <FaMoon size={18} /> : <FaSun size={18} />}
          </button>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
