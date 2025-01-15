import { useState, useEffect } from "react";
import "../css/style.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Aboutimage from "../assets/about-image.jpg";
import emailjs from "emailjs-com";
import {
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaBars,
  FaTimes,
  FaFacebook,
  FaTwitter,
  FaEnvelope,
  FaUser,
  FaPhone,
  FaMap,
} from "react-icons/fa";

const Home = () => {
  const words = ["Developer", "Designer", "Freelancer", "Programmer"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const [showScrollUp, setShowScrollUp] = useState(false);

  useEffect(() => {
    // Handle word change for dynamic title
    const wordInterval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1700);

    // Handle scroll events
    const handleScroll = () => {
      setIsSticky(window.scrollY > 20);
      setShowScrollUp(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(wordInterval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [words.length]);

  const handleScrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setError("All fields are required.");
      setSuccess("");
      return;
    }

    // Simple email validation
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email.");
      setSuccess("");
      return;
    }

    // Example: Process submission or send email using an API
    emailjs
      .send(
        "service_4bdykkb",
        "template_b4f7dvo",
        {
          from_name: formData.name,
          from_email: formData.email, // This is where you set the "from" email
          from_subject: formData.subject,
          message: formData.message,
        },
        "dsjyMGgVIBMV63_-S"
      )
      .then(
        (response) => {
          setSuccess("Email sent successfully!");
        },
        (err) => {
          setError("there is an error", err);
        }
      );

    // Reset form fields
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div>
      <div className="scoll-up-btn">
        <i className="fas fa-angle-up"></i>
      </div>
      <nav className={`navbar ${isSticky ? "sticky" : ""}`}>
        <div className="max-width">
          <div className="logo">
            <a href="#">
              Portfo<span>lio.</span>
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
            <FontAwesomeIcon icon={faBars} className="menu-icon" />
          </div>
        </div>
      </nav>

      {/* Scroll-Up Button */}
      {showScrollUp && (
        <div className="scroll-up-btn" onClick={handleScrollUp}>
          ↑
        </div>
      )}

      {/* Home Section */}
      <section className="home" id="home">
        <div className="max-width">
          <div className="home-content">
            <div className="flex flex-col mt-20 ml-20 home-1">
              <h1 className="flex items-center ml-4 font-bold text-white text-md home-title">
                Fabrice Nshimyumukiza | Professional{" "}
                <span className="space">{words[currentWordIndex]}</span>
              </h1>
              <p className="home-text">
                I specialize in transforming innovative ideas into dynamic,
                interactive digital experiences that resonate with users.
                <br />
                With a keen eye for clean, aesthetic design and a commitment to
                seamless functionality, I create responsive web applications
                that not only look stunning but also perform flawlessly across
                all devices.
              </p>
              <Link
                to="/explorer"
                className="px-4 py-2 font-bold text-white transition duration-300 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700"
              >
                Explore Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="max-width">
          <h2 className="title">About me</h2>
          <div className="about-content">
            <div className="column left">
              <img src={Aboutimage} alt="About Me" />
            </div>
            <div className="column right">
              <div className="text">
                I'm Fabrice and I'm{" "}
                <span className="space">{words[currentWordIndex]}</span>
              </div>
              <p>
                I am a creative and versatile professional who is into designing
                intuitive user interfaces, developing robust applications, and
                writing insightful blogs. I have worked across domains, where
                the main task involves the fusion of design, development, and
                programming to render solutions that are appealing in view and
                highly functional.
              </p>
              <a href="/cv.pdf" download="cv.pdf">
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* service */}

      <section className="services" id="services">
        <div className="max-width">
          <h2 className="title">my services</h2>
          <div className="services-content">
            <div className="card">
              <div className="box">
                <i className="fas fa-paint-brush"></i>
                <div className="text">Web Design</div>
                <p>
                  Designing responsive, user-friendly websites that are visually
                  appealing and optimized for all devices.
                </p>
              </div>
            </div>

            <div className="card">
              <div className="box">
                <i className="fas fa-chart-line"></i>
                <div className="text">Advertising</div>
                <p>
                  Developing creative and effective campaigns that enhance brand
                  visibility and drive customer engagement.
                </p>
              </div>
            </div>

            <div className="card">
              <div className="box">
                <i className="fas fa-paint-brush"></i>
                <div className="text">App Design</div>
                <p>
                  Creating intuitive and visually compelling apps with a strong
                  focus on user experience and functionality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* skills  */}
      <section className="skills" id="skills">
        <div className="max-width">
          <h2 className="title">my skills</h2>
          <div className="skills-content">
            <div className="column left">
              <div className="text">My creative skills & experiences.</div>
              <p>
                I merge creative input into every project through web
                technologies, design, and a strong background in both. Be it
                crafting visually stunning websites, developing dynamic web
                applications, or solving complex problems with innovative
                solutions, my skills are honed to deliver exceptional results.
                I'm always enthusiastic about learning and try to be one step
                ahead in this ever-changing digital landscape.
              </p>
              <Link to="/readme">Read more</Link>
            </div>
            <div className="column right">
              <div className="bars">
                <div className="info">
                  <span>HTML</span>
                  <span>90%</span>
                </div>
                <div className="line html"></div>
              </div>

              <div className="bars">
                <div className="info">
                  <span>CSS</span>
                  <span>70%</span>
                </div>
                <div className="line css"></div>
              </div>

              <div className="bars">
                <div className="info">
                  <span>JAVASCRIPT</span>
                  <span>80%</span>
                </div>
                <div className="line javascript"></div>
              </div>

              <div className="bars">
                <div className="info">
                  <span>PHP</span>
                  <span>70%</span>
                </div>
                <div className="line php"></div>
              </div>

              <div className="bars">
                <div className="info">
                  <span>JAVA</span>
                  <span>50%</span>
                </div>
                <div className="line java"></div>
              </div>

              <div className="bars">
                <div className="info">
                  <span>DATABASE</span>
                  <span>80%</span>
                </div>
                <div className="line mysql"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* my contact */}
      <section className="contact" id="contact">
        <div className="max-width">
          <h2 className="title">contact me</h2>
          <div className="contact-content">
            <div className="column left">
              <div className="text">Get in Touch</div>
              <p>
                I’m always available to discuss new projects and collaborations.
                Feel free to contact me with any questions or inquiries you may
                have. Let’s work together!
              </p>
              <div className="icon">
                <div className="row">
                  <i className="fas fa-user"></i>
                  <div className="info">
                    <div className="head">Name</div>
                    <div className="sub-title">Fabrice pro</div>
                  </div>
                </div>

                <div className="row">
                  <i className="fas fa-map-marker-alt"></i>
                  <div className="info">
                    <div className="head">Address</div>
                    <div className="sub-title">Kigali, Rwanda</div>
                  </div>
                </div>

                <div className="row">
                  <i className="fas fa-envelope"></i>
                  <div className="info">
                    <div className="head">Email</div>
                    <div className="sub-title">mukizafabrice18@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="clumn right">
              <div>
                {error && <p className="message error">{error}</p>}
                {success && <p className="message success">{success}</p>}
              </div>
              <div className="text">Message me</div>
              <form onSubmit={handleSubmit} method="post">
                <div className="fields">
                  <div className="field name">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="field email">
                    <input
                      type="text"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      required
                    />
                  </div>
                </div>

                <div className="field">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="field textarea">
                  <textarea
                    rows="10"
                    cols="30"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe project.."
                    required
                  ></textarea>
                </div>
                <div className="button">
                  <button type="submit">Send message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* footer  */}

      <footer>
        <div className="footer-container">
          {/* Social media icons */}
          <div className="social-icons">
            <a
              href="linkedin.com/in/nshimyumukiza-fabrice-b55751256"
              target="_blank"
              rel="noopener noreferrer"
              className="icon linkedin"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="icon intagram"
            >
              <FaInstagram size={30} />
            </a>
            <a
              href="https://github.com/mukizafabrice.git"
              target="_blank"
              rel="noopener noreferrer"
              className="icon github"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://x.com/fabrice_250_N"
              target="_blank"
              rel="noopener noreferrer"
              className="icon twitter"
            >
              <FaTwitter size={30} />
            </a>
            <a
              href="https://www.facebook.com/mukizafabrice"
              target="_blank"
              rel="noopener noreferrer"
              className="icon facebook"
            >
              <FaFacebook size={30} />
            </a>
          </div>
          <span>
            © {new Date().getFullYear()} Fabrice Nshimyumukiza. All rights
            reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Home;
