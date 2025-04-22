export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface FAQCategory {
  id: string;
  title: string;
  description: string;
  faqs: FAQ[];
}

export const faqData: FAQCategory[] = [
  {
    id: 'general',
    title: 'About Ayurveda',
    description: 'Common questions about Ayurvedic principles and philosophy',
    faqs: [
      {
        id: 'general-1',
        question: 'What is Ayurveda?',
        answer: "Ayurveda is a traditional system of medicine that originated in India more than 5,000 years ago. The term comes from Sanskrit: 'ayur' meaning life and 'veda' meaning knowledge. It's based on the belief that health and wellness depend on a balance between mind, body, and spirit. Ayurveda emphasizes prevention and holistic healing approaches."
      },
      {
        id: 'general-2',
        question: 'What are the three doshas in Ayurveda?',
        answer: "The three doshas are Vata (space and air), Pitta (fire and water), and Kapha (water and earth). Each person has a unique combination of these three doshas, which determines their physical and psychological characteristics. Balance of these doshas is essential for good health according to Ayurvedic principles."
      },
      {
        id: 'general-3',
        question: 'How does Ayurveda differ from conventional Western medicine?',
        answer: "While Western medicine often focuses on treating specific symptoms or diseases, Ayurveda takes a holistic approach that considers a person's entire physical, mental, and spiritual wellbeing. Ayurveda emphasizes prevention, lifestyle adjustments, natural remedies, and personalized treatment plans based on an individual's unique constitution (dosha balance)."
      }
    ]
  },
  {
    id: 'treatments',
    title: 'Ayurvedic Treatments',
    description: 'Information about our various Ayurvedic treatments and procedures',
    faqs: [
      {
        id: 'treatments-1',
        question: 'What is Panchakarma therapy?',
        answer: "Panchakarma is a cleansing and rejuvenating program for the body, mind, and consciousness. It involves five (pancha) therapeutic treatments (karma) that remove toxins from the body. These include Vamana (therapeutic emesis), Virechana (purgation), Basti (enema therapy), Nasya (nasal administration), and Raktamokshana (bloodletting)."
      },
      {
        id: 'treatments-2',
        question: 'How long does a typical Ayurvedic treatment program last?',
        answer: "The duration of Ayurvedic treatments varies based on individual needs and conditions. Basic treatments can range from 7-14 days, while comprehensive programs, especially for chronic conditions, may require 21-28 days. Some specialized Panchakarma treatments may extend up to 45 days for optimal results."
      },
      {
        id: 'treatments-3',
        question: 'Are Ayurvedic treatments painful?',
        answer: "Most Ayurvedic treatments are gentle and relaxing. Therapies like Abhyanga (oil massage), Shirodhara (oil pouring), and herbal steam baths are typically soothing. Some detoxification procedures might cause temporary discomfort, but our experienced therapists ensure the process is as comfortable as possible."
      },
      {
        id: 'treatments-4',
        question: 'What conditions can be treated with Ayurveda?',
        answer: "Ayurveda addresses a wide range of conditions including digestive disorders, respiratory issues, stress-related problems, skin conditions, metabolic disorders, musculoskeletal pain, neurological issues, and chronic diseases like arthritis and diabetes. It's also effective for general wellness, detoxification, and rejuvenation."
      }
    ]
  },
  {
    id: 'clinic',
    title: 'Our Clinic',
    description: 'Questions about our facilities and services at AMOGHA The Ayur Hub',
    faqs: [
      {
        id: 'clinic-1',
        question: 'What credentials do your Ayurvedic doctors have?',
        answer: "All our doctors hold recognized degrees in Ayurvedic medicine (BAMS - Bachelor of Ayurvedic Medicine and Surgery) from accredited institutions. Many have additional specializations (MD in Ayurveda) and years of clinical experience. Our team regularly participates in continuing education to stay updated with the latest research and practices."
      },
      {
        id: 'clinic-2',
        question: 'Do you provide accommodation for patients undergoing treatment?',
        answer: "Yes, we offer comfortable accommodations for patients undergoing treatments. Our rooms are designed to create a healing environment with natural ventilation, tranquil views, and amenities that support the Ayurvedic lifestyle during treatment. Options range from standard to deluxe rooms based on your preferences."
      },
      {
        id: 'clinic-3',
        question: 'What kind of food is served during treatment?',
        answer: "We serve fresh, organic, sattvic (pure) food prepared according to Ayurvedic principles. Meals are customized based on individual dosha types and specific treatment protocols. Our kitchen avoids processed ingredients, excessive spices, and follows seasonal cooking practices to support the healing process."
      }
    ]
  },
  {
    id: 'practical',
    title: 'Practical Information',
    description: 'Practical details about appointments, payments, and preparations',
    faqs: [
      {
        id: 'practical-1',
        question: 'How do I prepare for an Ayurvedic consultation?',
        answer: "Come with a detailed health history, including any medical reports and current medications. Avoid heavy meals before the consultation. Be prepared to discuss your lifestyle, diet, sleep patterns, and emotional well-being, as these are all important aspects of Ayurvedic diagnosis."
      },
      {
        id: 'practical-2',
        question: 'What should I bring for my treatment stay?',
        answer: "Bring comfortable, loose-fitting cotton clothing, personal toiletries (preferably natural products), any prescription medications, medical reports, comfortable walking shoes, and items for relaxation like books or meditation supplies. We provide specialized Ayurvedic toiletries, treatment garments, and yoga mats."
      },
      {
        id: 'practical-3',
        question: 'Do you accept insurance for Ayurvedic treatments?',
        answer: "Insurance coverage for Ayurvedic treatments varies by provider. We recommend checking with your insurance company regarding coverage for complementary and alternative medicine. We provide detailed receipts and treatment documentation to support insurance claims."
      },
      {
        id: 'practical-4',
        question: 'How can I book an appointment?',
        answer: "You can book an appointment through our website using the online booking form, by calling our reception desk, or by sending an email to our patient coordination team. We recommend booking in advance, especially for comprehensive treatment programs that require accommodation."
      },
      {
        id: 'practical-5',
        question: 'What happens during the first consultation?',
        answer: "The first consultation typically lasts 45-60 minutes. The doctor will take a detailed medical history, assess your constitution (prakriti), current imbalances (vikriti), pulse, tongue, eyes, and other diagnostic indicators. Based on this assessment, they will recommend a personalized treatment plan, dietary adjustments, and lifestyle modifications."
      }
    ]
  }
]; 