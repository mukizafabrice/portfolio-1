import React from "react";

const Readme = () => {
  const handleBackClick = () => {
    window.history.back(); // Navigate to the previous page
  };

  return (
    <div
      style={{
        fontFamily: "Roboto, sans-serif",
        lineHeight: 1.6,
        backgroundColor: "#f5f5f5", // Change this color as needed
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
          color: "#7B2FCE",
        }}
        onClick={handleBackClick}
      >
        <span style={{ marginRight: "0.5rem", fontSize: "1.5rem" }}>←</span>
        <span style={{ fontSize: "1rem", fontWeight: 500 }}>Back</span>
      </div>

      {/* Header Section */}
      <header
        style={{
          backgroundColor: "#7B2FCE",
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
        <section style={{ marginBottom: "2rem" }}>
          <h2 style={{ color: "#7B2FCE" }}>Introduction</h2>
          <p>
            Hi, I'm Fabrice Nshimyumukiza, a dedicated and passionate developer
            currently pursuing degrees in Information Technology at IPRC Ngoma
            and Computer Science at the University of the People. My goal is to
            create innovative solutions that make a difference.
          </p>
        </section>

        <section style={{ marginBottom: "2rem" }}>
          <h2 style={{ color: "#7B2FCE" }}>Professional Highlights</h2>
          <ul>
            <li>
              Proficient in PHP,JSP, React, React Native, and Node.js, with a
              strong focus on building dynamic, responsive, and professional
              applications.
            </li>
            <li>
              Experienced in Java for robust and scalable application
              development.
            </li>
            <li>
              Skilled in using MySQL, MONGODB, SQLITE and XAMPP for backend
              development and database management.
            </li>
            <li>
              Currently working on a comprehensive CMS project for SeedSafe,
              blending technical expertise with modern design principles.
            </li>
          </ul>
        </section>

        <section style={{ marginBottom: "2rem" }}>
          <h2 style={{ color: "#7B2FCE" }}>Philosophy</h2>
          <p>
            I believe in the power of continuous learning and collaboration. By
            leveraging the latest technologies and maintaining a growth mindset,
            I strive to deliver impactful and innovative solutions in every
            project I undertake.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Readme;
