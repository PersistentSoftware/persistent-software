import Image from 'next/image';
import Link from 'next/link';
import { Band } from '@/components/ps/band';
import { recommendations } from '@/lib/recommendations';

/**
 * The first thing after the hero: a face and someone else's words. The quote is
 * the most recent LinkedIn recommendation, with where it comes from stated, so
 * it never reads as a client testimonial.
 */
export function Proof() {
  const rec = recommendations[0];

  return (
    <Band className="border-b border-rule py-14 md:py-16">
      <figure className="m-0 grid items-start gap-7 md:grid-cols-[112px_minmax(0,1fr)] md:gap-10">
        <div className="relative size-[88px] overflow-hidden rounded-control border border-rule bg-sunk md:size-[112px]">
          <Image
            src="/chris-portrait.jpg"
            alt="Chris Sweigard, founder of Persistent Software"
            fill
            sizes="112px"
            className="object-cover"
          />
        </div>
        <div>
          <blockquote className="m-0 max-w-[46ch] text-h3 font-semibold text-graphite-900">
            &ldquo;{rec.quote[0]}&rdquo;
          </blockquote>
          <figcaption className="mt-5 flex flex-col gap-2">
            <span className="text-graphite-700">
              {rec.name}
              {rec.role && <span className="text-graphite-500"> · {rec.role}</span>}
            </span>
            <span className="ps-label leading-relaxed text-graphite-500">
              {rec.context} · {rec.date}
            </span>
          </figcaption>
          <Link
            href="/about#recommendations"
            className="ps-label mt-6 inline-block border-b border-signal-500 pb-0.5 text-graphite-900 transition-colors duration-[120ms] hover:text-signal-700"
          >
            Read all {recommendations.length} recommendations
          </Link>
        </div>
      </figure>
      <p className="ps-label mt-12 border-t border-rule pt-6 leading-relaxed text-graphite-500">
        Twenty years at Teachley · Divide · Medialets · TxVia
      </p>
    </Band>
  );
}
