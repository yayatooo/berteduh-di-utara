import React from 'react';
import clsx from 'clsx';

type ButtonVariant = 'primary' | 'secondary' | 'inline';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  className,
  ...props
}) => {
  const baseClasses = 'px-4 py-2 font-semibold transition-colors duration-200 ease-in-out';

  const variantClasses: Record<ButtonVariant, string> = {
    primary: 'text-xl bg-[#3b1404] text-white hover:bg-[#ce8f28] shadow-solid-secondary',
    secondary: 'text-xl bg-[#ce8f28] text-white hover:bg-[#3b1404] shadow-solid-primary',
    inline: 'text-xl bg-[#ce8f28] text-white hover:bg-[#3b1404]',
  };

  const buttonClasses = clsx(
    baseClasses,
    variantClasses[variant],
    className
  );

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;