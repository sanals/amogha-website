import { GalleryImage } from '../components/organisms/PhotoGallery';
import { GalleryVideo } from '../components/organisms/VideoGallery';

// Sample categories for gallery items
export enum GalleryCategory {
  CLINIC = 'Clinic Facilities',
  TREATMENTS = 'Treatments',
  STAFF = 'Staff',
  EVENTS = 'Events',
  PATIENTS = 'Patient Stories',
  HERBS = 'Herbs & Medicines'
}

// Sample photo gallery data
export const photoGalleryData: GalleryImage[] = [
  {
    id: 'photo-1',
    image: '/images/gallery/clinic-exterior.jpg',
    title: 'AMOGHA Clinic Exterior',
    description: 'Front view of our Ayurvedic clinic with traditional architecture',
    category: GalleryCategory.CLINIC,
    aspectRatio: 'aspect-[16/9]'
  },
  {
    id: 'photo-2',
    image: '/images/gallery/treatment-room.jpg',
    title: 'Treatment Room',
    description: 'Serene treatment room with essential Ayurvedic therapy equipment',
    category: GalleryCategory.CLINIC,
    aspectRatio: 'aspect-square'
  },
  {
    id: 'photo-3',
    image: '/images/gallery/abhyanga-therapy.jpg',
    title: 'Abhyanga Therapy',
    description: 'Traditional Ayurvedic oil massage therapy in progress',
    category: GalleryCategory.TREATMENTS,
    aspectRatio: 'aspect-[3/4]'
  },
  {
    id: 'photo-4',
    image: '/images/gallery/reception.jpg',
    title: 'Reception Area',
    description: 'Welcoming reception area with traditional decor',
    category: GalleryCategory.CLINIC,
    aspectRatio: 'aspect-[4/3]'
  },
  {
    id: 'photo-5',
    image: '/images/gallery/herbal-medicines.jpg',
    title: 'Herbal Medicines',
    description: 'Selection of traditional Ayurvedic herbal medicines',
    category: GalleryCategory.HERBS,
    aspectRatio: 'aspect-square'
  },
  {
    id: 'photo-6',
    image: '/images/gallery/consultation.jpg',
    title: 'Doctor Consultation',
    description: 'Patient consultation with our experienced Ayurvedic doctors',
    category: GalleryCategory.STAFF,
    aspectRatio: 'aspect-[16/9]'
  },
  {
    id: 'photo-7',
    image: '/images/gallery/shirodhara.jpg',
    title: 'Shirodhara Treatment',
    description: 'Therapeutic Shirodhara treatment being performed',
    category: GalleryCategory.TREATMENTS,
    aspectRatio: 'aspect-[3/4]'
  },
  {
    id: 'photo-8',
    image: '/images/gallery/herb-garden.jpg',
    title: 'Medicinal Herb Garden',
    description: 'Our organic medicinal herb garden where we grow therapeutic plants',
    category: GalleryCategory.HERBS,
    aspectRatio: 'aspect-[4/3]'
  },
  {
    id: 'photo-9',
    image: '/images/gallery/yoga-hall.jpg',
    title: 'Yoga and Meditation Hall',
    description: 'Peaceful environment for yoga and meditation practice',
    category: GalleryCategory.CLINIC,
    aspectRatio: 'aspect-[16/9]'
  },
  {
    id: 'photo-10',
    image: '/images/gallery/herbs-preparation.jpg',
    title: 'Herbal Preparation',
    description: 'Traditional preparation of Ayurvedic medicines',
    category: GalleryCategory.HERBS,
    aspectRatio: 'aspect-square'
  },
  {
    id: 'photo-11',
    image: '/images/gallery/staff-team.jpg',
    title: 'Our Medical Team',
    description: 'The dedicated team of physicians and therapists at AMOGHA',
    category: GalleryCategory.STAFF,
    aspectRatio: 'aspect-[4/3]'
  },
  {
    id: 'photo-12',
    image: '/images/gallery/patient-therapy.jpg',
    title: 'Patient Receiving Treatment',
    description: 'A patient receiving specialized Ayurvedic treatment',
    category: GalleryCategory.TREATMENTS,
    aspectRatio: 'aspect-[3/4]'
  }
];

// Sample video gallery data
export const videoGalleryData: GalleryVideo[] = [
  {
    id: 'video-1',
    thumbnailUrl: '/images/gallery/videos/clinic-tour-thumb.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=example1',
    title: 'AMOGHA Clinic Tour',
    description: 'Take a virtual tour of our Ayurvedic wellness clinic',
    duration: '3:45',
    category: GalleryCategory.CLINIC
  },
  {
    id: 'video-2',
    thumbnailUrl: '/images/gallery/videos/panchakarma-thumb.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=example2',
    title: 'Panchakarma Explained',
    description: 'Learn about the 5-step detoxification process of Panchakarma',
    duration: '5:20',
    category: GalleryCategory.TREATMENTS
  },
  {
    id: 'video-3',
    thumbnailUrl: '/images/gallery/videos/patient-testimonial-thumb.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=example3',
    title: 'Patient Success Story',
    description: 'Hear from one of our patients about their healing journey',
    duration: '4:12',
    category: GalleryCategory.PATIENTS
  },
  {
    id: 'video-4',
    thumbnailUrl: '/images/gallery/videos/doctor-interview-thumb.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=example4',
    title: 'Interview with Dr. Sharma',
    description: 'Our chief physician discusses Ayurvedic approaches to chronic conditions',
    duration: '8:30',
    category: GalleryCategory.STAFF
  },
  {
    id: 'video-5',
    thumbnailUrl: '/images/gallery/videos/herbs-thumb.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=example5',
    title: 'Medicinal Herbs in Ayurveda',
    description: 'Exploring the powerful healing herbs used in our treatments',
    duration: '6:15',
    category: GalleryCategory.HERBS
  },
  {
    id: 'video-6',
    thumbnailUrl: '/images/gallery/videos/wellness-workshop-thumb.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=example6',
    title: 'Wellness Workshop Highlights',
    description: 'Highlights from our recent wellness workshop on Ayurvedic lifestyle',
    duration: '7:50',
    category: GalleryCategory.EVENTS
  },
  {
    id: 'video-7',
    thumbnailUrl: '/images/gallery/videos/shirodhara-procedure-thumb.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=example7',
    title: 'Shirodhara Procedure',
    description: 'The therapeutic technique of Shirodhara for mental relaxation',
    duration: '4:45',
    category: GalleryCategory.TREATMENTS
  },
  {
    id: 'video-8',
    thumbnailUrl: '/images/gallery/videos/daily-routine-thumb.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=example8',
    title: 'Ayurvedic Daily Routine',
    description: 'How to incorporate Ayurvedic principles into your daily life',
    duration: '5:30',
    category: GalleryCategory.TREATMENTS
  }
]; 