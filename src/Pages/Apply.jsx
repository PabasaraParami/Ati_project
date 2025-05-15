import React, { useState } from 'react';
import './apply.css'

const Apply= () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    education: '',
    experience: '',
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Application Submitted ✅');
    console.log(formData);
  };

  return (
    <div className="form-container">
      {step === 1 && (
        <div className="form-step">
          <h2>Step 1: Personal Info</h2>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />
          <button onClick={nextStep}>Next</button>
        </div>
      )}

      {step === 2 && (
        <div className="form-step">
          <h2>Step 2: Education</h2>
          <input
            type="text"
            name="education"
            placeholder="Education Qualification"
            value={formData.education}
            onChange={handleChange}
          />
          <div className="btn-group">
            <button onClick={prevStep}>Back</button>
            <button onClick={nextStep}>Next</button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="form-step">
          <h2>Step 3: Work Experience</h2>
          <input
            type="text"
            name="experience"
            placeholder="Experience (e.g., 2 years at ABC Corp)"
            value={formData.experience}
            onChange={handleChange}
          />
          <div className="btn-group">
            <button onClick={prevStep}>Back</button>
            <button onClick={nextStep}>Next</button>
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="form-step">
          <h2>Step 4: Review & Submit</h2>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Education:</strong> {formData.education}</p>
          <p><strong>Experience:</strong> {formData.experience}</p>
          <div className="btn-group">
            <button onClick={prevStep}>Back</button>
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Apply
