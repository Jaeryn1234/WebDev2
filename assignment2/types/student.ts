/*
Assignment 2 team - student.ts - Oct 29, 2026
Student describes the data required for one student record.
It types the unique ID, name fields, grade, and average used across the application.
The interface is imported by the student data, list, and state-owning portal.
It keeps student records and component callbacks consistent at compile time.
*/
export interface Student {
    id: number;
    firstName: string;
    lastName: string;
    grade: number;
    average: number;
}