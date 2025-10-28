import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
  url?: string;
  image?: string;
}

export function SEOHead({
  title= "Priyank Solanki - Full Stack Software Engineer & Technical Lead",
  description=
    "Experienced Full Stack Developer with 6+ years of hands-on experience in React.js, Next.js, NestJS, PostgreSQL, and AWS. Skilled in building scalable, high-performance web and mobile applications with CI/CD, Docker, and cloud deployments.",
  keywords=
    "Full Stack Developer, React.js, Next.js, NestJS, PostgreSQL, AWS, Software Engineer, Technical Lead, Web Development, Mobile Development, DevOps, Jenkins, SonarQube, Docker, Cloud Deployment, Agile",
  author= "Priyank Solanki",
  url= "https://priyank-solanki.interasol.in",
  image= "https://priyank-solanki.interasol.in/og-image.jpg",
}: SEOHeadProps) {
  useEffect(() => {
    // Guard against SSR
    if (typeof window === 'undefined') return;

    // Set document title
    document.title = title;

    // Create or update meta tags
    const setMetaTag = (name: string, content: string, property?: boolean) => {
      const attribute = property ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // Basic meta tags
    setMetaTag('description', description);
    setMetaTag('keywords', keywords);
    setMetaTag('author', author);
    setMetaTag('viewport', 'width=device-width, initial-scale=1.0');
    setMetaTag('robots', 'index, follow');
    setMetaTag('language', 'en');
    setMetaTag('revisit-after', '7 days');

    // Open Graph meta tags
    setMetaTag('og:title', title, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:type', 'website', true);
    setMetaTag('og:url', url, true);
    setMetaTag('og:image', image, true);
    setMetaTag('og:site_name', 'Priyank Solanki Portfolio', true);
    setMetaTag('og:locale', 'en_US', true);

    // Twitter Card meta tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', image);
    setMetaTag('twitter:creator', '@priyanksolanki');

    // Additional SEO meta tags
    setMetaTag('theme-color', '#3b82f6');
    setMetaTag('msapplication-TileColor', '#3b82f6');

    // Structured data (JSON-LD)
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Priyank Solanki",
      "jobTitle": "Full Stack Software Engineer & Technical Lead",
      "description": description,
      "url": url,
      "image": image,
      "sameAs": [
        "https://www.linkedin.com/in/priyank-solanki-00b13a28a/",
        "https://github.com/Priyank-Solanki"
      ],
      "knowsAbout": [
        "React.js",
        "Next.js",
        "NestJS",
        "PostgreSQL",
        "AWS",
        "TypeScript",
        "Node.js",
        "Full Stack Development",
        "Software Architecture"
      ],
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "CHARUSAT University"
      },
      "worksFor": {
        "@type": "Organization",
        "name": "Alendei Softech PVT. LTD."
      }
    };

    // Add or update structured data script
    let scriptTag = document.querySelector('script[type="application/ld+json"]');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(structuredData);

  }, [title, description, keywords, author, url, image]);

  return null;
}