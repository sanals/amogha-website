import React, { useState } from 'react';

interface ContactFormProps {
  className?: string;
  onSubmit?: (formData: FormData) => void;
  showTitle?: boolean;
}

export interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  className = '',
  onSubmit,
  showTitle = true
}) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }
    
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    // Call the onSubmit callback if provided
    if (onSubmit) {
      onSubmit(formData);
    } else {
      // Default behavior if no onSubmit provided
      console.log('Form submitted:', formData);
    }
    
    // Show success message
    setIsSubmitted(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <div className={`bg-white dark:bg-neutral-dark p-8 rounded-lg shadow-md ${className}`}>
      {showTitle && (
        <h2 className="text-2xl font-serif font-bold text-primary dark:text-primary-light mb-6">
          Send Us a Message
        </h2>
      )}
      
      {isSubmitted ? (
        <div className="p-6 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-100 rounded-md">
          <h3 className="text-lg font-medium mb-2">Thank you for contacting us!</h3>
          <p>We have received your message and will get back to you soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-neutral-darker dark:text-neutral-light mb-1">
              Full Name*
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-md border ${
                formErrors.name 
                  ? 'border-red-500 dark:border-red-400' 
                  : 'border-neutral-light dark:border-neutral-dark'
              } bg-white dark:bg-neutral-darker focus:outline-none focus:ring-2 focus:ring-primary`}
            />
            {formErrors.name && (
              <p className="mt-1 text-red-600 dark:text-red-400 text-sm">{formErrors.name}</p>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-neutral-darker dark:text-neutral-light mb-1">
                Email Address*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-md border ${
                  formErrors.email 
                    ? 'border-red-500 dark:border-red-400' 
                    : 'border-neutral-light dark:border-neutral-dark'
                } bg-white dark:bg-neutral-darker focus:outline-none focus:ring-2 focus:ring-primary`}
              />
              {formErrors.email && (
                <p className="mt-1 text-red-600 dark:text-red-400 text-sm">{formErrors.email}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-neutral-darker dark:text-neutral-light mb-1">
                Phone Number*
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-md border ${
                  formErrors.phone 
                    ? 'border-red-500 dark:border-red-400' 
                    : 'border-neutral-light dark:border-neutral-dark'
                } bg-white dark:bg-neutral-darker focus:outline-none focus:ring-2 focus:ring-primary`}
              />
              {formErrors.phone && (
                <p className="mt-1 text-red-600 dark:text-red-400 text-sm">{formErrors.phone}</p>
              )}
            </div>
          </div>
          
          <div>
            <label htmlFor="subject" className="block text-neutral-darker dark:text-neutral-light mb-1">
              Subject
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border border-neutral-light dark:border-neutral-dark bg-white dark:bg-neutral-darker focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">Select a subject</option>
              <option value="General Inquiry">General Inquiry</option>
              <option value="Appointment Booking">Appointment Booking</option>
              <option value="Treatment Information">Treatment Information</option>
              <option value="Feedback">Feedback</option>
              <option value="Other">Other</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-neutral-darker dark:text-neutral-light mb-1">
              Message*
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className={`w-full px-4 py-2 rounded-md border ${
                formErrors.message 
                  ? 'border-red-500 dark:border-red-400' 
                  : 'border-neutral-light dark:border-neutral-dark'
              } bg-white dark:bg-neutral-darker focus:outline-none focus:ring-2 focus:ring-primary`}
            ></textarea>
            {formErrors.message && (
              <p className="mt-1 text-red-600 dark:text-red-400 text-sm">{formErrors.message}</p>
            )}
          </div>
          
          <button
            type="submit"
            className="w-full py-3 px-4 bg-primary hover:bg-primary-dark text-white rounded-md transition-colors duration-300 font-medium"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  );
}; 