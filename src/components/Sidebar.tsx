import { NavLink } from "react-router-dom";
import { navItems } from "../routes";

type SidebarProps = {
  onNavigate?: () => void;
};

export function Sidebar({ onNavigate }: SidebarProps) {
  return (
    <nav className="h-full flex flex-col">
      <div className="flex items-center px-4 h-16 border-b border-light/10">
        <img src="icon.png" alt="icon" className="w-10 h-10" />
      </div>

      <ul className="p-3 space-y-1 overflow-y-auto">
        {navItems.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                `block px-4 py-2 rounded transition-colors ${
                  isActive
                    ? "bg-main/20 text-main"
                    : "text-light/80 hover:text-light"
                }`
              }
              end={item.to === "/"}
              onClick={() => onNavigate?.()}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
