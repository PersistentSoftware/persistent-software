import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * A group of cells drawn as one object: a 1px gap over a rule-coloured
 * background with a single border around the whole grid. Cards inside carry no
 * border, fill or shadow of their own.
 */
export function Lattice({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return <div className={cn('ps-lattice grid-cols-1', className)} {...props} />;
}

type LatticeCellProps = {
  icon?: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  /** A mono label above the title: the category the cell belongs to. */
  label?: string;
  title?: React.ReactNode;
  /** Makes the whole cell one link. An absolute URL opens in a new tab. */
  href?: string;
  className?: string;
  children?: React.ReactNode;
};

export function LatticeCell({
  icon: Icon,
  label,
  title,
  href,
  className,
  children
}: LatticeCellProps) {
  const classes = cn(
    'group flex flex-col gap-3 bg-surface p-7 transition-colors duration-200 ease-[cubic-bezier(0.2,0,0,1)] hover:bg-sunk',
    className
  );

  const content = (
    <>
      {Icon && <Icon className="size-[22px] text-signal-700" strokeWidth={1.75} />}
      {label && <span className="ps-label text-graphite-500">{label}</span>}
      {title && <h3 className="text-h4">{title}</h3>}
      {children && <div className="text-[15px] leading-relaxed text-graphite-500">{children}</div>}
      {href && (
        <ArrowRight
          aria-hidden
          className="mt-auto size-4 translate-y-1 text-graphite-400 transition-colors duration-[120ms] group-hover:text-signal-700"
          strokeWidth={1.75}
        />
      )}
    </>
  );

  if (!href) {
    return <div className={classes}>{content}</div>;
  }

  if (/^https?:/.test(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
