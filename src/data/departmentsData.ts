import { TreatmentCategory } from '../types/treatment';

export interface Department {
  id: TreatmentCategory | string;
  name: string;
  shortName: string;
  slug: string;
  icon: string;
  image?: string;
  description: string;
  shortDescription: string;
  treatments: string[];
  doctors: string[];
  featured: boolean;
}

export const departmentsData: Department[] = [
  {
    id: TreatmentCategory.PRE_POSTNATAL,
    name: 'Pre & Postnatal Care',
    shortName: 'Pre & Postnatal Care',
    slug: 'pre-postnatal-care',
    icon: 'fa-baby',
    image: '/images/departments/womens-health.jpg',
    description: 'At <strong>Amogha – The Ayur Hub</strong>, we provide holistic pre- and postnatal care designed to support mothers through every stage of pregnancy and beyond. Guided by the ancient wisdom of Ayurveda, our treatments focus on nurturing the mother’s body, calming the mind, and promoting healthy development of the baby.',
    shortDescription: 'Holistic pre- and postnatal care designed to support mothers through every stage of pregnancy and beyond.',
    treatments: [],
    doctors: ['d2', 'd5'],
    featured: true
  },
  {
    id: TreatmentCategory.SKIN_HAIR_CARE,
    name: 'Skin & Hair Care Treatments',
    shortName: 'Skin & Hair Care',
    slug: 'skin-hair-care-treatments',
    icon: 'fa-spa',
    image: '/images/departments/wellness.jpg',
    description: 'Our skin therapies address both the root cause and visible symptoms of skin concerns, promoting clear, healthy, and glowing skin. Ayurveda views hair health as a reflection of internal balance. Our treatments nourish the scalp, strengthen the roots, and promote healthy, lustrous hair.',
    shortDescription: 'Ayurvedic cosmetology addressing the root cause of skin and hair concerns.',
    treatments: ['acne-pimples-post-acne-marks', 'pigmentation-tanning-uneven-skin-tone', 'dryness-dullness-premature-aging', 'psoriasis-eczema-dermatitis', 'dark-circles-under-eye-puffiness', 'sensitive-skin-and-allergic-reactions', 'hair-fall-hair-thinning', 'dandruff-and-itchy-scalp', 'premature-greying', 'dry-frizzy-or-damaged-hair', 'alopecia-and-weak-hair-roots'],
    doctors: ['d5'],
    featured: true
  },
  {
    id: TreatmentCategory.WOMENS_WELLNESS,
    name: 'Women Wellness & Gynaec Care',
    shortName: 'Women Wellness',
    slug: 'women-wellness-gynaec-care',
    icon: 'fa-venus',
    image: '/images/departments/womens-health.jpg',
    description: 'We offer natural, holistic solutions for a wide range of women’s health concerns by identifying the root cause and restoring dosha balance.',
    shortDescription: 'Natural, holistic solutions for a wide range of women’s health concerns restoring dosha balance.',
    treatments: ['menstrual-irregularities-painful-periods', 'pcos-pcod', 'hormonal-imbalance', 'infertility-conception-support', 'thyroid-related-issues', 'uterine-health-concerns', 'vaginal-infections-recurrent-discomfort', 'menopause-perimenopause-symptoms'],
    doctors: ['d2'],
    featured: true
  },
  {
    id: TreatmentCategory.PREVENTIVE_WELLNESS,
    name: 'Preventive healthcare and Wellness Programs',
    shortName: 'Preventive & Wellness',
    slug: 'preventive-healthcare-and-wellness-programs',
    icon: 'fa-heartbeat',
    image: '/images/departments/general-medicine.jpg',
    description: 'Preventive Care and Wellness Program in Ayurveda focuses on maintaining health, preventing disease, and promoting long life by living in harmony with nature. Ayurveda emphasizes “Swasthasya Swasthya Rakshanam”—protecting the health of the healthy.',
    shortDescription: 'Focus on maintaining health, preventing disease, and promoting long life by living in harmony with nature.',
    treatments: [],
    doctors: ['d4', 'd6'],
    featured: true
  },
  {
    id: TreatmentCategory.PAIN_SPORTS,
    name: 'Pain & Sports Injury Management',
    shortName: 'Pain & Sports Injury',
    slug: 'pain-sports-injury-management',
    icon: 'fa-running',
    image: '/images/departments/sports-medicine.jpg',
    description: 'At <strong>Amogha – The Ayur Hub</strong>, our aim is not just to relieve pain but to help you return to your daily activities with renewed strength and confidence. Experience natural healing that supports the body’s own recovery power—gently, effectively, and holistically.',
    shortDescription: 'Relieve pain and help you return to daily activities with natural healing.',
    treatments: ['neck-shoulder-back-pain', 'knee-pain-osteoarthritis', 'sciatica-nerve-pain', 'slip-disc-spondylosis', 'rheumatoid-osteo-arthritis', 'fibromyalgia-chronic-pain', 'migraine-tension-headaches', 'muscle-stiffness-general-body-pain'],
    doctors: ['d3'],
    featured: true
  },
  {
    id: TreatmentCategory.MENTAL_WELLNESS,
    name: 'Mental Wellness & Stress Management',
    shortName: 'Mental Wellness',
    slug: 'mental-wellness-stress-management',
    icon: 'fa-brain',
    image: '/images/departments/general-medicine.jpg',
    description: 'At <strong>Amogha – The Ayur Hub</strong>, we understand that mental well-being is as important as physical health. In today’s fast-paced world, stress, anxiety, and emotional imbalance can easily disrupt daily life. Drawing from the timeless wisdom of Ayurveda, our Mental Wellness & Stress Management programs focus on calming the mind, balancing the doshas, and restoring emotional harmony.',
    shortDescription: 'Calming the mind, balancing doshas, and restoring emotional harmony.',
    treatments: [],
    doctors: ['d6'],
    featured: true
  },
  {
    id: TreatmentCategory.ANORECTAL,
    name: 'Anorectal Care',
    shortName: 'Anorectal Care',
    slug: 'anorectal-care',
    icon: 'fa-procedures',
    image: '/images/departments/sports-medicine.jpg',
    description: 'At <strong>Amogha – The Ayur Hub</strong>, we offer safe and effective Ayurvedic treatments for common anorectal conditions using gentle, root-cause healing methods. Our therapies help reduce pain, inflammation, and discomfort while improving digestive health and long-term wellness.',
    shortDescription: 'Safe and effective Ayurvedic treatments for common anorectal conditions.',
    treatments: ['piles-haemorrhoids', 'fissure', 'fistula'],
    doctors: ['d3'],
    featured: true
  },
  {
    id: TreatmentCategory.PANCHAKARMA_DETOX,
    name: 'Panchakarma & Detox Therapies',
    shortName: 'Panchakarma',
    slug: 'panchakarma-detox-therapies',
    icon: 'fa-spa',
    image: '/images/departments/wellness.jpg',
    description: 'At <strong>Amogha – The Ayur Hub</strong>, we offer authentic Panchakarma and detox therapies that combine the wisdom of Ayurveda with modern understanding of wellness. These treatments are designed to eliminate toxins, restore dosha balance, improve immunity, and rejuvenate both body and mind.',
    shortDescription: 'Authentic therapies designed to eliminate toxins, restore dosha balance, and rejuvenate body and mind.',
    treatments: ['virechana-purgation-therapy', 'vamana-emesis', 'basti-medicated-enema-therapy', 'nasya-nasal-therapy', 'raktamokshana-blood-detox'],
    doctors: ['d1', 'd4'],
    featured: true
  },
  {
    id: TreatmentCategory.LIFESTYLE_DISORDER,
    name: 'Lifestyle Disorder Management',
    shortName: 'Lifestyle Disorder',
    slug: 'lifestyle-disorder-management',
    icon: 'fa-balance-scale',
    image: '/images/departments/general-medicine.jpg',
    description: 'At <strong>Amogha – The Ayur Hub</strong>, we provide holistic Ayurvedic care for lifestyle-related disorders, helping you restore balance, prevent complications, and lead a healthier life. Modern lifestyle habits often disrupt the body’s natural rhythm, leading to conditions such as diabetes, hypertension, obesity, thyroid imbalances, PCOS, and digestive disorders. Ayurveda addresses the root cause, not just the symptoms, using natural therapies, diet, and lifestyle modifications.',
    shortDescription: 'Holistic Ayurvedic care for lifestyle-related disorders addressing root causes.',
    treatments: [],
    doctors: ['d1'],
    featured: true
  },
];
