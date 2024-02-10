'use client';
import { Field } from 'formik';

export interface InputProps {
  label?: string;
  placeholder?: string;
  id?: string;
  name?: string;
  type?: string;
}

const Input = ({ label, id, ...rest }: InputProps) => {
  return (
    <div className="felx flex-col">
      {label && (
        <label htmlFor={id} className="mb-2 text-base color-gray-900">
          {label}
        </label>
      )}
      <Field
        {...rest}
        id={id}
        className="p-3 h-11 text-sm rounded border border-gray-300 shadow"
      />
    </div>
  );
};

export default Input;
