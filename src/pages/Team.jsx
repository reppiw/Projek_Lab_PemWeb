import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Team(){
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <section className="hero-bg text-white relative overflow-hidden py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold font-display mb-4">Our Team</h1>
          <p className="text-gray-100 text-lg">Meet the talented people behind GeometriSatu</p>
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

      <div className="text-center mb-12">
        <div className="inline-block mb-4 px-4 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">Our People</div>
        <h2 className="text-3xl font-bold">Meet The Team</h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Our talented team combines academic expertise with industry experience</p>
      </div>

      <div className="mb-12">
        <h3 className="text-xl font-semibold mb-6 border-b pb-2">Owner</h3>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-6 max-w-sm mx-auto">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <img src="/assets/images/owner.jpg" alt="Owner" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h4 className="font-semibold">Dr. Jos Timanta Tarigan S.Kom., M.Sc</h4>
              <p className="text-gray-500 text-sm mt-1">Lecturer @ Department of Computer Science, Faculty of Computer Science and Information Technology, Universitas Sumatera Utara</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h3 className="text-xl font-semibold mb-6 border-b pb-2">Current Members</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-105">
              <img src="/assets/images/alex.jpg" alt="Team Member" className="w-full h-48 object-cover rounded-t-xl" />
              <div className="p-4">
                <h4 className="font-semibold">Alexander Yuanata</h4>
                <div className="my-2 border-t border-gray-200"></div>
                <div className="flex mt-3 space-x-2">
                  <a href="http://www.linkedin.com/in/alexander-yuanata" className="text-gray-500 hover:text-primary-600"><i className="fab fa-linkedin"></i></a>
                  <a href="https://github.com/alexanderyuanata" className="text-gray-500 hover:text-primary-600"><i className="fab fa-github"></i></a>
                  <span className="relative group text-gray-500 hover:text-primary-600 cursor-pointer">
                    <i className="fas fa-envelope"></i>
                    <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-3 py-1.5 text-xs text-white bg-gray-900 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 translate-y-2 group-hover:translate-y-0 transition-all duration-200 z-10 whitespace-nowrap">
                      yuanataalex@gmail.com
                    </span>
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-105">
              <img src="/assets/images/Apalah26.jpg" alt="Team Member" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h4 className="font-semibold">Elin Betsey Br Ginting</h4>
                <div className="my-2 border-t border-gray-200"></div>
                <div className="flex mt-3 space-x-2">
                  <a href="#" className="text-gray-500 hover:text-primary-600"><i className="fab fa-linkedin"></i></a>
                  <a href="#" className="text-gray-500 hover:text-primary-600"><i className="fab fa-github"></i></a>
                  <a href="#" className="text-gray-500 hover:text-primary-600"><i className="fas fa-envelope"></i></a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-105">
              <img src="/assets/images/ferdinand.jpg" alt="Team Member" className="w-full h-48 object-cover rounded-t-xl" />
              <div className="p-4">
                <h4 className="font-semibold">Ferdinand</h4>
                <div className="my-2 border-t border-gray-200"></div>
                <div className="flex mt-3 space-x-2">
                  <a href="https://www.linkedin.com/in/ferdinand-ferdinand-bb2636275" className="text-gray-500 hover:text-primary-600"><i className="fab fa-linkedin"></i></a>
                  <a href="https://github.com/Ferdinand-0100" className="text-gray-500 hover:text-primary-600"><i className="fab fa-github"></i></a>
                  <span className="relative group text-gray-500 hover:text-primary-600 cursor-pointer">
                    <i className="fas fa-envelope"></i>
                    <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-3 py-1.5 text-xs text-white bg-gray-900 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 translate-y-2 group-hover:translate-y-0 transition-all duration-200 z-10 whitespace-nowrap">
                      cenferdinand@gmail.com
                    </span>
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-105">
              <img src="/assets/images/Apalah26.jpg" alt="Team Member" className="w-full h-48 object-cover rounded-t-xl" />
              <div className="p-4">
                <h4 className="font-semibold">Revita Kezia Pandiangan</h4>
                <div className="my-2 border-t border-gray-200"></div>
                <div className="flex mt-3 space-x-2">
                  <a href="#" className="text-gray-500 hover:text-primary-600"><i className="fab fa-linkedin"></i></a>
                  <a href="#" className="text-gray-500 hover:text-primary-600"><i className="fab fa-github"></i></a>
                  <span className="relative group text-gray-500 hover:text-primary-600 cursor-pointer">
                    <i className="fas fa-envelope"></i>
                    <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-3 py-1.5 text-xs text-white bg-gray-900 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 translate-y-2 group-hover:translate-y-0 transition-all duration-200 z-10 whitespace-nowrap">
                      revitakezia@gmail.com
                    </span>
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-105">
              <img src="/assets/images/Apalah26.jpg" alt="Team Member" className="w-full h-48 object-cover rounded-t-xl" />
              <div className="p-4">
                <h4 className="font-semibold">Fernandez</h4>
                <div className="my-2 border-t border-gray-200"></div>
                <div className="flex mt-3 space-x-2">
                  <a href="#" className="text-gray-500 hover:text-primary-600"><i className="fab fa-linkedin"></i></a>
                  <a href="#" className="text-gray-500 hover:text-primary-600"><i className="fab fa-github"></i></a>
                  <span className="relative group text-gray-500 hover:text-primary-600 cursor-pointer">
                    <i className="fas fa-envelope"></i>
                    <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-3 py-1.5 text-xs text-white bg-gray-900 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 translate-y-2 group-hover:translate-y-0 transition-all duration-200 z-10 whitespace-nowrap">
                      #
                    </span>
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-105">
              <img src="/assets/images/Apalah26.jpg" alt="Team Member" className="w-full h-48 object-cover rounded-t-xl" />
              <div className="p-4">
                <h4 className="font-semibold">Kevin Maverick</h4>
                <div className="my-2 border-t border-gray-200"></div>
                <div className="flex mt-3 space-x-2">
                  <a href="#" className="text-gray-500 hover:text-primary-600"><i className="fab fa-linkedin"></i></a>
                  <a href="#" className="text-gray-500 hover:text-primary-600"><i className="fab fa-github"></i></a>
                  <span className="relative group text-gray-500 hover:text-primary-600 cursor-pointer">
                    <i className="fas fa-envelope"></i>
                    <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-3 py-1.5 text-xs text-white bg-gray-900 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 translate-y-2 group-hover:translate-y-0 transition-all duration-200 z-10 whitespace-nowrap">
                      #
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="past-members-section py-8">
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6 border-b pb-2">Past Members</h3>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div className="member-button bg-gray-50 border border-gray-100 px-4 py-3 rounded-lg shadow-sm hover:shadow-inner hover:bg-gray-100 transition-all duration-200 transform hover:-translate-y-px hover:translate-x-px flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-3"></div>
                  <p className="font-medium text-gray-800">Ahmad Ghalib Athariq</p>
                </div>
                <div className="member-button bg-gray-50 border border-gray-100 px-4 py-3 rounded-lg shadow-sm hover:shadow-inner hover:bg-gray-100 transition-all duration-200 transform hover:-translate-y-px hover:translate-x-px flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-3"></div>
                  <p className="font-medium text-gray-800">Felix</p>
                </div>
                <div className="member-button bg-gray-50 border border-gray-100 px-4 py-3 rounded-lg shadow-sm hover:shadow-inner hover:bg-gray-100 transition-all duration-200 transform hover:-translate-y-px hover:translate-x-px flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-3"></div>
                  <p className="font-medium text-gray-800">Lidya Alya Zahra</p>
                </div>
                <div className="member-button bg-gray-50 border border-gray-100 px-4 py-3 rounded-lg shadow-sm hover:shadow-inner hover:bg-gray-100 transition-all duration-200 transform hover:-translate-y-px hover:translate-x-px flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-3"></div>
                  <p className="font-medium text-gray-800">Lorenzo Liunardo</p>
                </div>
                <div className="member-button bg-gray-50 border border-gray-100 px-4 py-3 rounded-lg shadow-sm hover:shadow-inner hover:bg-gray-100 transition-all duration-200 transform hover:-translate-y-px hover:translate-x-px flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-3"></div>
                  <p className="font-medium text-gray-800">Muhammad Daffa Shidiq</p>
                </div>
                <div className="member-button bg-gray-50 border border-gray-100 px-4 py-3 rounded-lg shadow-sm hover:shadow-inner hover:bg-gray-100 transition-all duration-200 transform hover:-translate-y-px hover:translate-x-px flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-3"></div>
                  <p className="font-medium text-gray-800">Muhammad Putra H. Pane</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
