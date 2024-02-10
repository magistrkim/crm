'use client';
import Image from 'next/image';
import React from 'react';

export interface LogoUploaderProps
  extends Partial<Omit<React.ReactHTMLElement<HTMLInputElement>, 'type'>> {
  label?: string;
  placeholder?: string;
  id?: string;
}

const LogoUploader = ({
  label,
  placeholder,
  id,
  ...rest
}: LogoUploaderProps) => {
  return (
    <div className="flex gap-10 mb-3">
      {label && <p className="text-base color-gray-900">{label}</p>}
      <label
        htmlFor={id}
        className="flex flex-col items-center justify-center w-40 h-40 bg-white border border-slate-900 border-dashed rounded-full"
      >
        <Image
          src="/icons/upload.svg"
          alt="upload"
          width={48}
          height={48}
          className="mb-1"
        />
        {placeholder && (
          <p className="text-base text-gray-500">{placeholder}</p>
        )}
        <input
          {...rest}
          id={id}
          type="file"
          accept="image/*"
          className="hidden"
        />
      </label>
    </div>
  );
};

export default LogoUploader;
