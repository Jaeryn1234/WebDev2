"use client";

import { useState } from "react";
import type { Student } from "@/types/student";

/*
AddStudent.tsx - Oct 29, 2026 - Bao Nguyen
AddStudent renders a controlled form for creating a student. It receives an onAdd callback and sends the entered name, grade, and average to StudentPortal.
The form validates required names and keeps grade and average within the supported ranges.
After a valid submission, it clears the form and leaves student-list ownership with the parent.
*/

// Component props and form value types.
interface AddStudentProps {
    onAdd: (student: Omit<Student, "id">) => void;
}

interface StudentFormValues {
    firstName: string;
    lastName: string;
    grade: string;
    average: string;
}

// Default values and shared input styling.
const initialFormValues: StudentFormValues = {
    firstName: "",
    lastName: "",
    grade: "",
    average: "",
};

const inputClass =
    "w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-800 outline-none focus:border-[#3D7FAF] focus:ring-2 focus:ring-[#3D7FAF]/20";

const AddStudent = ({ onAdd }: AddStudentProps) => {
    // Controlled form state and field updates.
    const [formValues, setFormValues] = useState<StudentFormValues>(initialFormValues);
    const [errorMessage, setErrorMessage] = useState("");

    const updateField = (field: keyof StudentFormValues, value: string) => {
        setFormValues((currentValues) => ({ ...currentValues, [field]: value }));
        if (errorMessage) setErrorMessage("");
    };

    return (
        <section id="addStudent" className="mt-10 border-t border-slate-300 pt-6">
            <h2 className="mb-2 text-center text-lg font-semibold text-[#334155]">Add a student</h2>
            <p className="mb-5 text-center text-sm text-slate-600">
                Enter the student&apos;s information below.
            </p>

            <form
                onSubmit={(event) => {
                    event.preventDefault();

                    // Validate input before sending the new student to the parent.
                    const firstName = formValues.firstName.trim();
                    const lastName = formValues.lastName.trim();
                    if (!firstName || !lastName) {
                        setErrorMessage("Enter both a first and last name.");
                        return;
                    }

                    const grade = Number(formValues.grade);
                    const average = Number(formValues.average);

                    if (!Number.isInteger(grade) || grade < 9 || grade > 12) {
                        setErrorMessage("Grade must be a whole number from 9 to 12.");
                        return;
                    }
                    if (Number.isNaN(average) || average < 0 || average > 100) {
                        setErrorMessage("Average must be between 0 and 100.");
                        return;
                    }

                    onAdd({ firstName, lastName, grade, average });
                    setFormValues(initialFormValues);
                    setErrorMessage("");
                }}
                className="mx-auto grid w-full max-w-3xl grid-cols-1 gap-4 rounded-2xl bg-white p-5 shadow-md sm:grid-cols-2"
            >
                {/* Student details */}
                <div>
                    <label htmlFor="firstName" className="mb-1 block text-sm font-medium text-slate-700">
                        First name
                    </label>
                    <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        autoComplete="given-name"
                        required
                        value={formValues.firstName}
                        onChange={(event) => updateField("firstName", event.target.value)}
                        className={inputClass}
                    />
                </div>

                <div>
                    <label htmlFor="lastName" className="mb-1 block text-sm font-medium text-slate-700">
                        Last name
                    </label>
                    <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        autoComplete="family-name"
                        required
                        value={formValues.lastName}
                        onChange={(event) => updateField("lastName", event.target.value)}
                        className={inputClass}
                    />
                </div>

                <div>
                    <label htmlFor="grade" className="mb-1 block text-sm font-medium text-slate-700">
                        Grade
                    </label>
                    <input
                        id="grade"
                        name="grade"
                        type="number"
                        min="9"
                        max="12"
                        step="1"
                        required
                        value={formValues.grade}
                        onChange={(event) => updateField("grade", event.target.value)}
                        className={inputClass}
                    />
                </div>

                <div>
                    <label htmlFor="average" className="mb-1 block text-sm font-medium text-slate-700">
                        Average (%)
                    </label>
                    <input
                        id="average"
                        name="average"
                        type="number"
                        min="0"
                        max="100"
                        step="any"
                        required
                        value={formValues.average}
                        onChange={(event) => updateField("average", event.target.value)}
                        className={inputClass}
                    />
                </div>

                {errorMessage && (
                    <p role="alert" className="text-sm text-red-700 sm:col-span-2">
                        {errorMessage}
                    </p>
                )}

                {/* Form submission */}
                <button
                    type="submit"
                    className="rounded-lg bg-[#3D7FAF] px-4 py-3 font-semibold text-white transition hover:bg-[#326D99] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3D7FAF] sm:col-span-2"
                >
                    Add student
                </button>
            </form>
        </section>
    );
};

export default AddStudent;