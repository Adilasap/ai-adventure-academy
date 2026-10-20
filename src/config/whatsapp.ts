/**
 * WhatsApp click-to-chat configuration.
 * Every WhatsApp link on the site is built from these values.
 * Number format: country code + number, digits only (no "+", spaces or dashes).
 */
export const WHATSAPP_NUMBER = "919376243218";

/** Human-readable version, used only in accessible labels. */
export const WHATSAPP_DISPLAY_NUMBER = "+91 93762 43218";

export const WHATSAPP_MESSAGES = {
  general:
    "Hello! I would like to know more about AI Adventure Academy's free live AI workshops for school students. Please share the available workshops and upcoming schedule.",

  educators:
    "Hello! I would like to know more about AI Adventure Academy's free AI workshops. Please share the details and upcoming schedule.",

  explorers:
    "Hello! I am interested in the free AI Explorers Lab workshop for a student in Classes 5–9. Please share the detailed course curriculum, workshop schedule, requirements, and enrollment process.",

  builders:
    "Hello! I am interested in the free AI Builders Lab workshop for a student in Classes 10–12. Please share the detailed course curriculum, workshop schedule, technical requirements, and enrollment process.",
} as const;

export type WhatsAppMessageKey = keyof typeof WHATSAPP_MESSAGES;

export function getWhatsAppLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function getWhatsAppLinkFor(key: WhatsAppMessageKey): string {
  return getWhatsAppLink(WHATSAPP_MESSAGES[key]);
}
