import React from 'react'
import Game from './Game'

export default function Home(){
  return (
    <div>
      <section className="hero-bg text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col lg:flex-row items-center relative z-10">
            <div className="lg:w-1/2 lg:pr-12">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display mb-6 leading-tight">
                Game Development <span className="text-accent-500">Research</span> & <span className="text-primary-400">Innovation</span>
                </h1>
                <p className="text-lg mb-8 text-gray-100 max-w-lg">Bridging academic research and industry applications at Universitas Sumatera Utara. Creating innovative gaming experiences through research-based development.</p>
                <div className="flex flex-wrap gap-4">
                <a href="#projects" className="bg-accent-500 hover:bg-accent-600 text-white py-3 px-6 rounded-lg font-medium shadow-md transition duration-300 flex items-center">Our Projects</a>
                <a href="#contact" className="bg-transparent hover:bg-white hover:text-primary-700 border-2 border-white py-3 px-6 rounded-lg font-medium transition duration-300 relative z-10">Get in Touch</a>
                </div>
                </div>

            <div className="lg:w-1/2 mt-12 lg:mt-0 relative">
                <div className="relative animate-float">
                <video autoPlay muted loop playsInline className="rounded-lg shadow-2xl mx-auto z-10 relative">
                  <source src="/assets/videos/edurobots demo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute -bottom-4 -right-4 w-full h-full rounded-lg z-0" style={{backgroundColor: '#f5f5f5'}}></div>
                </div>
            </div>
            </div>
        </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section id="about" className="py-16">
            <div className="mb-12 text-center">
                <span className="inline-block px-4 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-4">About Us</span>
                <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">What is <span className="text-primary-600">GeometriSatu</span></h2>
                <div className="w-24 h-1 bg-accent-500 mx-auto mb-6 rounded-full"></div>
                <p className="max-w-3xl mx-auto text-gray-600">Connecting academic research with game industry applications</p>
            </div>

            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/2">
                <div className="relative">
                  <img src="/assets/images/fakultas.jpg" alt="About GeometriSatu" className="rounded-3xl shadow-xl mb-6 w-full" />
                  <div className="bg-white rounded-xl shadow-lg p-6 max-w-md mx-auto md:mx-0 md:absolute md:-bottom-10 md:right-10">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                          <i className="fas fa-lightbulb text-primary-600 text-xl"></i>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">Founded in 2020</h3>
                        <p className="text-gray-500">At Universitas Sumatera Utara</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-3xl font-bold text-primary-600">6</p>
                        <p className="text-gray-500 text-sm">Active Developers</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-3xl font-bold text-accent-500">4</p>
                        <p className="text-gray-500 text-sm">Game Projects</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:w-1/2 mt-16 md:mt-0">
                <p className="text-gray-600 leading-relaxed mb-6">GeometriSatu is a game development research company established within the Faculty of Computer Science and Information Technology, Universitas Sumatera Utara. We focus on bridging the gap between academic research and real-world application by transforming game-related research projects into viable commercial products.</p>
                <p className="text-gray-600 leading-relaxed mb-8">We actively support game development research, innovation, and learning on campus, while maintaining a strong commitment to product-oriented outcomes. Our mission is to cultivate a creative ecosystem where experimental ideas, technical exploration, and gameplay innovation can evolve into impactful, market-ready solutions.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-primary-500">
                    <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
                    <p className="text-gray-600">To become a leading game research and development hub in Indonesia, recognized for innovative solutions that bridge academic research with industry needs.</p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-accent-500">
                    <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
                    <p className="text-gray-600 mb-3">Transform research into commercial game products and foster innovation.</p>
                    <a href="#services" className="text-primary-600 hover:text-primary-800 inline-flex items-center text-sm font-medium group">
                      Learn more
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="mt-8 border-t border-gray-200 pt-8">
                  <h3 className="text-xl font-semibold mb-4">Core Values</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center mt-1">
                        <i className="fas fa-check text-primary-600 text-xs"></i>
                      </div>
                      <div>
                        <p className="font-medium">Innovation</p>
                        <p className="text-gray-500 text-sm">Exploring new game concepts</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center mt-1">
                        <i className="fas fa-check text-primary-600 text-xs"></i>
                      </div>
                      <div>
                        <p className="font-medium">Collaboration</p>
                        <p className="text-gray-500 text-sm">Academia meets industry</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center mt-1">
                        <i className="fas fa-check text-primary-600 text-xs"></i>
                      </div>
                      <div>
                        <p className="font-medium">Education</p>
                        <p className="text-gray-500 text-sm">Training future developers</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center mt-1">
                        <i className="fas fa-check text-primary-600 text-xs"></i>
                      </div>
                      <div>
                        <p className="font-medium">Quality</p>
                        <p className="text-gray-500 text-sm">Excellence in execution</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </section>

        <section id="services" className="py-16">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">What We Do</div>
            <h2 className="text-3xl font-bold">Our Services</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">We offer a comprehensive range of services to support game development research and innovation</p>
          </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <i className="fas fa-flask text-primary-600 text-xl"></i>
                    </div>
                    <h3 className="font-semibold text-lg mb-3">Research-to-Product Development</h3>
                    <p className="text-gray-600">Transforming game-related research projects into commercial products with market viability.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <i className="fas fa-code text-primary-600 text-xl"></i>
                    </div>
                    <h3 className="font-semibold text-lg mb-3">Prototype Development</h3>
                    <p className="text-gray-600">Designing and building game systems, mechanics, and monetization frameworks.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <i className="fas fa-graduation-cap text-primary-600 text-xl"></i>
                    </div>
                    <h3 className="font-semibold text-lg mb-3">Academic Project Support</h3>
                    <p className="text-gray-600">Supporting student research and campus projects in game development technologies.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <i className="fas fa-comments text-primary-600 text-xl"></i>
                    </div>
                    <h3 className="font-semibold text-lg mb-3">Technical Consultation</h3>
                    <p className="text-gray-600">Providing expert advice on game technology, backend systems, and AI integration.</p>
                </div>
            </div>
        </section>

        <section id="projects" className="py-16">
            <div className="text-center mb-12">
                <div className="inline-block mb-4 px-4 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">Our Work</div>
                <h2 className="text-3xl font-bold">Featured Projects</h2>
                <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Explore our current and past game development projects</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2">
                    <img src="/assets/images/thumbnail_eduproject.jpg" alt="EduProject" className="w-full h-full object-cover" />
                </div>
                <div className="md:w-1/2 p-8">
                    <div className="inline-block mb-3 px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">Current Project</div>
                    <h3 className="text-2xl font-bold mb-4">EduProject</h3>
                    <p className="text-gray-600 mb-6">At GeometriSatu Studio, we're pioneering a new method in the development of educational games. EduProject blends engaging gameplay with educational incentives.</p>
                    <a href="/project" className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-lg font-medium transition duration-300">View Project</a>
                </div>
                </div>
            </div>
        </section>

        <section id="game" className="py-16">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-4">Play: Simple Shooter</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">Play the simple shooter directly on this page</p>
            </div>
            <div className="flex justify-center">
                <Game />
            </div>
        </section>

        <section id="contact" className="py-16">
            <div className="text-center mb-12">
                <div className="inline-block mb-4 px-4 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">Get In Touch</div>
                <h2 className="text-3xl font-bold">Contact Us</h2>
                <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Have questions about our research or services? We'd love to hear from you!</p>
            </div>

            <div className="flex flex-col items-center justify-center gap-12">
                <div className="w-full max-w-2xl">
                    <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
                        <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                        <div className="space-y-6">
                        <div className="flex items-start">
                            <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                            <i className="fas fa-map-marker-alt text-primary-600"></i>
                            </div>
                            <div>
                            <h4 className="font-medium mb-1">Address</h4>
                            <p className="text-gray-600">Jalan Setia Budi no. 238<br/>Ruko G, Tanjung Sari<br/>Medan, North Sumatra, Indonesia</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                            <i className="fas fa-envelope text-primary-600"></i>
                            </div>
                            <div>
                            <h4 className="font-medium mb-1">Email</h4>
                            <p className="text-gray-600">hi@geometrisatu.id</p>
                            <p className="text-gray-600">hi.geometrisatu@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                            <i className="fas fa-phone-alt text-primary-600"></i>
                            </div>
                            <div>
                            <h4 className="font-medium mb-1">Phone</h4>
                            <p className="text-gray-600">+62 813-6160-6734</p>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
        </section>
            </div>
        </div>
    )
}
