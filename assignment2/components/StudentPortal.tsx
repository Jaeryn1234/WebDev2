/*
Bao Nguyen - StudentPortal.tsx - Oct 29, 2026
StudentPortal owns the student list and search text, and derives both the statistics and visible search results from that data.
It passes student data and callbacks down to the list, search control, and add form.
New students receive a unique ID here, while children request changes through callbacks.
Its output is the overview, searchable student list, and add-student form.
*/
"use client";

import { useRef, useState } from "react";
import { startingStudents } from "@/data/students";
import type { Student } from "@/types/student";
import AddStudent from "./AddStudent";
import SearchBox from "./SearchBox";
import StatsPanel from "./StatsPanel";
import StudentList from "./StudentList";

const StudentPortal = () => {
    const [students, setStudents] = useState<Student[]>(startingStudents);
    const [searchTerm, setSearchTerm] = useState("");
    const nextStudentId = useRef(
        Math.max(0, ...startingStudents.map((currentStudent) => currentStudent.id)) + 1,
    );

    const filteredStudents = students.filter((currentStudent) => {
        const searchValue = searchTerm.trim().toLowerCase();
        const fullName = `${currentStudent.firstName} ${currentStudent.lastName}`.toLowerCase();
        return fullName.includes(searchValue) || String(currentStudent.grade).includes(searchValue);
    });

    const handleRemove = (id: number) => {
        setStudents((currentStudents) => currentStudents.filter((currentStudent) => currentStudent.id !== id));
    };

    const handleClearAll = () => {
        setStudents([]);
        setSearchTerm("");
    };

    const handleAdd = (newStudent: Omit<Student, "id">) => {
        const studentWithId: Student = { ...newStudent, id: nextStudentId.current };
        nextStudentId.current += 1;
        setStudents((currentStudents) => [...currentStudents, studentWithId]);
    };
 
    return (
        <>
            <StatsPanel
                studentSize={students.length}
                honourRoll={students.filter((currentStudent) => currentStudent.average >= 80).length}
                grade12Size={students.filter((currentStudent) => currentStudent.grade === 12).length}
                onClearAll={handleClearAll}
            />
            <SearchBox searchTerm={searchTerm} onSearchChange={setSearchTerm} />
            <StudentList
                studentList={filteredStudents}
                emptyMessage={
                    students.length === 0
                        ? "There are no students to view."
                        : "No students match your search."
                }
                onRemove={handleRemove}
            />
            <AddStudent onAdd={handleAdd} />
        </>
    );
};

export default StudentPortal;