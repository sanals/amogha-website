import { Doctor } from '../types/doctor';
import { TreatmentCategory } from '../types/treatment';

export const doctorsData: Doctor[] = [
  {
    id: 'd1',
    name: 'Dr. Anand Sharma',
    title: 'Chief Ayurvedic Physician',
    imageUrl: '/images/team/dr-vikram.jpg',
    qualifications: ['BAMS', 'MD (Ayurveda)', 'Ph.D'],
    specialties: [
      TreatmentCategory.GENERAL_MEDICINE,
      TreatmentCategory.PANCHAKARMA
    ],
    experience: '20+ years',
    bio: 'Dr. Anand Sharma is a highly respected Ayurvedic physician with over two decades of clinical experience. He specializes in chronic disease management and detoxification therapies, having helped thousands of patients achieve optimal health through authentic Ayurvedic practices.',
    languages: ['English', 'Hindi', 'Sanskrit'],
    email: 'dr.anand@amogha.com',
    isAvailable: true,
    schedulingUrl: '/book-appointment?doctor=d1'
  },
  {
    id: 'd2',
    name: 'Dr. Priya Patel',
    title: 'Women\'s Health Specialist',
    imageUrl: '/images/team/dr-anjali.jpg',
    qualifications: ['BAMS', 'MD (Streeroga)', 'PGDHA'],
    specialties: [
      TreatmentCategory.WOMENS_HEALTH,
      TreatmentCategory.WELLNESS
    ],
    experience: '15+ years',
    bio: 'Dr. Priya Patel has dedicated her career to women\'s health, focusing on hormonal balance, reproductive health, and pre/post-natal care. Her gentle approach combines traditional Ayurvedic therapies with evidence-based modern practices to provide comprehensive care for women at all life stages.',
    languages: ['English', 'Gujarati', 'Hindi'],
    email: 'dr.priya@amogha.com',
    isAvailable: true,
    schedulingUrl: '/book-appointment?doctor=d2'
  },
  {
    id: 'd3',
    name: 'Dr. Rajesh Kumar',
    title: 'Sports Medicine & Musculoskeletal Specialist',
    imageUrl: '/images/team/rahul-patel.jpg',
    qualifications: ['BAMS', 'MSc (Sports Medicine)', 'Certification in Marma Therapy'],
    specialties: [
      TreatmentCategory.SPORTS_MEDICINE,
      TreatmentCategory.GENERAL_MEDICINE
    ],
    experience: '12+ years',
    bio: 'Dr. Rajesh Kumar specializes in treating sports injuries, chronic pain conditions, and musculoskeletal disorders using traditional Ayurvedic approaches. His expertise in Marma therapy and specialized massage techniques has helped athletes and individuals with chronic pain find lasting relief and improved mobility.',
    languages: ['English', 'Hindi', 'Tamil'],
    email: 'dr.rajesh@amogha.com',
    isAvailable: true,
    schedulingUrl: '/book-appointment?doctor=d3'
  },
  {
    id: 'd4',
    name: 'Dr. Meena Iyer',
    title: 'Panchakarma & Detoxification Expert',
    imageUrl: '/images/team/dr-meera.jpg',
    qualifications: ['BAMS', 'MD (Panchakarma)', 'Diploma in Nutrition'],
    specialties: [
      TreatmentCategory.PANCHAKARMA,
      TreatmentCategory.WELLNESS
    ],
    experience: '18+ years',
    bio: 'Dr. Meena Iyer is renowned for her expertise in Panchakarma therapies and detoxification programs. Her holistic approach integrates traditional cleansing protocols with personalized nutritional guidance, helping patients achieve deep transformation and renewed vitality.',
    languages: ['English', 'Malayalam', 'Hindi', 'Tamil'],
    email: 'dr.meena@amogha.com',
    isAvailable: true,
    schedulingUrl: '/book-appointment?doctor=d4'
  },
  {
    id: 'd5',
    name: 'Dr. Sanjay Verma',
    title: 'Pediatric Ayurveda Specialist',
    imageUrl: '/images/team/dr-vikram.jpg',
    qualifications: ['BAMS', 'MD (Kaumarabhritya)', 'Advanced Training in Child Development'],
    specialties: [
      TreatmentCategory.PEDIATRICS,
      TreatmentCategory.GENERAL_MEDICINE
    ],
    experience: '14+ years',
    bio: 'Dr. Sanjay Verma specializes in Ayurvedic pediatrics, offering gentle, effective treatments for common childhood ailments, developmental concerns, and chronic conditions. His compassionate approach makes children comfortable while providing parents with practical guidance for maintaining their child\'s health through Ayurvedic principles.',
    languages: ['English', 'Hindi', 'Marathi'],
    email: 'dr.sanjay@amogha.com',
    isAvailable: true,
    schedulingUrl: '/book-appointment?doctor=d5'
  },
  {
    id: 'd6',
    name: 'Dr. Lakshmi Nair',
    title: 'ENT & Ophthalmology Specialist',
    imageUrl: '/images/team/dr-anjali.jpg',
    qualifications: ['BAMS', 'MD (Shalakya Tantra)', 'Certification in Netra Chikitsa'],
    specialties: [
      TreatmentCategory.OPHTHALMOLOGY_ENT,
      TreatmentCategory.GENERAL_MEDICINE
    ],
    experience: '16+ years',
    bio: 'Dr. Lakshmi Nair specializes in Ayurvedic treatments for eye, ear, nose, and throat conditions. Her expertise includes management of chronic sinusitis, allergies, vision problems, and hearing issues using traditional Ayurvedic therapies that address the root causes while providing symptom relief.',
    languages: ['English', 'Malayalam', 'Tamil', 'Hindi'],
    email: 'dr.lakshmi@amogha.com',
    isAvailable: true,
    schedulingUrl: '/book-appointment?doctor=d6'
  }
]; 