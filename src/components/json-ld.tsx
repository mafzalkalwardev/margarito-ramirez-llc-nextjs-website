import { company } from '@/lib/company';
import { absoluteUrl } from '@/lib/seo';

export function OrganizationJsonLd() {
  const logoUrl = absoluteUrl('/logo.png');
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${absoluteUrl('/')}#organization`,
        name: company.legalName,
        legalName: company.legalName,
        alternateName: [company.serviceBrand, company.soleMember],
        url: absoluteUrl('/'),
        logo: logoUrl,
        image: logoUrl,
        email: company.emails.support,
        foundingDate: company.established,
        identifier: company.entityNumber,
        description: company.seo.description,
        address: [
          {
            '@type': 'PostalAddress',
            streetAddress: '4617 1/2 Kester Ave',
            addressLocality: 'Sherman Oaks',
            addressRegion: 'CA',
            postalCode: '91403',
            addressCountry: 'US',
          },
          {
            '@type': 'PostalAddress',
            streetAddress: '5025 Arch Way Dr',
            addressLocality: 'La Porte',
            addressRegion: 'TX',
            postalCode: '77571',
            addressCountry: 'US',
          },
        ],
        contactPoint: [
          {
            '@type': 'ContactPoint',
            contactType: 'customer support',
            email: company.emails.support,
            areaServed: 'US',
            availableLanguage: ['English'],
          },
        ],
      },
      {
        '@type': 'ProfessionalService',
        '@id': `${absoluteUrl('/')}#business`,
        name: company.serviceBrand,
        legalName: company.legalName,
        url: absoluteUrl('/'),
        image: absoluteUrl('/og-image.png'),
        logo: logoUrl,
        email: company.emails.support,
        description: company.seo.description,
        foundingDate: company.established,
        identifier: company.entityNumber,
        priceRange: '$$',
        areaServed: {
          '@type': 'Country',
          name: 'United States',
        },
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '08:00',
          closes: '18:00',
        },
        brand: {
          '@type': 'Brand',
          name: company.serviceBrand,
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'IT support services',
          itemListElement: company.services.map((service) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: service.name,
              description: service.summary,
              provider: {
                '@id': `${absoluteUrl('/')}#organization`,
              },
              areaServed: 'United States',
            },
          })),
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${absoluteUrl('/')}#website`,
        url: absoluteUrl('/'),
        name: company.serviceBrand,
        description: company.seo.description,
        publisher: {
          '@id': `${absoluteUrl('/')}#organization`,
        },
        inLanguage: 'en-US',
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
