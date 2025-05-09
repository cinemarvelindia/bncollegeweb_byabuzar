
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Course types and data
type CourseLevel = 'UG' | 'PG' | 'Diploma';

interface Course {
  id: number;
  title: string;
  level: CourseLevel;
  department: string;
  duration: string;
  description: string;
  image: string;
}

const courseData: Course[] = [
  {
    id: 1,
    title: "Bachelor of Arts (B.A.)",
    level: "UG",
    department: "Arts",
    duration: "3 Years",
    description: "A comprehensive program covering literature, history, economics, political science, and sociology.",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3"
  },
  {
    id: 2,
    title: "Bachelor of Science (B.Sc.)",
    level: "UG",
    department: "Science",
    duration: "3 Years",
    description: "Rigorous program in physics, chemistry, mathematics, biology, and computer science.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3"
  },
  {
    id: 3,
    title: "Bachelor of Commerce (B.Com)",
    level: "UG",
    department: "Commerce",
    duration: "3 Years",
    description: "Study of accounting, finance, economics, business administration, and taxation.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3"
  },
  {
    id: 4,
    title: "Bachelor of Computer Applications (BCA)",
    level: "UG",
    department: "Computer Science",
    duration: "3 Years",
    description: "Program focused on computer applications, programming, web development, and IT systems.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3"
  },
  {
    id: 5,
    title: "Master of Arts (M.A.)",
    level: "PG",
    department: "Arts",
    duration: "2 Years",
    description: "Advanced study in literature, history, economics, political science, and sociology.",
    image: "https://images.unsplash.com/photo-1468779036391-52341f60b55d?ixlib=rb-4.0.3"
  },
  {
    id: 6,
    title: "Master of Science (M.Sc.)",
    level: "PG",
    department: "Science",
    duration: "2 Years",
    description: "Specialized study in physics, chemistry, mathematics, biology, and computer science.",
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3"
  },
  {
    id: 7,
    title: "Master of Commerce (M.Com)",
    level: "PG",
    department: "Commerce",
    duration: "2 Years",
    description: "Advanced study in accounting, finance, economics, and business administration.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3"
  },
  {
    id: 8,
    title: "Diploma in Computer Applications",
    level: "Diploma",
    department: "Computer Science",
    duration: "1 Year",
    description: "Practical training in computer applications, office tools, and basic programming.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3"
  },
  {
    id: 9,
    title: "Diploma in Business Management",
    level: "Diploma",
    department: "Commerce",
    duration: "1 Year",
    description: "Focused program on business management, entrepreneurship, and administration.",
    image: "https://images.unsplash.com/photo-1590650046871-92c887180603?ixlib=rb-4.0.3"
  },
];

const Courses = () => {
  const [activeFilter, setActiveFilter] = useState<CourseLevel | 'All'>('All');
  const [filteredCourses, setFilteredCourses] = useState<Course[]>(courseData);
  
  // Filter courses based on selected level
  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredCourses(courseData);
    } else {
      setFilteredCourses(courseData.filter(course => course.level === activeFilter));
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Academic Programs</h1>
            <p className="text-xl opacity-90 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Explore our diverse range of undergraduate and postgraduate programs designed to prepare you for success.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" fill="#ffffff">
            <path fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Course Listings */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-college-blue heading-underline mx-auto w-fit">Exploring Our Programs</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              At Bhagalpur National College, we offer a wide range of courses designed to cater to diverse interests and career aspirations. Our programs are regularly updated to meet industry standards and academic requirements.
            </p>
            
            {/* Course Filters */}
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              <button 
                className={`px-6 py-2 rounded-full transition-colors ${activeFilter === 'All' ? 'bg-college-blue text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                onClick={() => setActiveFilter('All')}
              >
                All Programs
              </button>
              <button 
                className={`px-6 py-2 rounded-full transition-colors ${activeFilter === 'UG' ? 'bg-college-blue text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                onClick={() => setActiveFilter('UG')}
              >
                Undergraduate
              </button>
              <button 
                className={`px-6 py-2 rounded-full transition-colors ${activeFilter === 'PG' ? 'bg-college-blue text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                onClick={() => setActiveFilter('PG')}
              >
                Postgraduate
              </button>
              <button 
                className={`px-6 py-2 rounded-full transition-colors ${activeFilter === 'Diploma' ? 'bg-college-blue text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                onClick={() => setActiveFilter('Diploma')}
              >
                Diploma
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden card-hover animate-fade-in">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="bg-college-blue text-white px-3 py-1 text-sm rounded-full">
                      {course.level === 'UG' ? 'Undergraduate' : course.level === 'PG' ? 'Postgraduate' : 'Diploma'}
                    </span>
                    <span className="text-gray-500 text-sm">{course.duration}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-college-blue">{course.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{course.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">{course.department} Department</span>
                    <button className="text-college-blue hover:text-college-gold transition-colors font-medium">
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* No courses found message */}
          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No courses found for the selected filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Academic Resources */}
      <section className="bg-gray-50 section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-college-blue">Academic Resources</h2>
            <div className="w-24 h-1 bg-college-gold mx-auto"></div>
            <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
              Our college provides excellent resources to support your academic journey and enhance your learning experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Library */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow animate-fade-in">
              <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mb-4 mx-auto text-college-blue">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-college-blue">Library</h3>
              <p className="text-gray-600">
                Extensive collection of books, journals, and digital resources.
              </p>
            </div>
            
            {/* Laboratories */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mb-4 mx-auto text-college-blue">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-college-blue">Laboratories</h3>
              <p className="text-gray-600">
                State-of-the-art labs for science, computer, and language studies.
              </p>
            </div>
            
            {/* Digital Resources */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mb-4 mx-auto text-college-blue">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-college-blue">Digital Resources</h3>
              <p className="text-gray-600">
                Online databases, e-journals, and digital learning platforms.
              </p>
            </div>
            
            {/* Research Center */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mb-4 mx-auto text-college-blue">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-college-blue">Research Center</h3>
              <p className="text-gray-600">
                Dedicated facilities for research and innovation projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Admission CTA */}
      <section className="bg-college-blue text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-8 md:mb-0 animate-fade-in-left">
              <h2 className="text-3xl font-bold mb-4">Ready to Apply?</h2>
              <p className="text-lg opacity-90">
                Take the first step towards a successful career by applying to your preferred program at Bhagalpur National College.
              </p>
            </div>
            <div className="flex gap-4 animate-fade-in-right">
              <Link to="/admissions" className="btn-gold">
                Apply Now
              </Link>
              <Link to="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-college-blue">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
