import React from "react";
import Mimage from "../assets/profile.jpeg"; 
import '@fortawesome/fontawesome-free/css/all.min.css';// Import the image from assets folder
function About(){
    return(

    <section id="about" className="py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">À propos de <span className="text-[#8174A0]">moi</span></h2>
        <div className="w-24 h-1 bg-[#EFB6C8] mx-auto"></div>
      </div>
      
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/3">
          <div className="relative">
            <div className="w-full h-80 bg-gradient-to-br from-[#8174A0]/20 to-[#EFB6C8]/20 rounded-2xl"></div>
            
            <img
            src={Mimage}
            alt="imane"
            className="absolute inset-0 w-full h-80 object-cover rounded-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300" />
          
          </div>
        </div>
        
        <div className="md:w-2/3">
          <h3 className="text-2xl font-semibold mb-4 text-[#A888B5]">Qui suis-je?</h3>
          <p className="text-gray-600 mb-6">
            Je suis un développeur web passionné par la création d'expériences numériques uniques et interactives. 
            Avec plusieurs années d'expérience dans le développement web, je combine créativité et expertise technique 
            pour donner vie à des projets innovants.
          </p>
          
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Nom:</h4>
              <p className="text-gray-600">John Doe</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Email:</h4>
              <p className="text-gray-600">contact@example.com</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Localisation:</h4>
              <p className="text-gray-600">Paris, France</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Disponibilité:</h4>
              <p className="text-gray-600">Freelance / Temps plein</p>
            </div>
          </div>
          
          <div className="flex space-x-4">
            <a href="https://github.com/imanezahri002"
             className="w-10 h-10 rounded-full bg-[#8174A0] text-white flex items-center justify-center hover:bg-[#A888B5] transition-colors">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/imane-zahri-975b2a211/" 
              className="w-10 h-10 rounded-full bg-[#8174A0] text-white flex items-center justify-center hover:bg-[#A888B5] transition-colors">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
    );
};
export default About;