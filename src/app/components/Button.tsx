'use client';
import React from 'react';
import clsx from 'clsx';

export interface ButtonProps
  extends Partial<React.ReactHTMLElement<HTMLButtonElement>> {
  disabled?: boolean;
}

const Button = ({ disabled, type, ...rest }: ButtonProps) => {
  return (
    <button
      {...rest}
      className={clsx(
        'py-3 px-5 bg-gray-900 text-zinc-50 text-center text-base font-medium rounded',
        !disabled && 'hover:bg-gray-600 active:bg-gray-950',
        disabled && 'text-zinc-100',
      )}
    />
  );
};

export default Button;
