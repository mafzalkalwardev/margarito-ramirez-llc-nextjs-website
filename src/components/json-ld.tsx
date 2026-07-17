import { company } from '@/lib/company';

export function OrganizationJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: company.serviceBrand,
    legalName: company.legalName,
    url: company.domain,
    email: company.emails.support,
    description: company.seo.description,
    foundingDate: company.established,
    identifier: company.entityNumber,
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
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
