"use client";
 
import StatsPanel from "./StatsPanel";
import {startingStudents} from "@/data/students";
import {useState} from "react";
import StudentList from "./StudentList";
import {Student} from "@/types/student";
 
/*
Bao Nguyen- StudentPortal.tsx - Oct 29, 2026
Student Portal owns the data, it contains the list of students, the search text, both in state.
It displays the three sections (Overview, Students, Add a student) and a clear all button that removes every student.
Its inputs are ... Its processes are ... Its outputs are ...
*/
 
//add a student goes here in return
//add a clear all
 
//Manages everything (Parent)
const StudentPortal = () => {
    //list of every student
    const [student, setStudents] = useState<Student[]>(startingStudents);
 
    const checkSize = () => {
        return student.length;
    }
 
    //filter adds student that matches condition
    const checkHonourRoll = () => {
        return student.filter((s) => s.average >= 80).length;
    }
 
    const checkGrade12Size = () => {
        return student.filter((s) => s.grade === 12).length;
    }
 
    const handleRemove = (id: number) => {
      setStudents(student.filter((s) => s.id != id));
    }
 
 
  return (
    <>
      {/*Passes data/info*/}
      <StatsPanel
          studentSize = {checkSize()}
          honourRoll={checkHonourRoll()}
          grade12Size={checkGrade12Size()}
      />
      <StudentList
        studentList = {student}
        onRemove = {handleRemove}
      />
 
    </>
  );
}
 
export default StudentPortal;
 
//arrow function () => delays running the code until the function is called