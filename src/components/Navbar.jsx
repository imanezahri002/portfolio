
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function Navbar() {
    return (
        <nav class="fixed w-full bg-white bg-opacity-90 backdrop-blur-sm shadow-sm z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <span class="text-2xl font-bold text-[#8174A0]">Portfolio</span>
        </div>
        <div class="hidden md:flex items-center space-x-8">
        <Link to="/" class="text-gray-700 hover:text-[#8174A0] transition-colors">
            Home
            </Link>

            <Link to="/about" class="text-gray-700 hover:text-[#8174A0] transition-colors">
            About
            </Link>
          <Link to="/projects" class="text-gray-700 hover:text-[#8174A0] transition-colors">
            Projets
            </Link>
            <Link to="/competences" class="text-gray-700 hover:text-[#8174A0] transition-colors">
            Compétences
            </Link>
          <Link to="/contact"
           class="text-gray-700 hover:text-[#8174A0] transition-colors">
            Contact
            </Link>
        </div>
        <div class="md:hidden flex items-center">
          <button class="text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </nav>
    );
};

export default  Navbar;