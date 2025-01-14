import React from 'react';

const ExploreMore = () => {
  const handleBackClick = () => {
    window.history.back(); // Navigate to the previous page
  };

  return (
    <div
      style={{
        fontFamily: 'Roboto, sans-serif',
        padding: '2rem',
        backgroundColor: 'white', // White background for the overall page
        color: '#333', // Dark text for contrast
        lineHeight: 1.6,
      }}
    >
      {/* Back Button */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '1.5rem',
          cursor: 'pointer',
          color: '#8B5CF6', // Crimesome color
        }}
        onClick={handleBackClick}
      >
        <span style={{ marginRight: '0.5rem', fontSize: '1.5rem' }}>←</span>
        <span style={{ fontSize: '1rem', fontWeight: 500 }}>Back</span>
      </div>

      {/* Header Section */}
      <header
        style={{
          backgroundColor: '#2D2D2D', // Dark gray for header section
          color: 'white',
          padding: '2rem',
          borderRadius: '8px',
          textAlign: 'center',
        }}
      >
        <h1 style={{ margin: 0, fontSize: '2.5rem' }}>Explore More</h1>
        <p style={{ marginTop: '0.5rem', fontSize: '1.2rem' }}>
          Discover my journey in software development—dedicated to innovation and impactful solutions.
        </p>
      </header>

      {/* Main Content Section */}
      <main style={{ marginTop: '2rem' }}>
        {/* Section 1: My Educational Journey */}
        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ color: '#8B5CF6', fontSize: '1.8rem' }}>My Educational Journey</h2>
          <p>
            I began my formal education in software development at IPRC Ngoma, where I pursued a 
            degree in Information Technology. Simultaneously, I studied Computer Science at the 
            University of the People. These dual academic experiences provided me with a strong 
            foundation in programming, system design, and critical problem-solving skills.
          </p>
          <p>
            During my academic journey, I delved deep into languages like Java, where I honed my 
            understanding of object-oriented programming, and explored emerging technologies such 
            as MongoDB and React Native. These experiences prepared me for the real-world challenges 
            of software development.
          </p>
        </section>

        {/* Section 2: My Professional Projects */}
        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ color: '#8B5CF6', fontSize: '1.8rem' }}>My Professional Projects</h2>
          <p>
            Over the years, I have worked on diverse projects that reflect my passion for innovation. 
            One standout project is the **SeedSafe company profile website**, where I designed and 
            implemented a responsive and professional platform using React, Bootstrap, and PHP. This 
            project allowed me to integrate complex systems, ensuring both functionality and a seamless 
            user experience.
          </p>
          <p>
            Another noteworthy achievement is the development of a **custom Content Management System (CMS)**, 
            tailored for dynamic content handling and user management. Leveraging technologies like 
            React, MongoDB, and MySQL, I created a scalable architecture that could adapt to various 
            business needs.
          </p>
          <p>
            Additionally, I have explored mobile development through **React Native**, building intuitive 
            cross-platform applications that prioritize user engagement and accessibility.
          </p>
        </section>

        {/* Section 3: My Expertise and Skills */}
        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ color: '#8B5CF6', fontSize: '1.8rem' }}>My Expertise and Skills</h2>
          <p>
            My technical expertise spans a wide range of tools and technologies, including:
          </p>
          <ul>
            <li>Programming Languages: Proficient in Java, PHP, and JavaScript.</li>
            <li>Frontend Frameworks: Skilled in React for building interactive UIs.</li>
            <li>Mobile Development: Experienced in developing mobile apps using React Native.</li>
            <li>Database Management: Competent in MySQL and NoSQL databases like MongoDB.</li>
            <li>Backend Technologies: Proficient in Node.js for building scalable APIs.</li>
          </ul>
          <p>
            Beyond technical skills, I am passionate about crafting solutions that are both innovative 
            and practical, ensuring long-term value for users.
          </p>
        </section>

        {/* Section 4: Lessons and Growth */}
        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ color: '#8B5CF6', fontSize: '1.8rem' }}>Lessons and Growth</h2>
          <p>
            Throughout my career, I have faced challenges that have tested my determination and 
            adaptability. From debugging intricate system errors to optimizing application performance, 
            each challenge has been an opportunity to grow and refine my skills. For example, my transition 
            to using Node.js for backend development marked a significant turning point, allowing me to 
            build faster and more efficient systems.
          </p>
          <p>
            These experiences have taught me the value of persistence and continuous learning—qualities 
            that are crucial for success in the ever-evolving field of technology.
          </p>
        </section>

        {/* Section 5: My Vision for the Future */}
        <section>
          <h2 style={{ color: '#8B5CF6', fontSize: '1.8rem' }}>My Vision for the Future</h2>
          <p>
            As I look ahead, I am excited to explore new horizons in technology. My vision is to lead 
            projects that leverage the power of artificial intelligence, cloud computing, and mobile 
            solutions to address real-world challenges. I aim to build applications that are not only 
            functional but also transformative, empowering businesses and individuals alike.
          </p>
          <p>
            I believe in the potential of technology to create a better future, and I am committed to 
            contributing to this vision through innovation, collaboration, and continuous growth.
          </p>
        </section>
      </main>
    </div>
  );
};

export default ExploreMore;
