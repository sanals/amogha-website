import { MetadataRoute } from 'next';
import { treatmentsData } from '@/data/treatmentsData';
import { doctorsData } from '@/data/doctorsData';
import { departmentsData } from '@/data/departmentsData';
import { pressData } from '@/data/pressData';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://trymyapp.lovestoblog.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/treatments`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/doctors`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/departments`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/gallery/photos`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/gallery/videos`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/testimonials`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/testimonials/quotes`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/testimonials/videos`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/book-appointment`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  // Dynamic treatment pages
  const treatmentPages: MetadataRoute.Sitemap = treatmentsData.map((treatment) => ({
    url: `${baseUrl}/treatments/${treatment.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Dynamic doctor pages
  const doctorPages: MetadataRoute.Sitemap = doctorsData.map((doctor) => ({
    url: `${baseUrl}/doctors/${doctor.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Dynamic department pages
  const departmentPages: MetadataRoute.Sitemap = departmentsData.map((department) => ({
    url: `${baseUrl}/departments/${department.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Press/Article pages (if press is enabled)
  const pressPages: MetadataRoute.Sitemap = pressData
    .filter((article) => article.url && article.url.startsWith('/press/'))
    .map((article) => ({
      url: `${baseUrl}${article.url}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));

  return [...staticPages, ...treatmentPages, ...doctorPages, ...departmentPages, ...pressPages];
}

