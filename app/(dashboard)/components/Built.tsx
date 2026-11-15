import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Band } from '@/components/ps/band';
import { SectionHeader } from '@/components/ps/section-header';
import { Figure } from '@/components/ps/figure';
import { TOKENLOG_URL } from '@/lib/entity';

const BEERXCHANGE_APP_STORE_URL = 'https://apps.apple.com/us/app/beerxchange/id919150525';
const BEERXCHANGE_GOOGLE_PLAY_URL =
  'https://play.google.com/store/apps/details?id=com.beerxchange.Mobile';

const linkClass =
  'ps-label inline-block border-b border-signal-500 pb-0.5 text-graphite-900 transition-colors duration-[120ms] hover:text-signal-700';

/**
 * Proof by demonstration. The practice is new, so instead of a client list this
 * band shows things Chris built that a visitor can open. tokenlog's diagram is
 * its own animated SVG, served as a file so the CSS animation inside it keeps
 * running — next/image would need dangerouslyAllowSVG and would pass the file
 * straight through anyway.
 */
export function Built() {
  return (
    <Band className="pt-0 md:pt-0">
      <SectionHeader label="Running right now" />
      <div className="mt-10 max-w-[62ch]">
        <h2 className="text-h2">Three things I built that you can open.</h2>
        <p className="mt-3.5 text-lead text-graphite-500">
          Persistent Software is a new practice, so there is no wall of client logos here.
          These are my own products, built the way I would build yours.
        </p>
      </div>

      <div
        id="tokenlog"
        className="mt-12 grid scroll-mt-8 items-end gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]"
      >
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-h3">tokenlog</h3>
            <span className="ps-label border border-rule-strong px-2.5 py-1.5 text-graphite-700">
              Live · currently free
            </span>
          </div>
          <p className="mt-3 max-w-[58ch] text-graphite-500">
            LLM token usage across Anthropic, OpenAI, Google Gemini and GitHub Copilot on one
            page, with the spend each provider reports and a warning before the invoice
            arrives.
          </p>
        </div>
        <div className="flex lg:justify-end">
          <Button asChild>
            <a href={TOKENLOG_URL} target="_blank" rel="noopener noreferrer">
              Open tokenlog
            </a>
          </Button>
        </div>
      </div>

      <figure className="m-0 mt-8">
        {/* Below ~760px the diagram's labels stop being readable shrunk to fit,
            so it scrolls sideways inside its frame instead. */}
        <div className="overflow-x-auto rounded-control border border-rule bg-ink">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/tokenlog-flow.svg"
            alt="Anthropic, OpenAI and GitHub Copilot connecting into tokenlog, which draws a month of token usage as a daily bar chart alongside spend and request totals."
            width={1120}
            height={440}
            loading="lazy"
            className="block w-full min-w-[760px]"
          />
        </div>
      </figure>

      <div className="mt-12 grid gap-x-8 gap-y-12 border-t border-rule pt-12 md:grid-cols-2">
        <div>
          <Figure
            src="/white-label/dashboard-appearance.png"
            alt="The white-label dashboard's Appearance screen: colour fields on the left, a live phone preview and contrast checks on the right."
            ratio="3/2"
            sizes="(min-width: 768px) 536px, 100vw"
            caption="The brand dashboard, filled with example data"
          />
          <h3 className="mt-6 text-h3">A white-label mobile platform</h3>
          <p className="mt-3 max-w-[52ch] text-graphite-500">
            One React Native app that builds into a separate installable product per brand, on
            one multi-tenant backend, with a dashboard each brand runs for itself.
          </p>
          <div className="mt-4">
            <Link href="/mobile#white-label" className={linkClass}>
              See how it works
            </Link>
          </div>
        </div>
        <div>
          <Figure
            src="/blog/react-native-iphone-duo/collection-closed-after.png"
            alt="BeerXchange's Collection screen, listing beers with brewery, style and rating."
            ratio="3/2"
            fit="contain"
            sizes="(min-width: 768px) 536px, 100vw"
            caption="BeerXchange, live on iOS and Android"
          />
          <h3 className="mt-6 text-h3">BeerXchange</h3>
          <p className="mt-3 max-w-[52ch] text-graphite-500">
            BeerXchange helps you find, collect and trade craft beer, and keeps your collection
            in the cloud for reference on the go. I built it in React Native on nights and
            weekends, and it is live in both stores.
          </p>
          <div className="mt-4 flex flex-wrap gap-x-7 gap-y-3">
            <a
              href={BEERXCHANGE_APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              App Store
            </a>
            <a
              href={BEERXCHANGE_GOOGLE_PLAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              Google Play
            </a>
            <Link href="/blog/react-native-iphone-duo" className={linkClass}>
              Read the write-up
            </Link>
          </div>
        </div>
      </div>
    </Band>
  );
}
