/*
Jaeryn Franco - StatsCard.tsx - Oct 29, 2026
StatsCard receives a statistic's label and numeric value through its props.
It presents the label separately from its value for quick scanning.
Its responsive Tailwind classes keep the card centered and readable at narrow widths.
The component returns one overview card for use by StatsPanel.
*/
interface StatsCardProps {
    text: string;
    number: number;
}

const StatsCard = ({text, number}: StatsCardProps) => (
    <div className="flex w-full max-w-50 min-w-0 flex-col justify-start rounded-2xl bg-white p-3 text-center shadow-md sm:h-28 sm:p-6">
        <p className="text-xs sm:text-base">{text}</p>
        <p className="mt-2 rounded-2xl bg-[#E6F2FA] p-2 font-bold text-[#16A34A] sm:p-3">{number}</p>
    </div>
);

export default StatsCard;
