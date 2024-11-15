import React from "react";
import styles from "../styles/Categories.module.css"; // Import the CSS module

const Categories = () => {
  const categories = [
    { name: "Artificial Intelligence", icon: "🤖" },
    { name: "Web Development", icon: "💻" },
    { name: "Mobile Apps", icon: "📱" },
    { name: "Cloud Computing", icon: "☁️" },
    { name: "Cybersecurity", icon: "🔒" },
    { name: "Data Science", icon: "📊" },
    { name: "DevOps", icon: "🔧" },
    { name: "Blockchain", icon: "🔗" },
  ];

  return (
    <section className={styles.categoriesSection} >
            <div className="container mx-auto px-4">

  <h2 className="text-4xl font-bold text-start mb-8 text-indigo-800">Explore Categories</h2>

      
      <div className={styles.categoriesContainer}>
        {categories.map((category, index) => (
          <div key={index} className={styles.categoryCard}>
            <div className={styles.categoryIconContainer}>
              <span className={styles.categoryIcon}>{category.icon}</span>
            </div>
            <span className={styles.categoryName}>{category.name}</span>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Categories;
