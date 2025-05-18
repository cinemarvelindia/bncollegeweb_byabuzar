
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Faculty types and data from actual B.N. College website
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
    name: "Dr. Sanjay Prasad",
    role: "Principal",
    department: "Administration",
    education: "Ph.D.",
    image: "https://bncollegebgp.ac.in/wp-content/uploads/2022/07/principal-1.jpg",
    email: "principal@bncollegebgp.ac.in"
  },
  {
    id: 2,
    name: "Dr. R. S. Pandey",
    role: "Professor & Head of Department",
    department: "Physics",
    education: "Ph.D., M.Sc.",
    image: "https://bncollegebgp.ac.in/wp-content/uploads/2022/07/HOD-Physics.jpg",
    email: "rspandey@bncollegebgp.ac.in"
  },
  {
    id: 3,
    name: "Dr. A. K. Jha",
    role: "Associate Professor",
    department: "Chemistry",
    education: "Ph.D., M.Sc.",
    image: "https://bncollegebgp.ac.in/wp-content/uploads/2022/07/HOD-Chemistry.jpg",
    email: "akjha@bncollegebgp.ac.in"
  },
  {
    id: 4,
    name: "Dr. R. R. Sinha",
    role: "Professor",
    department: "Botany",
    education: "Ph.D., M.Sc.",
    image: "https://bncollegebgp.ac.in/wp-content/uploads/2022/07/HOD-Botany.jpg",
    email: "rrsinha@bncollegebgp.ac.in"
  },
  {
    id: 5,
    name: "Dr. P. K. Jha",
    role: "Associate Professor",
    department: "Zoology",
    education: "Ph.D., M.Sc.",
    image: "https://bncollegebgp.ac.in/wp-content/uploads/2022/07/HOD-Zoology.jpg",
    email: "pkjha@bncollegebgp.ac.in"
  },
  {
    id: 6,
    name: "Dr. M. K. Singh",
    role: "Professor & Head of Department",
    department: "Mathematics",
    education: "Ph.D., M.Sc.",
    image: "https://bncollegebgp.ac.in/wp-content/uploads/2022/07/HOD-Mathematics.jpg",
    email: "mksingh@bncollegebgp.ac.in"
  },
  {
    id: 7,
    name: "Dr. Kumari Nisha",
    role: "Associate Professor",
    department: "English",
    education: "Ph.D., M.A.",
    image: "https://bncollegebgp.ac.in/wp-content/uploads/2022/07/HOD-English.jpg",
    email: "knisha@bncollegebgp.ac.in"
  },
  {
    id: 8,
    name: "Dr. S. N. Yadav",
    role: "Professor & Head of Department",
    department: "Economics",
    education: "Ph.D., M.A.",
    image: "https://bncollegebgp.ac.in/wp-content/uploads/2022/07/HOD-Economics.jpg",
    email: "snyadav@bncollegebgp.ac.in"
  },
  {
    id: 9,
    name: "Dr. Sushil Kumar",
    role: "Professor",
    department: "History",
    education: "Ph.D., M.A.",
    image: "https://bncollegebgp.ac.in/wp-content/uploads/2022/07/HOD-History.jpg",
    email: "skumar@bncollegebgp.ac.in"
  },
  {
    id: 10,
    name: "Dr. L. K. Mishra",
    role: "Associate Professor",
    department: "Political Science",
    education: "Ph.D., M.A.",
    image: "https://bncollegebgp.ac.in/wp-content/uploads/2022/07/HOD-Pol-Science.jpg",
    email: "lkmishra@bncollegebgp.ac.in"
  },
  {
    id: 11,
    name: "Dr. A. K. Pandey",
    role: "Professor & Head",
    department: "Commerce",
    education: "Ph.D., M.Com.",
    image: "https://bncollegebgp.ac.in/wp-content/uploads/2022/07/HOD-Commerce.jpg",
    email: "akpandey@bncollegebgp.ac.in"
  },
  {
    id: 12,
    name: "Dr. Binod Kumar",
    role: "Associate Professor",
    department: "Computer Science",
    education: "Ph.D., MCA",
    image: "https://bncollegebgp.ac.in/wp-content/uploads/2022/07/HOD-Computer-Science.jpg",
    email: "bkumar@bncollegebgp.ac.in"
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
              Meet our distinguished faculty members who are experts in their fields and dedicated to academic excellence and student success.
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
              B.N. College takes pride in its highly qualified and dedicated faculty who are committed to academic excellence and student development. Our professors are actively engaged in teaching, research, and community service.
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
            <h2 className="text-3xl font-bold mb-4 text-college-blue">Our Academic Departments</h2>
            <div className="w-24 h-1 bg-college-gold mx-auto"></div>
            <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
              B.N. College offers a diverse range of academic programs through various departments staffed by experienced faculty who are committed to advancing knowledge and fostering excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Science */}
            <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in">
              <h3 className="text-xl font-bold mb-3 text-college-blue">Science</h3>
              <ul className="space-y-2 text-gray-600 mb-4">
                <li>• Physics Department</li>
                <li>• Chemistry Department</li>
                <li>• Botany Department</li>
                <li>• Zoology Department</li>
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
                <li>• Hindi Department</li>
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
                <li>• Business Administration Department</li>
                <li>• Economics Department</li>
                <li>• Accounting Department</li>
                <li>• Finance Department</li>
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
              Our faculty members have received numerous awards and recognition for their contributions to academia, research, and community service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in-left">
              <h3 className="text-xl font-bold mb-4 text-college-blue">Research & Publications</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-college-gold mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Over 300 research papers published in national and international journals</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-college-gold mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>20+ books authored by faculty in various disciplines</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-college-gold mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Regular participation in national and international conferences</span>
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
                  <span>Several faculty members recognized with national and state-level teaching awards</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-college-gold mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Multiple research grants secured from UGC, CSIR, and other funding agencies</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-college-gold mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Faculty members serving on boards of academic journals and professional bodies</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-college-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 animate-fade-in">Join Our Academic Community</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            B.N. College regularly recruits talented educators and researchers to join our faculty. Check current openings and application procedures.
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
