import React, { useState } from 'react';
import '../styles/About.css';

const teamMembers = [
  { id: 1, name: 'Sarah Johnson', role: 'CEO & Founder', image: 'https://via.placeholder.com/300x300?text=Sarah+Johnson' },
  { id: 2, name: 'Michael Chen', role: 'CTO', image: 'https://via.placeholder.com/300x300?text=Michael+Chen' },
  { id: 3, name: 'Emma Wilson', role: 'Lead Designer', image: 'https://via.placeholder.com/300x300?text=Emma+Wilson' },
  { id: 4, name: 'James Rodriguez', role: 'Sales Director', image: 'https://via.placeholder.com/300x300?text=James+Rodriguez' },
  { id: 5, name: 'Lisa Anderson', role: 'Marketing Manager', image: 'https://via.placeholder.com/300x300?text=Lisa+Anderson' },
  { id: 6, name: 'David Park', role: 'Product Manager', image: 'https://via.placeholder.com/300x300?text=David+Park' },
  { id: 7, name: 'Maya Patel', role: 'DevOps Engineer', image: 'https://via.placeholder.com/300x300?text=Maya+Patel' },
  { id: 8, name: 'Alex Turner', role: 'Customer Success Lead', image: 'https://via.placeholder.com/300x300?text=Alex+Turner' },
];

const teamCategories = ['All', 'Leadership', 'Design/Dev', 'Sales', 'Marketing'];

const coreValues = [
  {
    icon: '🤝',
    title: 'Integrity',
    description: 'We treat everyone with respect, honesty, and consideration.'
  },
  {
    icon: '🚀',
    title: 'Innovation',
    description: 'We embrace new ideas and push the boundaries of what\'s possible.'
  },
  {
    icon: '🎯',
    title: 'Excellence',
    description: 'We are committed to delivering the highest quality in everything we do.'
  },
  {
    icon: '🤗',
    title: 'Collaboration',
    description: 'We believe in the power of teamwork and collective success.'
  }
];

const timelineEvents = [
  { year: '2015', title: 'Company Founded', description: 'Started with a team of 4 passionate developers.' },
  { year: '2017', title: 'Series A Funding', description: 'Raised $2M to accelerate growth and expand our team.' },
  { year: '2019', title: 'Product Launch', description: 'Launched our flagship product to the market.' },
  { year: '2021', title: 'Global Expansion', description: 'Opened offices in Europe and Asia.' },
  { year: '2023', title: 'Market Leader', description: 'Became one of the top players in our industry.' }
];

export default function About() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredMembers = selectedCategory === 'All' 
    ? teamMembers 
    : teamMembers.filter(member => {
        if (selectedCategory === 'Leadership') return ['CEO & Founder', 'CTO'].includes(member.role);
        if (selectedCategory === 'Design/Dev') return ['Lead Designer', 'DevOps Engineer'].includes(member.role);
        if (selectedCategory === 'Sales') return ['Sales Director', 'Customer Success Lead'].includes(member.role);
        if (selectedCategory === 'Marketing') return ['Marketing Manager', 'Product Manager'].includes(member.role);
        return true;
      });

  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>ABOUT US</h1>
          <h2>Meet Our Expert Team</h2>
          <p>Discover the talented professionals behind our success who bring innovation and excellence to everything we do.</p>
          <button className="cta-button">Schedule a Call</button>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="mission-content">
          <h2>OUR MISSION</h2>
          <h3>Transforming the Way Companies Build and Scale Their Digital Products</h3>
          <p>Since our founding in 2015, we've helped hundreds of clients achieve their goals through innovative solutions and expert guidance.</p>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2>Meet the Team</h2>
          
          {/* Category Filter */}
          <div className="category-filter">
            {teamCategories.map(category => (
              <button
                key={category}
                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Team Grid */}
          <div className="team-grid">
            {filteredMembers.map(member => (
              <div key={member.id} className="team-card">
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <h4>{member.name}</h4>
                <p className="role">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="credentials-section">
        <div className="container">
          <h2>Why Trust Us</h2>
          <div className="credentials-grid">
            <div className="credential-card">
              <div className="credential-number">500+</div>
              <p>Certified Professionals</p>
            </div>
            <div className="credential-card">
              <div className="credential-number">8+</div>
              <p>Years in Business</p>
            </div>
            <div className="credential-card">
              <div className="credential-number">1000+</div>
              <p>Successful Projects</p>
            </div>
            <div className="credential-card">
              <div className="credential-number">4.9★</div>
              <p>Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* History/Timeline Section */}
      <section className="timeline-section">
        <div className="container">
          <h2>Our Journey</h2>
          <p className="section-subtitle">From humble beginnings to industry leaders</p>
          
          <div className="timeline">
            {timelineEvents.map((event, index) => (
              <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className="timeline-content">
                  <span className="year">{event.year}</span>
                  <h4>{event.title}</h4>
                  <p>{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="values-section">
        <div className="container">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            {coreValues.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Looking to Partner With Us?</h2>
          <p>Our team is here to help you achieve your goals.</p>
          <form className="contact-form">
            <div className="form-row">
              <input type="text" placeholder="First Name*" required />
              <input type="text" placeholder="Last Name*" required />
            </div>
            <input type="email" placeholder="Business Email*" required />
            <input type="url" placeholder="Website URL*" required />
            <textarea placeholder="What would you like to discuss?*" rows="5" required></textarea>
            <button type="submit" className="submit-btn">Talk With An Expert</button>
          </form>
        </div>
      </section>
    </div>
  );
}
