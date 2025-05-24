
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl: string;
  ogImage?: string;
  schema?: Record<string, any>;
  noIndex?: boolean;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = 'https://agent-hub.smartmaya.ai/social-preview.png',
  schema,
  noIndex = false
}) => {
  // Ensure canonical URL is absolute
  const absoluteCanonicalUrl = canonicalUrl.startsWith('http') 
    ? canonicalUrl 
    : `https://agent-hub.smartmaya.ai${canonicalUrl.startsWith('/') ? canonicalUrl : `/${canonicalUrl}`}`;
  
  return (
    <Helmet>
      {/* Primary meta tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={absoluteCanonicalUrl} />
      
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Additional SEO meta tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="author" content="Maya AI" />
      <meta name="publisher" content="Maya AI" />
      <meta name="theme-color" content="#7C3AED" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={absoluteCanonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Maya AI Agent Hub" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@smartmaya_ai" />
      <meta name="twitter:creator" content="@smartmaya_ai" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional meta tags for better indexing */}
      <meta name="language" content="EN" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      
      {/* Indexing control */}
      {noIndex && <meta name="robots" content="noindex,nofollow" />}
      {!noIndex && <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />}
      
      {/* JSON-LD Schema */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
