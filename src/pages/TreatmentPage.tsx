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

interface TreatmentPageProps {
  params?: { slug: string };
}

const TreatmentPage: React.FC<TreatmentPageProps> = ({ params }) => {
  const router = useRouter();
  const slug = params?.slug || '';
  const [currentTreatment, setCurrentTreatment] = useState<any>(null);
  const [relatedTreatments, setRelatedTreatments] = useState<any[]>([]);
  const [relatedDepartment, setRelatedDepartment] = useState<any>(null);
  
  useEffect(() => {
    // Find the treatment that matches the slug
    const currentTreatment = treatmentsData.find(t => t.slug === slug);
    setCurrentTreatment(currentTreatment);
    
    if (currentTreatment) {
      // Find related treatments (from same category or related departments)
      setRelatedTreatments(
        treatmentsData.filter(
          t => t.id !== currentTreatment.id &&
            currentTreatment.relatedDepartments &&
            t.relatedDepartments &&
            t.relatedDepartments.some(dep => currentTreatment.relatedDepartments!.includes(dep))
        )
      );
      setRelatedDepartment(
        currentTreatment.relatedDepartments && currentTreatment.relatedDepartments.length > 0
          ? departmentsData.find(d => d.id === currentTreatment.relatedDepartments![0]) || null
          : null
      );
    }
  }, [slug, router]);
  
  if (!currentTreatment) {
    router.push('/treatments');
    return null;
  }
  
  return (
    <>
      <SEO 
        title="Treatments & Therapies"
        description="Explore our range of authentic Ayurvedic treatments and therapies at AMOGHA The Ayur Hub. Discover holistic healing for mind, body, and spirit."
        canonicalUrl="/treatments"
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

export default TreatmentPage; 