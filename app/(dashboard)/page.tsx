import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Band } from '@/components/ps/band';
import { Stat } from '@/components/ps/stat';
import { Terminal } from '@/components/ps/terminal';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Proof } from './components/Proof';
import { Built } from './components/Built';
import { Practice } from './components/Practice';

export const metadata: Metadata = {
  title: 'Persistent Software — Full-Stack, Mobile & AI Engineering',
  description:
    'Persistent Software is Chris Sweigard: one senior engineer, twenty years of production experience. Full-stack builds, React Native apps, AI-assisted migrations and integrations — and you own the codebase.',
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'Persistent Software — Full-Stack, Mobile & AI Engineering',
    description:
      'Persistent Software is Chris Sweigard: one senior engineer, twenty years of production experience. Full-stack builds, React Native apps, AI-assisted migrations and integrations — and you own the codebase.',
    url: 'https://www.persistentsoftware.com',
    siteName: 'Persistent Software'
  }
};

const terminalLines = [
  'kickoff call: scope the build',
  'architecture + design review',
  'week 1: working prototype',
  'weekly demos, fast iteration',
  'ship to production',
  'you own the codebase'
];

export default function HomePage() {
  return (
    <main>
      <Band tone="ink" spine className="py-20 md:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]">
          <div className="flex flex-col items-start gap-6">
            <span className="ps-label border-b border-signal-300/40 pb-1.5 tracking-[0.16em] text-signal-300">
              Full-stack · Mobile · Migrations · AI search
            </span>
            {/* Smaller than the display size the one-column heroes use: this
                headline shares the row with the terminal. */}
            <h1 className="text-[38px] sm:text-h1 xl:text-[52px] xl:leading-[1.02]">
              One senior engineer.
              <span className="mt-2 block text-signal-400">A working prototype in week one.</span>
            </h1>
            <p className="max-w-[46ch] text-lead text-graphite-300">
              Persistent Software is Chris Sweigard, with two decades of production experience
              and modern tooling behind it. You talk to the person writing the code, and the
              codebase is yours at the end.
            </p>
            <div className="flex flex-col gap-3 pt-1 sm:flex-row">
              <Button asChild variant="signal" size="lg">
                <a
                  href="https://calendly.com/chris-persistentsoftware"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a scoping call
                </a>
              </Button>
              <Button asChild variant="inverse" size="lg">
                <a href="#services">See what I build</a>
              </Button>
            </div>
            <span className="ps-label leading-relaxed text-graphite-400">
              30 minutes · You leave with a plan and a number
            </span>
          </div>
          <Terminal lines={terminalLines} />
        </div>
      </Band>

      <Proof />
      <Services />
      <Process />
      <Built />
      <Practice />

      <Band tone="ink" spine className="py-16 md:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <div>
            <h2 className="text-h2">Tell me what you&rsquo;re building.</h2>
            <p className="mt-3.5 max-w-[52ch] text-lead text-graphite-300">
              A 30-minute call is enough to scope most projects. You&rsquo;ll leave it with a
              plan and a number, whether or not we work together.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <Button asChild variant="signal" size="lg">
              <a
                href="https://calendly.com/chris-persistentsoftware"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a call
              </a>
            </Button>
            <Button asChild variant="inverse" size="lg">
              <a href="mailto:contact@persistentsoftware.com">Email instead</a>
            </Button>
          </div>
        </div>

        <div className="mt-14 grid gap-x-8 gap-y-6 border-t border-graphite-700 pt-10 sm:grid-cols-3">
          <Stat tone="ink" value="20" unit="+" className="p-0">
            Years shipping production software
          </Stat>
          <Stat tone="ink" value="8" unit="+" className="p-0">
            Years leading engineering teams
          </Stat>
          <Stat tone="ink" value="100" unit="%" className="p-0">
            Of the code is yours at handover
          </Stat>
        </div>
      </Band>
    </main>
  );
}
