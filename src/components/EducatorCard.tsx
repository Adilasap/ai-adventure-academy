import { GraduationCap } from "lucide-react";
import type { Educator } from "../config/educators";
import { LinkedInIcon, PortraitPlaceholder, Pin } from "./Art";

const PIN_COLORS = { blue: "hsl(210 90% 55%)", green: "hsl(145 70% 45%)", yellow: "hsl(45 95% 55%)", purple: "hsl(270 70% 60%)", pink: "hsl(330 80% 65%)", orange: "hsl(25 95% 55%)" };

export function EducatorCard({ educator }: { educator: Educator }) {
  const { name, education, linkedinUrl, photo, accent } = educator;
  return (
    <article className="sketch-card educator-card reveal" aria-labelledby={`edu-${educator.id}`}>
      <Pin color={PIN_COLORS[accent]} />
      <div className="portrait">
        <div className="portrait__frame">
          {photo ? (
            <img src={photo} alt={`Portrait of ${name}, educator at AI Adventure Academy`} width={168} height={168} loading="lazy" />
          ) : (
            <PortraitPlaceholder initial={name.charAt(0)} accent={accent} />
          )}
        </div>
        {!photo && <span className="portrait__note">Photo coming soon</span>}
      </div>
      <h3 id={`edu-${educator.id}`}>{name}</h3>
      <p className="edu-badge">
        <GraduationCap aria-hidden="true" />
        {education}
      </p>
      <div>
        <a
          className="btn btn--linkedin btn--sm"
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${name}'s LinkedIn profile (opens in a new tab)`}
        >
          <LinkedInIcon />
          <span>View LinkedIn Profile</span>
        </a>
      </div>
    </article>
  );
}
