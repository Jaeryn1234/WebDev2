"use client";
import {useState} from 'react';

/*
Jaeryn Franco - StudentCard.tsx - Oct 28, 2026
Student Card creates the UI for displaying student information (full name, grade) and will include 2 buttons (show details/hide details and remove.
Initially, only full name and grade will show, but when show details is pressed, it reveals the students average and honour roll badge (then hide 
details becomes visible). Student Card takes in props fullName, grade, average, and onRemove which will be processed by displaying student details,
switching between show and hide button, and removing a student. The output is a card with student infomation and the ability to interact with the cards.
*/

//StudentCard prop for StudentCard
type StudentCard = {
    fullName: string;
    grade: number;
    average: number,
    onRemove: () => void;
}
  
//Displays one student
const StudentCard = ({fullName, grade, average, onRemove}: StudentCard) => {
    //a state that switches between display or hide depending on the boolean (true or false)
    const[display, setDisplay] = useState(false);

    //toggles the boolean
    const handleDisplay = () => {
        setDisplay(!display);
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
                {display && (
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
                        {display ? "Hide details" : "Show details"}
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