import { SITE_URL } from '../lib/site';

/**
 * Ask IndexNow engines (Bing, Yandex, Seznam, Naver and others) to recrawl pages.
 * Google doesn't use IndexNow; request reindexing in Search Console instead.
 *
 *   pnpm indexnow            every URL in the live sitemap
 *   pnpm indexnow /about     just these paths
 *
 * .github/workflows/indexnow.yml runs it with no paths after every successful
 * production deploy. Run it by hand only after the deploy is live: the engines
 * fetch the key file from the live site to confirm the submission comes from
 * the site owner.
 */
const KEY = '97d5aea98f88568e1f768896b0c7c154';
const KEY_LOCATION = `${SITE_URL}/${KEY}.txt`;

async function sitemapUrls(): Promise<string[]> {
  const res = await fetch(`${SITE_URL}/sitemap.xml`);
  if (!res.ok) throw new Error(`sitemap.xml returned ${res.status}`);
  return [...(await res.text()).matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

async function main() {
  const paths = process.argv.slice(2);
  const urls = paths.length
    ? paths.map((path) => new URL(path, SITE_URL).toString())
    : await sitemapUrls();

  const keyFile = await fetch(KEY_LOCATION);
  if (!keyFile.ok || (await keyFile.text()).trim() !== KEY) {
    throw new Error(`Key file isn't live at ${KEY_LOCATION}. Deploy first.`);
  }

  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host: new URL(SITE_URL).host,
      key: KEY,
      keyLocation: KEY_LOCATION,
      urlList: urls
    })
  });
  // 200 and 202 both mean accepted; 202 means the key is still being verified.
  if (res.status !== 200 && res.status !== 202) {
    throw new Error(`IndexNow returned ${res.status}: ${await res.text()}`);
  }
  console.log(`IndexNow accepted ${urls.length} URL(s) (${res.status}):`);
  for (const url of urls) console.log(`  ${url}`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
