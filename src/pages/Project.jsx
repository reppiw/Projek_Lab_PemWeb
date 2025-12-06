import React from 'react'
import { Link } from 'react-router-dom'

export default function Project(){
  return (
    <>
        <section className="hero-bg text-white relative overflow-hidden py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold font-display mb-4">Our Projects</h1>
            <p className="text-gray-100 text-lg">Explore the games and projects we've developed at GeometriSatu</p>
            </div>
        </section>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
            <Link to="/" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200 group">
            <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
            </svg>
            Back to Home
            </Link>
        </div>

        <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6 border-b pb-2">Our Games</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full">
                <img src="/assets/images/thumbnail_edurobots.jpg" alt="Edurobots" className="w-full h-40 object-cover" />
                <div className="p-4 flex flex-col flex-grow">
                <h4 className="font-semibold text-lg">Edurobots</h4>
                <p className="text-gray-500 text-sm mb-3">Shooter | Mobile</p>
                <p className="text-gray-600 text-sm mb-4 flex-grow">Shoot robots, earn coins, and upgrade your character in this exciting arcade topdown shooter!</p>
                <div className="mt-auto pt-2">
                    <a href="https://play.google.com/store/apps/details?id=com.geometrisatu.edushooter" target="_blank" rel="noreferrer" className="bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium py-2 px-4 rounded-lg mr-2">Download</a>
                    <a href="https://geometrisatu.id/eduproject/detail-edurobots/" className="text-primary-600 hover:text-primary-800 font-medium inline-flex items-center">Learn More</a>
                </div>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full">
                <img src="/assets/images/thumbnail_mathgo.png" alt="MathGO" className="w-full h-40 object-cover" />
                <div className="p-4 flex flex-col flex-grow">
                <h4 className="font-semibold text-lg">MathGO</h4>
                <p className="text-gray-500 text-sm mb-3">Math | Mobile</p>
                <p className="text-gray-600 text-sm mb-4 flex-grow">Sharpen your mind with MathGO and become a math wizard!</p>
                <div className="mt-auto pt-2">
                    <a href="https://play.google.com/store/apps/details?id=com.geometrisatu.mathgo2" target="_blank" rel="noreferrer" className="bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium py-2 px-4 rounded-lg mr-2">Download</a>
                    <a href="https://geometrisatu.id/eduproject/detail-mathgo/" className="text-primary-600 hover:text-primary-800 font-medium inline-flex items-center">Learn More</a>
                </div>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full">
                <img src="/assets/images/thumbnail_scienceone.png" alt="ScienceOne" className="w-full h-40 object-cover" />
                <div className="p-4 flex flex-col flex-grow">
                <h4 className="font-semibold text-lg">ScienceOne</h4>
                <p className="text-gray-500 text-sm mb-3">STEM | Mobile</p>
                <p className="text-gray-600 text-sm mb-4 flex-grow">Science One is a fun brain-training game that trains your science know-how!</p>
                <div className="mt-auto pt-2">
                    <a href="https://play.google.com/store/apps/details?id=com.geometrisatu.scienceone2" target="_blank" rel="noreferrer" className="bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium py-2 px-4 rounded-lg mr-2">Download</a>
                    <a href="https://geometrisatu.id/eduproject/detail-scienceone/" className="text-primary-600 hover:text-primary-800 font-medium inline-flex items-center">Learn More</a>
                </div>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full">
                <img src="/assets/images/thumbnail_superenglish.png" alt="Super English" className="w-full h-40 object-cover" />
                <div className="p-4 flex flex-col flex-grow">
                <h4 className="font-semibold text-lg">Super English</h4>
                <p className="text-gray-500 text-sm mb-3">Language | Mobile</p>
                <p className="text-gray-600 text-sm mb-4 flex-grow">Dive in, challenge yourself, and become a word master!</p>
                <div className="mt-auto pt-2">
                    <a href="https://play.google.com/store/apps/details?id=com.geometrisatu.superenglish2" target="_blank" rel="noreferrer" className="bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium py-2 px-4 rounded-lg mr-2">Download</a>
                    <a href="https://geometrisatu.id/eduproject/detail-superenglish/" className="text-primary-600 hover:text-primary-800 font-medium inline-flex items-center">Learn More</a>
                </div>
                </div>
            </div>
            </div>
        </div>
        </main>
    </>
  )
}
