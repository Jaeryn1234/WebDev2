/*
Jaeryn Franco - StatsPanel.tsx - Oct 29, 2026
StatsPanel receives the total student count, Honour Roll count, Grade 12 count, and a clear-all callback.
It passes each statistic to a separate StatsCard and disables clearing when there are no students.
The statistics are supplied by StudentPortal, which derives them from the current student list.
It renders the overview heading, three statistic cards, and the clear-all control.
*/
import StatsCard from "./StatsCard";

interface StatsPanelProps {
    studentSize: number;
    honourRoll: number;
    grade12Size: number;
    onClearAll: () => void;
}

const StatsPanel = ({studentSize, honourRoll, grade12Size, onClearAll}: StatsPanelProps) => (
    <section id="overview">
        <h1 className="font-semibold text-lg mb-4 text-center text-[#334155]">Overview</h1>
        <div className="grid grid-cols-1 justify-items-center gap-3 sm:grid-cols-3">
            <StatsCard text="Total Students" number={studentSize} />
            <StatsCard text="Honour Roll" number={honourRoll} />
            <StatsCard text="Grade 12 Count" number={grade12Size} />
        </div>
        <div className="mt-4 flex justify-center">
            <button
                type="button"
                onClick={onClearAll}
                disabled={studentSize === 0}
                className="rounded-lg bg-red-600 px-4 py-2 font-semibold text-white transition hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 disabled:cursor-not-allowed disabled:opacity-50"
            >
                Clear All
            </button>
        </div>
    </section>
);

export default StatsPanel;
