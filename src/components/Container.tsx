import React from 'react';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  noPadding?: boolean;
}

const sizeClasses: Record<string, string> = {
  sm: 'max-w-3xl',
  md: 'max-w-5xl',
  lg: 'max-w-7xl',
  xl: 'max-w-[1536px]',
  full: 'max-w-full',
};

export const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  size = 'lg',
  noPadding = false,
  ...props
}) => {
  const paddingClasses = noPadding
    ? ''
    : 'px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20';

  return (
    <div
      className={`mx-auto w-full ${sizeClasses[size]} ${paddingClasses} ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
};
