"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

interface DropdownItem {
  label: string;
  href: string;
}

interface DropdownProps {
  items: DropdownItem[];
  label?: string;
}

export default function Dropdown({ items, label = "More" }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium cursor-pointer"
      >
        {label}
        <ChevronDown
          className={`size-4 transition-transform duration-200 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg border rounded-lg z-50 cursor-pointer">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-2 hover:bg-blue-50 text-gray-800 cursor-pointer"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
