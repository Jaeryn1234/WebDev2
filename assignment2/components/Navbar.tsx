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
            <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
                <div className="flex">
                    <h1 className="text-lg font-bold text-white">New Generation High School</h1>
                </div>
                <nav className="flex gap-7">
                 { 
                    navData.map((nav) =>(
                        <div key={nav.hashtag} className="hover:bg-[#326D99] text-white transition flex justify-center items-center w-30 h-18 p-3">
                            <a href={nav.hashtag}>{nav.text}</a>
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