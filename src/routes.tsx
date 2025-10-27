export type NavItem = {
  to: string;
  label: string;
};

export const navItems: NavItem[] = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/experiences", label: "Experiences" },
  { to: "/contact", label: "Contact" },
];
