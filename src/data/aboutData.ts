// Types
export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  description: string;
  image?: string;
}

export interface ValueItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  image: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

// Data

export const missionStatement = 
  "To revive and promote authentic Ayurveda practices by providing accessible, high-quality healthcare that addresses the root causes of ailments while nurturing the overall well-being of our patients.";

export const visionStatement = 
  "To be the foremost Ayurvedic wellness destination that seamlessly blends traditional wisdom with modern healthcare approaches, restoring balance and harmony to each individual's life journey.";

export const aboutDescription = 
  "AMOGHA The Ayur Hub is a premier Ayurvedic wellness center committed to delivering authentic, traditional Ayurvedic treatments with contemporary healthcare standards. Our approach integrates time-tested Ayurvedic practices with modern diagnostic techniques to provide holistic healing experiences. Founded on the principles of genuine Kerala Ayurveda traditions, we focus on addressing the root causes of health issues rather than just treating symptoms.";

// Timeline data
export const timelineData: TimelineItem[] = [
  {
    id: "founding",
    year: "2005",
    title: "Founding of AMOGHA",
    description: "AMOGHA The Ayur Hub was established with a vision to provide authentic Ayurvedic treatments in Bangalore. Dr. Vikram Sharma, our founder, began with a small clinic offering specialized Kerala Ayurveda therapies.",
    image: "/images/about/history-2005.jpg"
  },
  {
    id: "expansion",
    year: "2010",
    title: "Expanding Our Services",
    description: "With growing recognition for our authentic treatments, we expanded our facility to include specialized departments for various Ayurvedic therapies, and welcomed additional experienced physicians to our team.",
    image: "/images/about/history-2010.jpg"
  },
  {
    id: "research",
    year: "2015",
    title: "Research & Development",
    description: "We established our research wing dedicated to studying the effectiveness of Ayurvedic treatments for modern health issues, and began documenting clinical evidence of our treatment outcomes.",
    image: "/images/about/history-2015.jpg"
  },
  {
    id: "wellness-center",
    year: "2020",
    title: "Integrated Wellness Center",
    description: "Transformed into a comprehensive wellness destination with the addition of yoga, meditation, and nutrition counseling to complement our Ayurvedic treatments for a truly holistic healing approach.",
    image: "/images/about/history-2020.jpg"
  },
  {
    id: "present",
    year: "Now",
    title: "AMOGHA Today",
    description: "Today, AMOGHA stands as a premier Ayurvedic hospital in Bangalore, recognized for our authentic treatments, highly qualified physicians, and patient-centered approach to holistic wellness.",
    image: "/images/about/history-present.jpg"
  }
];

// Values data
export const valuesData: ValueItem[] = [
  {
    id: "authenticity",
    title: "Authenticity",
    description: "We stay true to traditional Ayurvedic principles and practices, ensuring treatments are delivered in their purest form.",
    icon: "fa-certificate"
  },
  {
    id: "holistic-approach",
    title: "Holistic Approach",
    description: "We treat the whole person—mind, body, and spirit—rather than just addressing symptoms of disease.",
    icon: "fa-circle-nodes"
  },
  {
    id: "personalization",
    title: "Personalization",
    description: "Every treatment plan is customized according to the individual's unique constitution (Prakriti) and health needs.",
    icon: "fa-user-check"
  },
  {
    id: "expertise",
    title: "Clinical Expertise",
    description: "Our physicians bring decades of experience and deep knowledge of traditional Ayurvedic practices.",
    icon: "fa-user-md"
  },
  {
    id: "integration",
    title: "Integrated Care",
    description: "We combine traditional wisdom with modern diagnostic approaches for the most effective treatment outcomes.",
    icon: "fa-hands-holding-circle"
  },
  {
    id: "education",
    title: "Patient Education",
    description: "We empower patients with knowledge about their health conditions and how to maintain wellness through Ayurveda.",
    icon: "fa-book-open-reader"
  }
];

// Team data
export const teamData: TeamMember[] = [
  {
    id: "dr-vikram",
    name: "Dr. Vikram Sharma",
    position: "Founder & Chief Physician",
    bio: "Dr. Vikram Sharma brings over 25 years of experience in traditional Ayurvedic practices. After completing his BAMS and MD (Ayurveda) from prestigious institutions, he dedicated his career to preserving authentic Ayurvedic treatments while making them accessible in the modern healthcare landscape.",
    image: "/images/team/dr-vikram.jpg",
    socialLinks: {
      linkedin: "https://linkedin.com/in/dr-vikram-sharma",
      email: "dr.vikram@amoghaayur.com"
    }
  },
  {
    id: "dr-anjali",
    name: "Dr. Anjali Desai",
    position: "Medical Director",
    bio: "With specialized training in Panchakarma and women's health, Dr. Anjali oversees all clinical operations and ensures the highest standards of care across all departments. Her approach integrates traditional practices with contemporary healthcare frameworks.",
    image: "/images/team/dr-anjali.jpg",
    socialLinks: {
      linkedin: "https://linkedin.com/in/dr-anjali-desai",
      email: "dr.anjali@amoghaayur.com"
    }
  },
  {
    id: "rahul-patel",
    name: "Rahul Patel",
    position: "Wellness Program Director",
    bio: "Rahul holds advanced certifications in yoga and meditation alongside his background in Ayurvedic principles. He develops integrated wellness programs that complement medical treatments, enhancing overall health outcomes for patients.",
    image: "/images/team/rahul-patel.jpg",
    socialLinks: {
      linkedin: "https://linkedin.com/in/rahul-patel-wellness",
      twitter: "https://twitter.com/rahulpatel_wellness"
    }
  },
  {
    id: "dr-meera",
    name: "Dr. Meera Krishnan",
    position: "Research Head",
    bio: "Dr. Meera leads our research initiatives, documenting clinical outcomes and developing innovative treatment protocols. Her work bridges traditional Ayurvedic knowledge with scientific validation, advancing the field's recognition in modern healthcare.",
    image: "/images/team/dr-meera.jpg",
    socialLinks: {
      linkedin: "https://linkedin.com/in/dr-meera-krishnan",
      email: "dr.meera@amoghaayur.com"
    }
  }
]; 