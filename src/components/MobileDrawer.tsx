import { useEffect, useRef, useState } from "react";
import { Sidebar } from "./Sidebar";

type MobileDrawerProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileDrawer({ open, onClose }: MobileDrawerProps) {
  const panelRef = useRef<HTMLDivElement | null>(null);
  const [shouldRender, setShouldRender] = useState(open);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) {
      window.addEventListener("keydown", onKey);
    }
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // Handle mount/unmount to allow exit animation
  useEffect(() => {
    if (open) {
      setShouldRender(true);
      setIsClosing(false);
    } else if (shouldRender) {
      setIsClosing(true);
      const t = setTimeout(() => {
        setIsClosing(false);
        setShouldRender(false);
      }, 200);
      return () => clearTimeout(t);
    }
  }, [open, shouldRender]);

  if (!shouldRender) return null;

  return (
    <div
      id="mobile-drawer"
      className="md:hidden fixed inset-0 z-50"
      aria-modal="true"
      role="dialog"
      onClick={(e) => {
        const target = e.target as Node;
        if (panelRef.current && !panelRef.current.contains(target)) {
          onClose();
        }
      }}
    >
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black/60 transition-opacity duration-200 ${
          open && !isClosing ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Panel */}
      <div
        ref={panelRef}
        className={`relative w-72 max-w-[80%] h-full bg-gray border-r border-light/10 transform transition-transform duration-200 ${
          open && !isClosing ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-3 border-b border-light/10">
          <button
            aria-label="Close navigation"
            onClick={onClose}
            className="p-2"
          >
            <span className="block w-5 h-0.5 bg-light rotate-45 translate-y-0.5" />
            <span className="block w-5 h-0.5 bg-light -rotate-45 -translate-y-0.5" />
          </button>
        </div>
        <Sidebar onNavigate={onClose} />
      </div>
    </div>
  );
}
