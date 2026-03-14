"use client";

// Import your reusable FlightSearchForm component
import { FlightSearchForm } from "@/components/flights/FlightSearchForm";

export default function TravelPage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Flights</h1>
      {/* This renders the entire search form and results */}
      <FlightSearchForm />
    </main>
  );
}