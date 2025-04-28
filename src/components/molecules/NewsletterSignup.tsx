import React, { useState } from 'react';

interface NewsletterSignupProps {
  className?: string;
}

export const NewsletterSignup: React.FC<NewsletterSignupProps> = ({
  className = '',
}) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple email validation
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }
    
    // Mock API call - in production, this would submit to an actual endpoint
    // For now, just simulate success
    setError('');
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail('');
    }, 3000);
  };

  return (
    <div className={`${className}`}>
      <h3 className="text-lg font-medium text-neutral-light mb-4">
        Newsletter Signup
      </h3>
      <p className="text-neutral-light mb-4">
        Subscribe to receive updates on new treatments and promotions.
      </p>
      
      {isSubmitted ? (
        <div className="p-3 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded-md">
          Thank you for subscribing!
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label htmlFor="email" className="sr-only">Email address</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full px-4 py-2 border border-neutral-light dark:border-neutral-dark rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-neutral-100 dark:bg-neutral-darker text-neutral-darker dark:text-neutral-light"
              required
            />
            {error && (
              <p className="mt-1 text-red-600 dark:text-red-400 text-sm">{error}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary-dark text-white py-2 px-4 rounded-md transition-colors duration-300"
          >
            Subscribe
          </button>
        </form>
      )}
    </div>
  );
}; 