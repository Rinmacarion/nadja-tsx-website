import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 py-12 md:py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-center">
          <div>
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center mb-6">
                  <h3 className="text-2xl font-serif font-bold text-white">{PERSONAL_INFO.name}</h3>
                </div>
                {/* Department and university removed as requested */}
                <a 
                  href={`mailto:${PERSONAL_INFO.email}`} 
                  className="inline-block py-3 px-6 border border-slate-700 text-white rounded hover:bg-white hover:text-slate-900 transition-all"
                >
                  Contact Me
                </a>
              </div>
              <img
                src="/assets/Jehlifish.png"
                alt="Jehlifish emblem"
                className="h-20 sm:h-24 w-auto rounded-2xl shadow-xl md:hidden"
              />
            </div>
          </div>
          <div className="hidden md:flex md:justify-center">
            <img
              src="/assets/Jehlifish.png"
              alt="Jehlifish emblem"
              className="h-20 sm:h-24 w-auto rounded-2xl shadow-xl"
            />
          </div>
          <div className="md:text-right">
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="flex flex-wrap items-center justify-start md:justify-end gap-3">
              <a href={PERSONAL_INFO.socials.linkedin} className="inline-flex" aria-label="LinkedIn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-slate-300 hover:text-white transition-colors" xmlns="http://www.w3.org/2000/svg"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/></svg>
              </a>
              <a href={PERSONAL_INFO.socials.twitter} className="inline-flex" aria-label="X (Twitter)">
                <img src="https://img.freepik.com/premium-vector/twitter-new-logo-twitter-icons-twitter-x-logo_1036746-408.jpg?w=826" alt="X (Twitter)" width="24" height="24" className="rounded bg-white" />
              </a>
              <a href={PERSONAL_INFO.socials.orcid} className="inline-flex" aria-label="ORCID">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/ORCID_iD.svg/960px-ORCID_iD.svg.png?20190308043226" alt="ORCID" width="24" height="24" className="rounded bg-white" />
              </a>
              <a href="https://bsky.app/profile/nadja.bsky.social" className="inline-flex" aria-label="BlueSky">
                <img src="/assets/Bluesky_Logo.jpg" alt="BlueSky" width="24" height="24" className="rounded" />
              </a>
              <a href={PERSONAL_INFO.socials.scholar} className="inline-flex" aria-label="Google Scholar">
                <img src="https://listimg.pinclipart.com/picdir/s/485-4850859_free-png-google-icon-google-plus-logo-blanco.png" alt="Google Scholar" width="24" height="24" className="rounded bg-white" />
              </a>
              <a href={PERSONAL_INFO.socials.researchgate} className="inline-flex" aria-label="ResearchGate">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/ResearchGate_icon_SVG.svg" alt="ResearchGate" width="24" height="24" className="rounded bg-white" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;