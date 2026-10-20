import { NAV_SECTIONS, SITE } from "../config/site";
import { useActiveSection } from "../hooks/useActiveSection";
import { handleAnchorClick } from "../lib/scroll";
import { BrandMark } from "./Art";

const SECTION_IDS = NAV_SECTIONS.map((s) => s.id);

export function Header() {
  const active = useActiveSection(SECTION_IDS);
  // On small screens the brand wraps onto two lines: "AI Adventure" / "Academy".
  const split = SITE.brandName.lastIndexOf(" ");
  const line1 = SITE.brandName.slice(0, split);
  const line2 = SITE.brandName.slice(split + 1);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#home" className="brand" aria-label={`${SITE.brandName} — back to top`} onClick={(e) => handleAnchorClick(e, "home")}>
          <BrandMark className="brand__mark" />
          <span className="brand__text">
            <span>{line1}</span> <span>{line2}</span>
          </span>
        </a>
        <nav aria-label="Primary">
          <ul className="nav-list">
            {NAV_SECTIONS.map((s) => {
              const isActive = active === s.id;
              return (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className={`nav-link${isActive ? " is-active" : ""}`}
                    aria-current={isActive ? "location" : undefined}
                    onClick={(e) => handleAnchorClick(e, s.id)}
                  >
                    {s.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
