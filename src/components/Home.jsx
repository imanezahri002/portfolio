import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
function Home(){
    return( 
        <section className="pt-39 pb-45 bg-gradient-to-br from-[#8174A0]/10 to-[#EFB6C8]/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-1/2 mb-10 md:mb-0">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    <span className="text-[#8174A0]">Bonjour, je suis</span>
                    <br />
                    <span className="text-gray-800">Développeur Créatif</span>
                </h1>
                <p className="text-lg text-gray-600 mb-8">Passionné par la création d'expériences web uniques et interactives</p>
                <div className="flex space-x-4">
                    <a href="#contact" className="px-6 py-3 bg-[#8174A0] text-white rounded-lg hover:bg-[#A888B5] transition-colors shadow-lg shadow-[#8174A0]/20">Me contacter</a>
                    <a href="#projects" className="px-6 py-3 border border-[#8174A0] text-[#8174A0] rounded-lg hover:bg-[#8174A0]/5 transition-colors">Voir mes projets</a>
                </div>
                </div>
                <div className="md:w-1/2 flex justify-center">
                <div className="relative">
                    <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-[#8174A0] to-[#EFB6C8] flex items-center justify-center transform hover:-translate-y-2 transition-transform duration-300">
                    <img src="/placeholder.svg?height=300&width=300" alt="Profile" className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover border-4 border-white" />
                    </div>
                    <div className="absolute -top-5 -right-5 bg-[#FFD2A0] p-4 rounded-lg shadow-lg">
                    <i className="fas fa-code text-[#8174A0] text-2xl"></i>
                    </div>
                    <div className="absolute -bottom-5 -left-5 bg-[#EFB6C8] p-4 rounded-lg shadow-lg">
                    <i className="fas fa-paint-brush text-[#8174A0] text-2xl"></i>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
      );
};
export default Home;