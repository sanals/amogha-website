import React, { useEffect } from 'react';

interface PageTitleProps {
  title: string;
  siteName?: string;
  separator?: string;
}

/**
 * PageTitle component that updates the document title when rendered
 * Automatically formats the title as "Page Title | Site Name"
 */
const PageTitle: React.FC<PageTitleProps> = ({
  title,
  siteName = 'AMOGHA The Ayur Hub',
  separator = ' | ',
}) => {
  useEffect(() => {
    // Save the original title to restore when component unmounts
    const originalTitle = document.title;
    
    // Update the document title with the current page title and site name
    const formattedTitle = `${title}${separator}${siteName}`;
    document.title = formattedTitle;

    // Clean up function to reset title when component unmounts
    return () => {
      document.title = originalTitle;
    };
  }, [title, siteName, separator]);

  // This component doesn't render anything visible
  return null;
};

export default PageTitle; 