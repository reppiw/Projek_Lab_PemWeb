import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import Project from './pages/Project'
import Team from './pages/Team'
import { useLocation } from 'react-router-dom'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      <Nav />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/team" element={<Team />} />
          <Route path="/game" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
