import React from 'react';

type TypographyVariant =
  | 'display'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'body-lg'
  | 'body'
  | 'small'
  | 'label'
  | 'nav';

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  italic?: boolean;
}

const variantStyles: Record<TypographyVariant, string> = {
  display: 'font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight font-light leading-[1.05] text-ivory-light',
  h1: 'font-serif text-4xl md:text-5xl lg:text-6xl tracking-normal font-normal leading-[1.15] text-ivory',
  h2: 'font-serif text-3xl md:text-4xl lg:text-5xl tracking-normal font-normal leading-[1.2] text-ivory',
  h3: 'font-cinzel text-xl md:text-2xl tracking-wider uppercase font-medium leading-[1.3] text-ivory-warm',
  'body-lg': 'font-sans text-lg md:text-xl font-light leading-relaxed text-ivory-muted',
  body: 'font-sans text-base md:text-lg font-normal leading-relaxed text-ivory-muted/90',
  small: 'font-sans text-xs md:text-sm tracking-wide text-sand',
  label: 'font-cinzel text-xs md:text-sm tracking-[0.2em] uppercase font-medium text-gold',
  nav: 'font-sans text-xs md:text-sm tracking-[0.16em] uppercase font-medium text-ivory/80 hover:text-gold transition-colors duration-300',
};

const defaultElementMap: Record<TypographyVariant, React.ElementType> = {
  display: 'h1',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  'body-lg': 'p',
  body: 'p',
  small: 'span',
  label: 'span',
  nav: 'span',
};

export const Typography: React.FC<TypographyProps> = ({
  variant = 'body',
  as,
  children,
  className = '',
  italic = false,
  ...props
}) => {
  const Component = as || defaultElementMap[variant];
  const italicClass = italic ? 'italic' : '';

  return (
    <Component
      className={`${variantStyles[variant]} ${italicClass} ${className}`.trim()}
      {...props}
    >
      {children}
    </Component>
  );
};
