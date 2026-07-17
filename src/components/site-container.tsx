import { cn } from '@/lib/utils';

type SiteContainerProps = {
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'header' | 'footer';
};

export function SiteContainer({ children, className, as: Tag = 'div' }: SiteContainerProps) {
  return <Tag className={cn('site-shell', className)}>{children}</Tag>;
}
