/*
Jaeryn Franco - StudentList.tsx - Oct 29, 2026
StudentList receives the visible students, an empty-state message, and a removal callback as props.
It checks whether there are students to render and shows the supplied message when there are none.
For a non-empty list, it maps each student to a StudentCard keyed by the student's unique ID.
It renders the student section and delegates individual card interactions to StudentCard.
*/
import StudentCard from "./StudentCard";
import type { Student } from "@/types/student";

interface StudentListProps {
    studentList: Student[];
    emptyMessage: string;
    onRemove: (id: number) => void;
}

const StudentList = ({studentList, emptyMessage, onRemove}: StudentListProps) => {
    const isEmpty = studentList.length === 0;

    return (
        <section id="students">
            <h1 className="mt-5 mb-4 border-t border-t-[#334155] pt-5 text-center text-lg font-semibold text-[#334155]">
                Students
            </h1>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                {isEmpty ? (
                    <p className="col-span-full text-center text-slate-600">{emptyMessage}</p>
                ) : (
                    studentList.map((student) => (
                        <StudentCard
                            key={student.id}
                            fullName={`${student.firstName} ${student.lastName}`}
                            grade={student.grade}
                            average={student.average}
                            onRemove={() => onRemove(student.id)}
                        />
                    ))
                )}
            </div>
        </section>
    );
};

export default StudentList;
