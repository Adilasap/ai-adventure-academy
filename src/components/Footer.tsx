import { FileText, Shield } from "lucide-react";
import { NAV_SECTIONS, SITE } from "../config/site";
import { getWhatsAppLinkFor } from "../config/whatsapp";
import { handleAnchorClick } from "../lib/scroll";
import { BrandMark, WhatsAppIcon } from "./Art";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <a href="#home" className="brand" onClick={(e) => handleAnchorClick(e, "home")}>
              <BrandMark className="brand__mark" />
              <span className="brand__text">{SITE.brandName}</span>
            </a>
            <p className="footer-desc">{SITE.brandDescription}</p>
            <span className="free-badge footer-free">FREE live workshops</span>
          </div>
          <nav aria-labelledby="footer-explore">
            <h2 id="footer-explore">Explore</h2>
            <ul className="footer-links">
              {NAV_SECTIONS.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} onClick={(e) => handleAnchorClick(e, s.id)}>
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <h2>Contact</h2>
            <ul className="footer-links">
              <li>
                <a
                  href={getWhatsAppLinkFor("general")}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat on WhatsApp (opens in a new tab)"
                >
                  <WhatsAppIcon /> Chat on WhatsApp
                </a>
              </li>
              <li>
                <a href={SITE.privacyUrl}>
                  <Shield aria-hidden="true" /> Privacy Policy
                </a>
              </li>
              <li>
                <a href={SITE.termsUrl}>
                  <FileText aria-hidden="true" /> Terms and Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            © {year} {SITE.brandName}. All rights reserved.
          </p>
          <p>Made with curiosity for young learners.</p>
        </div>
      </div>
    </footer>
  );
}
