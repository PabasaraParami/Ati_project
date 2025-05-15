import React from 'react'
import { motion } from 'framer-motion'
import Lottie from 'lottie-react'
import animation from '../assets/lecure.json'
import './home.css';
import { Button } from '@chakra-ui/react';

const Home = () => {
  return (
    <div className="home-container">
      {/* Left Side: */}
      <div className="left-side">
        <motion.h1
          className="welcome-title"
          initial={{ opacity: 0, y: -30 }} 
  animate={{ opacity: 1, y: 0 }} 
  transition={{ duration: 1 }}
        >
          Welcome to Visiting Lectures Portal
        </motion.h1>

        <motion.p
          className="welcome-text"
          initial={{ opacity: 0, y: 20 }} 
  animate={{ opacity: 1, y: 0 }} 
  transition={{ duration: 1, delay: 0.3 }}
        >
          We're looking for passionate educators. Apply now to join our academic team.
        </motion.p>
      
      </div>

      {/* Right Side: Lottie Animation */}
      <div className="right-side">
        <Lottie animationData={animation} loop={true} />
      </div>
    </div>
  );
};

export default Home;
