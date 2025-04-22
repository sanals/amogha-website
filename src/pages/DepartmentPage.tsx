import React, { useEffect, useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { departmentsData, Department } from '../data/departmentsData';
import { treatmentsData } from '../data/treatmentsData';
import { doctorsData } from '../data/doctorsData';
import { Treatment } from '../types/treatment';
import { Doctor } from '../types/doctor';
import { Button } from '../components/atoms/Button';

interface DepartmentPageParams {
  slug: string;
}

const DepartmentPage: React.FC = () => {
  const { slug } = useParams<keyof DepartmentPageParams>() as DepartmentPageParams;
  const [department, setDepartment] = useState<Department | undefined>(departmentsData.find(dept => dept.slug === slug));
  const [treatments, setTreatments] = useState<Treatment[]>([]);
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  
  useEffect(() => {
    // Find the department that matches the slug
    const currentDepartment = departmentsData.find(dept => dept.slug === slug);
    setDepartment(currentDepartment);
    
    if (currentDepartment) {
      // Find treatments related to this department
      const relatedTreatments = treatmentsData.filter(
        treatment => currentDepartment.treatments.includes(treatment.id)
      );
      setTreatments(relatedTreatments);
      
      // Find doctors specializing in this department
      const departmentDoctors = doctorsData.filter(
        doctor => currentDepartment.doctors.includes(doctor.id)
      );
      setDoctors(departmentDoctors);
    }
  }, [slug]);
  
  if (!department) {
    return <Navigate to="/departments" replace />;
  }
  
  return (
    <>
      <Helmet>
        <title>{department.name} | AMOGHA The Ayur Hub</title>
        <meta name="description" content={`Learn about our ${department.name} department at AMOGHA The Ayur Hub, offering specialized Ayurvedic treatments and therapies.`} />
      </Helmet>
      
      <div className="min-h-screen bg-neutral-light dark:bg-neutral-darker pt-24 pb-16">
        {/* Department Hero Section */}
        <section className="relative bg-primary dark:bg-primary-dark py-16 mb-12">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center text-white"
            >
              <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                {department.name}
              </h1>
              <p className="text-lg max-w-2xl mx-auto">
                {department.shortDescription}
              </p>
            </motion.div>
          </div>
          {department.image && (
            <div className="absolute inset-0 opacity-20">
              <img 
                src={department.image} 
                alt={department.name} 
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </section>
        
        <div className="container mx-auto px-4">
          {/* Department Details */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-neutral-dark p-8 rounded-lg shadow-md mb-12"
          >
            <h2 className="text-2xl font-serif font-bold text-primary dark:text-primary-light mb-6">
              About {department.name}
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>{department.description}</p>
            </div>
            <div className="mt-6">
              <Link to="/book-appointment">
                <Button variant="primary">Book a Consultation</Button>
              </Link>
            </div>
          </motion.section>
          
          {/* Treatments Section */}
          {treatments.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-serif font-bold text-primary dark:text-primary-light mb-6">
                Treatments in {department.name}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {treatments.map((treatment, index) => (
                  <motion.div
                    key={treatment.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-neutral-dark p-6 rounded-lg shadow-md"
                  >
                    <h3 className="text-xl font-serif font-bold text-primary dark:text-primary-light mb-3">
                      {treatment.name}
                    </h3>
                    <p className="text-neutral-dark dark:text-neutral-light mb-4">
                      {treatment.shortDescription}
                    </p>
                    <div className="flex items-center text-primary dark:text-primary-light">
                      <span className="text-sm font-medium">Duration: {treatment.duration}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}
          
          {/* Doctors Section */}
          {doctors.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-serif font-bold text-primary dark:text-primary-light mb-6">
                Our {department.name} Specialists
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {doctors.map((doctor, index) => (
                  <motion.div
                    key={doctor.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-neutral-dark p-6 rounded-lg shadow-md"
                  >
                    <div className="flex items-center mb-4">
                      <img 
                        src={doctor.imageUrl} 
                        alt={doctor.name} 
                        className="w-16 h-16 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h3 className="text-xl font-serif font-bold text-primary dark:text-primary-light">
                          {doctor.name}
                        </h3>
                        <p className="text-neutral-dark dark:text-neutral-light">
                          {doctor.title}
                        </p>
                      </div>
                    </div>
                    <p className="text-neutral-dark dark:text-neutral-light text-sm mb-4">
                      {doctor.shortBio || doctor.bio.substring(0, 120) + '...'}
                    </p>
                    <Link 
                      to={`/doctors/${doctor.slug || doctor.id}`}
                      className="text-primary dark:text-primary-light font-medium text-sm inline-flex items-center"
                    >
                      View Profile
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <Link to="/book-appointment">
                  <Button variant="primary">Book an Appointment</Button>
                </Link>
              </div>
            </motion.section>
          )}
        </div>
      </div>
    </>
  );
};

export default DepartmentPage; 