import React, { useState, useEffect } from "react";
import "./studentForm.css";
import PropTypes from "prop-types";

const StudentForm = ({ student, onClose, onSave, onDelete, onAdd }) => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    birth_date: "",
    gender: "",
    email: "",
    phone: "",
    address: "",
    enrollment_date: "",
    group_id: "",
  });

  useEffect(() => {
    if (student) {
      setFormData(student);
    }
  }, [student]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    student ? onSave(formData) : onAdd(formData);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{student ? "Edit Student" : "Add Student"}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            placeholder="First Name"
            required
          />
          <input
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            placeholder="Last Name"
            required
          />
          <input
            type="date"
            name="birth_date"
            value={formData.birth_date}
            onChange={handleChange}
            required
          />
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            required
          />
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
            required
          />
          <input
            type="date"
            name="enrollment_date"
            value={formData.enrollment_date}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="group_id"
            value={formData.group_id}
            onChange={handleChange}
            placeholder="Group ID"
          />
          <div className="form-buttons">
            <button type="submit">{student ? "Save" : "Add"}</button>
            {student && (
              <button
                type="button"
                onClick={() => {
                  onDelete(student.id);
                  onClose();
                }}
              >
                Delete
              </button>
            )}
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Валидация пропсов
StudentForm.propTypes = {
  // Объект student может содержать данные студента, если он передан
  student: PropTypes.shape({
    id: PropTypes.number.isRequired,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    birth_date: PropTypes.string,
    gender: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    address: PropTypes.string,
    enrollment_date: PropTypes.string,
    group_id: PropTypes.string,
  }),
  // onClose, onSave, onDelete, onAdd должны быть функциями
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
};

export default StudentForm;
