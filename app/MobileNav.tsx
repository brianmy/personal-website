"use client";

import { useState } from "react";

const links = [
  { label: "Work", href: "#work", external: false },
  { label: "About", href: "#about", external: false },
  { label: "Contact", href: "#contact", external: false },
  {
    label: "Resume",
    href: "https://drive.google.com/file/d/1ibWCc1wFp1WxJ_JoWiYaXlBhkzEGHmZr/view?usp=drive_link",
    external: true,
  },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop links */}
      <div className="hidden md:flex gap-8 text-sm text-gray-500">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="hover:text-gray-900 transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Hamburger button — mobile only */}
      <button
        className="md:hidden p-2 -mr-2 text-gray-500 hover:text-gray-900 transition-colors"
        onClick={() => setOpen((o) => !o)}
        aria-label="Toggle menu"
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M4 4l12 12M16 4L4 16" />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M3 5h14M3 10h14M3 15h14" />
          </svg>
        )}
      </button>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-sm z-50">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="block px-6 py-4 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 border-t border-gray-100 transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
