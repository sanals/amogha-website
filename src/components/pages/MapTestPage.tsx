import React, { useState } from 'react';
import SEO from '../../components/atoms/SEO';
import { Map } from '../molecules/Map';

const MapTestPage: React.FC = () => {
  const [apiKey, setApiKey] = useState('');
  const [showMap, setShowMap] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowMap(true);
  };

  return (
    <>
      <SEO 
        title="Map Test"
        description="Test the Google Maps integration for AMOGHA The Ayur Hub website."
        canonicalUrl="/map-test"
      />
      
      <div className="min-h-screen bg-neutral-light dark:bg-neutral-darker pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary dark:text-primary-light mb-8 text-center">
            Google Maps API Test
          </h1>
          
          <div className="max-w-2xl mx-auto bg-white dark:bg-neutral-dark p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-serif font-medium text-neutral-darker dark:text-neutral-light mb-4">
              Test Your Google Maps API Key
            </h2>
            
            <p className="text-neutral-dark dark:text-neutral-medium mb-6">
              To use Google Maps on your website, you need a valid API key. Enter your key below to test it.
            </p>
            
            <form onSubmit={handleSubmit} className="mb-6">
              <div className="mb-4">
                <label htmlFor="apiKey" className="block text-neutral-darker dark:text-neutral-light mb-2">
                  Google Maps API Key
                </label>
                <input
                  type="text"
                  id="apiKey"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  placeholder="Enter your Google Maps API key"
                  className="w-full px-4 py-2 rounded-md border border-neutral-light dark:border-neutral-dark bg-white dark:bg-neutral-darker focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="px-6 py-2 bg-primary hover:bg-primary-dark text-white rounded-md transition-colors duration-300"
              >
                Test API Key
              </button>
            </form>
            
            <div className="bg-neutral-light/50 dark:bg-neutral-darker/50 p-4 rounded-md">
              <h3 className="text-lg font-medium text-neutral-darker dark:text-neutral-light mb-2">
                How to get a Google Maps API Key:
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-neutral-dark dark:text-neutral-medium">
                <li>Go to the <a href="https://console.cloud.google.com/google/maps-apis/overview" target="_blank" rel="noopener noreferrer" className="text-primary dark:text-primary-light hover:underline">Google Maps Platform</a></li>
                <li>Create a new project or select an existing one</li>
                <li>Enable the "Maps JavaScript API"</li>
                <li>Create an API key in the "Credentials" section</li>
                <li>Restrict the API key to your domain for security</li>
              </ol>
            </div>
          </div>
          
          {showMap && (
            <div className="max-w-4xl mx-auto bg-white dark:bg-neutral-dark p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-serif font-medium text-neutral-darker dark:text-neutral-light mb-4">
                Map Preview
              </h2>
              
              <div className="mb-6">
                <Map 
                  apiKey={apiKey} 
                  height={400} 
                  center={{ lat: 12.9716, lng: 77.5946 }}
                  zoom={15}
                />
              </div>
              
              <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-md">
                <h3 className="text-lg font-medium text-green-800 dark:text-green-100 mb-2">
                  Using this API key in your application:
                </h3>
                <p className="text-green-700 dark:text-green-200 mb-2">
                  Replace <code className="bg-white dark:bg-neutral-darker px-2 py-1 rounded">YOUR_GOOGLE_MAPS_API_KEY</code> in the Map component with your actual API key.
                </p>
                <pre className="bg-white dark:bg-neutral-darker p-3 rounded-md overflow-x-auto">
                  <code className="text-sm text-neutral-darker dark:text-neutral-light">
{`// Create a .env file in the root of your project
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=${apiKey}

// Then in your Map component:
<Map apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || 'YOUR_GOOGLE_MAPS_API_KEY'} />
`}
                  </code>
                </pre>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MapTestPage; 