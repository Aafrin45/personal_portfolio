import React from "react";
import aboutUs from "../assets/about-us.svg";

import { motion } from "framer-motion";


const About = () => {
  const aboutMe = "I'm a passionate web developer with a strong interest in creating user-friendly websites. I enjoy tackling challenges and collaborating with others to find solutions.";
  const strengths = "I consider myself to be highly adaptable and open to change. In today's rapidly changing world, I find that this quality allows me to adjust to new situations with ease, enabling me to learn quickly and stay resilient in the face of challenges.";
  const weaknesses = "Struggling with anxiety or nervousness when speaking in front of a group, which can hinder effective communication.I needs improvement in project management skills.";
  return (
    <div
      id="about"
      className="min-screen flex items-center justify-center relative"
      style={{
        backgroundColor:"#222831",
      }}
    >
      <div
        className="max-w-screen-2xl flex flex-col xl:flex-row xl:justify-between
          items-center xl:items-start gap-12 w-full py-16 px-12"
      >
        <div className="flex-1 flex flex-col gap-4">
   
            <h2
              className="text-center xl:text-start text-4xl sm:text-5xl lg:text-[64px] 
              font-bold text-textPrimary"
            >
              About <span className="text-secondary"> me</span>
            </h2><br></br>
         

            <p className="text-center xl:text-start text-base sm:text-lg text-textSecondary">
              {aboutMe}
            </p>
          

     
            <p className="text-center xl:text-start text-base sm:text-lg text-textSecondary">
              <strong style={{ color: '#ffffff' }}>Strengths:</strong> {strengths}
            </p>
      
            <p className="text-center xl:text-start text-base sm:text-lg text-textSecondary">

              <strong style={{ color: '#ffffff' }}>Weaknesses:</strong> {weaknesses}
            </p>
       
          

         
        </div>
        <div className="flex-1 flex items-center justify-center">
          <motion.img        
            whileInView="visible"
            src={aboutUs}
            alt=""
            className="max-w-full sm:max-w-[401px]"
          />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px]" />
    </div>
  );
};

export default About;
