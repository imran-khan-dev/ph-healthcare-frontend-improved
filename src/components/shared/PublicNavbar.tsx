import { getDefaultDashboardRoute } from "@/lib/auth-utils";
import { getUserInfo } from "@/services/auth/getUserInfo";
import { getCookie } from "@/services/auth/tokenHandlers";
import Link from "next/link";
import AISearchDialog from "./AISSearchDialog";
import MobileMenu from "./MobileMenu";
import NavbarAuthButtons from "./NavbarAuthButtons";
import Dropdown from "./DropDownProps";

const PublicNavbar = async () => {
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/specialist", label: "Specialist" },
    { href: "/consultation", label: "Consultation" },
    { href: "/doctors", label: "Doctors" },
    { href: "/about", label: "About" },
  ];

  const dropdownItems = [
    { label: "Medicine", href: "/medicine" },
    { label: "Diagnostics", href: "/diagnostics" },
    { label: "NGOs", href: "/ngos" },
  ];

  const accessToken = await getCookie("accessToken");
  const userInfo = accessToken ? await getUserInfo() : null;
  const dashboardRoute = userInfo
    ? getDefaultDashboardRoute(userInfo.role)
    : "/";

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur dark:bg-background/95">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8 lg:px-16">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-primary">PH Doc</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navItems.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              {link.label}
            </Link>
          ))}

          <Dropdown items={dropdownItems} label="Coming Features" />
        </nav>

        <div className="hidden md:flex items-center space-x-2">
          <AISearchDialog />
          <NavbarAuthButtons
            initialHasToken={!!accessToken}
            initialUserInfo={userInfo}
            initialDashboardRoute={dashboardRoute}
          />
        </div>

        <MobileMenu
          navItems={navItems}
          dropdown={{
            label: "Coming Features",
            items: dropdownItems,
          }}
          hasAccessToken={!!accessToken}
          userInfo={userInfo}
          dashboardRoute={dashboardRoute}
        />
      </div>
    </header>
  );
};

export default PublicNavbar;
