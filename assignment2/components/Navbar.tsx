/*
Jaeryn Franco - Navbar.tsx - Oct 29, 2026
Navbar uses a local list of section labels and matching page-fragment links.
It maps the links into the responsive navigation layout and displays the school name.
Each link targets a section ID on the page, allowing direct in-page navigation.
It renders the shared header used by the root layout on every page.
*/

const navData = [
    {hashtag: "#overview", text: "Overview"},
    {hashtag: "#students", text: "Students"},
    {hashtag: "#addStudent", text: "Add Students"},
];

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