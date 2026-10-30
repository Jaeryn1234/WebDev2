/*
Jaeryn Franco - Footer.tsx - Oct 29, 2026
Footer uses the school's contact details written into its static content.
It groups the name, address, phone number, and email into a centered layout.
Tailwind classes keep the footer styling consistent with the site's navigation.
It renders the shared footer used by the root layout on every page.
*/

const Footer = () => {
  return (
    <footer className="bg-[#3D7FAF] border-t border-slate-200 mt-16">
      <div className="max-w-5xl mx-auto px-6 py-6 flex flex-col items-center justify-center">
        <p className="text-sm text-slate-400 text-center">New Generation High School</p>
        <p className="text-sm text-slate-400 text-center">3020 52 St NE, Calgary AB T1Y 5P4 </p>
        <p className="text-sm text-slate-400 text-center">(403) 111-1111</p>
        <p className="text-sm text-slate-400 text-center">newgeneration@cbe.ab.ca</p>
      </div>
    </footer>
  );
};

export default Footer;