import React from 'react';
import DepartmentPage from '@/pages/DepartmentPage';

export default function Page({ params }: { params: { id: string } }) {
  return <DepartmentPage params={params} />;
}

