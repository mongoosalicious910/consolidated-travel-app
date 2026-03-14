import { Navbar } from "@/components/layout/Navbar";

// TODO: Fetch user's trips from Supabase
// const supabase = createServerSupabase()
// const { data: trips } = await supabase.from('trips').select('*, trip_members(*, profile:profiles(*))')

export default function DashboardPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <header className="pt-12 pb-8 animate-fade-in">
          <p className="font-mono text-xs text-sand-400 uppercase tracking-[0.15em] mb-2">
            ✦ Your Trips
          </p>
          <div className="flex justify-between items-start">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-sand-900 leading-tight">
              Where to<br />next?
            </h1>
            <button className="btn-primary flex items-center gap-2 mt-2">
              <span className="text-lg leading-none">+</span> New Trip
            </button>
          </div>
        </header>

        {/* Trip cards — replace with real data */}
        <div className="flex flex-col gap-4 pb-16">
          <div className="card p-6 animate-slide-up">
            <p className="text-sand-400 text-sm">
              No trips yet. Create your first trip to get started!
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
