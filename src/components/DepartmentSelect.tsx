import React from 'react';
import { useAppointmentDepartmentOptions } from '../hooks/useAppointmentDepartmentOptions';

export interface DepartmentSelectProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  error?: string;
  id?: string;
  name?: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
}

const DepartmentSelect: React.FC<DepartmentSelectProps> = ({
  value,
  onChange,
  error,
  id = 'department',
  name = 'department',
  label = 'Department',
  placeholder = 'Select Department',
  required = true,
  className = '',
}) => {
  const options = useAppointmentDepartmentOptions();

  return (
    <div className="form-group">
      <label htmlFor={id}>
        {label} <span style={{ color: 'red' }}>*</span>
      </label>
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className={error ? `error ${className}`.trim() : className}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error && <span className="error-text">{error}</span>}
    </div>
  );
};

export default DepartmentSelect;
