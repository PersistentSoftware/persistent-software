import { Band } from '@/components/ps/band';
import { SectionHeader } from '@/components/ps/section-header';
import { FOUNDER_LINKEDIN_URL } from '@/lib/entity';
import { recommendations } from '@/lib/recommendations';

export function Recommendations() {
  return (
    <Band id="recommendations" className="scroll-mt-8 pt-0 pb-16 md:pt-0 md:pb-20">
      <SectionHeader label="Recommendations" />
      <div className="mt-10 flex max-w-[68ch] flex-col gap-4">
        <h2 className="text-h2">What people who worked with Chris say</h2>
        <p className="text-graphite-500">
          Recommendations Chris Sweigard received on LinkedIn from people who managed him,
          before and during his time at Teachley.
        </p>
      </div>

      <ul className="mt-10 border-t border-rule">
        {recommendations.map((rec) => (
          <li
            key={rec.name}
            className="grid gap-4 border-b border-rule py-8 md:grid-cols-12 md:gap-8"
          >
            <div className="flex flex-col gap-1 md:col-span-4">
              <span className="text-h4">{rec.name}</span>
              {rec.role && <span className="text-graphite-500">{rec.role}</span>}
              <span className="ps-label mt-2 text-graphite-500">
                {rec.context} · {rec.date}
              </span>
            </div>
            <blockquote className="m-0 flex max-w-[68ch] flex-col gap-3 text-graphite-700 md:col-span-8">
              {rec.quote.map((paragraph) => (
                <p key={paragraph}>&ldquo;{paragraph}&rdquo;</p>
              ))}
            </blockquote>
          </li>
        ))}
      </ul>

      <a
        href={FOUNDER_LINKEDIN_URL}
        className="ps-label mt-8 inline-block border-b border-signal-500 pb-0.5 text-graphite-900 transition-colors duration-[120ms] hover:text-signal-700"
      >
        Read them in full on LinkedIn
      </a>
    </Band>
  );
}
