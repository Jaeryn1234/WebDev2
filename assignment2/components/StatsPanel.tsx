/*
Jaeryn Franco - StatsPanel.tsx - Oct 28, 2026
Stats Panel creates the stats UI of 3 things: how many students there are, how many are on the honour roll (with an average
above 80), and how many are in grade 12 (the status will react when the list is changed). Its inputs are student size, honour roll, and grade 12 size, props.
It will process these inputs by passing them to the Panel component, and the output is the stats displayed on screen.
*/

//StatsPanel Props for StatsPanel component
type StatsPanel = {
    studentSize: number;
    honourRoll: number; //avarage 80 or more
    grade12Size: number;
    onClearAll: () => void;
}

//Panel props for Panel component
type Panel = {
    text: string;
    number: number;
}

//Displays the statistics
const StatsPanel = ({studentSize, honourRoll, grade12Size, onClearAll}: StatsPanel) => {
return(
    <section id="overview">
        <h1 className="font-semibold text-lg mb-4 text-center text-[#334155]">Overview</h1>
        <div className="grid grid-cols-1 justify-items-center gap-3 sm:grid-cols-3">
            <Panel text="Total Students" number={studentSize}/>
            <Panel text="Honour Roll" number={honourRoll}/>
            <Panel text="Grade 12 Count" number = {grade12Size}/>
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
)
}
export default StatsPanel;

//Panel component made to reduce redundancy. Multiple stats can be made without repetition.
const Panel = ({text, number}: Panel) => {
    return (
        <div className="flex w-full max-w-50 min-w-0 flex-col justify-start rounded-2xl bg-white p-3 text-center shadow-md sm:h-28 sm:p-6">
            <p className="text-xs sm:text-base">{text}</p>
            <p className="mt-2 rounded-2xl bg-[#E6F2FA] p-2 font-bold text-[#16A34A] sm:p-3">{number}</p>
        </div>
    );
}