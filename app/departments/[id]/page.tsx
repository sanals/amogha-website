import React from 'react';
import DepartmentPage from '@/pages/DepartmentPage';
import { departmentsData } from '@/data/departmentsData';

export function generateStaticParams() {
  return departmentsData.map((department) => ({
    id: department.slug || department.id,
  }));
}

export default function Page({ params }: { params: { id: string } }) {
  return <DepartmentPage params={params} />;
}

