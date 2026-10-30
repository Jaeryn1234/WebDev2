"use client";
import {useState} from 'react';

/*
Jaeryn Franco - StudentCard.tsx - Oct 29, 2026
StudentCard receives one student's name, grade, average, and a remove callback through its props.
It keeps its detail visibility state locally so each card can be opened independently.
The details show the average and an Honour Roll badge only when the average is above 80.
The card renders the student summary and controls for toggling details or removing the student.
*/

interface StudentCardProps {
    fullName: string;
    grade: number;
    average: number,
    onRemove: () => void;
}
  
//Displays one student
const StudentCard = ({fullName, grade, average, onRemove}: StudentCardProps) => {
    //a state that switches between display or hide depending on the boolean (true or false)
    const [showDetails, setShowDetails] = useState(false);

    //toggles the boolean
    const handleDisplay = () => {
        setShowDetails((currentShowDetails) => !currentShowDetails);
    }
    
    return (
        <div className="bg-white rounded-2xl p-4">
            <div className="flex flex-col justify-start gap-3">
                <p className="text-center pb-3 border-b">{fullName}</p>
                <div className="flex justify-between">
                    <p>Grade</p>
                    <p>{grade}</p>
                </div>
                {/*If show details is true then display average and honour roll badge */}
                {showDetails && (
                    <>
                    <div className="flex justify-between">
                        <p>Average</p>
                        <p>{average}</p>
                    </div>
                    {average >= 80 && (
                        <div className="bg-[#9bda9b] rounded p-2 text-center">Honour Roll</div>
                    )}
                    </>
                )}
                </div>

                <div className="flex gap-2 w-full mt-4">
                    <button
                        onClick={handleDisplay}
                        className="flex-1 h-10 rounded-lg px-4 py-1 font-semibold bg-[#E9803E] hover:bg-[#D96F2D]"
                    >
                        {showDetails ? "Hide details" : "Show details"}
                    </button>

                    <button
                        onClick={onRemove}
                        className="flex-1 h-10 rounded-lg px-3 py-1 font-semibold bg-[#F8D7DA] hover:bg-[#EBA6AE] border border-red-400"
                    >
                        Remove
                    </button>
                </div>
            </div>
    );
};
export default StudentCard;