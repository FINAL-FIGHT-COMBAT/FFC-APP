// ----------------------------------------------------------------------

type SportsEventData = {
  title: string;
  date: string;
  venueName: string;
  address: string;
  fighterA: string;
  fighterB: string;
};

type Props = {
  eventData: SportsEventData;
};

export function SportsEventSchema({ eventData }: Props) {
  const schema: Record<string, any> = {
    '@context': 'https://schema.org',
    '@type': 'SportsEvent',
    name: eventData.title,
    startDate: eventData.date,
    location: {
      '@type': 'Place',
      name: eventData.venueName,
      address: {
        '@type': 'PostalAddress',
        streetAddress: eventData.address,
      },
    },
    competitor: [
      { '@type': 'Person', name: eventData.fighterA },
      { '@type': 'Person', name: eventData.fighterB },
    ],
    sport: 'https://en.wikipedia.org/wiki/Mixed_martial_arts',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
