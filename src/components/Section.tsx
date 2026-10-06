import React from 'react';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'surface' | 'deep' | 'bordered';
  spacing?: 'sm' | 'md' | 'lg' | 'xl' | 'none';
  id?: string;
}

const variantStyles = {
  primary: 'bg-charcoal text-ivory',
  surface: 'bg-charcoal-surface text-ivory',
  deep: 'bg-charcoal-deep text-ivory',
  bordered: 'bg-charcoal text-ivory border-y border-white/5',
};

const spacingStyles = {
  none: 'py-0',
  sm: 'py-12 md:py-16',
  md: 'py-16 md:py-24',
  lg: 'py-20 md:py-32',
  xl: 'py-28 md:py-44',
};

export const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  variant = 'primary',
  spacing = 'lg',
  id,
  ...props
}) => {
  return (
    <section
      id={id}
      className={`relative w-full ${variantStyles[variant]} ${spacingStyles[spacing]} ${className}`.trim()}
      {...props}
    >
      {children}
    </section>
  );
};
