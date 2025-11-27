'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { doctorsData } from '../data/doctorsData';
import { treatmentsData } from '../data/treatmentsData';
import { departmentsData, Department } from '../data/departmentsData';
import { DoctorHero } from '../components/organisms/DoctorHero';
import { DoctorBio } from '../components/organisms/DoctorBio';
import { DoctorTreatments } from '../components/organisms/DoctorTreatments';
import SEO from '../components/atoms/SEO';
import { Treatment } from '../types/treatment';

interface DoctorPageProps {
  params?: { id: string };
}

const DoctorPage: React.FC<DoctorPageProps> = ({ params }) => {
  const router = useRouter();
  const slug = params?.id || '';
  const [doctor, setDoctor] = useState(doctorsData.find(doc => doc.slug === slug));
  const [treatments, setTreatments] = useState<Treatment[]>([]);
  const [specializedDepartments, setSpecializedDepartments] = useState<Department[]>([]);
  
  useEffect(() => {
    // Find the doctor that matches the slug
    const currentDoctor = doctorsData.find(doc => doc.slug === slug);
    setDoctor(currentDoctor);
    
    if (currentDoctor) {
      // Find the treatments this doctor specializes in
      const doctorTreatments = treatmentsData.filter(
        treatment => {
          // Skip treatments without relatedDepartments
          if (!treatment.relatedDepartments || !currentDoctor.specialties) {
            return false;
          }
          
          // Check if any of the doctor's specialties are in the treatment's related departments
          return currentDoctor.specialties.some(specialty => 
            treatment.relatedDepartments!.includes(specialty as any)
          );
        }
      );
      setTreatments(doctorTreatments);
      
      // Find departments related to this doctor's specialties
      if (currentDoctor.specialties) {
        const relatedDepartments = departmentsData.filter(
          department => currentDoctor.specialties!.includes(department.id as any)
        );
        setSpecializedDepartments(relatedDepartments);
      }
    }
  }, [slug, router]);
  
  if (!doctor) {
    // During static generation, return null instead of redirecting
    if (typeof window === 'undefined') {
      return null;
    }
    // Only redirect on client side
    router.push('/doctors');
    return null;
  }
  
  // Create structured data for Physician schema
  const doctorStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    name: `Dr. ${doctor.name}`,
    jobTitle: doctor.title,
    image: doctor.imageUrl,
    description: doctor.bio || `Dr. ${doctor.name} is a specialized Ayurvedic physician at AMOGHA The Ayur Hub.`,
    medicalSpecialty: doctor.specialties?.map((specialty) => ({
      '@type': 'MedicalSpecialty',
      name: specialty,
    })) || [],
    affiliation: {
      '@type': 'MedicalBusiness',
      name: 'AMOGHA The Ayur Hub',
      url: process.env.NEXT_PUBLIC_SITE_URL || 'http://trymyapp.lovestoblog.com',
    },
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://trymyapp.lovestoblog.com'}/doctors/${slug}`,
  };

  return (
    <>
      <SEO 
        title={`Dr. ${doctor.name}`}
        description={`Learn about Dr. ${doctor.name}, a specialized Ayurvedic physician at AMOGHA The Ayur Hub with expertise in ${doctor.specialties ? doctor.specialties.join(', ') : 'Ayurvedic medicine'}.`}
        canonicalUrl={`/doctors/${slug}`}
        structuredData={doctorStructuredData}
      />
      
      <div className="min-h-screen bg-neutral-light dark:bg-neutral-darker">
        <DoctorHero doctor={doctor} departments={specializedDepartments as any} />
        
        <div className="container mx-auto px-4 py-12">
          <DoctorBio doctor={doctor} />
          
          {treatments.length > 0 && (
            <DoctorTreatments 
              doctor={doctor}
              treatments={treatments}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default DoctorPage; 