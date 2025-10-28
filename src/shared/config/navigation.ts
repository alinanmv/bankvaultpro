export type NavItem = {
  id: string;
  label: string;
  href?: string;     // для обычных пунктов
  external?: boolean;
  icon?: React.ReactNode;
  hidden?: boolean;  // условное скрытие
  actionId?: string; // если это действие (logout и т.п.)
};

export const mainPages: NavItem[] = [
  { id: "dashboard",    label: "Dashboard",    href: "/dashboard" },
  { id: "transactions", label: "Transactions", href: "/transactions" },
  { id: "reports",      label: "Reports",      href: "/reports" },
  { id: "settings",     label: "Settings",     href: "/settings" },
  { id: "profile",      label: "Profile",      href: "/profile" },
];

export const userSettings: NavItem[] = [
  { id: "profile",  label: "Profile",  href: "/profile" },
  { id: "billing",  label: "Billing",  href: "/billing" },
  { id: "settings", label: "Settings", href: "/settings" },
  { id: "signout",  label: "Sign out",  href: "/" }, // ← действие, не href
];
