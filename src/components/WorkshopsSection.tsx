import { WORKSHOPS, WORKSHOPS_COPY } from "../config/workshops";
import { SparkDoodle, StarDoodle } from "./Art";
import { CourseCurriculum } from "./CourseCurriculum";
import { SectionHeading } from "./SectionHeading";
import { WorkshopCard } from "./WorkshopCard";

export function WorkshopsSection() {
  return (
    <section id="workshops" className="section" aria-labelledby="workshops-title">
      <StarDoodle className="doodle ws-doodle-star anim-twinkle" color="hsl(210 90% 55%)" />
      <SparkDoodle className="doodle ws-doodle-spark anim-twinkle" color="hsl(45 95% 55%)" />
      <div className="container">
        <SectionHeading id="workshops-title" title={WORKSHOPS_COPY.heading} desc={WORKSHOPS_COPY.description} />
        <div className="workshop-grid">
          {WORKSHOPS.map((w) => (
            <WorkshopCard key={w.id} workshop={w} />
          ))}
        </div>
        {WORKSHOPS.map((w) => (
          <CourseCurriculum key={w.id} workshop={w} />
        ))}
      </div>
    </section>
  );
}
