// react
import { useState } from "react";
const Specials = () => {
  const specialskills = "HTML/CSS,Bootstrap,JavaScript,UI/UX Design";
  const knowntools= "Visual Studio Code,Wordpress,Figma";
  const specialinterests = "I specialize in UI/UX design,My portfolio showcases responsive designs and a streamlined process.I'm dedicated to crafting intuitive and engaging interfaces.";
  return (
    <div
    id="specials"
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
              Specialization
            </h2><br></br>

    <div className="grid-container">
      <div className="grid-item">  <p className="text-center xl:text-start text-base sm:text-lg text-textSecondary">
              <strong style={{ color: '#ffffff'}}>Special Skill<br></br></strong> {specialskills}
            </p></div>
      <div className="grid-item"><p className="text-center xl:text-start text-base sm:text-lg text-textSecondary">
              <strong style={{ color: '#ffffff' }}>Known Tools<br></br></strong> {knowntools}
            </p></div>
      <div className="grid-item"><p className="text-center xl:text-start text-base sm:text-lg text-textSecondary">
              <strong style={{ color: '#ffffff' }}>Special Interest<br></br></strong> {specialinterests}
            </p></div>
      
      <div className="absolute bottom-0 left-0 w-full h-[1px]" />
    </div>
    </div>
    </div>
    </div>
  );
};

export default Specials;
