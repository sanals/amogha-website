// Department data for AMOGHA The Ayur Hub
// Based on the structure from an Ayurveda Hospital

export interface Department {
  id: string;
  name: string;
  shortName: string;
  slug: string;
  icon: string; // Font awesome icon name
  image?: string; // Path to image
  description: string;
  shortDescription: string;
  treatments: string[]; // IDs of related treatments
  doctors: string[]; // IDs of doctors in this department
  featured: boolean;
}

export const departmentsData: Department[] = [
  {
    id: 'general-medicine',
    name: 'General Medicine & Neurology',
    shortName: 'General Medicine',
    slug: 'general-medicine-neurology',
    icon: 'fa-heartbeat',
    image: '/images/departments/general-medicine.jpg',
    description: 'Our General Medicine & Neurology department offers holistic Ayurvedic approaches to treating various chronic and acute conditions affecting the nervous system and overall health. We specialize in conditions like migraine, vertigo, paralysis, memory issues, and other neurological disorders using time-tested Ayurvedic therapies and formulations.',
    shortDescription: 'Holistic Ayurvedic treatment for neurological disorders and general health conditions.',
    treatments: ['panchakarma', 'detoxification', 'lower-back-pain', 'parkinsons-treatment'],
    doctors: ['anil-kaimal', 'rahul-unnithan'],
    featured: true
  },
  {
    id: 'womens-health',
    name: 'General Women\'s Health & Gynaecology',
    shortName: 'Women\'s Health',
    slug: 'womens-health-gynaecology',
    icon: 'fa-venus',
    image: '/images/departments/womens-health.jpg',
    description: 'Our Women\'s Health department specializes in Ayurvedic approaches to gynecological health, hormonal balance, and reproductive wellness. We offer specialized treatments for PCOS, endometriosis, infertility, menopause management, and other women-specific health concerns through personalized care plans.',
    shortDescription: 'Specialized Ayurvedic care for women\'s health issues and reproductive wellness.',
    treatments: ['endometriosis', 'detoxification', 'panchakarma'],
    doctors: ['hridhya-rs'],
    featured: true
  },
  {
    id: 'sports-medicine',
    name: 'Anorectal & Sports Medicine',
    shortName: 'Sports Medicine',
    slug: 'anorectal-sports-medicine',
    icon: 'fa-running',
    image: '/images/departments/sports-medicine.jpg',
    description: 'Our Sports Medicine department combines traditional Ayurvedic therapies with modern sports science to treat sports injuries, improve performance, and enhance recovery. We also specialize in anorectal conditions using minimally invasive Ayurvedic methods including Kshara karma and specialized treatments for hemorrhoids, fissures, and fistulas.',
    shortDescription: 'Ayurvedic treatment for sports injuries and anorectal conditions.',
    treatments: ['varicose-veins', 'piles-treatment', 'lower-back-pain'],
    doctors: ['sreejith-pc'],
    featured: true
  },
  {
    id: 'wellness-panchakarma',
    name: 'Wellness & Panchakarma',
    shortName: 'Panchakarma',
    slug: 'wellness-panchakarma',
    icon: 'fa-spa',
    image: '/images/departments/wellness.jpg',
    description: 'Our Wellness & Panchakarma department offers comprehensive detoxification and rejuvenation programs through authentic Panchakarma therapies. These treatments help eliminate toxins, restore balance, and promote optimal health through customized protocols including Abhyanga, Shirodhara, Basti, Virechana, and more.',
    shortDescription: 'Traditional Panchakarma therapies for deep cleansing and rejuvenation.',
    treatments: ['panchakarma', 'detoxification'],
    doctors: ['rahul-unnithan'],
    featured: true
  },
  {
    id: 'pediatrics',
    name: 'Ayurvedic Pediatrics',
    shortName: 'Pediatrics',
    slug: 'ayurvedic-pediatrics',
    icon: 'fa-child',
    image: '/images/departments/pediatrics.jpg',
    description: 'Our Pediatrics department specializes in gentle, child-friendly Ayurvedic approaches to childhood health issues. We focus on developmental disorders, immunity building, respiratory conditions, digestive problems, and behavioral issues using safe, natural therapies and formulations appropriate for children.',
    shortDescription: 'Gentle Ayurvedic care for children\'s health and developmental issues.',
    treatments: ['developmental-delay'],
    doctors: ['nandu-ms'],
    featured: true
  },
  {
    id: 'ophthalmology-ent',
    name: 'Ayurvedic Ophthalmology & ENT',
    shortName: 'Ophthalmology & ENT',
    slug: 'ophthalmology-ent',
    icon: 'fa-eye',
    image: '/images/departments/ent.jpg',
    description: 'Our Ophthalmology & ENT department offers specialized Ayurvedic treatments for eye, ear, nose, and throat conditions. We provide effective management for issues like sinusitis, allergies, vision problems, hearing difficulties, and voice disorders using traditional Netra Tarpana, Nasya, and other specialized therapies.',
    shortDescription: 'Specialized Ayurvedic care for eye, ear, nose, and throat conditions.',
    treatments: ['panchakarma', 'detoxification'],
    doctors: ['neena-ravindran'],
    featured: true
  }
]; 