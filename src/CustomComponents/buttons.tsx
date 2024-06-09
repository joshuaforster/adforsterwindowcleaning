import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  variant: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void; // Make onClick optional
  to?: string; // Optional path for navigation
  className?: string;
  type?: 'button' | 'submit' | 'reset'; // Add type attribute
}

const Button: React.FC<ButtonProps> = ({ variant, children, onClick, to, className = "", type = 'button' }) => {
  // Add margin top and bottom with Tailwind CSS classes
  const baseStyles = "px-4 font-bold py-2 mt-4 mb-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variantStyles = variant === 'primary'
    ? "bg-[#16A7DF] text-white hover:bg-[#138db8] focus:ring-[#138db8]"
    : "bg-[#626264] text-white hover:bg-[#4f5151] focus:ring-[#4f5151]";
  const buttonClasses = `${baseStyles} ${variantStyles} ${className}`;

  // Conditionally render a Link or a button based on the presence of 'to' prop
  return to ? (
    <Link to={to} className={buttonClasses}>
      {children}
    </Link>
  ) : (
    <button className={buttonClasses} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;