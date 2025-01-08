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
        backgroundColor: 'white',  // White background for the overall page
        color: '#333',  // Dark text for contrast
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
          color: '#7B2FCE',
        }}
        onClick={handleBackClick}
      >
        <span style={{ marginRight: '0.5rem', fontSize: '1.5rem' }}>←</span>
        <span style={{ fontSize: '1rem', fontWeight: 500 }}>Back</span>
      </div>

      {/* Header Section */}
      <header
        style={{
          backgroundColor: '#2D2D2D', // bg-gray-800 (dark gray) for header section
          color: 'white',
          padding: '2rem',
          borderRadius: '8px',
          textAlign: 'center',
        }}
      >
        <h1 style={{ margin: 0, fontSize: '2.5rem' }}>Explore More</h1>
        <p style={{ marginTop: '0.5rem', fontSize: '1.2rem' }}>
          Dive deeper into our journey, our values, and the endless possibilities we offer.
        </p>
      </header>

      {/* Main Content Section */}
      <main style={{ marginTop: '2rem' }}>
        {/* Section 1: Our Story */}
        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ color: '#7B2FCE', fontSize: '1.8rem' }}>Our Story</h2>
          <p>
            Every success story begins with a vision. At SeedSafe, our journey started with a simple
            yet ambitious idea: to empower businesses and individuals through innovative technology
            solutions. Over the years, this vision has grown into a reality, fuelled by a commitment
            to excellence and a passion for pushing boundaries.
          </p>
          <p>
            Today, we stand at the crossroads of technology and creativity, delivering solutions
            that inspire, innovate, and transform. Our story is not just about achieving goals—it's
            about leaving a lasting impact on the world around us.
          </p>
        </section>

        {/* Section 2: Our Mission */}
        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ color: '#7B2FCE', fontSize: '1.8rem' }}>Our Mission</h2>
          <p>
            At the heart of everything we do lies a singular mission: to bridge the gap between
            innovation and practicality. We aim to create technology-driven solutions that empower
            people and businesses to reach their fullest potential.
          </p>
          <p>
            Whether through developing state-of-the-art software or offering consultative expertise,
            we are dedicated to making a meaningful difference, both locally and globally.
          </p>
        </section>

        {/* Section 3: Our Values */}
        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ color: '#7B2FCE', fontSize: '1.8rem' }}>Our Values</h2>
          <p>
            Our core values are the foundation of everything we do:
          </p>
          <ul>
            <li>Innovation: Constantly pushing the boundaries of what is possible.</li>
            <li>Collaboration: Building strong partnerships to create impactful solutions.</li>
            <li>Integrity: Upholding the highest standards of ethics and transparency.</li>
            <li>Excellence: Striving for excellence in every project we take on.</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default ExploreMore;
