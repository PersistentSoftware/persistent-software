import { Band } from '@/components/ps/band';
import { SectionHeader } from '@/components/ps/section-header';
import { FOUNDER_LINKEDIN_URL } from '@/lib/entity';

/**
 * Recommendations Chris received on LinkedIn, quoted word for word. Long ones are
 * excerpted, with the cut marked. They predate the practice, so each one says
 * where the recommender worked with Chris. Plain text on purpose: no Review
 * markup, because reviews a business publishes about itself are not eligible
 * for review rich results.
 */
const recommendations: {
  name: string;
  role?: string;
  context: string;
  date: string;
  quote: string[];
}[] = [
  {
    name: 'Kara Carpenter',
    role: 'Co-founder of Teachley',
    context: 'Managed Chris directly at Teachley',
    date: 'May 2024',
    quote: [
      "Chris has been integral to developing and maintaining our full stack, and I can confidently say that he is one of the most efficient and reliable developers I've ever worked with.",
      'One of the most remarkable aspects of Chris’ work is his efficiency. He often manages to streamline processes and deliver results faster than expected without compromising on quality.'
    ]
  },
  {
    name: 'Jonathan Jesneck',
    role: 'Co-Founder and CTO at Firefly Lab',
    context: 'Managed Chris directly at inScoop',
    date: 'January 2016',
    quote: [
      'I really enjoyed working with Chris. He is friendly, dependable, very bright, and easy to work with. At inScoop, he designed and built many important parts of the web site and contributed significantly to the back end. He consistently came up with creative solutions to technical and UX & UI problems. Also, he always communicated well on a remote team and was a good team player. I recommend him highly.'
    ]
  },
  {
    name: 'Bryan Barletta',
    context: 'Managed Chris directly at Medialets',
    date: 'April 2011',
    quote: [
      'In less than four weeks, Chris was able to provide a more comprehensive level of support than I could, rarely elevating an integration to the SDK engineering team. … He is one of the strongest client facing engineers I’ve worked with to date.'
    ]
  },
  {
    name: 'Hal Friedlander',
    context: 'Managed Chris directly at TxVia',
    date: 'March 2010',
    quote: [
      'Chris is able to quickly understand business requirements and translate those requirements into development priorities. … I would not hesitate to hire Chris again as part of a development team or as a team lead.'
    ]
  }
];

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
