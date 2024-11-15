import React, { useState } from 'react';
import { useNewsletterContext } from '../context/NewsletterContext'; // Assuming you are using context to manage state

const NewsletterSubscription = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { subscribeUser, successMessage, error } = useNewsletterContext(); // Use the subscribeUser function from context

  // Handle the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await subscribeUser(email);  // Subscribe the user
    setEmail(''); // Clear the input after submission
    setIsSubmitting(false);
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-8 mt-8">
      <h1 className="text-2xl font-bold text-center mb-4">Stay Updated!</h1>
      <p className="text-center mb-4">Subscribe to our newsletter to get the latest updates directly to your inbox.</p>
      
      {/* Form for subscribing */}
      <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="p-2 border border-gray-300 rounded-md w-64"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md w-64"
          disabled={isSubmitting} // Disable the button while submitting
        >
          {isSubmitting ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>

      {/* Success message */}
      {successMessage && <p className="mt-4 text-center text-green-500">{successMessage}</p>}

      {/* Error message */}
      {error && <p className="mt-4 text-center text-red-500">{error}</p>}
    </div>
  );
};

export default NewsletterSubscription;
