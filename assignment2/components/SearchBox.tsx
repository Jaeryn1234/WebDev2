/*
SearchBox.tsx - Oct 29, 2026 - Bao Nguyen
SearchBox receives the current search text and an update callback from StudentPortal.
It renders a controlled search input and sends each change back to the parent.
StudentPortal uses the text to match student names and grades without changing the source list.
When a query is present, the clear control reports an empty query to restore all results.
*/
"use client";

// Search text and update callback supplied by the parent.
interface SearchBoxProps {
    searchTerm: string;
    onSearchChange: (searchTerm: string) => void;
}

const SearchBox = ({ searchTerm, onSearchChange }: SearchBoxProps) => {
    return (
        <div className="mx-auto mt-6 w-full max-w-xl">
            {/* Search input */}
            <label htmlFor="studentSearch" className="mb-2 block font-semibold text-[#334155]">
                Search students
            </label>
            <div className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2 shadow-sm focus-within:border-[#3D7FAF] focus-within:ring-2 focus-within:ring-[#3D7FAF]/20">
                <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-5 w-5 shrink-0 text-slate-500"
                >
                    <circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" strokeWidth="2" />
                    <path d="m15.5 15.5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <input
                    id="studentSearch"
                    type="search"
                    value={searchTerm}
                    onChange={(event) => onSearchChange(event.target.value)}
                    placeholder="Search by name or grade..."
                    className="min-w-0 flex-1 bg-transparent py-1 text-slate-800 outline-none placeholder:text-slate-400"
                />
                {/* Clear search control */}
                {searchTerm && (
                    <button
                        type="button"
                        onClick={() => onSearchChange("")}
                        className="rounded-md px-2 py-1 text-sm font-semibold text-[#3D7FAF] hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3D7FAF]"
                        aria-label="Clear student search"
                    >
                        Clear
                    </button>
                )}
            </div>
        </div>
    );
};

export default SearchBox;
