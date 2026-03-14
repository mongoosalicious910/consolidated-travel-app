import { Navbar } from "@/components/layout/Navbar";
import { TripSidebar } from "@/components/layout/TripSidebar";

interface Props {
  params: { id: string };
}

// TODO: Fetch trip data
// const supabase = createServerSupabase()
// const { data: trip } = await supabase.from('trips')
//   .select('*, days(*, itinerary_items(*)), trip_members(*, profile:profiles(*))')
//   .eq('id', params.id)
//   .single()

export default function TripItineraryPage({ params }: Props) {
  return (
    <>
      <Navbar />
      <div className="flex">
        <TripSidebar tripId={params.id} activeTab="itinerary" />
        <main className="flex-1 max-w-3xl mx-auto px-6 py-8">
          <h1 className="font-display text-3xl font-bold text-sand-900 mb-2">
            Trip Itinerary
          </h1>
          <p className="text-sand-400 text-sm mb-8">
            Trip ID: {params.id}
          </p>

          {/* Day tabs — Person 1 builds this */}
          <div className="flex gap-2 overflow-x-auto pb-2 mb-6">
            {/* <DayTabs days={trip.days} /> */}
          </div>

          {/* Itinerary items — Person 1 builds this */}
          <div className="flex flex-col gap-3">
            {/* <ItineraryItem /> cards go here */}
            <button className="w-full py-4 rounded-2xl border-2 border-dashed border-sand-200 text-sand-400 text-sm font-medium hover:border-ocean hover:text-ocean transition-colors">
              + Add flight, hotel, activity, or restaurant
            </button>
          </div>
        </main>
      </div>
    </>
  );
}
