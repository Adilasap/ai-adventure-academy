import { EDUCATORS, EDUCATOR_COPY } from "../config/educators";
import { CloudDoodle, StarDoodle } from "./Art";
import { EducatorCard } from "./EducatorCard";
import { SectionHeading } from "./SectionHeading";
import { WhatsAppButton } from "./WhatsAppButton";

export function EducatorSection() {
  return (
    <section id="educator" className="section educator-section" aria-labelledby="educator-title">
      <StarDoodle className="doodle edu-doodle-star anim-twinkle" color="hsl(330 80% 65%)" />
      <CloudDoodle className="doodle edu-doodle-cloud" />
      <div className="container">
        <SectionHeading id="educator-title" title={EDUCATOR_COPY.heading} sub={EDUCATOR_COPY.subheading} />
        <p className="educator-intro reveal">{EDUCATOR_COPY.description}</p>
        <div className="educator-grid">
          {EDUCATORS.map((e) => (
            <EducatorCard key={e.id} educator={e} />
          ))}
        </div>
        <div className="educator-cta reveal">
          <p>Have a question about the workshops? Send the educators a message on WhatsApp.</p>
          <WhatsAppButton messageKey="educators" ariaLabel="Ask the Educators on WhatsApp">
            Ask the Educators
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
