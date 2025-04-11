
import {useEffect,useState} from "react";


function Projects(){
  const[projects,setProjects]=useState([]);
  
  useEffect(() => {
   
      fetch('https://oussamaapi.azizbenmallouk.com/api/projects')
      .then(response => response.json())
      .then(data => {
      setProjects(data);
      })
    },[]);
  
    return(

    <section id="projects" className="py-20 bg-gradient-to-br from-[#8174A0]/5 to-[#EFB6C8]/5">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Mes <span className="text-[#8174A0]">Projets</span></h2>
        <div className="w-24 h-1 bg-[#EFB6C8] mx-auto"></div>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Découvrez une sélection de mes projets récents qui démontrent mes compétences et ma créativité.</p>
      </div>
      


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((element) => (

        <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
          <div className="relative overflow-hidden">
            <img 
            src="/placeholder.svg?height=300&width=500" 
            alt="Project 1" 
            className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-300"/>
            <div className="absolute inset-0 bg-gradient-to-t from-[#8174A0]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-6">
              <div className="flex space-x-3">
                <a href="#" className="w-10 h-10 rounded-full bg-white text-[#8174A0] flex items-center justify-center hover:bg-[#FFD2A0] transition-colors">
                  <i className="fas fa-link"></i>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white text-[#8174A0] flex items-center justify-center hover:bg-[#FFD2A0] transition-colors">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-xl font-semibold text-gray-800">{element.title}</h3>
              <span className="px-3 py-1 bg-[#EFB6C8]/20 text-[#EFB6C8] rounded-full text-xs">Web App</span>
            </div>
            <p className="text-gray-600 mb-4">Une plateforme e-commerce complète avec panier, paiement et gestion des commandes.</p>
            <div className="flex flex-wrap gap-2">

              {element.tools.map((tool) => (
                <span key={tool.name} className="px-2 py-1 bg-[#8174A0]/10 text-[#8174A0] rounded-md text-xs">
                  {tool.name}
                </span>
              ))}

               </div>
          </div>
        </div>
        ))}

      </div>

    </div>
  </section>
    );
};
export default Projects;
