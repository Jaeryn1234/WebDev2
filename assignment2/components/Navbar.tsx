/*
Jaeryn Franco - Navbar.tsx - Oct 27, 2026
This file makes a Navbar. It includes the name of the high school and 3 links. Each link will jump to a specific part of the page 
based on the # and id. Reused throughout the whole webpage at the very top.
*/

//const nav: https://dev.to/ryaddev/creating-a-responsive-navbar-using-nextjs-and-tailwind-css-48kk
const navData = [
    {hashtag: "#overview", text: "Overview"},
    {hashtag: "#students", text: "Students"},
    {hashtag: "#addStudent", text: "Add Students"},
];

//map: https://www.geeksforgeeks.org/reactjs/how-to-use-map-to-create-lists-in-reactjs/
const Navbar = () => {
    return (
        <header className="bg-[#3D7FAF] border-b border-slate-200">
            <div className="max-w-5xl mx-auto px-4 py-3 sm:px-6 sm:py-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex justify-center sm:justify-start">
                    <h1 className="text-center text-base font-bold text-white sm:text-lg">
                        New Generation High School
                    </h1>
                </div>
                <nav className="grid w-full grid-cols-3 gap-1 sm:flex sm:w-auto sm:gap-2">
                    {
                        navData.map((nav) => (
                        <div
                            key={nav.hashtag}
                            className="flex min-w-0 items-center justify-center rounded px-1 py-3 text-center text-xs text-white transition hover:bg-[#326D99] sm:h-18 sm:w-30 sm:p-3 sm:text-sm"
                        >
                            <a className="whitespace-nowrap" href={nav.hashtag}>{nav.text}</a>
                        </div>
                        ))
                    }
                </nav>
            </div>
        </header>
    );
};
export default Navbar;
//flex
    //justify-center natural: horizontal
    //items-center natural: vertical