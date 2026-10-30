/*
Assignment 2 team - students.ts - Oct 29, 2026
This file provides the initial student records as an array of Student objects.
Each record includes a unique ID, first and last name, grade, and average.
StudentPortal imports this array to initialize the single source of student state.
The exported data can be updated to change which students appear when the app loads.
*/
import type { Student } from "@/types/student";

export const startingStudents: Student[] = [
    {id: 1, firstName: "Jaeryn", lastName: "Franco", grade: 12, average: 95},
    {id: 2, firstName: "Bao", lastName: "Nguyen", grade: 12, average: 95},
    {id: 3, firstName: "Adam", lastName: "Foster", grade: 10, average: 80},
    {id: 4, firstName: "Maya", lastName: "Lane", grade: 9, average: 87},
    {id: 5, firstName: "Jewel", lastName: "May", grade: 11, average: 80},
    {id: 6, firstName: "Jamie", lastName: "Martin", grade: 9, average: 63},
    {id: 7, firstName: "Emberly", lastName: "Moreau", grade: 10, average: 99},
    {id: 8, firstName: "Marine", lastName: "Fontaine", grade: 11, average: 54},
];