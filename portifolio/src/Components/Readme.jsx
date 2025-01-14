import React from "react";

const Readme = () => {
  const handleBackClick = () => {
    window.history.back(); // Navigate to the previous page
  };

  return (
    <div
      style={{
        fontFamily: "Roboto, sans-serif",
        lineHeight: 1.8,
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
        padding: "1rem",
      }}
    >
      {/* Back Icon */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "1rem",
          cursor: "pointer",
          color: "crimson",
        }}
        onClick={handleBackClick}
      >
        <span style={{ marginRight: "0.5rem", fontSize: "1.5rem" }}>←</span>
        <span style={{ fontSize: "1rem", fontWeight: 500 }}>Back</span>
      </div>

      {/* Header Section */}
      <header
        style={{
          backgroundColor: "crimson",
          color: "white",
          padding: "2rem",
          textAlign: "center",
        }}
      >
        <h1>About Me: Fabrice Nshimyumukiza</h1>
        <p style={{ fontSize: "1.2rem" }}>
          Passionate Developer | Lifelong Learner | Innovator
        </p>
      </header>

      {/* Main Content Section */}
      <main style={{ padding: "2rem" }}>
        <section style={{ marginBottom: "1.5rem" }}>
          <h2 style={{ color: "crimson" }}>Introduction</h2>
          <p>
            Hello, I am Fabrice Nshimyumukiza, an enthusiastic software
            developer with a rich academic and professional background. I am
            currently pursuing dual degrees in Information Technology at IPRC
            Ngoma and Computer Science at the University of the People. My
            journey in software development is driven by a relentless passion
            for creating impactful digital solutions and solving complex
            problems with innovative approaches.
          </p>
        </section>

        <section style={{ marginBottom: "1.5rem" }}>
          <h2 style={{ color: "crimson" }}>Professional Highlights</h2>
          <ul>
            <li>
              Expertise in modern web technologies such as PHP, JSP, React,
              React Native, and Node.js, enabling the development of dynamic and
              user-friendly applications that are responsive and efficient.
            </li>
            <li>
              Strong command over Java for building scalable and robust software
              applications, catering to a wide array of requirements and use
              cases.
            </li>
            <li>
              Extensive experience with databases including MySQL, MongoDB, and
              SQLite, ensuring efficient data storage, management, and retrieval
              in all projects.
            </li>
            <li>
              Proficient in XAMPP for managing backend development seamlessly,
              contributing to the smooth execution of server-side operations.
            </li>
            <li>
              Currently engaged in a large-scale CMS project for SeedSafe,
              combining cutting-edge technologies with creative design to
              deliver a professional and user-oriented platform.
            </li>
            <li>
              Experience in React Native for developing cross-platform mobile
              applications, ensuring accessibility and usability across Android
              and iOS devices.
            </li>
          </ul>
        </section>

        <section style={{ marginBottom: "1.5rem" }}>
          <h2 style={{ color: "crimson" }}>Philosophy</h2>
          <p>
            I firmly believe in the power of technology to transform ideas into
            reality. My approach to development combines a growth mindset,
            collaborative efforts, and an unwavering commitment to quality.
            Continuous learning and adaptation to new technologies are integral
            to my journey, as they allow me to stay ahead in an ever-evolving
            tech landscape. Every project I undertake is guided by the
            principles of innovation, user-centric design, and sustainable
            solutions.
          </p>
        </section>

        <section style={{ marginBottom: "1.5rem" }}>
          <h2 style={{ color: "crimson" }}>Additional Skills</h2>
          <ul>
            <li>
              Strong foundation in software design principles, enabling the
              creation of modular, maintainable, and reusable code structures.
            </li>
            <li>
              Proficient in version control systems like Git, ensuring efficient
              collaboration and code management in team environments.
            </li>
            <li>
              Familiarity with cloud services and deployment pipelines,
              enhancing the scalability and reliability of applications.
            </li>
            <li>
              Experienced in creating intuitive UI/UX designs that focus on
              delivering seamless user experiences.
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Readme;
