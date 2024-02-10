'use client';

import { Formik, Form } from 'formik';
import React from 'react';
import LogoUploader from './LogoUploader';
import Input from './Input';

export type CompanyFieldValues = {
  name: string;
  status: string;
  country: string;
  category: string;
  date: string;
  description: string;
};
const initialValues: CompanyFieldValues = {
  name: '',
  status: '',
  country: '',
  category: '',
  date: '',
  description: '',
};
export interface CompanyFormProps {
  onSubmit: (values: CompanyFieldValues) => void | Promise<void>;
}

const CompanyForm = ({ onSubmit }: CompanyFormProps) => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form className="flex flex-col gap-10">
        <p className="mb-1 text-xl">Add new company</p>
        <div className="flex gap-6">
          <div className="flex flex-col flex-1 gap-5">
            <LogoUploader label="Logo" placeholder="Upload image" />
            <Input label="Status" placeholder="Status" name="status" />
            <Input label="Country" placeholder="Country" name="country" />
          </div>
          <div className="flex flex-col flex-1 gap-5">
            <Input label="Name" placeholder="Name" name="name" />
            <Input label="Category" placeholder="Category" name="category" />
            <Input label="Joined date" type="date" name="date" />
            <Input label="Description" placeholder="Description" name="description" />
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default CompanyForm;
