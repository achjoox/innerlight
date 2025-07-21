import React, { useState } from 'react';
import { X, Calendar, User, Mail, Phone, CreditCard, Building, Check } from 'lucide-react';

interface BookingModalProps {
  package: any;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ package: pkg, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    partnerFirstName: '',
    partnerLastName: '',
    checkInDate: '',
    checkOutDate: '',
    paymentMethod: '',
    specialRequests: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    // Here you would normally process the booking
    setStep(4); // Show confirmation
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Book {pkg.name}</h2>
            <p className="text-gray-600">{pkg.duration} • ${pkg.price} per couple</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              {[1, 2, 3, 4].map((stepNum) => (
                <div 
                  key={stepNum}
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                    stepNum <= step 
                      ? 'bg-emerald-500 text-white' 
                      : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {stepNum < step ? <Check className="h-4 w-4" /> : stepNum}
                </div>
              ))}
            </div>
            <div className="flex justify-between text-xs text-gray-500">
              <span>Personal Info</span>
              <span>Travel Dates</span>
              <span>Payment</span>
              <span>Confirmation</span>
            </div>
          </div>

          {/* Step 1: Personal Information */}
          {step === 1 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                <User className="h-5 w-5 mr-2 text-emerald-600" />
                Personal Information
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    required
                  />
                </div>
              </div>

              <div className="border-t pt-6">
                <h4 className="text-lg font-medium text-gray-900 mb-4">Partner Information</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Partner First Name</label>
                    <input
                      type="text"
                      name="partnerFirstName"
                      value={formData.partnerFirstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Partner Last Name</label>
                    <input
                      type="text"
                      name="partnerLastName"
                      value={formData.partnerLastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Travel Dates */}
          {step === 2 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-emerald-600" />
                Travel Dates
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Check-in Date</label>
                  <input
                    type="date"
                    name="checkInDate"
                    value={formData.checkInDate}
                    onChange={handleInputChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Check-out Date</label>
                  <input
                    type="date"
                    name="checkOutDate"
                    value={formData.checkOutDate}
                    onChange={handleInputChange}
                    min={formData.checkInDate}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Special Requests (Optional)</label>
                <textarea
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Any special dietary requirements, accessibility needs, or celebration occasions..."
                />
              </div>
            </div>
          )}

          {/* Step 3: Payment */}
          {step === 3 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                <CreditCard className="h-5 w-5 mr-2 text-emerald-600" />
                Payment Method
              </h3>
              
              <div className="space-y-4">
                <div className="border border-gray-300 rounded-lg p-4 hover:border-emerald-500 transition-colors">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="paypal"
                      checked={formData.paymentMethod === 'paypal'}
                      onChange={handleInputChange}
                      className="mr-3 text-emerald-600"
                    />
                    <div className="flex items-center">
                      <div className="w-12 h-8 bg-blue-600 rounded-md flex items-center justify-center mr-3">
                        <span className="text-white text-xs font-bold">PP</span>
                      </div>
                      <div>
                        <div className="font-medium">PayPal</div>
                        <div className="text-sm text-gray-600">Pay securely with your PayPal account</div>
                      </div>
                    </div>
                  </label>
                </div>

                <div className="border border-gray-300 rounded-lg p-4 hover:border-emerald-500 transition-colors">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="bank_transfer"
                      checked={formData.paymentMethod === 'bank_transfer'}
                      onChange={handleInputChange}
                      className="mr-3 text-emerald-600"
                    />
                    <div className="flex items-center">
                      <Building className="h-8 w-8 text-gray-600 mr-3" />
                      <div>
                        <div className="font-medium">Bank Transfer</div>
                        <div className="text-sm text-gray-600">Direct bank transfer with payment instructions</div>
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-2">Booking Summary</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Package: {pkg.name}</span>
                    <span>${pkg.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Duration: {pkg.duration}</span>
                    <span>2 Guests</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between font-semibold">
                    <span>Total Amount</span>
                    <span>${pkg.price}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Confirmation */}
          {step === 4 && (
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Booking Confirmed!</h3>
              <p className="text-gray-600">
                Thank you for booking with BaliBliss. We've sent a confirmation email to {formData.email}.
                Our team will contact you within 24 hours with detailed itinerary and payment instructions.
              </p>
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                <p className="text-emerald-800 font-medium">Booking Reference: #BB{Date.now()}</p>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          {step < 4 && (
            <div className="flex justify-between mt-8 pt-6 border-t">
              <button
                onClick={handlePrevious}
                disabled={step === 1}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  step === 1 
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Previous
              </button>
              <button
                onClick={step === 3 ? handleSubmit : handleNext}
                className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium transition-colors"
              >
                {step === 3 ? 'Confirm Booking' : 'Next'}
              </button>
            </div>
          )}

          {step === 4 && (
            <div className="mt-8 pt-6 border-t text-center">
              <button
                onClick={onClose}
                className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium transition-colors"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;