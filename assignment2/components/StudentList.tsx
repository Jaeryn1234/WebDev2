import StudentCard from "./StudentCard";
import {Student} from "@/types/student";

/*
Jaeryn Franco - StudentList.tsx - Oct 29, 2026
Student List manages the Student Card. It loops through studentList and creates one card for each student.
Its inputs are the studentList and onRemove props which will be processed by: if the list is empty, 
then it will return a message, and if not empty, map through the studentList and make card for each one. The output is 
a card with student infomation and the ability to interact with the cards.
*/
type StudentProps = {
    studentList: Student[];
    onRemove: (id: number) => void;
}

//Manages student card
const StudentList = ({studentList, onRemove}: StudentProps) => {
    //var to hold true or false if studentList is empty
    const isEmpty = studentList.length === 0;

    return(
        <section id="students">
        <h1 className="font-semibold text-lg mb-4 text-center text-[#334155] mt-5 pt-5 border-t border-t-[#334155]">Students</h1>
        <div className = "grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

        {/*if empty is true, will print a message stating that there are no students */}
        {isEmpty &&
            <p className ="text-red-500 col-span-full text-center">There are no students to view</p>
        }

        {/*if empty is false, it will map through the studentList and make a student card for each student */}
        {!isEmpty &&
            studentList.map((s) => (
                <StudentCard
                    key={s.id}
                    fullName = {s.firstName + " " + s.lastName}
                    grade = {s.grade}
                    average = {s.average}
                    onRemove = {()=> onRemove(s.id)}
                />
            ))
        }
    

        </div>
        </section>
    );
}
export default StudentList;