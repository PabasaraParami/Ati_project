import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // important: import AOS CSS
import './vacancy.css';
import { motion } from 'framer-motion';

const Vacancy = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="vacancy-container">

<div className="vacancy-header">
<motion.h1 
  className="vacancy-heading" 
  initial={{ opacity: 0, y: -30 }} 
  animate={{ opacity: 1, y: 0 }} 
  transition={{ duration: 1 }}
>
  Visiting Lecturer Vacancy
</motion.h1>

<motion.p 
  className="vacancy-subtext" 
  initial={{ opacity: 0, y: 20 }} 
  animate={{ opacity: 1, y: 0 }} 
  transition={{ duration: 1, delay: 0.2 }}
>
  Apply for visiting lecturer positions for the upcoming academic year.
</motion.p>
</div>
      <div className="vacancy-list">
        <div className="vacancy-item" data-aos="fade-up" data-aos-delay="0">
          <h2>Higher National Diploma In Business Finance (HNDBF)</h2>
          <ul className="vacancy-details">
            <li><strong>Type:</strong> Full Time (FT) / Part Time (PT)</li>
            <li><strong>Academic Year:</strong> 2025/2026</li>
            <li><strong>Semester:</strong> 1st</li>
            <li><strong>Application Deadline:</strong> June 30, 2025</li>
          </ul>
          <motion.button 
            className="apply-button"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Apply Now
          </motion.button>
        </div>

        <div className="vacancy-item" data-aos="fade-up" data-aos-delay="0">
          <h2>Higher National Diploma In Technology Agricultureb(HNDTA)</h2>
          <ul className="vacancy-details">
            <li><strong>Type:</strong> Full Time (FT) / Part Time (PT)</li>
            <li><strong>Academic Year:</strong> 2025/2026</li>
            <li><strong>Semester:</strong> 1st</li>
            <li><strong>Application Deadline:</strong> June 30, 2025</li>
          </ul>
          <motion.button 
            className="apply-button"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Apply Now
          </motion.button>
        </div>
        <div className="vacancy-item" data-aos="fade-up" data-aos-delay="0">
          <h2>Higher National Diploma In Accountancy (HNDA)</h2>
          <ul className="vacancy-details">
            <li><strong>Type:</strong> Full Time (FT) / Part Time (PT)</li>
            <li><strong>Academic Year:</strong> 2025/2026</li>
            <li><strong>Semester:</strong> 1st</li>
            <li><strong>Application Deadline:</strong> June 30, 2025</li>
          </ul>
          <motion.button 
            className="apply-button"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Apply Now
          </motion.button>
        </div>
        <div className="vacancy-item" data-aos="fade-up" data-aos-delay="0">
          <h2>Higher National Diploma In English (HNDE)</h2>
          <ul className="vacancy-details">
            <li><strong>Type:</strong> Full Time (FT) / Part Time (PT)</li>
            <li><strong>Academic Year:</strong> 2025/2026</li>
            <li><strong>Semester:</strong> 1st</li>
            <li><strong>Application Deadline:</strong> June 30, 2025</li>
          </ul>
          <motion.button 
            className="apply-button"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Apply Now
          </motion.button>
        </div>
        <div className="vacancy-item" data-aos="fade-up" data-aos-delay="0">
          <h2>Higher National Diploma In Information Technology (HNDIT)</h2>
          <ul className="vacancy-details">
            <li><strong>Type:</strong> Full Time (FT) / Part Time (PT)</li>
            <li><strong>Academic Year:</strong> 2025/2026</li>
            <li><strong>Semester:</strong> 1st</li>
            <li><strong>Application Deadline:</strong> June 30, 2025</li>
          </ul>
          <motion.button 
            className="apply-button"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Apply Now
          </motion.button>
        </div>
        <div className="vacancy-item" data-aos="fade-up" data-aos-delay="0">
          <h2>Higher National Diploma In Management (HNDM)</h2>
          <ul className="vacancy-details">
            <li><strong>Type:</strong> Full Time (FT) / Part Time (PT)</li>
            <li><strong>Academic Year:</strong> 2025/2026</li>
            <li><strong>Semester:</strong> 1st</li>
            <li><strong>Application Deadline:</strong> June 30, 2025</li>
          </ul>
          <motion.button 
            className="apply-button"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Apply Now
          </motion.button>
        </div>

      </div>
    </div>
  );
};

export default Vacancy;