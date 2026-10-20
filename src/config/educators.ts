/**
 * Educator profiles.
 * To add a real photo: put the image in /public/educators/ (e.g. arjun.jpg)
 * and set `photo: "/educators/arjun.jpg"`. Leave `photo` empty to show the
 * illustrated "photo coming soon" placeholder.
 */
export interface Educator {
  id: string;
  name: string;
  education: string;
  linkedinUrl: string;
  photo?: string;
  accent: "blue" | "yellow" | "green" | "purple" | "pink" | "orange";
}

export const EDUCATORS: Educator[] = [
  {
    id: "arjun",
    name: "Arjun",
    education: "IIT Delhi Graduate",
    linkedinUrl: "https://www.linkedin.com/in/arjunkumarsingh2017/",
    photo: "",
    accent: "blue",
  },
  {
    id: "adil",
    name: "Adil",
    education: "IIT Delhi Graduate",
    linkedinUrl: "https://www.linkedin.com/in/adilkhanasap/",
    photo: "",
    accent: "green",
  },
];

export const EDUCATOR_COPY = {
  heading: "Meet Your Educators",
  subheading: "Making AI Interesting, Creative, and Practical for Students",
  description:
    "Meet Arjun and Adil, the educators behind AI Adventure Academy. Their workshops are designed to introduce school students to artificial intelligence through engaging explanations, creative exploration, practical activities, and guided projects.",
};
