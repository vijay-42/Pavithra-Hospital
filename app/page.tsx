import Site from "@/components/Site";
import { LangProvider } from "@/lib/lang";
import { site } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Hospital",
  name: site.name,
  alternateName: site.nameTa,
  telephone: site.phoneIntl,
  address: {
    "@type": "PostalAddress",
    streetAddress: "12, Erikarai Road",
    addressLocality: "Pennagaram",
    addressRegion: "Tamil Nadu",
    postalCode: site.pin,
    addressCountry: "IN",
  },
  medicalSpecialty: ["Emergency", "Obstetric", "Pediatric"],
  aggregateRating: { "@type": "AggregateRating", ratingValue: String(site.rating), reviewCount: String(site.reviewCount) },
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LangProvider>
        <Site />
      </LangProvider>
    </>
  );
}
