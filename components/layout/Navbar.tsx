import Link from "next/link";
import { cn } from "@/lib/utils";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 glass border-b border-sand-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/dashboard" className="flex items-center gap-2.5">
          <span className="font-display text-xl font-bold text-sand-900 tracking-tight">
            TRVL
          </span>
          <span className="chip bg-ocean/10 text-ocean text-[10px]">beta</span>
        </Link>

        <div className="flex items-center gap-3">
          {/* TODO: Show user avatar + dropdown once auth is wired */}
          <div className="w-8 h-8 rounded-full bg-sand-200 flex items-center justify-center">
            <span className="text-xs font-bold text-sand-500">?</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
