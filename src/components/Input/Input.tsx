// src/components/Shared/UI/Input.tsx
import React, { ChangeEvent } from 'react';
import styles from './Input.module.css';

interface InputProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
}

const Input: React.FC<InputProps> = ({ value, onChange, placeholder, className }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`${styles.input} ${className}`}
    />
  );
};

export default Input;