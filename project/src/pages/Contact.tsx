import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const form = e.currentTarget;
    const formDataToSend = new FormData(form);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitting(false);
        setIsSubmitted(true);

        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });

        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        throw new Error(data.message || 'Form submission failed');
      }
    } catch (err) {
      console.error('Failed to send message:', err);
      setIsSubmitting(false);
      setError('Failed to submit the form. Please try again later.');
    }
  };

  return (
    <div className="py-12">
      <Helmet>
        <title>Contact Us - Shree Vinayak Fabrics</title>
        <meta name="description" content="Visit our shop in Chembur, Mumbai or contact us for wholesale fabric inquiries. Get a quote today." />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with us for any inquiries about our products or to request
            wholesale pricing information.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8 border border-gray-200 flex flex-col">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-4 sm:mb-6">
              Contact Information
            </h2>
            <div className="space-y-4 sm:space-y-6 flex-grow">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Address</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Bhimwadi Rahiwasi Sangh, Lal Dongar Rd,<br />
                  near Sindhi Society, Suman Nagar,<br />
                  Chembur, Mumbai, Maharashtra 400071<br />
                  India
                </p>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600 text-sm sm:text-base">+91 9076699515</p>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600 text-sm sm:text-base">shreevinayak515@gmail.com</p>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  Business Hours
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Monday: 10:00 AM - 7:00 PM<br />
                  Tuesday: 10:00 AM - 7:00 PM<br />
                  Wednesday: 10:00 AM - 7:00 PM<br />
                  Thursday: 10:00 AM - 7:00 PM<br />
                  Friday: 10:00 AM - 7:00 PM<br />
                  Saturday: 10:00 AM - 7:00 PM<br />
                  Sunday: Closed

                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8 border border-gray-200 flex flex-col">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-4 sm:mb-6">
              Send us a Message
            </h2>

            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-md p-6 text-center flex-grow flex flex-col justify-center">
                <div className="flex items-center justify-center mb-4">
                  <svg className="h-16 w-16 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h3>
                <p className="text-green-700 font-medium text-lg mb-2">
                  Your message has been sent successfully.
                </p>
                <p className="text-gray-600">
                  We'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 flex-grow flex flex-col">
                <input type="hidden" name="access_key" value={import.meta.env.VITE_WEB3FORMS_ACCESS_KEY} />
                <input type="hidden" name="subject" value="New Contact Message - Shree Vinayak" />
                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-md p-3 sm:p-4">
                    <p className="text-red-600 text-sm sm:text-base">{error}</p>
                  </div>
                )}

                <div>
                  <label className="block text-sm sm:text-base font-medium text-gray-700 mb-1.5 sm:mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 sm:px-4 sm:py-2.5 text-sm sm:text-base rounded-md border-2 border-gray-400 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm sm:text-base font-medium text-gray-700 mb-1.5 sm:mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 sm:px-4 sm:py-2.5 text-sm sm:text-base rounded-md border-2 border-gray-400 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm sm:text-base font-medium text-gray-700 mb-1.5 sm:mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 sm:px-4 sm:py-2.5 text-sm sm:text-base rounded-md border-2 border-gray-400 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>
                <div className="flex-grow flex flex-col">
                  <label className="block text-sm sm:text-base font-medium text-gray-700 mb-1.5 sm:mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 py-2 sm:px-4 sm:py-2.5 text-sm sm:text-base rounded-md border-2 border-gray-400 shadow-sm focus:border-primary-500 focus:ring-primary-500 flex-grow"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`mt-auto text-white px-6 py-2.5 sm:px-8 sm:py-3 text-base sm:text-lg rounded-lg transition-colors w-full font-semibold ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-primary-500 hover:bg-primary-600'
                    }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Google Maps Embed - Centered Below */}
        <div className="max-w-4xl mx-auto">
          <div className="rounded-lg overflow-hidden shadow-md border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.3702211148097!2d72.887198!3d19.0474534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9436937996b%3A0xe666f0441a04e85b!2sShree%20Vinayak%20Velvet%20and%20Fancy%20Fabrics!5e0!3m2!1sen!2sin!4v1745002205469!5m2!1sen!2sin"
              width="100%"
              height="400px"
              style={{ border: 0 }}
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="Shree Vinayak Location"
              className="w-full h-64 sm:h-80 md:h-96 lg:h-[400px]"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}