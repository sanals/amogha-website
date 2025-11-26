'use client';

import React, { useEffect } from 'react';

interface DocumentHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  structuredData?: Record<string, any>;
  children?: React.ReactNode;
}

/**
 * A component to manage document head elements without using deprecated lifecycle methods
 */
const DocumentHead: React.FC<DocumentHeadProps> = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogTitle,
  ogDescription,
  ogImage,
  structuredData,
  children
}) => {
  // Handle title and meta tags
  useEffect(() => {
    // Update document title
    if (title) {
      document.title = title;
    }

    // Update meta tags
    const updateMetaTag = (name: string, content?: string) => {
      if (!content) return;

      // Try to find existing meta tag
      let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      
      // For Open Graph tags
      if (!meta && name.startsWith('og:')) {
        meta = document.querySelector(`meta[property="${name}"]`) as HTMLMetaElement;
      }
      
      if (meta) {
        // Update existing tag
        meta.content = content;
      } else {
        // Create new tag
        meta = document.createElement('meta');
        if (name.startsWith('og:')) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        meta.content = content;
        document.head.appendChild(meta);
      }
    };

    // Update canonical link
    if (canonicalUrl) {
      let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (canonicalLink) {
        canonicalLink.href = canonicalUrl;
      } else {
        canonicalLink = document.createElement('link');
        canonicalLink.rel = 'canonical';
        canonicalLink.href = canonicalUrl;
        document.head.appendChild(canonicalLink);
      }
    }

    // Update description, keywords, and Open Graph tags
    if (description) updateMetaTag('description', description);
    if (keywords) updateMetaTag('keywords', keywords);
    if (ogTitle || title) updateMetaTag('og:title', ogTitle || title);
    if (ogDescription || description) updateMetaTag('og:description', ogDescription || description);
    if (ogImage) updateMetaTag('og:image', ogImage);

    // Cleanup function
    return () => {
      // We're not removing added tags in cleanup to avoid flickering
      // You can implement removal logic if needed
    };
  }, [title, description, keywords, canonicalUrl, ogTitle, ogDescription, ogImage]);

  // Handle structured data (JSON-LD)
  useEffect(() => {
    if (!structuredData) return;
    
    // Create a unique ID for our script tag
    const scriptId = 'document-head-structured-data';
    
    // Try to find existing script
    let script = document.getElementById(scriptId) as HTMLScriptElement;
    
    if (script) {
      // Update existing script
      script.textContent = JSON.stringify(structuredData);
    } else {
      // Create new script
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
    
    // Cleanup
    return () => {
      // Optional: Remove the script when the component unmounts
      // const script = document.getElementById(scriptId);
      // if (script) document.head.removeChild(script);
    };
  }, [structuredData]);

  return <>{children}</>;
};

export default DocumentHead; 