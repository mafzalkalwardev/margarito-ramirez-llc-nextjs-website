import Image from 'next/image';
import { cn } from '@/lib/utils';
import { company } from '@/lib/company';
import { withBasePath } from '@/lib/paths';

type BrandLogoProps = {
  className?: string;
  size?: number;
  withWordmark?: boolean;
  wordmarkClassName?: string;
};

export function BrandLogo({
  className,
  size = 40,
  withWordmark = false,
  wordmarkClassName,
}: BrandLogoProps) {
  return (
    <span className={cn('inline-flex items-center gap-3', className)}>
      <Image
        src={withBasePath('/logo.svg')}
        alt={`${company.serviceBrand} logo`}
        width={size}
        height={size}
        unoptimized
        className="rounded-md shadow-sm ring-1 ring-[var(--border)] bg-[var(--ink)]"
      />
      {withWordmark ? (
        <span className={cn('min-w-0', wordmarkClassName)}>
          <span className="block truncate text-base font-semibold tracking-tight text-slate-950 sm:text-lg">
            {company.serviceBrand}
          </span>
          <span className="mt-0.5 hidden text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500 sm:block">
            Managed IT · Security · Helpdesk
          </span>
        </span>
      ) : null}
    </span>
  );
}
