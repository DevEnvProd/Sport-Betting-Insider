import { useEffect } from 'react';

interface SeoProps {
  title: string;
  description: string;
  canonical?: string;
  keywords?: string;
  image?: string;
  type?: 'website' | 'article';
  articleData?: {
    publishedTime?: string;
    author?: string;
    category?: string;
  };
}

export function useSeo({
  title,
  description,
  canonical,
  keywords,
  image,
  type = 'website',
  articleData
}: SeoProps) {
  useEffect(() => {
    // 1. Update document title
    document.title = `${title} | Sport Betting Insider`;

    // 2. Helper to set or create meta tag
    const setMetaTag = (attrs: { [key: string]: string }, valueAttr: string, value: string) => {
      let selector = '';
      if (attrs.name) {
        selector = `meta[name="${attrs.name}"]`;
      } else if (attrs.property) {
        selector = `meta[property="${attrs.property}"]`;
      }

      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        Object.entries(attrs).forEach(([k, v]) => element!.setAttribute(k, v));
        document.head.appendChild(element);
      }
      element.setAttribute(valueAttr, value);
    };

    // 3. Update standard meta tags
    setMetaTag({ name: 'description' }, 'content', description);
    if (keywords) {
      setMetaTag({ name: 'keywords' }, 'content', keywords);
    } else {
      // Default sports betting keywords
      setMetaTag(
        { name: 'keywords' },
        'content',
        'sports betting, online casino, sports picks, game odds, winbox esport, winbox betting, match bonuses, casino review'
      );
    }
    
    // Explicit general search indexing rules
    setMetaTag(
      { name: 'robots' },
      'content',
      'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
    );

    // 4. Update Open Graph values
    const currentUrl = window.location.href;
    const resolvedCanonical = canonical || currentUrl;

    setMetaTag({ property: 'og:title' }, 'content', `${title} | Sport Betting Insider`);
    setMetaTag({ property: 'og:description' }, 'content', description);
    setMetaTag({ property: 'og:url' }, 'content', resolvedCanonical);
    setMetaTag({ property: 'og:type' }, 'content', type);
    setMetaTag({ property: 'og:site_name' }, 'content', 'Sport Betting Insider');
    if (image) {
      setMetaTag({ property: 'og:image' }, 'content', image);
    }

    // 5. Update Twitter cards
    setMetaTag({ name: 'twitter:card' }, 'content', 'summary_large_image');
    setMetaTag({ name: 'twitter:title' }, 'content', `${title} | Sport Betting Insider`);
    setMetaTag({ name: 'twitter:description' }, 'content', description);
    if (image) {
      setMetaTag({ name: 'twitter:image' }, 'content', image);
    }

    // 6. Update Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', resolvedCanonical);

    // 7. Update JSON-LD Structured Data
    const oldSchema = document.getElementById('seo-jsonld');
    if (oldSchema) {
      oldSchema.remove();
    }

    const script = document.createElement('script');
    script.id = 'seo-jsonld';
    script.type = 'application/ld+json';

    const cleanBaseUrl = 'https://ais-pre-55nymlhq3aarh6sb7zxgie-552773280424.asia-southeast1.run.app';

    const schema: Record<string, any> = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebSite',
          '@id': `${cleanBaseUrl}/#website`,
          'url': `${cleanBaseUrl}/`,
          'name': 'Sport Betting Insider',
          'description': 'A professional sports betting news and odds platform featuring expert analysis, real-time lines, and betting guides.',
          'publisher': {
            '@type': 'Organization',
            'name': 'Sport Betting Insider',
            'logo': {
              '@type': 'ImageObject',
              'url': 'https://picsum.photos/seed/logo/200/200'
            }
          }
        }
      ]
    };

    if (type === 'article' && articleData) {
      schema['@graph'].push({
        '@type': 'NewsArticle',
        '@id': `${resolvedCanonical}#article`,
        'isPartOf': {
          '@id': `${cleanBaseUrl}/#website`
        },
        'headline': title,
        'description': description,
        'image': image || 'https://picsum.photos/seed/logo/200/200',
        'datePublished': articleData.publishedTime || new Date().toISOString(),
        'author': {
          '@type': 'Person',
          'name': articleData.author || 'Marcus Vance'
        },
        'publisher': {
          '@type': 'Organization',
          'name': 'Sport Betting Insider'
        },
        'mainEntityOfPage': resolvedCanonical
      });
    }

    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

  }, [title, description, canonical, keywords, image, type, articleData]);
}
