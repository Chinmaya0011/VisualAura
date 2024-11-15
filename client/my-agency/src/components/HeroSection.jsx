import React, { useState } from 'react';
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa'; // Import React Icons
import styles from '../styles/HeroSection.module.css'; // Assuming you have a HeroSection.module.css for styling

const HeroSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., sending email to the server
    console.log('Email submitted:', email);
  };

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <div className={styles.leftside}>
          <h1 className={styles.title}>
            Welcome to the Best Tech Blog
          </h1>
          <p className={styles.subtitle}>
            Stay updated with the latest in technology, gadgets, software, and more.
          </p>
          <a href="#latest-posts" className={styles.button}>
            Read Latest Posts
          </a>
        </div>
        <div className={styles.rightside}>
          {/* Newsletter Form */}
          <h2 className={styles.formTitle}>Subscribe to Our Newsletter</h2>
          <p className={styles.formSubtitle}>
            Get the latest tech news and updates directly in your inbox!
          </p>
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              type="email"
              placeholder="Enter your email"
              className={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className={styles.buttonSubmit}>
              Subscribe
            </button>
          </form>

          {/* Social Media Links */}
          <div className={styles.socialLinks}>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
            >
              <FaTwitter />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
            >
              <FaFacebook />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
            >
              <FaLinkedin />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
