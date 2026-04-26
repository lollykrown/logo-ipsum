'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

import Image from "next/image";

const navLinks = [
  { label: 'Home',         href: '/' },
//   { label: 'Industries',   href: '/industries' },
  { label: 'Featured Insights', href: '/insights' },
  { label: 'Contact Us',   href: '/Contact' },
  { label: 'About Us',     href: '/about' },
  { label: 'Careers',      href: '/careers' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname  = usePathname();
  const menuRef   = useRef(null);
  const toggleRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  // ── Close on outside click ──────────────────────────────────────
  useEffect(() => {
    if (!menuOpen) return;

    function handleClick(e) {
      if (
        menuRef.current   && !menuRef.current.contains(e.target) &&
        toggleRef.current && !toggleRef.current.contains(e.target)
      ) {
        setMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav 
    className={`
        fixed w-full top-0 z-50 flex backdrop-blur justify-between items-center px-4 md:px-10 py-5 transition-colors duration-500
        ${scrolled ? " bg-white/60 shadow-xl " : "bg-white/0 text-black"}
      `}>

      {/* Logo */}
      <Link href="/" className="flex select-none justify-items-center items-center gap-2 group">
        <Image src='/logo.png' alt='logo'  width={150} height={80}/>
        {/* <span className="text-lg text-(--color-text-primary) group-hover:text-(--color-accent) uppercase font-medium group-hover:drop-shadow-[0_0_12px_var(--color-accent)]">
          Lollykrown
        </span> */}
      </Link>

      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-8 ml-auto">
        {navLinks.map((link) => {
          const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);

          if (link.isPhoto) {
            return (
              <Link
                key={link.label}
                href={link.href}
                className="group relative flex items-center gap-1.5 text-sm font-medium transition-colors duration-200"
                style={{ color: isActive ? 'var(--color-accent)' : 'var(--color-text-secondary)' }}
                onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.color = 'var(--color-text-primary)'; }}
                onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.color = 'var(--color-text-secondary)'; }}
              >
                <ApertureIcon />
                <span className="italic tracking-wide">{link.label}</span>
                {/* subtle animated underline */}
                <span
                  className="absolute -bottom-0.5 left-5 h-px transition-all duration-300 w-0 group-hover:w-[calc(100%-20px)]"
                  style={{ backgroundColor: 'var(--color-accent)' }}
                />
              </Link>
            );
          }

          return (
            <Link
              key={link.label}
              href={link.href}
              className={`text-sm font-medium hover:text-(--color-text-primary) hover:border-b hover:border-amber-400 transition-border duration-200 ${isActive ? 'text-(--color-accent)' : 'text-(--color-text-secondary)'}`}
            >
              {link.label}
            </Link>
          );
        })}
        <Link href="/contact" className="btn-accent">Contact</Link>
      </div>

      {/* Mobile toggle */}
      <div className="md:hidden flex items-center gap-3" ref={toggleRef}>
        <button
          className="text-2xl text-(--color-text-primary) transition-colors"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="absolute z-50 backdrop-blur top-full left-0 right-0 bg-white/90  flex flex-col items-start gap-4 px-6 py-6 md:hidden "
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            if (link.isPhoto) {
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="group flex items-center gap-2 text-base font-medium transition-colors duration-200"
                  style={{ color: isActive ? 'var(--color-accent)' : 'var(--color-text-secondary)' }}
                >
                  <ApertureIcon active={isActive} />
                  <span className="italic tracking-wide">{link.label}</span>
                </Link>
              );
            }

            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-base font-medium hover:border-b hover:text-(--color-text-primary) hover:border-amber-400 transition-border duration-200 ${isActive ? 'text-(--color-accent)' : 'text-(--color-text-secondary)'}`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="btn-accent">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}