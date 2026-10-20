import { getWhatsAppLinkFor } from "../config/whatsapp";
import { WhatsAppIcon } from "./Art";

/** Fixed to the viewport so it stays visible across every section. */
export function FloatingWhatsAppButton() {
  return (
    <a
      className="fab-whatsapp"
      href={getWhatsAppLinkFor("general")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp (opens in a new tab)"
    >
      <WhatsAppIcon />
      <span className="fab-whatsapp__tip" aria-hidden="true">
        Questions? Chat with us!
      </span>
    </a>
  );
}
