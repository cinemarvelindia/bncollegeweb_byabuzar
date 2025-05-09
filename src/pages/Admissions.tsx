
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowRight } from 'lucide-react';

const Admissions = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Admissions</h1>
            <p className="text-xl opacity-90 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Begin your journey with Bhagalpur National College and unlock a world of opportunities.
            </p>
            <div className="mt-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button className="bg-college-gold hover:bg-amber-600 text-white">Apply Now</Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" fill="#ffffff">
            <path fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Admission Process */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-college-blue">Admission Process</h2>
            <div className="w-24 h-1 bg-college-gold mx-auto"></div>
            <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
              Our admissions process is designed to be straightforward and transparent. Follow these steps to join our vibrant academic community.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-5 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-college-blue"></div>
              
              {/* Step 1 */}
              <div className="relative flex flex-col md:flex-row items-center mb-12">
                <div className="flex-1 md:text-right md:pr-12 order-2 md:order-1 mt-6 md:mt-0 animate-fade-in-left">
                  <h3 className="text-2xl font-bold mb-2 text-college-blue">1. Online Application</h3>
                  <p className="text-gray-600">
                    Complete the online application form with your personal and academic details. Make sure to provide accurate information.
                  </p>
                </div>
                <div className="relative z-10 order-1 md:order-2 animate-scale-in">
                  <div className="w-10 h-10 bg-college-gold text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">1</div>
                </div>
                <div className="flex-1 md:pl-12 order-3 hidden md:block"></div>
              </div>
              
              {/* Step 2 */}
              <div className="relative flex flex-col md:flex-row items-center mb-12">
                <div className="flex-1 md:pr-12 order-2 md:order-1 hidden md:block"></div>
                <div className="relative z-10 order-1 md:order-2 animate-scale-in" style={{ animationDelay: '0.2s' }}>
                  <div className="w-10 h-10 bg-college-gold text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">2</div>
                </div>
                <div className="flex-1 md:pl-12 order-3 mt-6 md:mt-0 animate-fade-in-right">
                  <h3 className="text-2xl font-bold mb-2 text-college-blue">2. Document Submission</h3>
                  <p className="text-gray-600">
                    Upload required documents including previous academic records, identification proof, and passport-sized photographs.
                  </p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="relative flex flex-col md:flex-row items-center mb-12">
                <div className="flex-1 md:text-right md:pr-12 order-2 md:order-1 mt-6 md:mt-0 animate-fade-in-left">
                  <h3 className="text-2xl font-bold mb-2 text-college-blue">3. Application Fee Payment</h3>
                  <p className="text-gray-600">
                    Pay the non-refundable application fee through our secure online payment gateway.
                  </p>
                </div>
                <div className="relative z-10 order-1 md:order-2 animate-scale-in" style={{ animationDelay: '0.4s' }}>
                  <div className="w-10 h-10 bg-college-gold text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">3</div>
                </div>
                <div className="flex-1 md:pl-12 order-3 hidden md:block"></div>
              </div>
              
              {/* Step 4 */}
              <div className="relative flex flex-col md:flex-row items-center mb-12">
                <div className="flex-1 md:pr-12 order-2 md:order-1 hidden md:block"></div>
                <div className="relative z-10 order-1 md:order-2 animate-scale-in" style={{ animationDelay: '0.6s' }}>
                  <div className="w-10 h-10 bg-college-gold text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">4</div>
                </div>
                <div className="flex-1 md:pl-12 order-3 mt-6 md:mt-0 animate-fade-in-right">
                  <h3 className="text-2xl font-bold mb-2 text-college-blue">4. Entrance Test/Interview</h3>
                  <p className="text-gray-600">
                    Depending on the program, you may be required to take an entrance test or attend an interview.
                  </p>
                </div>
              </div>
              
              {/* Step 5 */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="flex-1 md:text-right md:pr-12 order-2 md:order-1 mt-6 md:mt-0 animate-fade-in-left">
                  <h3 className="text-2xl font-bold mb-2 text-college-blue">5. Admission Confirmation</h3>
                  <p className="text-gray-600">
                    Selected candidates will receive an offer letter. Complete the admission by paying the tuition fee.
                  </p>
                </div>
                <div className="relative z-10 order-1 md:order-2 animate-scale-in" style={{ animationDelay: '0.8s' }}>
                  <div className="w-10 h-10 bg-college-gold text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">5</div>
                </div>
                <div className="flex-1 md:pl-12 order-3 hidden md:block"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility and Programs */}
      <section className="bg-gray-50 section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-college-blue">Eligibility & Programs</h2>
            <div className="w-24 h-1 bg-college-gold mx-auto"></div>
            <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
              Explore our program offerings and their eligibility requirements.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="undergraduate" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="undergraduate">Undergraduate</TabsTrigger>
                <TabsTrigger value="postgraduate">Postgraduate</TabsTrigger>
                <TabsTrigger value="diploma">Diploma</TabsTrigger>
              </TabsList>
              <TabsContent value="undergraduate" className="mt-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-4 text-college-blue">Undergraduate Programs</h3>
                  
                  <div className="space-y-4">
                    <div className="border-b pb-4">
                      <h4 className="font-bold text-lg mb-2">Bachelor of Arts (B.A.)</h4>
                      <p className="text-gray-600 mb-2">Eligibility: 10+2 with minimum 50% marks in aggregate</p>
                      <p className="text-gray-600">Duration: 3 Years</p>
                    </div>
                    
                    <div className="border-b pb-4">
                      <h4 className="font-bold text-lg mb-2">Bachelor of Science (B.Sc.)</h4>
                      <p className="text-gray-600 mb-2">Eligibility: 10+2 with minimum 50% marks in Science subjects</p>
                      <p className="text-gray-600">Duration: 3 Years</p>
                    </div>
                    
                    <div className="border-b pb-4">
                      <h4 className="font-bold text-lg mb-2">Bachelor of Commerce (B.Com)</h4>
                      <p className="text-gray-600 mb-2">Eligibility: 10+2 with minimum 50% marks in Commerce or equivalent</p>
                      <p className="text-gray-600">Duration: 3 Years</p>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-lg mb-2">Bachelor of Computer Applications (BCA)</h4>
                      <p className="text-gray-600 mb-2">Eligibility: 10+2 with minimum 50% marks, Mathematics as a subject</p>
                      <p className="text-gray-600">Duration: 3 Years</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="postgraduate" className="mt-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-4 text-college-blue">Postgraduate Programs</h3>
                  
                  <div className="space-y-4">
                    <div className="border-b pb-4">
                      <h4 className="font-bold text-lg mb-2">Master of Arts (M.A.)</h4>
                      <p className="text-gray-600 mb-2">Eligibility: Bachelor's degree with minimum 55% marks in relevant subject</p>
                      <p className="text-gray-600">Duration: 2 Years</p>
                    </div>
                    
                    <div className="border-b pb-4">
                      <h4 className="font-bold text-lg mb-2">Master of Science (M.Sc.)</h4>
                      <p className="text-gray-600 mb-2">Eligibility: Bachelor's degree in Science with minimum 55% marks</p>
                      <p className="text-gray-600">Duration: 2 Years</p>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-lg mb-2">Master of Commerce (M.Com)</h4>
                      <p className="text-gray-600 mb-2">Eligibility: Bachelor's degree in Commerce with minimum 55% marks</p>
                      <p className="text-gray-600">Duration: 2 Years</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="diploma" className="mt-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-4 text-college-blue">Diploma Programs</h3>
                  
                  <div className="space-y-4">
                    <div className="border-b pb-4">
                      <h4 className="font-bold text-lg mb-2">Diploma in Computer Applications</h4>
                      <p className="text-gray-600 mb-2">Eligibility: 10+2 in any discipline</p>
                      <p className="text-gray-600">Duration: 1 Year</p>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-lg mb-2">Diploma in Business Management</h4>
                      <p className="text-gray-600 mb-2">Eligibility: 10+2 in any discipline</p>
                      <p className="text-gray-600">Duration: 1 Year</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="mt-8 text-center">
              <Link to="/courses" className="btn-primary inline-flex items-center">
                View All Programs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-college-blue">Important Dates</h2>
            <div className="w-24 h-1 bg-college-gold mx-auto"></div>
            <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
              Mark these important dates for the admission process for the academic year 2023-24.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <table className="w-full">
              <thead className="bg-college-blue text-white">
                <tr>
                  <th className="py-4 px-6 text-left">Event</th>
                  <th className="py-4 px-6 text-left">Date</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-4 px-6 font-medium">Online Application Begins</td>
                  <td className="py-4 px-6">March 1, 2023</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="py-4 px-6 font-medium">Last Date for Application Submission</td>
                  <td className="py-4 px-6">April 15, 2023</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6 font-medium">Entrance Test (if applicable)</td>
                  <td className="py-4 px-6">April 25-30, 2023</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="py-4 px-6 font-medium">Interview Rounds</td>
                  <td className="py-4 px-6">May 5-10, 2023</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6 font-medium">First Merit List Announcement</td>
                  <td className="py-4 px-6">May 20, 2023</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="py-4 px-6 font-medium">Fee Payment for First Merit List</td>
                  <td className="py-4 px-6">May 21-30, 2023</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">Classes Begin</td>
                  <td className="py-4 px-6">July 1, 2023</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600 italic">* Dates are subject to change. Please check the website regularly for updates.</p>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="bg-gray-50 section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-college-blue">Fee Structure</h2>
            <div className="w-24 h-1 bg-college-gold mx-auto"></div>
            <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
              We strive to provide quality education at affordable fees. Below is the fee structure for various programs.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-6 text-college-blue">Undergraduate Programs</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* BA */}
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-bold text-lg mb-4">B.A.</h4>
                    <div className="text-3xl font-bold mb-2 text-college-blue">₹15,000</div>
                    <p className="text-gray-500 mb-4">Per Semester</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Tuition Fee</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Library Fee</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Examination Fee</span>
                      </li>
                    </ul>
                  </div>
                  
                  {/* BSc */}
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-bold text-lg mb-4">B.Sc.</h4>
                    <div className="text-3xl font-bold mb-2 text-college-blue">₹18,000</div>
                    <p className="text-gray-500 mb-4">Per Semester</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Tuition Fee</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Library Fee</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Laboratory Fee</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Examination Fee</span>
                      </li>
                    </ul>
                  </div>
                  
                  {/* BCom */}
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-bold text-lg mb-4">B.Com</h4>
                    <div className="text-3xl font-bold mb-2 text-college-blue">₹16,500</div>
                    <p className="text-gray-500 mb-4">Per Semester</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Tuition Fee</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Library Fee</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Examination Fee</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6">
                <h3 className="text-xl font-bold mb-6 text-college-blue">Postgraduate Programs</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* MA */}
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="font-bold text-lg mb-4">M.A.</h4>
                    <div className="text-3xl font-bold mb-2 text-college-blue">₹20,000</div>
                    <p className="text-gray-500 mb-4">Per Semester</p>
                  </div>
                  
                  {/* MSc */}
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="font-bold text-lg mb-4">M.Sc.</h4>
                    <div className="text-3xl font-bold mb-2 text-college-blue">₹22,000</div>
                    <p className="text-gray-500 mb-4">Per Semester</p>
                  </div>
                  
                  {/* MCom */}
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="font-bold text-lg mb-4">M.Com</h4>
                    <div className="text-3xl font-bold mb-2 text-college-blue">₹21,000</div>
                    <p className="text-gray-500 mb-4">Per Semester</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center text-gray-600">
              <p>* Additional one-time admission fee of ₹5,000 applicable for all programs.</p>
              <p>* Hostel and transportation fees are separate and optional.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-college-blue">Frequently Asked Questions</h2>
            <div className="w-24 h-1 bg-college-gold mx-auto"></div>
            <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
              Find answers to commonly asked questions about the admission process.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="bg-white rounded-lg shadow-md p-6">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left font-bold">
                  What are the documents required for admission?
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 text-gray-600 space-y-2">
                    <li>10th and 12th mark sheets and certificates</li>
                    <li>Transfer Certificate (TC) from last attended institution</li>
                    <li>Character Certificate</li>
                    <li>Migration Certificate (if applicable)</li>
                    <li>Caste Certificate (if applicable)</li>
                    <li>4 passport-sized photographs</li>
                    <li>Valid ID proof (Aadhar Card/Passport)</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-bold">
                  Is there a hostel facility available?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600">
                    Yes, we provide separate hostel facilities for boys and girls. The hostels are equipped with all necessary amenities including furnished rooms, mess, Wi-Fi, and 24-hour security. Hostel allocation is based on availability and distance from home.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-bold">
                  Are there any scholarships available?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600">
                    BNC offers various scholarships for meritorious students, economically challenged students, and sports achievers. These include:
                  </p>
                  <ul className="list-disc pl-5 text-gray-600 mt-2 space-y-1">
                    <li>Merit Scholarship (for students with 90% and above in qualifying exam)</li>
                    <li>Sports Scholarship (for state and national level players)</li>
                    <li>Financial Aid (based on economic background)</li>
                  </ul>
                  <p className="text-gray-600 mt-2">
                    Students can apply for these scholarships after admission through the student portal.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left font-bold">
                  How can I pay the application and tuition fees?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600">
                    Fees can be paid through multiple modes:
                  </p>
                  <ul className="list-disc pl-5 text-gray-600 mt-2 space-y-1">
                    <li>Online payment through the college portal (Debit Card/Credit Card/Net Banking)</li>
                    <li>Demand Draft in favor of "Bhagalpur National College" payable at Bhagalpur</li>
                    <li>Direct bank transfer to the college account</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left font-bold">
                  Is there a refund policy for fees paid?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600">
                    The college follows the UGC guidelines for fee refunds:
                  </p>
                  <ul className="list-disc pl-5 text-gray-600 mt-2 space-y-1">
                    <li>100% refund (minus processing fee) if withdrawal 15 days before session start</li>
                    <li>80% refund if withdrawal within 15 days before session start</li>
                    <li>50% refund if withdrawal within 15 days after session start</li>
                    <li>No refund if withdrawal after 15 days of session start</li>
                  </ul>
                  <p className="text-gray-600 mt-2">
                    The application fee is non-refundable under any circumstances.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Download Brochure */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-college-blue rounded-lg shadow-xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/5 bg-gradient-to-br from-college-blue to-college-lightBlue p-8 text-white flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">Download Our Brochure</h3>
                <p className="opacity-90 mb-6">
                  Get detailed information about our programs, facilities, faculty, and more in our comprehensive brochure.
                </p>
                <Button className="bg-white text-college-blue hover:bg-gray-100">
                  <span className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download Brochure
                  </span>
                </Button>
              </div>
              <div className="md:w-3/5 p-8 bg-white">
                <h3 className="text-xl font-bold mb-4 text-college-blue">Contact Admission Office</h3>
                <p className="text-gray-600 mb-6">
                  If you have any questions or need assistance with the admission process, our admission office is here to help.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 mt-1 mr-3 text-college-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-gray-600">admissions@bnc.edu</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 mt-1 mr-3 text-college-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-gray-600">+91 123 456 7890</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 mt-1 mr-3 text-college-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-gray-600">
                      Admission Office, Administrative Block<br />
                      Bhagalpur National College<br />
                      Bhagalpur, Bihar, 812001
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-college-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 animate-fade-in">Start Your Academic Journey Today</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Take the first step towards a bright future by applying to Bhagalpur National College.
          </p>
          <Button className="bg-college-gold hover:bg-amber-600 text-white animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Apply Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
