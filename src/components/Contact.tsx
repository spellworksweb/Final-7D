import React, { useState, useEffect } from 'react';
import { Loader2, CheckCircle2, XCircle, AlertCircle } from 'lucide-react';
import { toast, Toaster } from 'react-hot-toast';
import { supabase } from '../lib/supabase';

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookedSlots, setBookedSlots] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    mobileNumber: '',
    vehicleType: '',
    serviceType: '',
    preferredDate: '',
    preferredTime: '',
    additionalInfo: ''
  });
  
  // Get today's date in YYYY-MM-DD format for min date attribute
  const today = new Date().toISOString().split('T')[0];
  
  // Generate time slots from 10:30 AM to 6:30 PM with 1-hour intervals
  const timeSlots = [
    "10:30",
    "11:30",
    "12:30",
    "13:30",
    "14:30",
    "15:30",
    "16:30",
    "17:30",
    "18:30"
  ];

  const vehicleTypes = [
    { value: 'hatchback', label: 'Hatchback' },
    { value: 'sedan-suv', label: 'Sedan/SUV' },
    { value: 'xuv', label: 'XUV' }
  ];

  const services = [
    { value: 'basic-wash', label: 'Basic Wash' },
    { value: 'standard-wash', label: 'Standard Wash' },
    { value: 'premium-wash', label: 'Premium Wash' },
    { value: 'ceramic-coating', label: 'Ceramic Coating' },
    { value: 'graphene-coating', label: 'Graphene Coating' },
    { value: 'chassis-coating', label: 'Under Chassis Painting' },
    { value: 'silencer-coating', label: 'Silencer Painting' }
  ];

  // Custom toast styles
  const toastStyles = {
    success: {
      style: {
        background: '#1E1E1E',
        color: '#FFD700',
        border: '1px solid #FFD700',
        padding: '16px',
        borderRadius: '8px',
      },
      icon: <CheckCircle2 className="w-6 h-6 text-green-500" />,
      duration: 5000,
    },
    error: {
      style: {
        background: '#1E1E1E',
        color: '#FF4B4B',
        border: '1px solid #FF4B4B',
        padding: '16px',
        borderRadius: '8px',
      },
      icon: <XCircle className="w-6 h-6 text-red-500" />,
      duration: 5000,
    },
    warning: {
      style: {
        background: '#1E1E1E',
        color: '#FFD700',
        border: '1px solid #FFD700',
        padding: '16px',
        borderRadius: '8px',
      },
      icon: <AlertCircle className="w-6 h-6 text-yellow-500" />,
      duration: 5000,
    },
  };

  // Custom toast notifications
  const showToast = (type: 'success' | 'error' | 'warning', message: string) => {
    const { style, icon, duration } = toastStyles[type];
    toast.custom(
      <div className="flex items-center space-x-3" style={style}>
        {icon}
        <p className="font-medium">{message}</p>
      </div>,
      { duration }
    );
  };

  useEffect(() => {
    if (formData.preferredDate) {
      fetchBookedSlots(formData.preferredDate);
    }
  }, [formData.preferredDate]);

  const fetchBookedSlots = async (date: string) => {
    try {
      const { data, error } = await supabase
        .from('appointments')
        .select('preferred_time')
        .eq('preferred_date', date);

      if (error) throw error;

      setBookedSlots(data?.map(appointment => appointment.preferred_time) || []);
    } catch (error) {
      console.error('Error fetching booked slots:', error);
      showToast('error', 'Failed to fetch available time slots. Please try again.');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.mobileNumber || !formData.vehicleType || !formData.serviceType || !formData.preferredDate || !formData.preferredTime) {
      showToast('warning', 'Please fill in all required fields');
      return;
    }

    // Basic mobile number validation
    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(formData.mobileNumber)) {
      showToast('warning', 'Please enter a valid 10-digit mobile number');
      return;
    }

    setIsSubmitting(true);

    try {
      // Check if slot is still available
      const { data: existingBookings } = await supabase
        .from('appointments')
        .select('id')
        .eq('preferred_date', formData.preferredDate)
        .eq('preferred_time', formData.preferredTime);

      if (existingBookings && existingBookings.length > 0) {
        showToast('warning', 'This time slot has just been booked. Please select another time.');
        await fetchBookedSlots(formData.preferredDate);
        setIsSubmitting(false);
        return;
      }

      const { error } = await supabase
        .from('appointments')
        .insert([
          {
            name: formData.name,
            mobile_number: formData.mobileNumber,
            vehicle_type: formData.vehicleType,
            service_type: formData.serviceType,
            preferred_date: formData.preferredDate,
            preferred_time: formData.preferredTime,
            additional_info: formData.additionalInfo
          }
        ]);

      if (error) throw error;

      showToast('success', '✨ Appointment booked successfully! We look forward to serving you.');
      
      // Reset form
      setFormData({
        name: '',
        mobileNumber: '',
        vehicleType: '',
        serviceType: '',
        preferredDate: '',
        preferredTime: '',
        additionalInfo: ''
      });

      // Refresh booked slots
      await fetchBookedSlots(formData.preferredDate);
    } catch (error) {
      console.error('Error booking appointment:', error);
      showToast('error', 'Failed to book appointment. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-dark-lighter">
      <Toaster 
        position="top-center"
        toastOptions={{
          duration: 5000,
          style: {
            background: '#1E1E1E',
            color: '#FFD700',
          },
        }}
      />
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Book an <span className="text-gold">Appointment</span>
        </h2>
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-card p-8 rounded-lg shadow-inner-light">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name *</label>
                  <input
                    type="text"
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full p-3 bg-dark-darker/50 border border-white/10 rounded-lg focus:outline-none focus:border-gold transition-colors text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Mobile Number *</label>
                  <input
                    type="tel"
                    required
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    placeholder="10-digit mobile number"
                    maxLength={10}
                    className="w-full p-3 bg-dark-darker/50 border border-white/10 rounded-lg focus:outline-none focus:border-gold transition-colors text-white"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Vehicle Type *</label>
                  <select 
                    required
                    name="vehicleType"
                    value={formData.vehicleType}
                    onChange={handleChange}
                    className="w-full p-3 bg-dark-darker/50 border border-white/10 rounded-lg focus:outline-none focus:border-gold transition-colors text-white"
                  >
                    <option value="">Select vehicle type</option>
                    {vehicleTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Service Type *</label>
                  <select 
                    required
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full p-3 bg-dark-darker/50 border border-white/10 rounded-lg focus:outline-none focus:border-gold transition-colors text-white"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service.value} value={service.value}>
                        {service.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Preferred Date *</label>
                  <input
                    type="date"
                    required
                    name="preferredDate"
                    min={today}
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="w-full p-3 bg-dark-darker/50 border border-white/10 rounded-lg focus:outline-none focus:border-gold transition-colors text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Preferred Time *</label>
                  <select 
                    required
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full p-3 bg-dark-darker/50 border border-white/10 rounded-lg focus:outline-none focus:border-gold transition-colors text-white"
                  >
                    <option value="">Select time</option>
                    {timeSlots.map((time) => {
                      const isBooked = bookedSlots.includes(time);
                      return (
                        <option 
                          key={time} 
                          value={time}
                          disabled={isBooked}
                        >
                          {time} {isBooked ? '(Booked)' : ''}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Additional Information</label>
                <textarea
                  rows={4}
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  className="w-full p-3 bg-dark-darker/50 border border-white/10 rounded-lg focus:outline-none focus:border-gold transition-colors"
                  placeholder="Vehicle details, special requests, or any other information..."
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gold text-dark-darker px-8 py-3 rounded-full font-bold hover:bg-gold-light transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Booking...
                  </>
                ) : (
                  'Book Appointment'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;