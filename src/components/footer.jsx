
function Footer(){

return(
    <footer className="bg-gray-900 text-white py-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <span className="text-2xl font-bold text-[#A888B5]">Portfolio</span>
        </div>
        
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a href="#" class="text-gray-400 hover:text-white transition-colors">
            <i className="fab fa-github text-xl"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <i className="fab fa-linkedin-in text-xl"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <i className="fab fa-twitter text-xl"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <i className="fab fa-dribbble text-xl"></i>
          </a>
        </div>
        
        <div className="text-gray-400 text-sm">
          &copy; 2025 Mon Portfolio. Tous droits réservés.
        </div>
      </div>
    </div>
  </footer>
);
}
export default  Footer;