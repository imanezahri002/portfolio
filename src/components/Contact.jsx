
function Contact() {
  return (
    
    <section id="contact" className="py-20 bg-gradient-to-br from-[#8174A0]/5 to-[#EFB6C8]/5">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Me <span className="text-[#8174A0]">Contacter</span></h2>
        <div className="w-24 h-1 bg-[#EFB6C8] mx-auto"></div>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Vous avez un projet en tête ? N'hésitez pas à me contacter pour discuter de vos idées.</p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-10">
        
        <div className="md:w-1/3">
          <div className="bg-white p-8 rounded-xl shadow-lg h-full">
            <h3 className="text-xl font-semibold mb-6 text-gray-800">Informations de contact</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#8174A0]/10 rounded-full flex items-center justify-center">
                  <i className="fas fa-map-marker-alt text-[#8174A0]"></i>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Localisation</h4>
                  <p className="text-gray-600 mt-1">Paris, France</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#A888B5]/10 rounded-full flex items-center justify-center">
                  <i className="fas fa-envelope text-[#A888B5]"></i>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Email</h4>
                  <p className="text-gray-600 mt-1">contact@example.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#EFB6C8]/10 rounded-full flex items-center justify-center">
                  <i className="fas fa-phone text-[#EFB6C8]"></i>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Téléphone</h4>
                  <p className="text-gray-600 mt-1">+33 6 12 34 56 78</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#FFD2A0]/10 rounded-full flex items-center justify-center">
                  <i className="fas fa-globe text-[#FFD2A0]"></i>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Site Web</h4>
                  <p className="text-gray-600 mt-1">www.example.com</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex space-x-4">
              <a href="https://github.com/imanezahri002" className="w-10 h-10 rounded-full bg-[#8174A0] text-white flex items-center justify-center hover:bg-[#A888B5] transition-colors">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/imane-zahri-975b2a211/" className="w-10 h-10 rounded-full bg-[#8174A0] text-white flex items-center justify-center hover:bg-[#A888B5] transition-colors">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="md:w-2/3">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-6 text-gray-800">Envoyez-moi un message</h3>
            
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label for="name" className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                  <input type="text" id="name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8174A0] focus:border-[#8174A0] outline-none transition-colors" placeholder="Votre nom"/>
                </div>
                <div>
                  <label for="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" id="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8174A0] focus:border-[#8174A0] outline-none transition-colors" placeholder="Votre email"/>
                </div>
              </div>
              
              <div className="mb-6">
                <label for="subject" className="block text-sm font-medium text-gray-700 mb-1">Sujet</label>
                <input type="text" id="subject" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8174A0] focus:border-[#8174A0] outline-none transition-colors" placeholder="Sujet de votre message"/>
              </div>
              
              <div className="mb-6">
                <label for="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea id="message" rows="5" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8174A0] focus:border-[#8174A0] outline-none transition-colors" placeholder="Votre message"></textarea>
              </div>
              
              <button type="submit" className="w-full py-3 px-6 bg-[#8174A0] text-white rounded-lg hover:bg-[#A888B5] transition-colors shadow-lg shadow-[#8174A0]/20">
                Envoyer le message <i className="fas fa-paper-plane ml-2"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>


  );
};
export default Contact;