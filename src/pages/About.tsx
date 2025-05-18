
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">About B.N. College, Bhagalpur</h1>
            <p className="text-xl opacity-90 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              A premier institution committed to excellence in education since 1889
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" fill="#ffffff">
            <path fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* College History */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 animate-fade-in-left">
              <h2 className="text-3xl font-bold mb-6 text-college-blue heading-underline">Our Heritage</h2>
              <p className="text-gray-600 mb-4">
                Bhagalpur National College, fondly known as B.N. College, was established in 1889 during the British era. It stands as one of the oldest and most prestigious higher educational institutions in Bihar, with a rich legacy of over 133 years of academic excellence.
              </p>
              <p className="text-gray-600 mb-4">
                The college began its journey as a part of T.N.J College and later evolved into an independent institution. In 1954, it was incorporated into Tilka Manjhi Bhagalpur University (formerly Bhagalpur University), expanding its academic offerings and infrastructure.
              </p>
              <p className="text-gray-600">
                Over the decades, B.N. College has played a pivotal role in shaping the educational landscape of the region, producing countless leaders, scholars, and professionals who have made significant contributions to society in various fields.
              </p>
            </div>
            <div className="w-full md:w-1/2 animate-fade-in-right">
              <img 
                src="https://bncollegebgp.ac.in/userfiles/image/slider5.jpg" 
                alt="B.N. College historical building" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission & Vision</h2>
              <div className="w-24 h-1 bg-college-gold mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Mission */}
              <div className="bg-white p-8 rounded-lg shadow-md animate-fade-in">
                <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mb-6 mx-auto text-college-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-college-blue text-center">Our Mission</h3>
                <p className="text-gray-600 text-center">
                  To provide quality education that nurtures critical thinking, fosters innovation, and prepares students to meet global challenges with confidence and integrity.
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-college-gold mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Deliver excellence in teaching and learning</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-college-gold mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Promote research and innovation</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-college-gold mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Foster holistic development of students</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-college-gold mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Contribute to community development</span>
                  </li>
                </ul>
              </div>
              
              {/* Vision */}
              <div className="bg-white p-8 rounded-lg shadow-md animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mb-6 mx-auto text-college-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-college-blue text-center">Our Vision</h3>
                <p className="text-gray-600 text-center">
                  To be a premier institution recognized for academic excellence, innovative teaching methodologies, and holistic development of students who contribute meaningfully to society.
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-college-gold mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Become a center of excellence in education</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-college-gold mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Achieve NAAC A+ accreditation and autonomy</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-college-gold mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Develop industry-ready graduates</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-college-gold mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Foster a culture of innovation and research</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Message from Principal */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-2/5 bg-college-blue">
                <div className="h-full flex flex-col justify-center items-center p-8 text-center">
                  <img 
                    src="https://bncollegebgp.ac.in/userfiles/Principal.jpg" 
                    alt="Principal" 
                    className="w-40 h-40 object-cover rounded-full border-4 border-white shadow-lg animate-fade-in"
                  />
                  <h3 className="text-2xl font-bold text-white mt-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>Dr. Ajay Nath Jha</h3>
                  <p className="text-lg text-college-gold animate-fade-in" style={{ animationDelay: '0.3s' }}>Principal</p>
                </div>
              </div>
              <div className="w-full md:w-3/5 p-8 md:p-12 animate-fade-in-right">
                <h2 className="text-3xl font-bold mb-6 text-college-blue heading-underline">Message from the Principal</h2>
                <blockquote className="text-gray-600 italic">
                  <p className="mb-4">
                    "It is with great pride that I welcome you to B.N. College, Bhagalpur, an institution with a rich tradition of academic excellence and holistic education. Since 1889, our college has been nurturing generations of students into well-rounded individuals.
                  </p>
                  <p className="mb-4">
                    Our mission is to provide a supportive and challenging environment where students can discover their potential and develop the knowledge, skills, and values necessary for lifelong success. We are committed to fostering critical thinking, creativity, and a strong sense of social responsibility.
                  </p>
                  <p>
                    I invite you to explore our website and learn more about the exceptional educational opportunities available at B.N. College. Join us on this exciting journey of discovery and growth as we continue our legacy of excellence."
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-gray-50 section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <div className="w-24 h-1 bg-college-gold mx-auto"></div>
            <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
              These values guide our approach to education and shape the learning experience at B.N. College, Bhagalpur.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Value 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center card-hover animate-fade-in">
              <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mb-4 mx-auto text-college-blue">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-college-blue">Excellence</h3>
              <p className="text-gray-600">
                We strive for the highest standards in teaching, research, and all aspects of our operations.
              </p>
            </div>
            
            {/* Value 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center card-hover animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mb-4 mx-auto text-college-blue">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-college-blue">Integrity</h3>
              <p className="text-gray-600">
                We uphold high ethical standards, transparency, and accountability in all our endeavors.
              </p>
            </div>
            
            {/* Value 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center card-hover animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mb-4 mx-auto text-college-blue">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-college-blue">Inclusivity</h3>
              <p className="text-gray-600">
                We embrace diversity and create an environment where everyone feels respected and valued.
              </p>
            </div>
            
            {/* Value 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center card-hover animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mb-4 mx-auto text-college-blue">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-college-blue">Innovation</h3>
              <p className="text-gray-600">
                We encourage creative thinking, novel approaches, and continuous improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-college-blue">Our Infrastructure</h2>
            <div className="w-24 h-1 bg-college-gold mx-auto"></div>
            <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
              B.N. College is equipped with modern facilities and infrastructure to provide an optimal learning environment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Facility 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden card-hover animate-fade-in">
              <img 
                src="https://bncollegebgp.ac.in/userfiles/image/slider2.jpg" 
                alt="College Main Building" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-college-blue">Academic Buildings</h3>
                <p className="text-gray-600">
                  Modern classrooms, well-equipped laboratories, and specialized facilities for different departments support our academic programs.
                </p>
              </div>
            </div>
            
            {/* Facility 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden card-hover animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <img 
                src="https://bncollegebgp.ac.in/userfiles/slider6.jpg" 
                alt="College Library" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-college-blue">Central Library</h3>
                <p className="text-gray-600">
                  Our extensive library houses over 100,000 books, journals, and digital resources, providing students with rich academic resources.
                </p>
              </div>
            </div>
            
            {/* Facility 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden card-hover animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <img 
                src="https://bncollegebgp.ac.in/userfiles/image/slider3.jpg" 
                alt="Sports Facilities" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-college-blue">Sports Facilities</h3>
                <p className="text-gray-600">
                  Comprehensive sports facilities including grounds for cricket, football, basketball courts, and indoor game facilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-college-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">Begin Your Journey with Us</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Take the first step towards a bright future by joining our vibrant academic community.
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Link to="/admissions" className="btn-gold">
              Apply for Admission
            </Link>
            <Link to="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-college-blue">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
