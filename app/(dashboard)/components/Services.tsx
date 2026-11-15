import { Band } from '@/components/ps/band';
import { SectionHeader } from '@/components/ps/section-header';
import { Lattice, LatticeCell } from '@/components/ps/lattice';
import { BOOKING_URL } from '@/lib/entity';
import { Code2, Smartphone, Layers, Search, GitBranch, CalendarClock } from 'lucide-react';

// Each card is a situation in the buyer's words, with the service named above
// it, and every card goes somewhere.
const situations = [
  {
    icon: Code2,
    label: 'Product builds',
    title: 'I have an idea and no engineer.',
    body: 'React and TypeScript up front, Python or Node and Postgres behind it. One person, whole stack, and a prototype you can click in week one.',
    href: '#process'
  },
  {
    icon: Smartphone,
    label: 'Mobile apps',
    title: 'Our prototype works. It will not survive real users.',
    body: 'I rebuild it in React Native, keep every product decision you validated, and take it through both stores.',
    href: '/mobile'
  },
  {
    icon: Layers,
    label: 'Legacy migrations',
    title: 'We are stuck on a stack nobody wants to touch.',
    body: 'AI reads the whole system. I port it deliberately, with tests that prove the new one behaves like the old one.',
    href: '/migrations'
  },
  {
    icon: Search,
    label: 'AI search',
    title: 'We rank on Google and AI never mentions us.',
    body: 'SEO, AEO and GEO: getting your brand into the answers ChatGPT, Gemini, Claude and Perplexity give.',
    href: '/ai-search'
  },
  {
    icon: GitBranch,
    label: 'Rescue work',
    title: 'I inherited a codebase nobody understands.',
    body: 'That is a normal Tuesday. Send it over and I will tell you what is worth keeping.',
    href: BOOKING_URL
  },
  {
    icon: CalendarClock,
    label: 'Scoping call',
    title: 'Not sure which of these you are?',
    body: 'Thirty minutes. You leave with a plan and a number, whether or not we work together.',
    href: BOOKING_URL
  }
];

const alsoInScope = [
  'Stripe subscriptions and marketplaces',
  'Salesforce',
  'Google',
  'ClassLink',
  'Clever',
  'Hiring and mentoring the team that takes it over'
];

export function Services() {
  return (
    <Band id="services" className="scroll-mt-8 pt-16 pb-16 md:pt-20 md:pb-20">
      <SectionHeader label="What I do" />
      <h2 className="mt-10 text-h2">Where are you starting from?</h2>
      <Lattice className="mt-8 md:grid-cols-2 lg:grid-cols-3">
        {situations.map((situation) => (
          <LatticeCell
            key={situation.title}
            icon={situation.icon}
            label={situation.label}
            title={situation.title}
            href={situation.href}
          >
            {situation.body}
          </LatticeCell>
        ))}
      </Lattice>
      <p className="mt-6 font-mono text-[12px] leading-relaxed tracking-[0.04em] text-graphite-500">
        <span className="font-semibold uppercase tracking-[0.14em] text-graphite-900">
          Also in scope
        </span>{' '}
        · {alsoInScope.join(' · ')}
      </p>
    </Band>
  );
}
