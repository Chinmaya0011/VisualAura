import React, { useEffect } from 'react';
import { useNewsletterContext } from '../context/NewsletterContext';

const GetAllNewsletterPage = () => {
  // Destructure context values
  const { subscribers, loading, error, fetchSubscribers } = useNewsletterContext();

  // Fetch subscribers when component mounts
  useEffect(() => {
    fetchSubscribers();
  }, [fetchSubscribers]);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Newsletter Subscribers</h1>
        
        {/* Loading state */}
        {loading && <p className="text-center text-blue-500">Loading subscribers...</p>}
        
        {/* Error message */}
        {error && <p className="text-center text-red-500">{error}</p>}
        
        {/* Subscribers list */}
        {!loading && !error && subscribers.length > 0 ? (
          <ul className="space-y-4">
            {subscribers.map((subscriber) => (
              <li key={subscriber._id} className="p-4 border border-gray-200 rounded-md shadow-md flex justify-between items-center">
                <div>
                  <p className="text-lg font-medium text-gray-800">{subscriber.email}</p>
                  <p className="text-sm text-gray-500">
                    Subscribed on: {new Date(subscriber.subscribedAt).toLocaleDateString()}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          !loading && !error && <p className="text-center text-gray-500">No subscribers found.</p>
        )}
      </div>
    </div>
  );
};

export default GetAllNewsletterPage;
