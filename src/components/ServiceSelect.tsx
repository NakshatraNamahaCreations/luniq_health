import React from 'react';
import { useEnquiryServiceOptions } from '../hooks/useEnquiryServiceOptions';

export interface ServiceSelectProps {
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

const ServiceSelect: React.FC<ServiceSelectProps> = ({
  value,
  onChange,
  error,
  id = 'service',
  name = 'service',
  label = 'Service Interested In *',
  placeholder = 'Select a Service',
  required = true,
  className = '',
}) => {
  const options = useEnquiryServiceOptions();

  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
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
      {error && (
        <span
          className="error-text"
          style={{
            color: 'red',
            fontSize: '0.875rem',
            display: 'block',
            marginTop: '0.25rem',
          }}
        >
          {error}
        </span>
      )}
    </div>
  );
};

export default ServiceSelect;
