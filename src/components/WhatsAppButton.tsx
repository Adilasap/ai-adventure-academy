import type { ReactNode } from "react";
import { getWhatsAppLinkFor, type WhatsAppMessageKey } from "../config/whatsapp";
import { WhatsAppIcon } from "./Art";

interface Props {
  messageKey: WhatsAppMessageKey;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
}

/** A link that opens WhatsApp with a prefilled message (the visitor still presses Send). */
export function WhatsAppButton({ messageKey, children, className = "btn btn--whatsapp", ariaLabel }: Props) {
  return (
    <a
      className={className}
      href={getWhatsAppLinkFor(messageKey)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel ? `${ariaLabel} (opens WhatsApp in a new tab)` : undefined}
    >
      <WhatsAppIcon />
      <span>{children}</span>
    </a>
  );
}
