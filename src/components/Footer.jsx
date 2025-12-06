import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <img src="/images/logo_major.jpg" alt="GeometriSatu Logo" className="h-10 w-auto" />
            <p className="mt-4 text-gray-400">Bridging academic research and industry applications in game development at Universitas Sumatera Utara.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white">Services</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white">Projects</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-1 pt-8 text-center text-gray-400">
          <p>© 2025 GeometriSatu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
