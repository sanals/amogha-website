import { ReportHandler } from 'web-vitals';

/**
 * Web Vitals measurement utility for AMOGHA The Ayur Hub website
 * 
 * Tracks and reports key performance metrics:
 * - FCP (First Contentful Paint): Time until first content appears
 * - LCP (Largest Contentful Paint): Time until main content appears
 * - FID (First Input Delay): Time until page responds to interaction
 * - CLS (Cumulative Layout Shift): Visual stability of page
 * - TTFB (Time to First Byte): Initial server response time
 * 
 * Pass your own callback to send metrics to analytics
 */
const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry); // Cumulative Layout Shift
      getFID(onPerfEntry); // First Input Delay
      getFCP(onPerfEntry); // First Contentful Paint
      getLCP(onPerfEntry); // Largest Contentful Paint
      getTTFB(onPerfEntry); // Time to First Byte
    });
  }
};

export default reportWebVitals; 