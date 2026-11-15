import Image from 'next/image';
import { cn } from '@/lib/utils';

/**
 * The one frame for imagery: hairline border, 4px radius, mono caption below.
 * Evidence, not atmosphere — real product screens, the real person, the real desk.
 *
 * Images go through next/image, so each viewport gets an appropriately sized
 * AVIF or WebP rather than the full-resolution original. `sizes` is the width
 * the frame occupies in the layout — pass it whenever the frame is not the
 * full page width.
 */
export function Figure({
  src,
  alt = '',
  ratio = '16/9',
  fit = 'cover',
  caption,
  sizes = '100vw',
  priority = false,
  className
}: {
  src?: string;
  alt?: string;
  ratio?: string;
  /** `contain` shows the whole image inside the frame, for phone screens in a wide slot. */
  fit?: 'cover' | 'contain';
  caption?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <figure className={cn('m-0', className)}>
      <div
        className="relative overflow-hidden rounded-control border border-rule bg-sunk"
        style={{ aspectRatio: ratio }}
      >
        {src && (
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            priority={priority}
            className={fit === 'contain' ? 'object-contain' : 'object-cover'}
          />
        )}
      </div>
      {caption && (
        <figcaption className="mt-2.5 font-mono text-[11px] uppercase leading-relaxed tracking-[0.08em] text-graphite-500">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
