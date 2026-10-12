export const SITE_URL = 'https://recruitmenttools.org';
export const SITE_NAME = 'RecruitmentTools.org';
export const TAGLINE = 'The recruiting stack, explained';
export const AUTHOR_NAME = 'RecruitmentTools.org Research Desk';
export const AUTHOR_URL = `${SITE_URL}/about/#research-desk`;
export const CONTACT_EMAIL = 'desk@recruitmenttools.org';
export const SITE_PUBLISHED = '2026-10-12';
export const LAST_REVIEWED = '2026-10-12';
export const YEAR = '2026';

export const author = { '@type': 'Organization', name: AUTHOR_NAME, url: AUTHOR_URL };
export const publisher = { '@type': 'Organization', name: SITE_NAME, url: `${SITE_URL}/`, logo: { '@type': 'ImageObject', url: `${SITE_URL}/icon-512.png` } };

const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
export function fmtDate(iso: string): string { const [y,m,d] = iso.split('-').map(Number); return `${MONTHS[m-1]} ${d}, ${y}`; }
export function fmtMonth(iso: string): string { const [y,m] = iso.split('-').map(Number); return `${MONTHS[m-1]} ${y}`; }

export function articleSchema(opts: { headline: string; description: string; path: string; published?: string; updated?: string }) {
  return {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: opts.headline, description: opts.description,
    url: `${SITE_URL}${opts.path}`, mainEntityOfPage: `${SITE_URL}${opts.path}`,
    datePublished: opts.published ?? SITE_PUBLISHED, dateModified: opts.updated ?? LAST_REVIEWED,
    author, publisher, inLanguage: 'en-US',
  };
}
export function faqSchema(faq: { q: string; a: string }[]) {
  return { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
}
export function itemListSchema(name: string, items: { name: string; url: string }[]) {
  return { '@context': 'https://schema.org', '@type': 'ItemList', name, numberOfItems: items.length, itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, url: it.url })) };
}
export function breadcrumbSchema(crumbs: { name: string; path: string }[]) {
  return { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: `${SITE_URL}${c.path}` })) };
}
