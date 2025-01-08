import { useState, useEffect } from "react";
import "../css/style.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const words = ["Developer", "Designer", "Freelancer", "Programmer"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1700);

    return () => clearInterval(interval);
  }, [words.length]);
  return (
    <div>
      <nav className="navbar">
        <div className="max-width">
          <div className="logo">
            <a href="#">
              Portfo
              <span>lio.</span>
            </a>
          </div>
          <ul className="menu">
            <li>
              <a href="#home" className="menu-btn">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="menu-btn">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="menu-btn">
                Services
              </a>
            </li>
            <li>
              <a href="#skills" className="menu-btn">
                Skills
              </a>
            </li>

            <li>
              <a href="#contact" className="menu-btn">
                Contact
              </a>
            </li>
          </ul>
          <div className="menu-btn">
            <i>
              <FontAwesomeIcon icon={faBars} className="menu-icon" />
            </i>
          </div>
        </div>
      </nav>
      {/* home */}
      <section className="home" id="home">
        <div className="max-width">
          <div className="home-content">
            <div className="flex flex-col mt-20 ml-20 home-1">
              <div className="">
                <h1 className="flex items-center ml-4 font-bold text-white text-md home-title">
                  Fabrice Nshimyumukiza | Professional{" "}
                  <span className="space">{words[currentWordIndex]}</span>
                </h1>
              </div>
              <div className="home-text">
                <p>
                  I specialize in transforming innovative ideas into dynamic,
                  interactive digital experiences that resonate with users. With
                  a keen eye for clean, aesthetic design and a commitment to
                  seamless functionality, I create responsive web applications
                  that not only look stunning but also perform flawlessly across
                  all devices.
                  <br />
                </p>
              </div>
              <div className="flex ml-4">
                <Link
                  to="/explorer"
                  className="px-4 py-2 font-bold text-white transition duration-300 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700"
                >
                  Explore Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
