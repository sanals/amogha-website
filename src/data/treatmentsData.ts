import { Treatment, TreatmentCategory } from '../types/treatment';

export const treatmentsData: Treatment[] = [
  {
    id: 'panchakarma',
    name: 'Panchakarma',
    slug: 'panchakarma',
    icon: 'fa-spa',
    image: '/images/treatments/panchakarma.jpg',
    imageUrl: '/images/treatments/panchakarma.jpg',
    iconUrl: '/src/assets/icons/spa.svg',
    description: 'Panchakarma is a fundamental detoxification treatment approach aimed at purifying and revitalizing the mind, body, and consciousness. Panchakarma utilizes five distinct pathways to facilitate the removal of accumulated waste and toxins from the body. This comprehensive cleansing therapy includes Vamana (therapeutic emesis), Virechana (therapeutic purgation), Basti (medicated enema), Nasya (nasal medication), and Rakta Mokshana (blood letting).',
    shortDescription: 'Comprehensive five-step detoxification therapy to cleanse the body of toxins.',
    benefits: [
      'Deep detoxification of the body',
      'Balance of all three doshas',
      'Improved digestion and metabolism',
      'Enhanced immunity and vitality',
      'Stress reduction and mental clarity'
    ],
    category: TreatmentCategory.PANCHAKARMA,
    duration: '7-21 days',
    relatedDepartments: [TreatmentCategory.WELLNESS, TreatmentCategory.GENERAL_MEDICINE],
    featured: true,
    isPopular: true
  },
  {
    id: 'varicose-veins',
    name: 'Varicose Veins Treatment',
    slug: 'varicose-veins-treatment',
    icon: 'fa-heartbeat',
    image: '/images/treatments/varicose-veins.jpg',
    imageUrl: '/images/treatments/varicose-veins.jpg',
    iconUrl: '/src/assets/icons/heartbeat.svg',
    description: 'Our Ayurvedic approach to varicose veins focuses on improving circulation, reducing inflammation, and strengthening vein walls using herbal medicines, specialized external therapies, and lifestyle modifications. The treatment typically includes Abhyanga (oil massage), Jalaukavacharana (leech therapy), and customized herbal formulations to address the root causes of venous insufficiency.',
    shortDescription: 'Ayurvedic therapies to improve circulation and strengthen vein walls.',
    benefits: [
      'Improved blood circulation',
      'Reduced pain and swelling',
      'Strengthened vein walls',
      'Prevention of complications',
      'Non-invasive approach'
    ],
    category: TreatmentCategory.SPORTS_MEDICINE,
    duration: '14-28 days',
    relatedDepartments: [TreatmentCategory.SPORTS_MEDICINE, TreatmentCategory.GENERAL_MEDICINE],
    featured: true,
    isPopular: true
  },
  {
    id: 'detoxification',
    name: 'Detoxification',
    slug: 'detoxification',
    icon: 'fa-wind',
    image: '/images/treatments/detoxification.jpg',
    imageUrl: '/images/treatments/detoxification.jpg',
    iconUrl: '/src/assets/icons/wind.svg',
    description: 'Our Ayurvedic detoxification programs are designed to eliminate toxins (ama) from the body and restore optimal functioning of all systems. The process includes dietary modifications, herbal supplements, and specialized therapies like Udvartana (herbal powder massage), Swedana (herbal steam therapy), and specific Panchakarma procedures tailored to your body type and health concerns.',
    shortDescription: 'Comprehensive detox programs to eliminate toxins and restore bodily balance.',
    benefits: [
      'Elimination of toxins from tissues',
      'Improved digestion and metabolism',
      'Enhanced energy levels',
      'Better skin health and complexion',
      'Strengthened immune system'
    ],
    category: TreatmentCategory.WELLNESS,
    duration: '7-14 days',
    relatedDepartments: [TreatmentCategory.WELLNESS, TreatmentCategory.GENERAL_MEDICINE],
    featured: true,
    isPopular: true
  },
  {
    id: 'endometriosis',
    name: 'Endometriosis',
    slug: 'endometriosis-treatment',
    icon: 'fa-venus',
    image: '/images/treatments/endometriosis.jpg',
    imageUrl: '/images/treatments/endometriosis.jpg',
    iconUrl: '/src/assets/icons/venus.svg',
    description: 'Our Ayurvedic approach to endometriosis focuses on balancing hormones, reducing inflammation, managing pain, and preventing recurrence. Treatment typically includes specialized Uttara Basti (vaginal/uterine enema), Yoni Dhavana (vaginal douche with medicated decoctions), customized herbal formulations, dietary modifications, and lifestyle changes to address the root causes of endometriosis.',
    shortDescription: 'Holistic Ayurvedic approach to manage endometriosis and associated symptoms.',
    benefits: [
      'Pain reduction during menstruation',
      'Hormonal balance restoration',
      'Reduced inflammation',
      'Improved fertility potential',
      'Better quality of life'
    ],
    category: TreatmentCategory.WOMENS_HEALTH,
    duration: '3-6 months',
    relatedDepartments: [TreatmentCategory.WOMENS_HEALTH],
    featured: true,
    isPopular: false
  },
  {
    id: 'developmental-delay',
    name: 'Development Delay Management',
    slug: 'developmental-delay-management',
    icon: 'fa-child',
    image: '/images/treatments/developmental-delay.jpg',
    imageUrl: '/images/treatments/developmental-delay.jpg',
    iconUrl: '/src/assets/icons/child.svg',
    description: 'Our Ayurvedic approach to developmental delays in children focuses on enhancing neurological development, improving cognitive function, and strengthening the body. Treatment includes Shirodhara (pouring medicated oils on the forehead), Abhyanga (specialized massage), Shiroabhyanga (head massage), and customized herbal formulations to support healthy development based on the child\'s unique constitution.',
    shortDescription: 'Gentle Ayurvedic therapies to support neurological and cognitive development in children.',
    benefits: [
      'Improved cognitive function',
      'Enhanced motor skills development',
      'Better concentration and focus',
      'Strengthened nervous system',
      'Support for overall development'
    ],
    category: TreatmentCategory.PEDIATRICS,
    duration: '3-12 months',
    relatedDepartments: [TreatmentCategory.PEDIATRICS],
    featured: true,
    isPopular: false
  },
  {
    id: 'parkinsons-treatment',
    name: 'Parkinson\'s Disease Management',
    slug: 'parkinsons-disease-management',
    icon: 'fa-brain',
    image: '/images/treatments/parkinsons.jpg',
    imageUrl: '/images/treatments/parkinsons.jpg',
    iconUrl: '/src/assets/icons/brain.svg',
    description: 'Our Ayurvedic approach to Parkinson\'s Disease focuses on reducing symptoms, slowing progression, and improving quality of life. Treatment typically includes Nasya (nasal administration of medicated oils), Shirodhara (pouring medicated oils on the forehead), Pinda Sweda (bolus massage), and customized herbal formulations to address the root imbalances while improving motor function and reducing tremors.',
    shortDescription: 'Specialized Ayurvedic therapies to manage Parkinson\'s symptoms and improve quality of life.',
    benefits: [
      'Reduction in tremors and rigidity',
      'Improved mobility and balance',
      'Better sleep quality',
      'Enhanced mental clarity',
      'Support for daily living activities'
    ],
    category: TreatmentCategory.GENERAL_MEDICINE,
    duration: 'Ongoing management',
    relatedDepartments: [TreatmentCategory.GENERAL_MEDICINE],
    featured: true,
    isPopular: false
  },
  {
    id: 'lower-back-pain',
    name: 'Lower Back Pain Treatment',
    slug: 'lower-back-pain-treatment',
    icon: 'fa-user-injured',
    image: '/images/treatments/back-pain.jpg',
    imageUrl: '/images/treatments/back-pain.jpg',
    iconUrl: '/src/assets/icons/user-injured.svg',
    description: 'Our comprehensive Ayurvedic approach to lower back pain combines specialized therapies like Kati Basti (retention of warm medicated oil on the lower back), Patra Pinda Sweda (herbal poultice massage), Kativasti (warm oil pooling on the back), and customized herbal formulations to reduce inflammation, ease pain, and address the root causes of back discomfort.',
    shortDescription: 'Specialized Ayurvedic therapies to alleviate back pain and improve spinal health.',
    benefits: [
      'Pain reduction and relief',
      'Improved mobility and flexibility',
      'Reduced inflammation',
      'Strengthened back muscles',
      'Prevention of recurrence'
    ],
    category: TreatmentCategory.SPORTS_MEDICINE,
    duration: '7-21 days',
    relatedDepartments: [TreatmentCategory.SPORTS_MEDICINE, TreatmentCategory.GENERAL_MEDICINE],
    featured: true,
    isPopular: true
  },
  {
    id: 'piles-treatment',
    name: 'Piles Treatment',
    slug: 'piles-treatment',
    icon: 'fa-stethoscope',
    image: '/images/treatments/piles.jpg',
    imageUrl: '/images/treatments/piles.jpg',
    iconUrl: '/src/assets/icons/stethoscope.svg',
    description: 'Our Ayurvedic approach to piles (hemorrhoids) focuses on reducing inflammation, alleviating pain, and addressing root causes. Treatment includes specialized Kshara Karma (application of alkaline herbal preparations), Avagaha Sweda (sitz bath with medicated decoctions), customized herbal formulations, and dietary and lifestyle modifications to prevent recurrence and promote healing.',
    shortDescription: 'Minimally invasive Ayurvedic treatments for hemorrhoids without surgery.',
    benefits: [
      'Pain and discomfort relief',
      'Reduced bleeding and inflammation',
      'Healing of hemorrhoids',
      'Improved bowel movements',
      'Prevention of recurrence'
    ],
    category: TreatmentCategory.SPORTS_MEDICINE,
    duration: '14-28 days',
    relatedDepartments: [TreatmentCategory.SPORTS_MEDICINE],
    featured: true,
    isPopular: false
  }
]; 