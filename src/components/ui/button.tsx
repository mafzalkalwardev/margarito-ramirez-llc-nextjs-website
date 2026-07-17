import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'bg-[var(--primary)] text-white shadow-[0_10px_30px_rgba(7,17,31,0.18)] hover:-translate-y-0.5 hover:bg-[var(--accent)] hover:shadow-[0_14px_36px_rgba(13,148,136,0.25)]',
        accent:
          'bg-[var(--accent-bright)] text-slate-950 shadow-[0_10px_30px_rgba(45,212,191,0.22)] hover:-translate-y-0.5 hover:bg-teal-300',
        outline:
          'border border-slate-300 bg-white/70 text-slate-800 backdrop-blur hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)]',
        ghost: 'text-slate-700 hover:bg-slate-100 hover:text-[var(--accent)]',
        glass:
          'border border-white/20 bg-white/10 text-white backdrop-blur-md hover:-translate-y-0.5 hover:bg-white/20',
      },
      size: {
        sm: 'h-9 px-4',
        default: 'h-11 px-5',
        lg: 'h-12 px-6 text-[15px]',
        icon: 'h-11 w-11',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  ),
);
Button.displayName = 'Button';

export { Button, buttonVariants };
