export interface PressArticle {
  id: string;
  title: string;
  description: string;
  date: string;
  source: string;
  sourceUrl?: string;
  imageUrl: string;
  type: 'article' | 'video' | 'mention';
  url?: string;
  videoId?: string;
}

// Sample press and news data
export const pressData: PressArticle[] = [
  // Articles
  {
    id: 'article-1',
    title: 'Modern Science Meets Ancient Ayurveda at AMOGHA The Ayur Hub',
    description: 'Explore how AMOGHA The Ayur Hub is combining traditional Ayurvedic practices with modern medical understanding to create a holistic healing approach.',
    date: 'May 15, 2023',
    source: 'Ayurveda Today',
    sourceUrl: 'https://example.com/ayurveda-today',
    imageUrl: '/images/press/article-1.jpg',
    type: 'article',
    url: '/press/modern-science-meets-ancient-ayurveda'
  },
  {
    id: 'article-2',
    title: 'The Rise of Ayurvedic Wellness Tourism in India',
    description: 'How AMOGHA The Ayur Hub is contributing to the growing wellness tourism sector by offering authentic Ayurvedic treatments and experiences.',
    date: 'July 23, 2023',
    source: 'Travel & Wellness Magazine',
    sourceUrl: 'https://example.com/travel-wellness',
    imageUrl: '/images/press/article-2.jpg',
    type: 'article',
    url: '/press/ayurvedic-wellness-tourism'
  },
  {
    id: 'article-3',
    title: 'Panchakarma: The Ancient Detoxification and Rejuvenation Therapy',
    description: 'A deep dive into the traditional Panchakarma therapy as practiced at AMOGHA The Ayur Hub, explaining its benefits and procedures.',
    date: 'September 5, 2023',
    source: 'Holistic Health Journal',
    sourceUrl: 'https://example.com/holistic-health',
    imageUrl: '/images/press/article-3.jpg',
    type: 'article',
    url: '/press/panchakarma-detoxification-therapy'
  },
  
  // Videos
  {
    id: 'video-1',
    title: 'Inside AMOGHA The Ayur Hub: A Tour of Our Ayurvedic Clinic',
    description: 'Take a virtual tour of our facility and learn about the various treatments and amenities available to our patients.',
    date: 'June 12, 2023',
    source: 'AMOGHA YouTube Channel',
    sourceUrl: 'https://youtube.com/amogha',
    imageUrl: '/images/press/video-1.jpg',
    type: 'video',
    videoId: 'abc123xyz'
  },
  {
    id: 'video-2',
    title: 'Dr. Sharma Explains: Ayurvedic Approaches to Chronic Conditions',
    description: 'Our chief medical officer discusses how Ayurveda can be effective in managing and treating various chronic health conditions.',
    date: 'August 28, 2023',
    source: 'Health & Wellness Network',
    sourceUrl: 'https://example.com/health-network',
    imageUrl: '/images/press/video-2.jpg',
    type: 'video',
    videoId: 'def456uvw'
  },
  
  // Press Mentions
  {
    id: 'mention-1',
    title: 'AMOGHA The Ayur Hub Named Among Top 10 Ayurvedic Clinics in India',
    description: 'Our clinic has been recognized for excellence in Ayurvedic treatments and patient care in a national survey.',
    date: 'April 3, 2023',
    source: 'National Health Review',
    sourceUrl: 'https://example.com/national-health',
    imageUrl: '/images/press/mention-1.jpg',
    type: 'mention',
    url: 'https://example.com/national-health/top-ayurvedic-clinics'
  },
  {
    id: 'mention-2',
    title: 'Innovations in Ayurveda: AMOGHA\'s Approach to Integrative Medicine',
    description: 'A feature on how our clinic is pioneering new approaches to combine Ayurvedic principles with complementary therapies.',
    date: 'October 17, 2023',
    source: 'Integrative Medicine Journal',
    sourceUrl: 'https://example.com/integrative-medicine',
    imageUrl: '/images/press/mention-2.jpg',
    type: 'mention',
    url: 'https://example.com/integrative-medicine/innovations-ayurveda'
  },
  {
    id: 'mention-3',
    title: 'Wellness Retreat Review: A Week at AMOGHA The Ayur Hub',
    description: 'A journalist\'s personal account of their rejuvenation experience at our clinic.',
    date: 'November 5, 2023',
    source: 'Lifestyle Weekly',
    sourceUrl: 'https://example.com/lifestyle-weekly',
    imageUrl: '/images/press/mention-3.jpg',
    type: 'mention',
    url: 'https://example.com/lifestyle-weekly/amogha-retreat-review'
  }
]; 