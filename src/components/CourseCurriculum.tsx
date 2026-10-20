import { ClipboardList, Users } from "lucide-react";
import type { Workshop } from "../config/workshops";
import { BuilderArt, ExplorerArt } from "./Art";
import { WhatsAppButton } from "./WhatsAppButton";

/** Full, always-visible course details for one workshop. */
export function CourseCurriculum({ workshop }: { workshop: Workshop }) {
  const id = `${workshop.id}-curriculum`;
  const titleId = `${id}-title`;
  const workflow = workshop.modules.find((m) => m.workflow)?.workflow;

  return (
    <article id={id} className={`curriculum curriculum--${workshop.accent}`} aria-labelledby={titleId}>
      <span className="tag curriculum__label">Course details · {workshop.classRange}</span>

      <header className="curriculum__head reveal">
        <div>
          <h3 id={titleId}>{workshop.title}</h3>
          <div className="curriculum__meta">
            <span className="class-pill">For {workshop.classRange}</span>
            <span className="free-badge">FREE</span>
            <span className="curriculum__tagline">{workshop.tagline}</span>
          </div>
          <p className="curriculum__desc">{workshop.description}</p>
          <p className="curriculum__emphasis">{workshop.emphasis}</p>
        </div>
        <div className="curriculum__art">{workshop.illustration === "explorer" ? <ExplorerArt /> : <BuilderArt />}</div>
      </header>

      <h4 className="subsection-title">Proposed learning modules</h4>
      <p className="subsection-note">
        This is the proposed learning plan. Topics may be adjusted to match the final teaching plan.
      </p>
      <ol className="module-grid">
        {workshop.modules.map((m, i) => {
          const Icon = m.icon;
          return (
            <li key={m.title} className="module-card reveal">
              <div className="module-card__head">
                <span className="module-card__num" aria-hidden="true">
                  {i + 1}
                </span>
                <span className="module-card__kicker">Module {i + 1}</span>
                <Icon className="module-card__icon" aria-hidden="true" />
              </div>
              <h5 className="module-card__title">{m.title}</h5>
              <p className="module-card__summary">{m.summary}</p>
              <p className="module-card__label">{m.listLabel}</p>
              <ul className="dot-list">
                {m.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {m.note && <p className="module-card__note">{m.note}</p>}
            </li>
          );
        })}
      </ol>

      {workflow && (
        <div className="workflow-strip reveal">
          <h4 className="subsection-title">How a project comes together</h4>
          <ol className="workflow-steps">
            {workflow.map((step, i) => (
              <li key={step}>
                <span className="workflow-steps__num" aria-hidden="true">
                  {i + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
      )}

      <h4 className="subsection-title">Expected learning outcomes</h4>
      <ul className="outcome-grid">
        {workshop.outcomes.map(({ text, icon: Icon }) => (
          <li key={text} className="outcome reveal">
            <span className="outcome__icon">
              <Icon aria-hidden="true" />
            </span>
            {text}
          </li>
        ))}
      </ul>

      <div className="info-grid">
        <div className="sketch-card who-card reveal">
          <h4>
            <Users aria-hidden="true" /> Who should join?
          </h4>
          <p>{workshop.whoShouldJoin}</p>
        </div>
        <div className="details-panel reveal">
          <h4>
            <ClipboardList aria-hidden="true" /> Course details
          </h4>
          <dl className="details-list">
            {workshop.details.map((d) => (
              <div key={d.label}>
                <dt>{d.label}</dt>
                <dd>
                  {d.pending ? <span className="pending">{d.value}</span> : d.value}
                </dd>
              </div>
            ))}
          </dl>
          <p className="details-panel__foot">
            Items marked “To be confirmed” will be shared on WhatsApp once finalised.
          </p>
        </div>
      </div>

      <div className="curriculum-cta reveal">
        <p className="curriculum-cta__text">
          <strong>Ready to join {workshop.title}?</strong>
          <span>
            Message us on WhatsApp to get the schedule and enrollment steps. WhatsApp opens with a ready-made
            message, so you only need to press Send.
          </span>
        </p>
        <WhatsAppButton messageKey={workshop.whatsappKey} ariaLabel={workshop.ctaLabel}>
          {workshop.ctaLabel}
        </WhatsAppButton>
      </div>
    </article>
  );
}
