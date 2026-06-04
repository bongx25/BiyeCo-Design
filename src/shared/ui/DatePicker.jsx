import React from 'react';
import { Calendar } from 'lucide-react';
import { Input } from "./Input";

export const DatePicker = ({
  label,
  value,
  onChange,
  error,
  disabled,
  className,
  ...props
}) => {
  return (
    <Input
      type="date"
      label={label}
      icon={Calendar}
      value={value}
      onChange={onChange}
      error={error}
      disabled={disabled}
      className={className}
      {...props}
    />
  );
};
