import { ArrowDown } from "lucide-react";
import { HERO_HIGHLIGHTS } from "../config/workshops";
import { handleAnchorClick } from "../lib/scroll";
import { CloudDoodle, HeroIllustration, SparkDoodle, StarDoodle, SwirlDoodle } from "./Art";
import { WhatsAppButton } from "./WhatsAppButton";

export function HomeSection() {
  return (
    <section id="home" className="section hero" aria-labelledby="home-title">
      <StarDoodle className="doodle hero-doodle-star anim-twinkle" color="hsl(45 95% 55%)" />
      <CloudDoodle className="doodle hero-doodle-cloud" />
      <SwirlDoodle className="doodle hero-doodle-swirl" />
      <SparkDoodle className="doodle hero-doodle-spark anim-twinkle" />

      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="tag">
            <span aria-hidden="true">✨</span> FREE LIVE AI WORKSHOPS FOR SCHOOL STUDENTS
          </p>
          <h1 id="home-title">
            Your <span className="hl">AI Adventure</span> Starts Here!
          </h1>
          <p className="hero__sub">Explore AI. Unleash Your Creativity. Build Amazing Things.</p>
          <p className="hero__desc">
            Discover the exciting world of artificial intelligence through creative experiments, fun
            activities, and hands-on projects. Join a free live online workshop designed for school
            students who want to explore what AI can do.
          </p>
          <p className="hero__free">
            <span className="free-badge">100% FREE</span>
            <span>Both workshops are completely free — for Classes 5–9 and Classes 10–12.</span>
          </p>
          <div className="btn-row">
            <a href="#workshops" className="btn btn--primary" onClick={(e) => handleAnchorClick(e, "workshops")}>
              <span>Explore Workshops</span>
              <ArrowDown aria-hidden="true" />
            </a>
            <WhatsAppButton messageKey="general" className="btn" ariaLabel="Chat on WhatsApp">
              Chat on WhatsApp
            </WhatsAppButton>
          </div>
          <ul className="highlights" aria-label="Workshop highlights">
            {HERO_HIGHLIGHTS.map(({ label, icon: Icon }) => (
              <li key={label} className="highlight">
                <span className="highlight__icon">
                  <Icon aria-hidden="true" />
                </span>
                {label}
              </li>
            ))}
          </ul>
        </div>
        <div className="hero-art">
          <HeroIllustration />
        </div>
      </div>
    </section>
  );
}
