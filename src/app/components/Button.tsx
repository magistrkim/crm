"use client"
export interface ButtonProps {
    disabled?: boolean
}

const Button = ({disabled, ...rest} : ButtonProps) => {
  return (
    <button {...rest} className="py-3 px-5 bg-gray-900 text-zinc-50 text-center text-base" />
  )
}

export default Button