'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import SEO from '../components/atoms/SEO';
import { treatmentsData } from '../data/treatmentsData';
import { departmentsData } from '../data/departmentsData';
import { TreatmentHero } from '../components/organisms/TreatmentHero';
import { TreatmentDetails } from '../components/organisms/TreatmentDetails';
import { TreatmentBenefits } from '../components/organisms/TreatmentBenefits';
import { RelatedTreatments } from '../components/organisms/RelatedTreatments';
import { Treatment } from '../types/treatment';
import { Department } from '../types/department';

interface TreatmentDetailPageProps {
  params?: { id: string };
}

const TreatmentDetailPage: React.FC<TreatmentDetailPageProps> = ({ params }) => {
  const router = useRouter();
  const id = params?.id || '';
  const [currentTreatment, setCurrentTreatment] = useState<Treatment | null>(null);
  const [relatedTreatments, setRelatedTreatments] = useState<Treatment[]>([]);
  const [relatedDepartment, setRelatedDepartment] = useState<Department | null>(null);
  
  useEffect(() => {
    // Find the treatment that matches the slug (id parameter)
    const treatment = treatmentsData.find(t => t.slug === id || t.id === id);
    
    if (treatment) {
      setCurrentTreatment(treatment);
      
      // Find related treatments (from same category or related departments)
      const related = treatmentsData.filter(
        t => t.id !== treatment.id &&
          treatment.relatedDepartments &&
          t.relatedDepartments &&
          t.relatedDepartments.some(dep => treatment.relatedDepartments!.includes(dep))
      );
      setRelatedTreatments(related);
      
      // Find related department
      if (treatment.relatedDepartments && treatment.relatedDepartments.length > 0) {
        const dept = departmentsData.find(d => d.id === treatment.relatedDepartments![0]);
        setRelatedDepartment(dept || null);
      }
    } else {
      // If treatment not found, redirect to treatments page
      router.push('/treatments');
    }
  }, [id, router]);
  
  if (!currentTreatment) {
    return null;
  }
  
  return (
    <>
      <SEO 
        title={`${currentTreatment.name} | Ayurvedic Treatment`}
        description={currentTreatment.shortDescription || `Learn about ${currentTreatment.name}, a traditional Ayurvedic treatment offered at AMOGHA The Ayur Hub.`}
        keywords={`${currentTreatment.name}, ayurvedic treatment, ayurveda therapy, natural healing, ${currentTreatment.category}`}
      />
      
      <div className="min-h-screen bg-neutral-light dark:bg-neutral-darker">
        <TreatmentHero treatment={currentTreatment} department={relatedDepartment} />
        
        <div className="container mx-auto px-4 py-12">
          <TreatmentDetails treatment={currentTreatment} />
          
          {currentTreatment.benefits && currentTreatment.benefits.length > 0 && (
            <TreatmentBenefits benefits={currentTreatment.benefits} />
          )}
          
          {relatedTreatments.length > 0 && (
            <RelatedTreatments treatments={relatedTreatments} />
          )}
        </div>
      </div>
    </>
  );
};

export default TreatmentDetailPage; 