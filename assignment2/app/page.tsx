/*
Assignment 2 team - page.tsx - Oct 29, 2026
Home has no props and serves as the application's landing page.
It imports StudentPortal, which owns the interactive student data and callbacks.
The page provides a responsive, centered content container for the portal.
It renders the main student management experience.
*/
import StudentPortal from "@/components/StudentPortal";
const Home = () => {

    return (
        <main className="mx-auto max-w-5xl px-4 py-5 sm:px-6">
            <StudentPortal/>
        </main>
    );
};
export default Home;

// AI assistance was used for styling ideas, debugging, and understanding React state and component roles.
