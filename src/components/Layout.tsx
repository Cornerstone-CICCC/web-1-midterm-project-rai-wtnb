import { useState } from "react";
import { Outlet } from "react-router-dom";
import { MobileDrawer } from "./MobileDrawer.tsx";
import { Sidebar } from "./Sidebar.tsx";

export function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);

  function openMobile() {
    setMobileOpen(true);
    document.body.style.overflow = "hidden";
  }

  function closeMobile() {
    setMobileOpen(false);
    document.body.style.overflow = "";
  }

  return (
    <div className="min-h-screen bg-dark text-light">
      {/* Sidebar for desktop */}
      <div className="hidden md:block fixed inset-y-0 left-0 w-60 bg-gray border-r border-light/10">
        <Sidebar />
      </div>

      {/* Top bar with hamburger on mobile */}
      <div className="md:hidden sticky top-0 z-40 bg-dark/90 backdrop-blur border-b border-light/10">
        <button
          aria-label="Open navigation"
          aria-controls="mobile-drawer"
          aria-expanded={mobileOpen}
          onClick={openMobile}
          className="p-4 focus:outline-none"
        >
          {/* Hamburger */}
          <span className="block w-6 h-0.5 bg-light mb-1.5" />
          <span className="block w-6 h-0.5 bg-light mb-1.5" />
          <span className="block w-6 h-0.5 bg-light" />
        </button>
      </div>

      {/* Drawer for mobile */}
      <MobileDrawer open={mobileOpen} onClose={closeMobile} />

      {/* Content area */}
      <main className="md:ml-60 p-6 md:p-10">
        <Outlet />
      </main>
    </div>
  );
}
