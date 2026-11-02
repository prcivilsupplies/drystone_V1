# DryStone search visibility and enquiries

The website follows Google's documented Search Essentials: crawlable service pages, descriptive content and headings, distinct page titles and descriptions, canonical URLs, relevant image descriptions, a sitemap and truthful structured data. These are established technical foundations; they do not guarantee indexing, first-page rankings or leads. Google determines rankings independently. No private ranking algorithm, paid link scheme or artificial review markup has been added.

## What is implemented

- Each public page has its own title, description, production canonical URL and social-sharing metadata.
- Organisation, website, page, service and breadcrumb structured data describes the existing business and services. No address, hours, reviews, qualifications or ratings were invented. Local Business rich-result markup was deliberately omitted because a verified street address is not available.
- `/robots.txt` points to `/sitemap.xml`, which lists all nine public pages. Regenerate the sitemap with `node --experimental-strip-types scripts/generate-sitemap.mjs` after adding or removing services.
- Frequently asked project questions are visible to visitors, without claiming eligibility for Google FAQ rich results.
- The project enquiry form submits to Netlify Forms with a honeypot, real success and failure handling, a service selector and optional campaign source fields. Service-page quote links preselect the relevant service.
- Fonts are self-hosted. The planning photo is a real photograph with the shirt branding edited for illustration, not proof of DryStone staffing or completed work.

## After deployment

1. Confirm `project-enquiry` appears under the site's Netlify Forms. Make a genuine enquiry and verify it reaches the submission list; check spam if it is missing. Email alerts are not configured by the site code: set a form notification in the Netlify dashboard if inbox delivery is needed.
2. Verify ownership in Google Search Console, submit `https://drystone.com.au/sitemap.xml`, and inspect the homepage and service pages. Verification requires the owner's Google account and is not completed by these code changes.
3. Maintain the owner's Google Business Profile with accurate service areas, business information and genuine customer reviews. Publish original project photos, case studies and accurate location details as available.
4. Review Google Search Console impressions, queries, clicks and average position over time. Compare verified enquiries and qualified enquiries against the same reporting periods. Record a baseline before drawing conclusions about growth.
5. Campaign links sent directly to the contact page can include `utm_source`, `utm_medium` and `utm_campaign`. These values and the submission page are captured in the lead record. This is not an installed analytics dashboard or attribution across a multi-page visit. No Google Analytics account has been connected.

Official references: [Google Search Essentials](https://developers.google.com/search/docs/essentials), [Google SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide), [Google sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview), [Local Business structured data requirements](https://developers.google.com/search/docs/appearance/structured-data/local-business).
