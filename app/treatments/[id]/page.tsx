import React from 'react';
import TreatmentDetailPage from '@/pages/TreatmentDetailPage';

export default function Page({ params }: { params: { id: string } }) {
  return <TreatmentDetailPage params={params} />;
}

