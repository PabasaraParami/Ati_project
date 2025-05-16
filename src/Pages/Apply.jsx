import React, { useState } from 'react';
import './apply.css';
import { motion } from 'framer-motion';

const Apply = () => {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    F_name: '',
    Initial: '',
    contact: '',
    email: '',
    Address: '',
    education: [{ degree: '', university: '', date: '' }],
    experience: [{ qualification: '', institute: '', date: '' }],
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleEducationChange = (index, field, value) => {
    const newEdu = [...formData.education];
    newEdu[index][field] = value;
    setFormData({ ...formData, education: newEdu });
  };

  const handleExperienceChange = (index, field, value) => {
    const newExp = [...formData.experience];
    newExp[index][field] = value;
    setFormData({ ...formData, experience: newExp });
  };

  const addEducation = () => {
    if (formData.education.length < 3) {
      setFormData({
        ...formData,
        education: [...formData.education, { degree: '', university: '', date: '' }],
      });
    }
  };

  const addExperience = () => {
    if (formData.experience.length < 3) {
      setFormData({
        ...formData,
        experience: [...formData.experience, { qualification: '', institute: '', date: '' }],
      });
    }
  };

  const validateStep1 = () => {
    const newErrors = {};
    if (!formData.F_name.match(/^[A-Z]+$/)) {
      newErrors.F_name = 'Full Name must be in CAPITAL letters.';
    }
    if (!formData.Initial.match(/^[A-Z. ]+$/)) {
      newErrors.Initial = 'Initials must be in CAPITAL letters.';
    }
    if (!formData.contact.match(/^\d{10}$/)) {
      newErrors.contact = 'Contact number must be 10 digits.';
    }
    if (!formData.email.includes('@')) {
      newErrors.email = 'Email must contain @.';
    }
    return newErrors;
  };

  const nextStep = () => {
    if (step === 1) {
      const validationErrors = validateStep1();
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }
    }
    setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Application Submitted ✅');
    console.log(formData);
  };

  return (
    <div className="title">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Application Form For Visiting Lecturer Post
      </motion.h1>

      <div className="form-container">
        {step === 1 && (
          <div className="form-step">
            <h2>Step 1: Personal Info</h2>
            <input
              type="text"
              name="F_name"
              placeholder="Full Name"
              value={formData.F_name}
              onChange={handleChange}
            />
            {errors.F_name && <p className="error">{errors.F_name}</p>}

            <input
              type="text"
              name="Initial"
              placeholder="Name With Initials"
              value={formData.Initial}
              onChange={handleChange}
            />
            {errors.Initial && <p className="error">{errors.Initial}</p>}

            <input
              type="text"
              name="contact"
              placeholder="Contact Number"
              value={formData.contact}
              onChange={handleChange}
            />
            {errors.contact && <p className="error">{errors.contact}</p>}

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}

            <input
              type="text"
              name="Address"
              placeholder="Postal Address"
              value={formData.Address}
              onChange={handleChange}
            />
            <button onClick={nextStep}>Next</button>
          </div>
        )}

        {step === 2 && (
          <div className="form-step">
            <h2>Step 2: Academic Qualifications</h2>
            {formData.education.map((edu, index) => (
              <div key={index} className="qualification-block">
                <input
                  type="text"
                  placeholder="Degree"
                  value={edu.degree}
                  onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
                />
                <input
                  type="text"
                  placeholder="University"
                  value={edu.university}
                  onChange={(e) => handleEducationChange(index, 'university', e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Effective Date"
                  value={edu.date}
                  onChange={(e) => handleEducationChange(index, 'date', e.target.value)}
                />
              </div>
            ))}
            {formData.education.length < 3 && (
              <button onClick={addEducation}>+ Add More</button>
            )}
            <div className="btn-group">
              <button onClick={prevStep}>Back</button>
              <button onClick={nextStep}>Next</button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="form-step">
            <h2>Step 3: Professional Qualifications</h2>
            {formData.experience.map((exp, index) => (
              <div key={index} className="qualification-block">
                <input
                  type="text"
                  placeholder="Qualification"
                  value={exp.qualification}
                  onChange={(e) => handleExperienceChange(index, 'qualification', e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Institute"
                  value={exp.institute}
                  onChange={(e) => handleExperienceChange(index, 'institute', e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Effective Date"
                  value={exp.date}
                  onChange={(e) => handleExperienceChange(index, 'date', e.target.value)}
                />
              </div>
            ))}
            {formData.experience.length < 3 && (
              <button onClick={addExperience}>+ Add More</button>
            )}
            <div className="btn-group">
              <button onClick={prevStep}>Back</button>
              <button onClick={nextStep}>Next</button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="form-step">
            <h2>Step 4: Review & Submit</h2>
            <p><strong>Full Name:</strong> {formData.F_name}</p>
            <p><strong>Initials:</strong> {formData.Initial}</p>
            <p><strong>Contact:</strong> {formData.contact}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Address:</strong> {formData.Address}</p>

            <h3>Academic Qualifications:</h3>
            {formData.education.map((edu, index) => (
              <div key={index}>
                <p><strong>Degree:</strong> {edu.degree}</p>
                <p><strong>University:</strong> {edu.university}</p>
                <p><strong>Date:</strong> {edu.date}</p>
              </div>
            ))}

            <h3>Professional Qualifications:</h3>
            {formData.experience.map((exp, index) => (
              <div key={index}>
                <p><strong>Qualification:</strong> {exp.qualification}</p>
                <p><strong>Institute:</strong> {exp.institute}</p>
                <p><strong>Date:</strong> {exp.date}</p>
              </div>
            ))}

            <div className="btn-group">
              <button onClick={prevStep}>Back</button>
              <button onClick={handleSubmit}>Submit</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Apply;
