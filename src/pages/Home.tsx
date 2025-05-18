
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-transition">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-college-darkBlue to-college-blue text-white py-20 md:py-32">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 md:pr-12 mb-10 md:mb-0 animate-fade-in-left">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
                Welcome to <span className="text-college-gold">B.N. College, Bhagalpur</span>
              </h1>
              <p className="text-lg md:text-xl mb-8">
                Empowering students with quality education and 
                building future leaders since 1889
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/admissions" className="btn-gold">
                  Apply Now
                </Link>
                <Link to="/courses" className="btn-outline border-white text-white hover:bg-white hover:text-college-blue">
                  Explore Courses
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2 animate-fade-in-right">
              <img 
                src="https://bncollegebgp.ac.in/userfiles/image/slider2.jpg"
                alt="B.N. College Bhagalpur campus"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" fill="#ffffff">
            <path fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Announcement Banner */}
      <div className="bg-yellow-100 py-3 px-4 text-center">
        <div className="container mx-auto">
          <p className="text-yellow-800 font-medium">
            <span className="font-bold">New Notice:</span> Admissions for the academic year 2023-24 are now open. 
            <a href="/admissions" className="underline ml-2 font-bold">Apply now!</a>
          </p>
        </div>
      </div>

      {/* About Preview Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Discover B.N. College, Bhagalpur</h2>
            <div className="w-24 h-1 bg-college-gold mx-auto"></div>
            <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
              Founded in 1889, we have a rich legacy of providing quality education for over 133 years. Our institution nurtures academic excellence and character development to prepare students for success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Vision */}
            <div className="bg-white p-6 rounded-lg shadow-md card-hover animate-fade-in">
              <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mb-4 text-college-blue">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-college-blue">Our Vision</h3>
              <p className="text-gray-600 mb-4">
                To be a premier institution recognized for academic excellence, innovative teaching methodologies, and holistic development of students.
              </p>
            </div>
            
            {/* Mission */}
            <div className="bg-white p-6 rounded-lg shadow-md card-hover animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mb-4 text-college-blue">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-college-blue">Our Mission</h3>
              <p className="text-gray-600 mb-4">
                To provide quality education that nurtures critical thinking, fosters innovation, and prepares students to meet global challenges.
              </p>
            </div>
            
            {/* Values */}
            <div className="bg-white p-6 rounded-lg shadow-md card-hover animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mb-4 text-college-blue">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-college-blue">Our Values</h3>
              <p className="text-gray-600 mb-4">
                Excellence, integrity, inclusivity, innovation and social responsibility guide our approach to education and community engagement.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/about" className="btn-primary inline-flex items-center">
              Learn More About Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Programs Highlights */}
      <section className="bg-gray-50 section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Academic Programs</h2>
            <div className="w-24 h-1 bg-college-gold mx-auto"></div>
            <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
              We offer a wide range of undergraduate and postgraduate programs designed to provide comprehensive knowledge and practical skills.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Program 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden card-hover animate-fade-in">
              <img 
                src="https://bncollegebgp.ac.in/userfiles/image/slider3.jpg" 
                alt="Science Programs"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-college-blue">Bachelor of Science (B.Sc.)</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive programs in Physics, Chemistry, Biology, Mathematics, and Computer Science with well-equipped laboratories.
                </p>
                <Link to="/courses" className="text-college-blue hover:text-college-gold transition-colors inline-flex items-center font-medium">
                  View Details
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            {/* Program 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden card-hover animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <img 
                src="https://bncollegebgp.ac.in/userfiles/slider6.jpg" 
                alt="Arts and Humanities"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-college-blue">Bachelor of Arts (B.A.)</h3>
                <p className="text-gray-600 mb-4">
                  Diverse programs in Literature, History, Economics, Philosophy, Political Science, Geography, and Psychology.
                </p>
                <Link to="/courses" className="text-college-blue hover:text-college-gold transition-colors inline-flex items-center font-medium">
                  View Details
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            {/* Program 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden card-hover animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <img 
                src="https://bncollegebgp.ac.in/userfiles/image/slider4.jpg" 
                alt="Commerce Programs"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-college-blue">Bachelor of Commerce (B.Com.)</h3>
                <p className="text-gray-600 mb-4">
                  Specialized courses in Accounting, Finance, Business Administration, Marketing, and Economics.
                </p>
                <Link to="/courses" className="text-college-blue hover:text-college-gold transition-colors inline-flex items-center font-medium">
                  View Details
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/courses" className="btn-primary">
              View All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics/Numbers Section */}
      <section className="bg-college-blue text-white py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">B.N. College By The Numbers</h2>
            <div className="w-24 h-1 bg-college-gold mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in">
              <div className="text-5xl md:text-6xl font-bold mb-2">133+</div>
              <div className="text-lg text-college-gold font-medium">Years of Excellence</div>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-5xl md:text-6xl font-bold mb-2">10K+</div>
              <div className="text-lg text-college-gold font-medium">Students</div>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-5xl md:text-6xl font-bold mb-2">100+</div>
              <div className="text-lg text-college-gold font-medium">Faculty Members</div>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="text-5xl md:text-6xl font-bold mb-2">25+</div>
              <div className="text-lg text-college-gold font-medium">Programs Offered</div>
            </div>
          </div>
        </div>
      </section>

      {/* News & Events */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest News & Events</h2>
            <div className="w-24 h-1 bg-college-gold mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden col-span-1 md:col-span-2">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-college-blue">Recent News</h3>
                <div className="space-y-6">
                  {/* News Item 1 */}
                  <div className="flex flex-col md:flex-row gap-4 pb-4 border-b">
                    <div className="md:w-1/4">
                      <img 
                        src="https://bncollegebgp.ac.in/userfiles/image/slider5.jpg" 
                        alt="News 1" 
                        className="w-full h-32 object-cover rounded"
                      />
                    </div>
                    <div className="md:w-3/4">
                      <div className="text-sm text-gray-500 mb-1">September 15, 2023</div>
                      <h4 className="text-lg font-bold text-college-blue mb-2">B.N. College Awarded NAAC 'A' Accreditation</h4>
                      <p className="text-gray-600 text-sm">The college has been awarded an 'A' grade by the National Assessment and Accreditation Council (NAAC) for its academic excellence and infrastructure.</p>
                    </div>
                  </div>
                  
                  {/* News Item 2 */}
                  <div className="flex flex-col md:flex-row gap-4 pb-4 border-b">
                    <div className="md:w-1/4">
                      <img 
                        src="https://bncollegebgp.ac.in/userfiles/image/slider1.jpg" 
                        alt="News 2" 
                        className="w-full h-32 object-cover rounded"
                      />
                    </div>
                    <div className="md:w-3/4">
                      <div className="text-sm text-gray-500 mb-1">August 28, 2023</div>
                      <h4 className="text-lg font-bold text-college-blue mb-2">College Signs MOU with Industry Partners</h4>
                      <p className="text-gray-600 text-sm">B.N. College has signed Memorandums of Understanding with leading industry partners to enhance employment opportunities for students.</p>
                    </div>
                  </div>
                  
                  {/* News Item 3 */}
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="md:w-1/4">
                      <img 
                        src="https://bncollegebgp.ac.in/userfiles/image/slider3.jpg" 
                        alt="News 3" 
                        className="w-full h-32 object-cover rounded"
                      />
                    </div>
                    <div className="md:w-3/4">
                      <div className="text-sm text-gray-500 mb-1">August 10, 2023</div>
                      <h4 className="text-lg font-bold text-college-blue mb-2">New Science Labs Inaugurated</h4>
                      <p className="text-gray-600 text-sm">State-of-the-art Physics and Chemistry laboratories were inaugurated to enhance the practical learning experience for science students.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-college-blue">Upcoming Events</h3>
                <div className="space-y-6">
                  {/* Event 1 */}
                  <div className="flex items-start gap-4">
                    <div className="bg-gray-100 rounded p-2 text-center min-w-[60px]">
                      <div className="text-xl font-bold text-college-blue">15</div>
                      <div className="text-xs text-gray-600">Oct</div>
                    </div>
                    <div>
                      <h4 className="font-bold text-college-blue">Annual Science Exhibition</h4>
                      <p className="text-sm text-gray-600">9:00 AM - 5:00 PM at Science Block</p>
                    </div>
                  </div>
                  
                  {/* Event 2 */}
                  <div className="flex items-start gap-4">
                    <div className="bg-gray-100 rounded p-2 text-center min-w-[60px]">
                      <div className="text-xl font-bold text-college-blue">22</div>
                      <div className="text-xs text-gray-600">Nov</div>
                    </div>
                    <div>
                      <h4 className="font-bold text-college-blue">Literature Festival</h4>
                      <p className="text-sm text-gray-600">10:00 AM - 4:00 PM at College Auditorium</p>
                    </div>
                  </div>
                  
                  {/* Event 3 */}
                  <div className="flex items-start gap-4">
                    <div className="bg-gray-100 rounded p-2 text-center min-w-[60px]">
                      <div className="text-xl font-bold text-college-blue">10</div>
                      <div className="text-xs text-gray-600">Dec</div>
                    </div>
                    <div>
                      <h4 className="font-bold text-college-blue">Career Counseling Workshop</h4>
                      <p className="text-sm text-gray-600">11:00 AM - 3:00 PM at Seminar Hall</p>
                    </div>
                  </div>
                  
                  {/* Event 4 */}
                  <div className="flex items-start gap-4">
                    <div className="bg-gray-100 rounded p-2 text-center min-w-[60px]">
                      <div className="text-xl font-bold text-college-blue">15</div>
                      <div className="text-xs text-gray-600">Jan</div>
                    </div>
                    <div>
                      <h4 className="font-bold text-college-blue">Annual Sports Meet</h4>
                      <p className="text-sm text-gray-600">8:00 AM - 6:00 PM at College Grounds</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <Link to="/events" className="text-college-blue hover:text-college-gold transition-colors inline-flex items-center font-medium">
                    View All Events
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="bg-gray-50 section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Campus Gallery</h2>
            <div className="w-24 h-1 bg-college-gold mx-auto"></div>
            <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
              Take a visual tour of our beautiful campus and facilities.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="overflow-hidden rounded-lg shadow-md">
              <img 
                src="https://bncollegebgp.ac.in/userfiles/image/slider2.jpg" 
                alt="Campus Image 1" 
                className="w-full h-48 object-cover transform transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-md">
              <img 
                src="https://bncollegebgp.ac.in/userfiles/slider6.jpg" 
                alt="Campus Image 2" 
                className="w-full h-48 object-cover transform transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-md">
              <img 
                src="https://bncollegebgp.ac.in/userfiles/image/slider3.jpg" 
                alt="Campus Image 3" 
                className="w-full h-48 object-cover transform transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-md">
              <img 
                src="https://bncollegebgp.ac.in/userfiles/image/slider4.jpg" 
                alt="Campus Image 4" 
                className="w-full h-48 object-cover transform transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/gallery" className="btn-primary">
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Students Say</h2>
            <div className="w-24 h-1 bg-college-gold mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80" 
                    alt="Student 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-college-blue">Priya Sharma</h4>
                  <p className="text-sm text-gray-600">B.Sc. Physics, Batch of 2022</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The faculty at B.N. College is exceptional. They not only focus on academic excellence but also encourage students to participate in research. The physics labs are well-equipped with modern instruments."
              </p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" 
                    alt="Student 2"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-college-blue">Rahul Kumar</h4>
                  <p className="text-sm text-gray-600">B.A. Economics, Batch of 2021</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "My journey at B.N. College has been transformative. The economics department exposed me to real-world applications. The college's focus on holistic development prepared me well for my career."
              </p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=461&q=80" 
                    alt="Student 3"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-college-blue">Anjali Singh</h4>
                  <p className="text-sm text-gray-600">B.Com., Batch of 2023</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The commerce department at B.N. College provides excellent theoretical knowledge and practical exposure. The various workshops and seminars helped me develop a strong professional network."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-college-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">Ready to Shape Your Future?</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Join B.N. College, Bhagalpur and become part of our prestigious legacy. Applications for the new academic session are now open.
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Link to="/admissions" className="btn-gold">
              Apply Now
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

export default Home;
