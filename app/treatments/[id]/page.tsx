import React from 'react';
import TreatmentDetailPage from '@/pages/TreatmentDetailPage';
import { treatmentsData } from '@/data/treatmentsData';

export function generateStaticParams() {
  return treatmentsData.map((treatment) => ({
    id: treatment.slug || treatment.id,
  }));
}

export default function Page({ params }: { params: { id: string } }) {
  return <TreatmentDetailPage params={params} />;
}

