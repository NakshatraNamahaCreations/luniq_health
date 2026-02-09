import React from 'react';
import { useContactSubjectOptions } from '../hooks/useContactSubjectOptions';
import styles from './ContactPage.module.css';

export interface SubjectSelectProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  error?: string;
  id?: string;
  name?: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
  /** Use Contact page CSS module classes (formGroup, etc.). If false, uses plain "form-group" etc. */
  useContactStyles?: boolean;
}

const SubjectSelect: React.FC<SubjectSelectProps> = ({
  value,
  onChange,
  error,
  id = 'subject',
  name = 'subject',
  label = 'Subject *',
  placeholder = 'Select a subject',
  required = true,
  className = '',
  useContactStyles = true,
}) => {
  const options = useContactSubjectOptions();
  const formGroupClass = useContactStyles ? styles.formGroup : 'form-group';
  const errorTextStyle = useContactStyles
    ? { color: 'red', fontSize: '0.875rem', display: 'block', marginTop: '0.25rem' }
    : undefined;

  return (
    <div className={formGroupClass}>
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
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <span className="error-text" style={errorTextStyle}>
          {error}
        </span>
      )}
    </div>
  );
};

export default SubjectSelect;
