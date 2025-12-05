import { Helmet } from "react-helmet";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: object[];
  noindex?: boolean;
  nofollow?: boolean;
}

export const SEO = ({
  title,
  description,
  keywords,
  canonical,
  ogImage = "https://ik.imagekit.io/sharfi/Dahla-logo-white.png?updatedAt=1740666544459",
  ogType = "website",
  structuredData,
  noindex = false,
  nofollow = false,
}: SEOProps) => {
  const siteUrl = "https://dahla.net";
  const fullTitle = `${title} | Dahla Group`;
  const canonicalUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;
  const ogImageUrl = ogImage.startsWith("http") ? ogImage : `${siteUrl}${ogImage}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />

      {/* Robots */}
      {noindex && <meta name="robots" content="noindex" />}
      {nofollow && <meta name="robots" content="nofollow" />}
      {!noindex && !nofollow && <meta name="robots" content="index, follow" />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:site_name" content="Dahla Group" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />

      {/* Additional Meta Tags */}
      <meta name="author" content="Dahla Group" />
      <meta name="geo.region" content="AE" />
      <meta name="geo.placename" content="United Arab Emirates" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />

      {/* Structured Data */}
      {structuredData?.map((data, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
    </Helmet>
  );
};

// Re-export utility functions for convenience
export {
  getOrganizationSchema,
  getLocalBusinessSchema,
  getServiceSchema,
  getBreadcrumbSchema,
  getWebsiteSchema,
  getFAQSchema
} from "./seo-utils";

