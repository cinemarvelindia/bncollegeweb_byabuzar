
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Faculty types and data
interface FacultyMember {
  id: number;
  name: string;
  role: string;
  department: string;
  education: string;
  image: string;
  email: string;
}

const facultyData: FacultyMember[] = [
  {
    id: 1,
    name: "Dr. Rajendra Kumar",
    role: "Principal & Professor of Physics",
    department: "Physics",
    education: "Ph.D. (Physics), M.Sc.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80",
    email: "principal@bnc.edu"
  },
  {
    id: 2,
    name: "Dr. Priya Sharma",
    role: "Professor & Head of Department",
    department: "Chemistry",
    education: "Ph.D. (Chemistry), M.Sc.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1588&q=80",
    email: "priya.sharma@bnc.edu"
  },
  {
    id: 3,
    name: "Dr. Amit Patel",
    role: "Associate Professor",
    department: "Mathematics",
    education: "Ph.D. (Mathematics), M.Sc.",
    image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80",
    email: "amit.patel@bnc.edu"
  },
  {
    id: 4,
    name: "Dr. Sunita Verma",
    role: "Associate Professor",
    department: "English",
    education: "Ph.D. (English Literature), M.A.",
    image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    email: "sunita.verma@bnc.edu"
  },
  {
    id: 5,
    name: "Dr. Rajesh Singh",
    role: "Assistant Professor",
    department: "Computer Science",
    education: "Ph.D. (Computer Science), M.Tech.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80",
    email: "rajesh.singh@bnc.edu"
  },
  {
    id: 6,
    name: "Dr. Meera Gupta",
    role: "Assistant Professor",
    department: "Economics",
    education: "Ph.D. (Economics), M.A.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    email: "meera.gupta@bnc.edu"
  },
  {
    id: 7,
    name: "Dr. Anand Mishra",
    role: "Associate Professor",
    department: "History",
    education: "Ph.D. (History), M.A.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80",
    email: "anand.mishra@bnc.edu"
  },
  {
    id: 8,
    name: "Dr. Neha Agarwal",
    role: "Assistant Professor",
    department: "Biology",
    education: "Ph.D. (Microbiology), M.Sc.",
    image: "https://images.unsplash.com/photo-1629747490241-624f07d70e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1635&q=80",
    email: "neha.agarwal@bnc.edu"
  }
];

const Faculty = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [filteredFaculty, setFilteredFaculty] = useState<FacultyMember[]>(facultyData);
  
  // Get unique departments
  const departments = ['All', ...new Set(facultyData.map(member => member.department))];
  
  // Filter faculty based on selected department
  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredFaculty(facultyData);
    } else {
      setFilteredFaculty(facultyData.filter(member => member.department === activeFilter));
    }
  }, [activeFilter]);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-transition">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-college-darkBlue to-college-blue text-white py-16 md:py-24 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Our Faculty</h1>
            <p className="text-xl opacity-90 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Meet our distinguished faculty members who are experts in their fields and dedicated to academic excellence.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" fill="#ffffff">
            <path fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Faculty Directory */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-college-blue heading-underline mx-auto w-fit">Faculty Directory</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our faculty comprises experienced educators, researchers, and industry experts who are committed to providing quality education and guidance to our students.
            </p>
            
            {/* Department Filters */}
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {departments.map((dept, index) => (
                <button 
                  key={index}
                  className={`px-6 py-2 rounded-full transition-colors ${activeFilter === dept ? 'bg-college-blue text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                  onClick={() => setActiveFilter(dept)}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredFaculty.map((faculty) => (
              <div key={faculty.id} className="bg-white rounded-lg shadow-md overflow-hidden card-hover animate-fade-in">
                <div className="relative overflow-hidden h-64">
                  <img 
                    src={faculty.image} 
                    alt={faculty.name}
                    className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                    <h3 className="text-lg font-bold text-white">{faculty.name}</h3>
                    <p className="text-college-gold text-sm">{faculty.role}</p>
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-sm text-gray-600 space-y-1">
                    <p><span className="font-medium">Department:</span> {faculty.department}</p>
                    <p><span className="font-medium">Education:</span> {faculty.education}</p>
                    <p><span className="font-medium">Email:</span> {faculty.email}</p>
                  </div>
                  <button className="mt-3 text-college-blue hover:text-college-gold transition-colors text-sm font-medium">
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* No faculty found message */}
          {filteredFaculty.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No faculty members found for the selected department.</p>
            </div>
          )}
        </div>
      </section>

      {/* Departments Overview */}
      <section className="bg-gray-50 section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-college-blue">Our Departments</h2>
            <div className="w-24 h-1 bg-college-gold mx-auto"></div>
            <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
              Our academic departments are staffed by experienced faculty who are committed to advancing knowledge and fostering excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Science */}
            <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in">
              <h3 className="text-xl font-bold mb-3 text-college-blue">Science</h3>
              <ul className="space-y-2 text-gray-600 mb-4">
                <li>• Physics Department</li>
                <li>• Chemistry Department</li>
                <li>• Biology Department</li>
                <li>• Mathematics Department</li>
                <li>• Computer Science Department</li>
              </ul>
              <button className="text-college-blue hover:text-college-gold transition-colors font-medium text-sm">
                Learn More
              </button>
            </div>
            
            {/* Arts & Humanities */}
            <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-xl font-bold mb-3 text-college-blue">Arts & Humanities</h3>
              <ul className="space-y-2 text-gray-600 mb-4">
                <li>• English Department</li>
                <li>• History Department</li>
                <li>• Political Science Department</li>
                <li>• Philosophy Department</li>
                <li>• Geography Department</li>
              </ul>
              <button className="text-college-blue hover:text-college-gold transition-colors font-medium text-sm">
                Learn More
              </button>
            </div>
            
            {/* Commerce & Management */}
            <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-xl font-bold mb-3 text-college-blue">Commerce & Management</h3>
              <ul className="space-y-2 text-gray-600 mb-4">
                <li>• Commerce Department</li>
                <li>• Economics Department</li>
                <li>• Business Administration Department</li>
                <li>• Finance Department</li>
                <li>• Accounting Department</li>
              </ul>
              <button className="text-college-blue hover:text-college-gold transition-colors font-medium text-sm">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Achievement */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-college-blue">Faculty Achievements</h2>
            <div className="w-24 h-1 bg-college-gold mx-auto"></div>
            <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
              Our faculty members have received numerous awards and recognition for their contributions to academia and research.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in-left">
              <h3 className="text-xl font-bold mb-4 text-college-blue">Research Publications</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-college-gold mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Over 500 research papers published in international journals</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-college-gold mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>30+ books published by faculty in various disciplines</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-college-gold mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Regular contributions to academic conferences worldwide</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in-right">
              <h3 className="text-xl font-bold mb-4 text-college-blue">Awards & Recognition</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-college-gold mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>10 faculty members recognized with national teaching awards</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-college-gold mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>15+ research grants secured in the last 5 years</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-college-gold mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Several faculty members serve on editorial boards of reputed journals</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-college-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 animate-fade-in">Interested in Joining Our Faculty?</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            We're always looking for talented educators and researchers to join our academic community.
          </p>
          <Link to="/contact" className="btn-gold animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Faculty;
