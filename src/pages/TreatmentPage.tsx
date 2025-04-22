import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { treatmentsData } from '../data/treatmentsData';
import { departmentsData } from '../data/departmentsData';
import { TreatmentHero } from '../components/organisms/TreatmentHero';
import { TreatmentDetails } from '../components/organisms/TreatmentDetails';
import { TreatmentBenefits } from '../components/organisms/TreatmentBenefits';
import { RelatedTreatments } from '../components/organisms/RelatedTreatments';

interface TreatmentPageParams {
  slug: string;
}

const TreatmentPage: React.FC = () => {
  const { slug } = useParams<keyof TreatmentPageParams>() as TreatmentPageParams;
  const [treatment, setTreatment] = useState(treatmentsData.find(t => t.slug === slug));
  const [relatedTreatments, setRelatedTreatments] = useState([]);
  const [department, setDepartment] = useState(null);
  
  useEffect(() => {
    // Find the treatment that matches the slug
    const currentTreatment = treatmentsData.find(t => t.slug === slug);
    setTreatment(currentTreatment);
    
    if (currentTreatment) {
      // Find related treatments (from same category or related departments)
      const related = treatmentsData.filter(t => 
        t.id !== currentTreatment.id && (
          t.category === currentTreatment.category ||
          (currentTreatment.relatedDepartments && 
           t.relatedDepartments && 
           t.relatedDepartments.some(dept => 
             currentTreatment.relatedDepartments.includes(dept)
           ))
        )
      ).slice(0, 4); // Limit to 4 related treatments
      
      setRelatedTreatments(related);
      
      // Find the primary department for this treatment
      if (currentTreatment.relatedDepartments && currentTreatment.relatedDepartments.length > 0) {
        const primaryDept = departmentsData.find(
          dept => dept.id === currentTreatment.relatedDepartments[0]
        );
        setDepartment(primaryDept || null);
      }
    }
  }, [slug]);
  
  if (!treatment) {
    return <Navigate to="/treatments" replace />;
  }
  
  return (
    <>
      <Helmet>
        <title>{treatment.name} | AMOGHA The Ayur Hub</title>
        <meta name="description" content={treatment.shortDescription} />
      </Helmet>
      
      <div className="min-h-screen bg-neutral-light dark:bg-neutral-darker">
        <TreatmentHero treatment={treatment} department={department} />
        
        <div className="container mx-auto px-4 py-12">
          <TreatmentDetails treatment={treatment} />
          
          {treatment.benefits && treatment.benefits.length > 0 && (
            <TreatmentBenefits benefits={treatment.benefits} />
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