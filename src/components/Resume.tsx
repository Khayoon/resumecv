import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBrain, faBriefcase, faHome, faBullseye, faFolder } from '@fortawesome/free-solid-svg-icons';
import styles from './App.module.scss';

const Resume: React.FC = () => {
  return (
    <div className="resume">
      <img src="https://i.imgur.com/0JJ69Fw.jpg" alt="Profile Picture" className="profile-picture" />

      <div className="contact-info">
        <span>📍 Toronto, Canada</span>
        <span>🐦 @saifkhay</span>
        <span>🐙 Khayoon (GitHub)</span>
        <span>🤗 Khayoon (Hugging Face)</span>
        <span>🔗 YourLinkedInName (LinkedIn)</span>
      </div>
<div className={styles["resume-content"]}>
    <h2 className={styles.profile}><FontAwesomeIcon icon={faUser} /> Profile</h2>
    <p>{/* Profile Here */}</p>
    
    <h2 className={styles.skills}><FontAwesomeIcon icon={faBrain} /> Technical Skills</h2>
    <p>{/* Skills Here */}</p>
    
    <h2 className={styles.experience}><FontAwesomeIcon icon={faBriefcase} /> Experience</h2>
    <p>{/* Experience Here */}</p>
    
    <h2 className={styles.opensource}><FontAwesomeIcon icon={faHome} /> Open-Source</h2>
    <p>{/* Open-Source Here */}</p>
    
    <h2 className={styles.goal}><FontAwesomeIcon icon={faBullseye} /> Goal</h2>
    <p>{/* Goal Here */}</p>
</div>


      <div className="projects">
        <h2>📁 Projects</h2>
          <ul>
        <li>
            <strong>Dragonbreath Rounds Web-Based Game (In Progress):</strong> Building an immersive top-down shooter game in UE5.2, utilizing WebGPU for improved graphics. Currently refining gameplay mechanics and planning for deployment on Vercel.
        </li>
        <li>
            <strong>imhomeless.ca (Ongoing):</strong> Developed a centralized platform connecting homeless individuals to vital resources. Currently expanding the database and improving the search functionality for enhanced user experience.
        </li>
        <li>
            <strong>GPT Job Description Summarizer (In Development):</strong> Leveraging GPT models to distill lengthy job descriptions into succinct summaries. Currently fine-tuning the AI model and designing a user-friendly interface.
        </li>
        <li>
            <strong>23andMe/FaceApp-inspired project (Underway):</strong> Exploring facial recognition technology to predict ethnicity or nationality from user photos. Actively researching best practices for data privacy and refining recognition accuracy.
        </li>
        <li>
            <strong>Neurotransmitter Simulation App (In Progress):</strong> Creating an interactive app illustrating the effects of various substances on neurotransmitter and hormone levels. Currently enhancing data visualization with D3.js and ensuring scientific accuracy.
        </li>
        <li>
            <strong>Traffic Data & Noise Pollution Estimation Web App (Ongoing):</strong> Designing a web app to estimate noise pollution based on traffic data. Presently optimizing data visualization and implementing machine learning techniques for more accurate estimates.
        </li>
        <li>
            <strong>Geacron-style Historical Map Web App (In Development):</strong> Developing an interactive historical geopolitical map. Actively sourcing historical data and refining the mapping library for smoother visualizations.
        </li>
        <li>
            <strong>Chloe Brown's Mayoral Campaign Website (Ongoing Updates):</strong> Volunteered to modernize a mayoral campaign website, ensuring fast load speeds and accessibility. Currently responsible for periodic updates and maintaining optimal performance.
        </li>
    </ul>
      </div>
    </div>
  );
};

export default Resume;
