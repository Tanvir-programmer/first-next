import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-16">
          {/* Brand Info */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center">
                <span className="text-white font-bold">F</span>
              </div>
              <span className="text-xl font-bold text-slate-900">
                FutureSync
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
              The world&apos;s leading platform for syncronized team management and
              automated workflows. Build faster, together.
            </p>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">
              Platform
            </h4>
            <ul className="space-y-4 text-sm text-slate-600">
              <li>
                <a href="#" className="hover:text-indigo-600 transition">
                  Integrations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-600 transition">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-600 transition">
                  Changelog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">
              Company
            </h4>
            <ul className="space-y-4 text-sm text-slate-600">
              <li>
                <a href="#" className="hover:text-indigo-600 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-600 transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-600 transition">
                  Privacy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">
              Support
            </h4>
            <ul className="space-y-4 text-sm text-slate-600">
              <li>
                <a href="#" className="hover:text-indigo-600 transition">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-600 transition">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-600 transition">
                  Community
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-xs">
            © {new Date().getFullYear()} FutureSync Inc. Built with Next.js and
            Tailwind v4.
          </p>
          <div className="flex gap-6">
            <span className="w-5 h-5 bg-slate-200 rounded-full cursor-pointer hover:bg-indigo-200 transition"></span>
            <span className="w-5 h-5 bg-slate-200 rounded-full cursor-pointer hover:bg-indigo-200 transition"></span>
            <span className="w-5 h-5 bg-slate-200 rounded-full cursor-pointer hover:bg-indigo-200 transition"></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
