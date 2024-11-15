import React from 'react';
import banner from "../assets/hero4.jpeg";
import styles from '../styles/HeroSection.module.css';  // Import CSS Module

const HeroSection = () => {
  return (
    <section className={styles.heroSection} style={{ backgroundImage: `url(${banner})` }}>
      {/* Background Blur */}
      <div className={styles.backgroundBlur}></div>

      <div className={styles.container}>
        
        {/* Left Side - Content Section */}
        <div className={styles.content}>
          

          <h2 className={styles.title}>
            Featured Article: The Latest in Tech
          </h2>
          <p className={styles.subtitle}>
            Stay updated with the most important developments in the tech world. From AI breakthroughs to the latest software reviews, dive into the future of technology!
          </p>
          
          {/* Why This Article Matters */}
          <div className="mb-8">
            <h3 className={styles.sectionTitle}>Why This Article Matters</h3>
            <p className={styles.subtitle}>
              This article provides a deep dive into cutting-edge technologies and their implications. It’s an essential read for anyone looking to stay at the forefront of tech innovations.
            </p>
          </div>

          {/* What You'll Learn */}
          <div className="mb-8">
            <h3 className={styles.sectionTitle}>What You'll Learn</h3>
            <ul className="list-disc pl-6">
              <li className={styles.listItem}>Emerging trends in Artificial Intelligence (AI)</li>
              <li className={styles.listItem}>How AI is transforming industries</li>
              <li className={styles.listItem}>The role of Machine Learning in modern applications</li>
              <li className={styles.listItem}>How these technologies will impact your daily life</li>
              <li className={styles.listItem}>Expert opinions and insights from industry leaders</li>
            </ul>
          </div>
          
          {/* Call to Action (CTA) */}
          <a href="/article" className={styles.ctaButton}>
            Read Full Article
          </a>
        </div>

        {/* Right Side - Additional Content and Categories */}
        <div className={styles.rightSide}>
       

          {/* Explore Our Categories */}
          <div className={styles.categoryContainer}>
            <h3 className={styles.categoryTitle}>Explore Our Categories</h3>
            <ul className={styles.categoryList}>
              <li><a href="/category/ai-ml" className={styles.categoryLink}>AI/ML</a></li>
              <li><a href="/category/mobiles" className={styles.categoryLink}>Mobiles</a></li>
              <li><a href="/category/laptops" className={styles.categoryLink}>Laptops</a></li>
              <li><a href="/category/gadgets" className={styles.categoryLink}>Gadgets</a></li>
              <li><a href="/category/social" className={styles.categoryLink}>Social</a></li>
              <li><a href="/category/gaming" className={styles.categoryLink}>Gaming</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
