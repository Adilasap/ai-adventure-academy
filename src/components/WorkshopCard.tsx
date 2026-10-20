import { BookOpen, CheckCircle2 } from "lucide-react";
import type { Workshop } from "../config/workshops";
import { handleAnchorClick } from "../lib/scroll";
import { BuilderArt, ExplorerArt, Pin } from "./Art";
import { WhatsAppButton } from "./WhatsAppButton";

/** Short overview card shown at the top of the Workshops section. */
export function WorkshopCard({ workshop }: { workshop: Workshop }) {
  const detailsId = `${workshop.id}-curriculum`;
  const titleId = `${workshop.id}-card-title`;
  return (
    <article className={`sketch-card workshop-card workshop-card--${workshop.accent} reveal`} aria-labelledby={titleId}>
      <Pin color={workshop.accent === "blue" ? "hsl(45 95% 55%)" : "hsl(330 80% 65%)"} />
      <div className="workshop-card__art">{workshop.illustration === "explorer" ? <ExplorerArt /> : <BuilderArt />}</div>
      <div className="workshop-card__top">
        <div>
          <h3 id={titleId}>{workshop.title}</h3>
          <span className="class-pill">For {workshop.classRange}</span>
        </div>
        <span className="free-badge">FREE</span>
      </div>
      <p className="workshop-card__tagline">{workshop.tagline}</p>
      <p className="workshop-card__desc">{workshop.shortDescription}</p>

      <p className="mini-heading">Main learning topics</p>
      <ul className="chip-list">
        {workshop.mainTopics.map((t) => (
          <li key={t} className="chip">
            {t}
          </li>
        ))}
      </ul>

      <p className="mini-heading">Expected learning outcomes</p>
      <ul className="check-list">
        {workshop.keyOutcomes.map((o) => (
          <li key={o}>
            <CheckCircle2 aria-hidden="true" />
            {o}
          </li>
        ))}
      </ul>

      <div className="workshop-card__actions">
        <a href={`#${detailsId}`} className="btn btn--sm" onClick={(e) => handleAnchorClick(e, detailsId)}>
          <BookOpen aria-hidden="true" />
          <span>View Course Details</span>
        </a>
        <WhatsAppButton
          messageKey={workshop.whatsappKey}
          className="btn btn--whatsapp btn--sm"
          ariaLabel={`Join Free Workshop: ${workshop.title}`}
        >
          Join Free Workshop
        </WhatsAppButton>
      </div>
    </article>
  );
}
