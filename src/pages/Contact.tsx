
import React, { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Thank you for your message! We will get back to you shortly.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Contact Us</h1>
            <p className="text-xl opacity-90 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Have questions? We're here to help. Reach out to us through any of our contact channels.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" fill="#ffffff">
            <path fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Email */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow animate-fade-in">
              <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mb-4 mx-auto text-college-blue">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-college-blue">Email Us</h3>
              <p className="text-gray-600 mb-2">We'll respond to your email within 24 hours</p>
              <a href="mailto:info@bnc.edu" className="text-college-blue hover:text-college-gold transition-colors font-medium">info@bnc.edu</a>
            </div>
            
            {/* Call */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mb-4 mx-auto text-college-blue">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-college-blue">Call Us</h3>
              <p className="text-gray-600 mb-2">Mon-Fri from 9:00 AM to 5:00 PM</p>
              <a href="tel:+911234567890" className="text-college-blue hover:text-college-gold transition-colors font-medium">+91 123 456 7890</a>
            </div>
            
            {/* Visit */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mb-4 mx-auto text-college-blue">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-college-blue">Visit Us</h3>
              <p className="text-gray-600 mb-2">Our campus is open for visitors</p>
              <address className="text-college-blue not-italic">
                123 University Road<br />
                Bhagalpur, Bihar 812001
              </address>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="bg-gray-50 section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-college-blue">Get in Touch</h2>
            <div className="w-24 h-1 bg-college-gold mx-auto"></div>
            <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Contact Form */}
            <div className="w-full lg:w-1/2 animate-fade-in-left">
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-bold mb-6 text-college-blue">Send us a Message</h3>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your phone"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Subject"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message"
                      rows={5}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-college-blue hover:bg-college-darkBlue text-white"
                  >
                    {isSubmitting ? 'Submitting...' : 'Send Message'}
                  </Button>
                </form>
              </div>
            </div>
            
            {/* Map */}
            <div className="w-full lg:w-1/2 animate-fade-in-right">
              <div className="bg-white rounded-lg shadow-md p-8 h-full">
                <h3 className="text-2xl font-bold mb-6 text-college-blue">Our Location</h3>
                <div className="rounded-lg overflow-hidden h-[400px] mb-6">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29301.97725038213!2d86.9662133!3d25.2557557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f049e976d4c35b%3A0x7138365483e8d4ef!2sBhagalpur%2C%20Bihar!5e0!3m2!1sen!2sin!4v1619507529513!5m2!1sen!2sin"
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy"
                  ></iframe>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Operating Hours</h4>
                  <div className="space-y-2 text-gray-600">
                    <p>
                      <span className="font-medium">Administrative Office:</span> Monday-Friday, 9:00 AM - 5:00 PM
                    </p>
                    <p>
                      <span className="font-medium">Admission Office:</span> Monday-Saturday, 9:00 AM - 4:00 PM
                    </p>
                    <p>
                      <span className="font-medium">Library:</span> Monday-Saturday, 8:00 AM - 8:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Departments Contact */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-college-blue">Department Contacts</h2>
            <div className="w-24 h-1 bg-college-gold mx-auto"></div>
            <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
              Reach out directly to specific departments for program-related inquiries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Admissions */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow animate-fade-in">
              <h3 className="text-xl font-bold mb-3 text-college-blue">Admissions Department</h3>
              <div className="space-y-3 text-gray-600">
                <p className="flex items-start">
                  <Mail className="w-5 h-5 mr-2 mt-1 text-college-gold" />
                  <span>admissions@bnc.edu</span>
                </p>
                <p className="flex items-start">
                  <Phone className="w-5 h-5 mr-2 mt-1 text-college-gold" />
                  <span>+91 123 456 7891</span>
                </p>
              </div>
            </div>
            
            {/* Finance */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-xl font-bold mb-3 text-college-blue">Finance Department</h3>
              <div className="space-y-3 text-gray-600">
                <p className="flex items-start">
                  <Mail className="w-5 h-5 mr-2 mt-1 text-college-gold" />
                  <span>finance@bnc.edu</span>
                </p>
                <p className="flex items-start">
                  <Phone className="w-5 h-5 mr-2 mt-1 text-college-gold" />
                  <span>+91 123 456 7892</span>
                </p>
              </div>
            </div>
            
            {/* Examination */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-xl font-bold mb-3 text-college-blue">Examination Cell</h3>
              <div className="space-y-3 text-gray-600">
                <p className="flex items-start">
                  <Mail className="w-5 h-5 mr-2 mt-1 text-college-gold" />
                  <span>exam@bnc.edu</span>
                </p>
                <p className="flex items-start">
                  <Phone className="w-5 h-5 mr-2 mt-1 text-college-gold" />
                  <span>+91 123 456 7893</span>
                </p>
              </div>
            </div>
            
            {/* Library */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <h3 className="text-xl font-bold mb-3 text-college-blue">Library</h3>
              <div className="space-y-3 text-gray-600">
                <p className="flex items-start">
                  <Mail className="w-5 h-5 mr-2 mt-1 text-college-gold" />
                  <span>library@bnc.edu</span>
                </p>
                <p className="flex items-start">
                  <Phone className="w-5 h-5 mr-2 mt-1 text-college-gold" />
                  <span>+91 123 456 7894</span>
                </p>
              </div>
            </div>
            
            {/* Placement */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <h3 className="text-xl font-bold mb-3 text-college-blue">Placement Cell</h3>
              <div className="space-y-3 text-gray-600">
                <p className="flex items-start">
                  <Mail className="w-5 h-5 mr-2 mt-1 text-college-gold" />
                  <span>placement@bnc.edu</span>
                </p>
                <p className="flex items-start">
                  <Phone className="w-5 h-5 mr-2 mt-1 text-college-gold" />
                  <span>+91 123 456 7895</span>
                </p>
              </div>
            </div>
            
            {/* Hostel */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: '1s' }}>
              <h3 className="text-xl font-bold mb-3 text-college-blue">Hostel Administration</h3>
              <div className="space-y-3 text-gray-600">
                <p className="flex items-start">
                  <Mail className="w-5 h-5 mr-2 mt-1 text-college-gold" />
                  <span>hostel@bnc.edu</span>
                </p>
                <p className="flex items-start">
                  <Phone className="w-5 h-5 mr-2 mt-1 text-college-gold" />
                  <span>+91 123 456 7896</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-college-blue">Frequently Asked Questions</h2>
              <div className="w-24 h-1 bg-college-gold mx-auto"></div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              {/* FAQ Item 1 */}
              <div className="mb-6 pb-6 border-b border-gray-200">
                <h3 className="text-xl font-bold mb-2 text-college-blue">What are the office hours for in-person visits?</h3>
                <p className="text-gray-600">
                  The administrative office is open Monday through Friday from 9:00 AM to 5:00 PM. The admission office has extended hours on Saturdays from 9:00 AM to 4:00 PM.
                </p>
              </div>
              
              {/* FAQ Item 2 */}
              <div className="mb-6 pb-6 border-b border-gray-200">
                <h3 className="text-xl font-bold mb-2 text-college-blue">How can I schedule a campus tour?</h3>
                <p className="text-gray-600">
                  Campus tours are available Monday through Friday at 10:00 AM and 2:00 PM. To schedule a tour, please call our admissions office or fill out the campus visit form on our website.
                </p>
              </div>
              
              {/* FAQ Item 3 */}
              <div>
                <h3 className="text-xl font-bold mb-2 text-college-blue">What is the typical response time for inquiries?</h3>
                <p className="text-gray-600">
                  We strive to respond to all email inquiries within 24-48 hours during business days. For urgent matters, we recommend calling our office directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-college-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 animate-fade-in">Connect With Us On Social Media</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Stay updated with the latest news, events, and announcements from Bhagalpur National College.
          </p>
          <div className="flex justify-center space-x-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <a href="#" className="text-white hover:text-college-gold transition-colors">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-white hover:text-college-gold transition-colors">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" className="text-white hover:text-college-gold transition-colors">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-white hover:text-college-gold transition-colors">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
