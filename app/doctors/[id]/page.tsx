import React from 'react';
import DoctorPage from '@/pages/DoctorPage';
import { doctorsData } from '@/data/doctorsData';

export function generateStaticParams() {
  return doctorsData.map((doctor) => ({
    id: doctor.slug || doctor.id,
  }));
}

export default function Page({ params }: { params: { id: string } }) {
  return <DoctorPage params={params} />;
}

