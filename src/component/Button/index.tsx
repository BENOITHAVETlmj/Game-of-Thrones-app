import React from 'react';
import './style.css';


interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  style?: any;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, className, disabled, style }) => {
  return (
    <button
      className={className}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;