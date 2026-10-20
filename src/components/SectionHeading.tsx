import type { ReactNode } from "react";
import { Squiggle } from "./Art";

interface Props {
  id: string;
  title: ReactNode;
  sub?: ReactNode;
  desc?: ReactNode;
}

export function SectionHeading({ id, title, sub, desc }: Props) {
  return (
    <div className="section-heading reveal">
      <h2 id={id}>{title}</h2>
      <Squiggle className="section-heading__squiggle" />
      {sub && <p className="section-heading__sub">{sub}</p>}
      {desc && <p className="section-heading__desc">{desc}</p>}
    </div>
  );
}
