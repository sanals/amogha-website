// Testimonials data for AMOGHA The Ayur Hub
// Based on the structure from an Ayurveda Hospital's testimonials

export interface Testimonial {
  id: string;
  name: string;
  designation?: string;
  testimonial: string;
  image?: string;
  rating: number;
  featured: boolean;
  isVideo?: boolean;
  videoUrl?: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: 'testimonial1',
    name: 'Rajesh Sharma',
    designation: 'Bangalore',
    testimonial: 'My health concerns were addressed well at AMOGHA. The doctors & staff were brilliant. Food was good. Chef has done an amazing job. All the facilities were top notch. Nothing to complain. I want to thank everyone at AMOGHA for helping me with my issues.',
    image: '/images/testimonials/patient1.jpg',
    rating: 5,
    featured: true
  },
  {
    id: 'testimonial2',
    name: 'Priya Nair',
    designation: 'Mumbai',
    testimonial: 'Absolute good Quality of care! Communication was very kind! Luxury room and they\'re keeping it very clean and neat. Staff were very helpful, patient with smiling face. Restaurant staff were very kind! Overall very peaceful place to get cure and get out of stress.',
    image: '/images/testimonials/patient2.jpg',
    rating: 5,
    featured: true
  },
  {
    id: 'testimonial3',
    name: 'Revu Pillai',
    designation: 'Chennai',
    testimonial: 'AMOGHA is treating patients with a holistic approach! I came for my mother who dislocated her shoulder bone & was not able-bodied. The doctor & team guided us right from the beginning. My mother had mobility issues, we bought her in a wheelchair. Today after 23 days of treatment, I see my mother happy, walking on her own without any support.',
    image: '/images/testimonials/patient3.jpg',
    rating: 5,
    featured: true
  },
  {
    id: 'testimonial4',
    name: 'Shreya Gupta',
    designation: 'Delhi',
    testimonial: 'It was definitely a rejuvenating experience. To start with, the ambience in itself was a therapy… situated amidst a lush green hillock, away from the hustle and bustle of our daily city lives. And their team and team work was top notch. My consulting physician ensured that I felt improvements in my body and felt better by the day.',
    image: '/images/testimonials/patient4.jpg',
    rating: 5,
    featured: true
  },
  {
    id: 'testimonial5',
    name: 'Arjun Krishnan',
    designation: 'Kochi',
    testimonial: 'I had a wonderful experience at AMOGHA. The staff were friendly and welcoming, and the doctor was kind and attentive in listening to my concerns and recommending treatment plans. The food at the restaurant was delicious and perfectly balanced for healing.',
    image: '/images/testimonials/patient1.jpg',
    rating: 5,
    featured: false
  },
  {
    id: 'testimonial6',
    name: 'Meena Reddy',
    designation: 'Hyderabad',
    testimonial: 'I underwent a 21-day treatment at AMOGHA for vertigo. I felt benefitted significantly after the treatment. My doctor guided us at each and every step of the treatment, and solved all our doubts. The therapists were very well trained and professional. It gave me good relief.',
    image: '/images/testimonials/patient2.jpg',
    rating: 5,
    featured: false
  },
  {
    id: 'testimonial7',
    name: 'Vikram Singh',
    designation: 'Jaipur',
    testimonial: 'I had taken a 14-day rejuvenation treatment here. I can\'t help saying that this was the best place I could have chosen for Ayurveda treatment. The place and atmosphere is so clean and well-kept that I never felt like I am in a hospital. My overall experience was so good and in the future this place will be my first choice.',
    image: '/images/testimonials/patient3.jpg',
    rating: 5,
    featured: false,
    isVideo: true,
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: 'testimonial8',
    name: 'Lakshmi Menon',
    designation: 'Trivandrum',
    testimonial: 'I booked into AMOGHA for a 21-day treatment. The doctor was so caring right from the start of my treatment. After test results, the doctor cut off most of the chronic allopathic medication I was on for many years. My stay at AMOGHA was a pleasant and beautiful experience.',
    image: '/images/testimonials/patient4.jpg',
    rating: 5,
    featured: false,
    isVideo: true,
    videoUrl: '/videos/testimonials/patient-testimonial-2.mp4'
  }
]; 