import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { buttonBase, buttonVariants, buttonSizes, buttonRounded } from '../../theme/buttonStyles';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'outlineLight';
  size?: 'small' | 'default' | 'large';
  rounded?: boolean;
  href?: string;
  to?: string;
  isExternal?: boolean;
  fullWidth?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  disabled?: boolean;
  ariaLabel?: string;
  ariaDescribedBy?: string;
  loading?: boolean;
  loadingText?: string;
}

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(({
  children,
  variant = 'primary',
  size = 'default',
  rounded = false,
  href,
  to,
  isExternal = false,
  fullWidth = false,
  className = '',
  type = 'button',
  onClick,
  disabled = false,
  ariaLabel,
  ariaDescribedBy,
  loading = false,
  loadingText = 'Loading...',
}, ref) => {
  // Map our size props to buttonSizes keys
  const sizeKey = size === 'small' ? 'sm' : size === 'large' ? 'lg' : 'md';
  
  const classNames = `
    ${buttonBase}
    ${buttonVariants[variant]}
    ${buttonSizes[sizeKey]}
    ${rounded ? buttonRounded : ''}
    ${fullWidth ? 'w-full' : ''}
    ${disabled || loading ? 'opacity-50 cursor-not-allowed' : ''}
    ${className}
  `.trim();

  const buttonContent = loading ? (
    <span className="inline-flex items-center">
      <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      {loadingText}
    </span>
  ) : children;

  // Common props for all element types
  const commonProps = {
    className: classNames,
    'aria-label': ariaLabel,
    'aria-describedby': ariaDescribedBy,
    'aria-disabled': disabled || loading,
    onClick: (disabled || loading) ? undefined : onClick,
  };

  // Render as external link
  if (href && isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...commonProps}
        ref={ref as React.Ref<HTMLAnchorElement>}
      >
        {buttonContent}
      </a>
    );
  }

  // Render as internal Link
  if (to || (href && !isExternal)) {
    const linkTo = to || href || '/';
    return (
      <Link 
        to={linkTo} 
        {...commonProps}
        ref={ref as React.Ref<HTMLAnchorElement>}
        tabIndex={disabled || loading ? -1 : undefined}
      >
        {buttonContent}
      </Link>
    );
  }

  // Render as button
  return (
    <button
      type={type}
      disabled={disabled || loading}
      {...commonProps}
      ref={ref as React.Ref<HTMLButtonElement>}
    >
      {buttonContent}
    </button>
  );
});

Button.displayName = 'Button';

export default Button; 