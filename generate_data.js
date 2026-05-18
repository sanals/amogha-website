const fs = require('fs');

const treatmentsData = [];
const departmentsData = [];

// Helper
const getSlug = (str) => {
    return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
};

// Data Structures
const depts = [
    {
        id: 'PRE_POSTNATAL',
        name: 'Pre & Postnatal Care',
        shortName: 'Pre & Postnatal Care',
        icon: 'fa-baby',
        image: '/images/departments/womens-health.jpg',
        description: 'At Amogha – The Ayur Hub, we provide holistic pre- and postnatal care designed to support mothers through every stage of pregnancy and beyond. Guided by the ancient wisdom of Ayurveda, our treatments focus on nurturing the mother’s body, calming the mind, and promoting healthy development of the baby.',
        shortDescription: 'Holistic pre- and postnatal care designed to support mothers through every stage of pregnancy and beyond.',
        treatments: [],
        doctors: ['hridhya-rs']
    },
    {
        id: 'SKIN_HAIR_CARE',
        name: 'Skin & Hair Care Treatments',
        shortName: 'Skin & Hair Care',
        icon: 'fa-spa',
        image: '/images/departments/wellness.jpg',
        description: 'Our skin therapies address both the root cause and visible symptoms of skin concerns, promoting clear, healthy, and glowing skin. Ayurveda views hair health as a reflection of internal balance. Our treatments nourish the scalp, strengthen the roots, and promote healthy, lustrous hair.',
        shortDescription: 'Ayurvedic cosmetology addressing the root cause of skin and hair concerns.',
        treatments: [
            { name: 'Acne, pimples & post-acne marks', desc: 'Treatment for acne, pimples & post-acne marks.' },
            { name: 'Pigmentation, tanning & uneven skin tone', desc: 'Treatment for pigmentation, tanning & uneven skin tone.' },
            { name: 'Dryness, dullness & premature aging', desc: 'Treatment for dryness, dullness & premature aging.' },
            { name: 'Psoriasis, eczema & dermatitis', desc: 'Treatment for psoriasis, eczema & dermatitis.' },
            { name: 'Dark circles & under-eye puffiness', desc: 'Treatment for dark circles & under-eye puffiness.' },
            { name: 'Sensitive skin and allergic reactions', desc: 'Treatment for sensitive skin and allergic reactions.' },
            { name: 'Hair fall & hair thinning', desc: 'Treatment for hair fall & hair thinning.' },
            { name: 'Dandruff and itchy scalp', desc: 'Treatment for dandruff and itchy scalp.' },
            { name: 'Premature greying', desc: 'Treatment for premature greying.' },
            { name: 'Dry, frizzy, or damaged hair', desc: 'Treatment for dry, frizzy, or damaged hair.' },
            { name: 'Alopecia and weak hair roots', desc: 'Treatment for alopecia and weak hair roots.' }
        ],
        doctors: ['anil-kaimal']
    },
    {
        id: 'WOMENS_WELLNESS',
        name: 'Women Wellness & Gynaec Care',
        shortName: 'Women Wellness',
        icon: 'fa-venus',
        image: '/images/departments/womens-health.jpg',
        description: 'We offer natural, holistic solutions for a wide range of women’s health concerns by identifying the root cause and restoring dosha balance.',
        shortDescription: 'Natural, holistic solutions for a wide range of women’s health concerns restoring dosha balance.',
        treatments: [
            { name: 'Menstrual irregularities & painful periods', desc: 'Ayurvedic care for menstrual irregularities & painful periods.' },
            { name: 'PCOS / PCOD', desc: 'Ayurvedic care for PCOS / PCOD.' },
            { name: 'Hormonal imbalance', desc: 'Ayurvedic care for hormonal imbalance.' },
            { name: 'Infertility & conception support', desc: 'Ayurvedic care for infertility & conception support.' },
            { name: 'Thyroid-related issues', desc: 'Ayurvedic care for thyroid-related issues.' },
            { name: 'Uterine health concerns', desc: 'Ayurvedic care for uterine health concerns.' },
            { name: 'Vaginal infections & recurrent discomfort', desc: 'Ayurvedic care for vaginal infections & recurrent discomfort.' },
            { name: 'Menopause & perimenopause symptoms', desc: 'Ayurvedic care for menopause & perimenopause symptoms.' }
        ],
        doctors: ['hridhya-rs']
    },
    {
        id: 'PREVENTIVE_WELLNESS',
        name: 'Preventive healthcare and Wellness Programs',
        shortName: 'Preventive & Wellness',
        icon: 'fa-heartbeat',
        image: '/images/departments/general-medicine.jpg',
        description: 'Preventive Care and Wellness Program in Ayurveda focuses on maintaining health, preventing disease, and promoting long life by living in harmony with nature. Ayurveda emphasizes “Swasthasya Swasthya Rakshanam”—protecting the health of the healthy.',
        shortDescription: 'Focus on maintaining health, preventing disease, and promoting long life by living in harmony with nature.',
        treatments: [],
        doctors: ['rahul-unnithan']
    },
    {
        id: 'PAIN_SPORTS',
        name: 'Pain & Sports Injury Management',
        shortName: 'Pain & Sports Injury',
        icon: 'fa-running',
        image: '/images/departments/sports-medicine.jpg',
        description: 'At Amogha – The Ayur Hub, our aim is not just to relieve pain but to help you return to your daily activities with renewed strength and confidence. Experience natural healing that supports the body’s own recovery power—gently, effectively, and holistically.',
        shortDescription: 'Relieve pain and help you return to daily activities with natural healing.',
        treatments: [
            { name: 'Neck, shoulder & back pain', desc: 'Treatment for neck, shoulder & back pain.' },
            { name: 'Knee pain & osteoarthritis', desc: 'Treatment for knee pain & osteoarthritis.' },
            { name: 'Sciatica & nerve pain', desc: 'Treatment for sciatica & nerve pain.' },
            { name: 'Slip disc & spondylosis', desc: 'Treatment for slip disc & spondylosis.' },
            { name: 'Rheumatoid & osteo arthritis', desc: 'Treatment for rheumatoid & osteo arthritis.' },
            { name: 'Fibromyalgia & chronic pain', desc: 'Treatment for fibromyalgia & chronic pain.' },
            { name: 'Migraine & tension headaches', desc: 'Treatment for migraine & tension headaches.' },
            { name: 'Muscle stiffness & general body pain', desc: 'Treatment for muscle stiffness & general body pain.' }
        ],
        doctors: ['sreejith-pc']
    },
    {
        id: 'MENTAL_WELLNESS',
        name: 'Mental Wellness & Stress Management',
        shortName: 'Mental Wellness',
        icon: 'fa-brain',
        image: '/images/departments/general-medicine.jpg',
        description: 'At Amogha – The Ayur Hub, we understand that mental well-being is as important as physical health. In today’s fast-paced world, stress, anxiety, and emotional imbalance can easily disrupt daily life. Drawing from the timeless wisdom of Ayurveda, our Mental Wellness & Stress Management programs focus on calming the mind, balancing the doshas, and restoring emotional harmony.',
        shortDescription: 'Calming the mind, balancing doshas, and restoring emotional harmony.',
        treatments: [],
        doctors: ['neena-ravindran']
    },
    {
        id: 'ANORECTAL',
        name: 'Anorectal Care',
        shortName: 'Anorectal Care',
        icon: 'fa-procedures',
        image: '/images/departments/sports-medicine.jpg',
        description: 'At Amogha – The Ayur Hub, we offer safe and effective Ayurvedic treatments for common anorectal conditions using gentle, root-cause healing methods. Our therapies help reduce pain, inflammation, and discomfort while improving digestive health and long-term wellness.',
        shortDescription: 'Safe and effective Ayurvedic treatments for common anorectal conditions.',
        treatments: [
            { name: 'Piles (Haemorrhoids)', desc: 'Minimally invasive Ayurvedic treatments for hemorrhoids without surgery.' },
            { name: 'Fissure', desc: 'Ayurvedic therapies and Kshara treatment for fissures.' },
            { name: 'Fistula', desc: 'Ksharasutra treatment for fistula-in-ano ensuring permanent cure without aggressive surgery.' }
        ],
        doctors: ['sreejith-pc']
    },
    {
        id: 'PANCHAKARMA_DETOX',
        name: 'Panchakarma & Detox Therapies',
        shortName: 'Panchakarma',
        icon: 'fa-spa',
        image: '/images/departments/wellness.jpg',
        description: 'At Amogha – The Ayur Hub, we offer authentic Panchakarma and detox therapies that combine the wisdom of Ayurveda with modern understanding of wellness. These treatments are designed to eliminate toxins, restore dosha balance, improve immunity, and rejuvenate both body and mind.',
        shortDescription: 'Authentic therapies designed to eliminate toxins, restore dosha balance, and rejuvenate body and mind.',
        treatments: [
            { name: 'Virechana (Purgation Therapy)', desc: 'Cleanses the liver and digestive system, improves metabolism, and removes excess Pitta.' },
            { name: 'Vamana (Emesis)', desc: 'Vamana is a therapeutic vomiting procedure in Panchakarma aimed at cleansing the body of excess Kapha dosha and toxins from the respiratory and digestive systems.' },
            { name: 'Basti (Medicated Enema Therapy)', desc: 'Balances Vata dosha, strengthens the colon, and alleviates chronic pain, constipation, and neurological disorders.' },
            { name: 'Nasya (Nasal Therapy)', desc: 'Administers herbal oils through the nasal passages to detoxify the head and sinuses, enhancing mental clarity and reducing stress.' },
            { name: 'Raktamokshana (Blood Detox)', desc: 'Purifies blood, improves circulation, and helps manage chronic skin and inflammatory conditions.' }
        ],
        doctors: ['rahul-unnithan', 'nandu-ms']
    },
    {
        id: 'LIFESTYLE_DISORDER',
        name: 'Lifestyle Disorder Management',
        shortName: 'Lifestyle Disorder',
        icon: 'fa-balance-scale',
        image: '/images/departments/general-medicine.jpg',
        description: 'At Amogha – The Ayur Hub, we provide holistic Ayurvedic care for lifestyle-related disorders, helping you restore balance, prevent complications, and lead a healthier life. Modern lifestyle habits often disrupt the body’s natural rhythm, leading to conditions such as diabetes, hypertension, obesity, thyroid imbalances, PCOS, and digestive disorders. Ayurveda addresses the root cause, not just the symptoms, using natural therapies, diet, and lifestyle modifications.',
        shortDescription: 'Holistic Ayurvedic care for lifestyle-related disorders addressing root causes.',
        treatments: [],
        doctors: ['anil-kaimal']
    }
];

depts.forEach(dept => {
    const deptTreatmentIds = [];
    
    dept.treatments.forEach(t => {
        const tId = getSlug(t.name);
        deptTreatmentIds.push(tId);
        
        treatmentsData.push({
            id: tId,
            name: t.name,
            slug: tId,
            icon: dept.icon,
            image: `/images/treatments/${dept.id.toLowerCase().replace(/_/g, '-')}.jpg`,
            imageUrl: `/images/treatments/${dept.id.toLowerCase().replace(/_/g, '-')}.jpg`,
            iconUrl: `/src/assets/icons/${dept.icon.replace('fa-', '')}.svg`,
            description: t.desc,
            shortDescription: t.desc,
            benefits: [
                'Addresses the root cause of the specific condition',
                'Promotes natural healing through Ayurvedic principles',
                'Customized treatment based on individual dosha'
            ],
            category: `TreatmentCategory.${dept.id}`,
            duration: 'Variable based on condition severity',
            relatedDepartments: [`TreatmentCategory.${dept.id}`],
            featured: false,
            isPopular: false
        });
    });

    departmentsData.push({
        id: `TreatmentCategory.${dept.id}`,
        name: dept.name,
        shortName: dept.shortName,
        slug: getSlug(dept.name),
        icon: dept.icon,
        image: dept.image,
        description: dept.description,
        shortDescription: dept.shortDescription,
        treatments: deptTreatmentIds,
        doctors: dept.doctors,
        featured: true
    });
});

let treatmentsSrc = `import { Treatment, TreatmentCategory } from '../types/treatment';\n\nexport const treatmentsData: Treatment[] = [\n`;
treatmentsData.forEach(t => {
    treatmentsSrc += `  {\n`;
    treatmentsSrc += `    id: '${t.id}',\n`;
    treatmentsSrc += `    name: '${t.name.replace(/'/g, "\\'")}',\n`;
    treatmentsSrc += `    slug: '${t.slug}',\n`;
    treatmentsSrc += `    icon: '${t.icon}',\n`;
    treatmentsSrc += `    image: '${t.image}',\n`;
    treatmentsSrc += `    imageUrl: '${t.imageUrl}',\n`;
    treatmentsSrc += `    iconUrl: '${t.iconUrl}',\n`;
    treatmentsSrc += `    description: '${t.description.replace(/'/g, "\\'")}',\n`;
    treatmentsSrc += `    shortDescription: '${t.shortDescription.replace(/'/g, "\\'")}',\n`;
    treatmentsSrc += `    benefits: [\n${t.benefits.map(b => `      '${b}'`).join(',\n')}\n    ],\n`;
    treatmentsSrc += `    category: ${t.category},\n`;
    treatmentsSrc += `    duration: '${t.duration}',\n`;
    treatmentsSrc += `    relatedDepartments: [${t.relatedDepartments.join(', ')}],\n`;
    treatmentsSrc += `    featured: ${t.featured},\n`;
    treatmentsSrc += `    isPopular: ${t.isPopular}\n`;
    treatmentsSrc += `  },\n`;
});
treatmentsSrc += `];\n`;

let departmentsSrc = `import { TreatmentCategory } from '../types/treatment';\n\nexport interface Department {\n  id: TreatmentCategory | string;\n  name: string;\n  shortName: string;\n  slug: string;\n  icon: string;\n  image?: string;\n  description: string;\n  shortDescription: string;\n  treatments: string[];\n  doctors: string[];\n  featured: boolean;\n}\n\nexport const departmentsData: Department[] = [\n`;
departmentsData.forEach(d => {
    departmentsSrc += `  {\n`;
    departmentsSrc += `    id: ${d.id},\n`;
    departmentsSrc += `    name: '${d.name.replace(/'/g, "\\'")}',\n`;
    departmentsSrc += `    shortName: '${d.shortName.replace(/'/g, "\\'")}',\n`;
    departmentsSrc += `    slug: '${d.slug}',\n`;
    departmentsSrc += `    icon: '${d.icon}',\n`;
    departmentsSrc += `    image: '${d.image}',\n`;
    departmentsSrc += `    description: '${d.description.replace(/'/g, "\\'")}',\n`;
    departmentsSrc += `    shortDescription: '${d.shortDescription.replace(/'/g, "\\'")}',\n`;
    departmentsSrc += `    treatments: [${d.treatments.map(id => `'${id}'`).join(', ')}],\n`;
    departmentsSrc += `    doctors: [${d.doctors.map(id => `'${id}'`).join(', ')}],\n`;
    departmentsSrc += `    featured: ${d.featured}\n`;
    departmentsSrc += `  },\n`;
});
departmentsSrc += `];\n`;

fs.writeFileSync('./src/data/treatmentsData.ts', treatmentsSrc);
fs.writeFileSync('./src/data/departmentsData.ts', departmentsSrc);
console.log('Successfully generated treatmentsData.ts and departmentsData.ts');
