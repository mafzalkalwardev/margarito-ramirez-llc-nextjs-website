import { company } from '@/lib/company';
import { SectionHeading } from '@/components/section-heading';

export const metadata = {
  title: 'Truck Types | Margarito Ramirez LLC',
  description: 'Dispatch support for dry van, flatbed, reefer, power only, hotshot, box truck, step deck, and car hauler operations.',
};

export default function TruckTypesPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-900">
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <SectionHeading eyebrow="Truck types" title="Flexible support across a range of equipment and operations." description="The dispatch service is designed to adapt to your setup, equipment, and freight goals." align="center" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {company.truckTypes.map((type) => (
            <div key={type} className="rounded-[28px] border border-slate-200 bg-white p-8 text-center shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">{type}</h3>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
