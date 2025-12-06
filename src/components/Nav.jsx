import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/">
                <img src="/assets/images/logo_major.jpg" alt="Logo" className="h-[58px] w-auto" />
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <a href="#about" className="nav-link text-gray-500 hover:text-primary-600 inline-flex items-center px-1 pt-1 text-sm font-medium">About</a>
              <a href="#services" className="nav-link text-gray-500 hover:text-primary-600 inline-flex items-center px-1 pt-1 text-sm font-medium">Services</a>
              <a href="#projects" className="nav-link text-gray-500 hover:text-primary-600 inline-flex items-center px-1 pt-1 text-sm font-medium">Projects</a>
              <a href="#contact" className="nav-link text-gray-500 hover:text-primary-600 inline-flex items-center px-1 pt-1 text-sm font-medium">Contact</a>
              <Link to="/team" className="nav-link text-gray-500 hover:text-primary-600 inline-flex items-center px-1 pt-1 text-sm font-medium">Team</Link>
              <a href="/#game" className="nav-link text-gray-500 hover:text-primary-600 inline-flex items-center px-1 pt-1 text-sm font-medium">Game</a>
            </div>
          </div>

          <div className="-mr-2 flex items-center sm:hidden">
            <button onClick={() => setOpen(!open)} type="button" className="mobile-menu-button bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
              <span className="sr-only">Open main menu</span>
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`sm:hidden ${open ? '' : 'hidden'}`} id="mobile-menu">
        <div className="pt-2 pb-3 space-y-1">
          <a href="#about" onClick={() => setOpen(false)} className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50">About</a>
          <a href="#services" onClick={() => setOpen(false)} className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50">Services</a>
          <a href="#projects" onClick={() => setOpen(false)} className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50">Projects</a>
          <a href="#contact" onClick={() => setOpen(false)} className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50">Contact</a>
        </div>
      </div>
    </nav>
  )
}
