'use client';

import React from 'react';
import DocumentHead from '../head/DocumentHead';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogType?: string;
  ogImage?: string;
  canonicalUrl?: string;
  structuredData?: Record<string, any>;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  ogType = 'website',
  ogImage = '/logo512.png',
  canonicalUrl,
  structuredData
}) => {
  const siteUrl = 'http://trymyapp.lovestoblog.com'; // Replace with actual domain when deployed
  const fullCanonicalUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : undefined;
  const fullTitle = `${title} | AMOGHA The Ayur Hub`;
  const fullOgImage = `${siteUrl}${ogImage}`;
  
  // Inject structured data if provided
  React.useEffect(() => {
    if (structuredData) {
      // Look for existing script
      let script = document.querySelector('script[data-seo-structured-data]');
      
      if (script) {
        // Update existing script
        script.textContent = JSON.stringify(structuredData);
      } else {
        // Create new script
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        script.setAttribute('data-seo-structured-data', 'true');
        script.textContent = JSON.stringify(structuredData);
        document.head.appendChild(script);
      }
    }
    
    // Cleanup
    return () => {
      if (structuredData) {
        const script = document.querySelector('script[data-seo-structured-data]');
        if (script) {
          script.remove();
        }
      }
    };
  }, [structuredData]);
  
  // Additional meta tags as direct DOM manipulation for elements not handled by DocumentHead
  React.useEffect(() => {
    // Set Twitter card tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: fullOgImage }
    ];
    
    // Set Open Graph type
    const ogTypeMeta = { name: 'og:type', content: ogType };
    const ogSiteNameMeta = { name: 'og:site_name', content: 'AMOGHA The Ayur Hub' };
    
    // Helper to update meta tags
    const updateMetaTag = (metaInfo: { name: string; content: string }) => {
      let meta;
      
      if (metaInfo.name.startsWith('og:')) {
        meta = document.querySelector(`meta[property="${metaInfo.name}"]`);
        if (!meta) {
          meta = document.createElement('meta');
          meta.setAttribute('property', metaInfo.name);
          document.head.appendChild(meta);
        }
      } else {
        meta = document.querySelector(`meta[name="${metaInfo.name}"]`);
        if (!meta) {
          meta = document.createElement('meta');
          meta.setAttribute('name', metaInfo.name);
          document.head.appendChild(meta);
        }
      }
      
      meta.setAttribute('content', metaInfo.content);
    };
    
    // Apply all meta tags
    twitterTags.forEach(updateMetaTag);
    updateMetaTag(ogTypeMeta);
    updateMetaTag(ogSiteNameMeta);
    
    // Handle canonical URL separately to avoid TypeScript errors
    if (fullCanonicalUrl) {
      const ogUrlMeta = { name: 'og:url', content: fullCanonicalUrl };
      updateMetaTag(ogUrlMeta);
    }
    
  }, [title, description, ogType, fullOgImage, fullCanonicalUrl]);
  
  return (
    <DocumentHead
      title={fullTitle}
      description={description}
      keywords={keywords}
      canonicalUrl={fullCanonicalUrl}
      ogTitle={title}
      ogDescription={description}
      ogImage={fullOgImage}
    />
  );
};

export default SEO; 