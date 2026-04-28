import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col items-center justify-center gap-6">
        {/* Logo */}
        <Link href="/" className="text-xl font-semibold tracking-tight text-gray-900 hover:text-gray-600 transition-colors">
          SmartCalc
        </Link>

        {/* Links */}
        <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-900 transition-colors">
            Home
          </Link>
          <Link href="/health" className="hover:text-gray-900 transition-colors">
            Health
          </Link>
          <Link href="/money" className="hover:text-gray-900 transition-colors">
            Money
          </Link>
          <Link href="/about" className="hover:text-gray-900 transition-colors">
            About
          </Link>
          <Link href="/privacy-policy" className="hover:text-gray-900 transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-gray-900 transition-colors">
            Terms
          </Link>
          <Link href="/contact" className="hover:text-gray-900 transition-colors">
            Contact
          </Link>
        </div>
        
        {/* Copyright */}
        <p className="text-sm text-gray-400">
          &copy; 2026 SmartCalc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
