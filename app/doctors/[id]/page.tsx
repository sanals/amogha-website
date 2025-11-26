import React from 'react';
import DoctorPage from '@/pages/DoctorPage';

export default function Page({ params }: { params: { id: string } }) {
  return <DoctorPage params={params} />;
}

