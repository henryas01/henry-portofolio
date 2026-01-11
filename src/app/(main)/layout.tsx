"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { LogOut, Menu, X } from "lucide-react";
import { useState, ReactNode, PropsWithChildren } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { Constants } from "@app/src/constants";

export default function RootLayout({ children }: PropsWithChildren) {
  const pathname = usePathname(); // Replaces useLocation
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isAdminRoute = pathname.startsWith("/admin");
  const isCustomerRoute = pathname.startsWith("/customer");
  const isDashboardRoute = isAdminRoute || isCustomerRoute;

  const publicNavItems = [
    { path: "/resume", label: "Resume" },
    { path: "/certificates", label: "Certificates" },
    { path: "/projects", label: "Projects" },
    { path: "/request", label: "Request" },
    { path: "/articles", label: "Articles" },
    { path: "/games", label: "Games" },
    { path: "/tools", label: "Tools" },
  ];

  const adminNavItems = [
    { path: "/admin", label: "Dashboard" },
    { path: "/admin/settings", label: "Settings" },
    { path: "/admin/requests", label: "Requests" },
  ];

  const customerNavItems = [
    { path: "/customer", label: "Dashboard" },
    { path: "/customer/request", label: "New Request" },
  ];

  const navItems = isAdminRoute
    ? adminNavItems
    : isCustomerRoute
    ? customerNavItems
    : publicNavItems;

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative group">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/50">
                  <Image
                    src="/icon-henryas.png"
                    width={100}
                    height={100}
                    alt="icon-henryas"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    priority
                  />
                </div>
              </div>

              <span className="text-xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Henry As
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {!isDashboardRoute &&
                publicNavItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`transition-colors hover:text-cyan-400 ${
                      pathname === item.path ? "text-cyan-400" : "text-gray-300"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}

              {isDashboardRoute &&
                navItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`transition-colors hover:text-cyan-400 ${
                      pathname === item.path ? "text-cyan-400" : "text-gray-300"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}

              <Link
                href="/login"
                className="px-4 py-2 rounded-lg border border-cyan-500/50 hover:bg-cyan-500/10 transition-colors"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
              >
                Register
              </Link>

              {/* {!user ? (
                <>
                  <Link
                    href="/login"
                    className="px-4 py-2 rounded-lg border border-cyan-500/50 hover:bg-cyan-500/10 transition-colors"
                  >
                    Login
                  </Link>
                  <Link
                    href="/register"
                    className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
                  >
                    Register
                  </Link>
                </>
              ) : (
                <button
                  // onClick={onLogout}
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg border border-cyan-500/50 hover:bg-cyan-500/10 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              )} */}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-cyan-500/10 transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-cyan-500/20">
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-2 rounded-lg transition-colors ${
                    pathname === item.path
                      ? "bg-cyan-500/20 text-cyan-400"
                      : "text-gray-300 hover:bg-cyan-500/10"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              {/* Login/Register/Logout logic remains same but using 'href' */}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-16">{children}</main>

      {/* Footer */}
      <footer className="relative border-t border-white/10 bg-[#0a0a0f] overflow-hidden ">
        <div className="mb-12">
          <div className="grid gap-12 md:grid-cols-3 items-center">
            {/* 1. LEFT – Brand & Identity */}
            <div className="text-center md:text-left space-y-2">
              <h3 className="text-xl font-bold tracking-tight text-white">
                Henry AS
              </h3>
              <p className="text-sm font-medium text-gray-400">
                {Constants.SITE.TAGLINE}
              </p>
            </div>

            {/* 2. CENTER – Logo & Integrated Copyright */}
            <div className="flex flex-col items-center gap-4 py-4">
              <div className="relative group">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/50">
                  <Image
                    src="/icon-henryas.png"
                    width={100}
                    height={100}
                    alt="icon-henryas"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    priority
                  />
                </div>
              </div>

              <div className="text-center">
                <p className="text-[11px] uppercase tracking-[0.2em] text-gray-500 font-medium">
                  © {new Date().getFullYear()} All Rights Reserved
                </p>
              </div>
            </div>

            {/* 3. RIGHT – Social Navigation */}
            <div className="flex justify-center md:justify-end gap-1">
              {[
                {
                  label: "GitHub",
                  href: Constants.SITE.GITHUB,
                  icon: <FaGithub />,
                },
                {
                  label: "LinkedIn",
                  href: Constants.SITE.LINKEDIN,
                  icon: <FaLinkedin />,
                },
                {
                  label: "Email",
                  href: "mailto:" + Constants.SITE.EMAIL,
                  icon: <FaEnvelope />,
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-4 py-2 text-sm text-gray-400 hover:text-white transition-all"
                >
                  <span className="text-lg group-hover:text-cyan-400 to-blue-500 group-hover:-translate-y-0.5 transition-all duration-300">
                    {item.icon}
                  </span>
                  <span className="hidden lg:block font-medium tracking-wide">
                    {item.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
