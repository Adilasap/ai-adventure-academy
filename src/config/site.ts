/** Brand + navigation configuration. The brand name is what visitors see. */
export const SITE = {
  brandName: "AI Adventure Academy",
  brandDescription:
    "Free live online AI workshops that help school students explore artificial intelligence through creativity, experiments and hands-on projects.",
  /** Footer legal links. Edit the static pages in /public before publishing. */
  privacyUrl: "/privacy.html",
  termsUrl: "/terms.html",
} as const;

export const NAV_SECTIONS = [
  { id: "home", label: "Home" },
  { id: "educator", label: "Educator" },
  { id: "workshops", label: "Workshops" },
] as const;

export type SectionId = (typeof NAV_SECTIONS)[number]["id"];
