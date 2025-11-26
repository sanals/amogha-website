'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { pressData, PressArticle } from '../data/pressData';
import { motion } from 'framer-motion';
import SEO from '../components/atoms/SEO';

interface ArticlePageProps {
  params?: { slug: string };
}

const ArticlePage: React.FC<ArticlePageProps> = ({ params }) => {
  const router = useRouter();
  const slug = params?.slug || '';
  const [article, setArticle] = useState<PressArticle | undefined>();
  
  useEffect(() => {
    // Find the article that matches the slug
    const currentArticle = pressData.find(article => {
      // Extract the slug from the URL
      if (article.url && article.url.startsWith('/press/')) {
        const articleSlug = article.url.split('/').pop();
        return articleSlug === slug;
      }
      return false;
    });
    
    setArticle(currentArticle);
  }, [slug, router]);
  
  // If article not found, redirect to press page
  if (!article) {
    router.push('/press');
    return null;
  }
  
  return (
    <>
      <SEO 
        title={`${article.title}`}
        description={article.description}
        canonicalUrl={article.url}
      />
      
      <div className="bg-neutral-light dark:bg-neutral-darker min-h-screen">
        {/* Hero Section with Article Image */}
        <div className="relative h-[40vh] min-h-[300px] max-h-[500px] w-full overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={article.imageUrl} 
              alt={article.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20" />
          </div>
          
          <div className="container mx-auto px-4 h-full flex items-end relative z-10 pb-8">
            <div className="text-white max-w-3xl">
              <div className="flex items-center mb-4">
                <span className="bg-primary text-white text-sm py-1 px-3 rounded-full">
                  {article.type.charAt(0).toUpperCase() + article.type.slice(1)}
                </span>
                <span className="mx-3 text-sm opacity-70">{article.date}</span>
                <span className="text-sm opacity-70">Source: {article.source}</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">
                {article.title}
              </h1>
            </div>
          </div>
        </div>
        
        {/* Article Content */}
        <div className="container mx-auto px-4 py-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto bg-white dark:bg-neutral-dark rounded-lg shadow-md p-8"
          >
            <p className="text-xl text-gray-700 dark:text-neutral-light mb-8 leading-relaxed">
              {article.description}
            </p>
            
            {/* This is where the full article content would go. For now, we'll use placeholder text since we don't have full article content in the data. */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                At AMOGHA The Ayur Hub, we believe in the time-tested wisdom of Ayurveda combined with modern understanding to provide holistic healthcare solutions for contemporary challenges.
              </p>
              
              <p>
                Ayurveda, which translates to "knowledge of life," is one of the world's oldest holistic healing systems. Developed more than 3,000 years ago in India, it's based on the belief that health and wellness depend on a delicate balance between the mind, body, and spirit.
              </p>
              
              <h2>The Core Principles</h2>
              
              <p>
                The primary focus of Ayurvedic medicine is to promote good health, rather than fight disease. However, treatments may be recommended for specific health problems.
              </p>
              
              <p>
                According to Ayurvedic theory, everything in the universe – living or not – is connected. Good health is achieved when your mind, body, and spirit are in harmony with the universe. A disruption of this harmony can lead to poor health and sickness.
              </p>
              
              <h2>Our Approach</h2>
              
              <p>
                At AMOGHA, our experienced practitioners develop individualized treatment plans designed specifically for you. These might include:
              </p>
              
              <ul>
                <li>Specialized dietary recommendations</li>
                <li>Herbal remedies</li>
                <li>Panchakarma detoxification</li>
                <li>Massage therapy</li>
                <li>Meditation and yoga</li>
                <li>Lifestyle modifications</li>
              </ul>
              
              <p>
                By addressing the root cause of conditions rather than just treating symptoms, we help our patients achieve lasting wellness and balance.
              </p>
              
              <blockquote>
                "Ayurveda teaches us to cherish our innate nature—to love and honor who we are, not as what people think or tell us, but as ourselves." — Dr. Anand Sharma, Chief Ayurvedic Physician
              </blockquote>
            </div>
            
            {/* Article Footer */}
            <div className="border-t border-gray-200 dark:border-gray-700 mt-12 pt-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Published: {article.date}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Source: {article.source}
                  </p>
                </div>
                
                <div className="flex items-center gap-3">
                  <button className="rounded-full h-8 w-8 flex items-center justify-center bg-neutral-light dark:bg-neutral-dark hover:bg-primary-light/10 dark:hover:bg-primary-dark/20">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                  </button>
                  <button className="rounded-full h-8 w-8 flex items-center justify-center bg-neutral-light dark:bg-neutral-dark hover:bg-primary-light/10 dark:hover:bg-primary-dark/20">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Related Articles Section (could be added later) */}
          <div className="max-w-5xl mx-auto mt-16">
            <h2 className="text-2xl font-serif font-semibold text-primary dark:text-primary-light mb-8 text-center">
              More Articles
            </h2>
            
            <div className="text-center mt-8">
              <a 
                href="/press" 
                className="inline-block px-6 py-3 bg-primary hover:bg-primary-dark transition-colors text-white rounded-full font-medium"
              >
                View All Press & News
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticlePage; 