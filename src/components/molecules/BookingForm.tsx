'use client';

import React, { useState, useEffect } from 'react';
import { doctorsData } from '../../data/doctorsData';
import { departmentsData } from '../../data/departmentsData';

interface BookingFormProps {
  className?: string;
  onSubmit?: (formData: BookingFormData) => void;
  showTitle?: boolean;
  preselectedDoctorId?: string;
  selectedDoctor?: { id: string; name: string; title: string } | null;
}

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  department: string;
  doctor: string;
  symptoms: string;
  previousTreatments: string;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  className = '',
  onSubmit,
  showTitle = true,
  preselectedDoctorId,
  selectedDoctor
}) => {
  const doctorId = preselectedDoctorId || selectedDoctor?.id || '';
  
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    department: '',
    doctor: doctorId,
    symptoms: '',
    previousTreatments: ''
  });
  
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Update doctor field when selectedDoctor changes
  useEffect(() => {
    if (selectedDoctor?.id) {
      setFormData(prev => ({
        ...prev,
        doctor: selectedDoctor.id
      }));
    }
  }, [selectedDoctor]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // If changing department, reset doctor selection unless a doctor is preselected
    if (name === 'department' && !doctorId) {
      setFormData(prev => ({
        ...prev,
        [name]: value,
        doctor: ''
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
    
    // Clear error when user types
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    }
    
    if (!formData.preferredDate) {
      errors.preferredDate = 'Please select a preferred date';
    }
    
    if (!formData.preferredTime) {
      errors.preferredTime = 'Please select a preferred time';
    }
    
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    // Call the onSubmit callback if provided
    if (onSubmit) {
      onSubmit(formData);
    } else {
      // Default behavior if no onSubmit provided
      console.log('Booking submitted:', formData);
    }
    
    // Show success message
    setIsSubmitted(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      preferredDate: '',
      preferredTime: '',
      department: '',
      doctor: doctorId,
      symptoms: '',
      previousTreatments: ''
    });
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  // Get available doctors based on selected department
  const availableDoctors = formData.department 
    ? doctorsData.filter(doctor => 
        doctor.specialties.some(specialty => 
          specialty === formData.department))
    : doctorsData;

  return (
    <div className={className}>
      {showTitle && (
        <h2 className="text-2xl font-serif font-bold text-primary dark:text-primary-light mb-6">
          Book an Appointment
        </h2>
      )}

      {selectedDoctor && (
        <div className="mb-6 p-4 bg-primary/5 dark:bg-primary-dark/10 rounded-lg border border-primary/20 dark:border-primary-dark/30">
          <p className="text-sm text-neutral-medium dark:text-neutral-medium mb-1">Selected Doctor:</p>
          <p className="text-lg font-semibold text-primary dark:text-primary-light">
            {selectedDoctor.name} - {selectedDoctor.title}
          </p>
        </div>
      )}
      
      {isSubmitted ? (
        <div className="p-6 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-100 rounded-md">
          <h3 className="text-lg font-medium mb-2">Thank you for your appointment request!</h3>
          <p>We have received your booking request and will confirm your appointment shortly via email or phone.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-neutral-darker dark:text-neutral-light mb-1">
              Full Name*
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-md border ${
                formErrors.name 
                  ? 'border-red-500 dark:border-red-400' 
                  : 'border-neutral-medium dark:border-neutral-dark'
              } bg-neutral-light dark:bg-neutral-darker focus:outline-none focus:ring-2 focus:ring-primary`}
            />
            {formErrors.name && (
              <p className="mt-1 text-red-600 dark:text-red-400 text-sm">{formErrors.name}</p>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-neutral-darker dark:text-neutral-light mb-1">
                Email Address*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-md border ${
                  formErrors.email 
                    ? 'border-red-500 dark:border-red-400' 
                    : 'border-neutral-medium dark:border-neutral-dark'
                } bg-neutral-light dark:bg-neutral-darker focus:outline-none focus:ring-2 focus:ring-primary`}
              />
              {formErrors.email && (
                <p className="mt-1 text-red-600 dark:text-red-400 text-sm">{formErrors.email}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-neutral-darker dark:text-neutral-light mb-1">
                Phone Number*
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-md border ${
                  formErrors.phone 
                    ? 'border-red-500 dark:border-red-400' 
                    : 'border-neutral-medium dark:border-neutral-dark'
                } bg-neutral-light dark:bg-neutral-darker focus:outline-none focus:ring-2 focus:ring-primary`}
              />
              {formErrors.phone && (
                <p className="mt-1 text-red-600 dark:text-red-400 text-sm">{formErrors.phone}</p>
              )}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="preferredDate" className="block text-neutral-darker dark:text-neutral-light mb-1">
                Preferred Date*
              </label>
              <input
                type="date"
                id="preferredDate"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]} // Set min date to today
                className={`w-full px-4 py-2 rounded-md border ${
                  formErrors.preferredDate 
                    ? 'border-red-500 dark:border-red-400' 
                    : 'border-neutral-medium dark:border-neutral-dark'
                } bg-neutral-light dark:bg-neutral-darker focus:outline-none focus:ring-2 focus:ring-primary`}
              />
              {formErrors.preferredDate && (
                <p className="mt-1 text-red-600 dark:text-red-400 text-sm">{formErrors.preferredDate}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="preferredTime" className="block text-neutral-darker dark:text-neutral-light mb-1">
                Preferred Time*
              </label>
              <select
                id="preferredTime"
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-md border ${
                  formErrors.preferredTime 
                    ? 'border-red-500 dark:border-red-400' 
                    : 'border-neutral-medium dark:border-neutral-dark'
                } bg-neutral-light dark:bg-neutral-darker focus:outline-none focus:ring-2 focus:ring-primary`}
              >
                <option value="">Select Time</option>
                <option value="09:00 AM">09:00 AM</option>
                <option value="10:00 AM">10:00 AM</option>
                <option value="11:00 AM">11:00 AM</option>
                <option value="12:00 PM">12:00 PM</option>
                <option value="02:00 PM">02:00 PM</option>
                <option value="03:00 PM">03:00 PM</option>
                <option value="04:00 PM">04:00 PM</option>
                <option value="05:00 PM">05:00 PM</option>
              </select>
              {formErrors.preferredTime && (
                <p className="mt-1 text-red-600 dark:text-red-400 text-sm">{formErrors.preferredTime}</p>
              )}
            </div>
          </div>
          
          {!doctorId && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="department" className="block text-neutral-darker dark:text-neutral-light mb-1">
                  Department
                </label>
                <select
                  id="department"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-neutral-medium dark:border-neutral-dark bg-neutral-light dark:bg-neutral-darker focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select Department</option>
                  {departmentsData.map(dept => (
                    <option key={dept.id} value={dept.id}>
                      {dept.name}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="doctor" className="block text-neutral-darker dark:text-neutral-light mb-1">
                  Preferred Doctor
                </label>
                <select
                  id="doctor"
                  name="doctor"
                  value={formData.doctor}
                  onChange={handleChange}
                  disabled={!!doctorId}
                  className={`w-full px-4 py-2 rounded-md border border-neutral-medium dark:border-neutral-dark bg-neutral-light dark:bg-neutral-darker focus:outline-none focus:ring-2 focus:ring-primary ${
                    doctorId ? 'opacity-60 cursor-not-allowed' : ''
                  }`}
                >
                  <option value="">Any Available Doctor</option>
                  {availableDoctors.map(doctor => (
                    <option key={doctor.id} value={doctor.id}>
                      {doctor.name} - {doctor.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}
          
          <div>
            <label htmlFor="symptoms" className="block text-neutral-darker dark:text-neutral-light mb-1">
              Symptoms or Concerns
            </label>
            <textarea
              id="symptoms"
              name="symptoms"
              value={formData.symptoms}
              onChange={handleChange}
              rows={3}
              className={`w-full px-4 py-2 rounded-md border ${
                formErrors.symptoms 
                  ? 'border-red-500 dark:border-red-400' 
                  : 'border-neutral-medium dark:border-neutral-dark'
              } bg-neutral-light dark:bg-neutral-darker focus:outline-none focus:ring-2 focus:ring-primary`}
              placeholder="Please describe your symptoms or health concerns"
            ></textarea>
          </div>
          
          <div>
            <label htmlFor="previousTreatments" className="block text-neutral-darker dark:text-neutral-light mb-1">
              Previous Treatments (if any)
            </label>
            <textarea
              id="previousTreatments"
              name="previousTreatments"
              value={formData.previousTreatments}
              onChange={handleChange}
              rows={2}
              className={`w-full px-4 py-2 rounded-md border ${
                formErrors.previousTreatments 
                  ? 'border-red-500 dark:border-red-400' 
                  : 'border-neutral-medium dark:border-neutral-dark'
              } bg-neutral-light dark:bg-neutral-darker focus:outline-none focus:ring-2 focus:ring-primary`}
              placeholder="Any previous treatments or medications you've tried"
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="w-full py-3 px-4 bg-primary hover:bg-primary-dark text-white rounded-md transition-colors duration-300 font-medium"
          >
            Request Appointment
          </button>
          
          <p className="text-sm text-neutral-medium text-center mt-4">
            * Our team will confirm your appointment through email or phone within 24 hours.
          </p>
        </form>
      )}
    </div>
  );
}; 