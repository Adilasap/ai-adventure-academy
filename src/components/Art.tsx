/**
 * Hand-drawn style SVG artwork used across the site.
 * Strokes use the "ink" colour and fills use the crayon palette so the art
 * matches the sketchbook look of the rest of the page.
 */
const INK = "hsl(220 20% 10%)";
const PAPER = "hsl(45 30% 98%)";
const C = {
  blue: "hsl(210 90% 55%)",
  blueSoft: "hsl(210 90% 88%)",
  yellow: "hsl(45 95% 55%)",
  yellowSoft: "hsl(45 95% 82%)",
  green: "hsl(145 70% 45%)",
  greenSoft: "hsl(145 60% 84%)",
  purple: "hsl(270 70% 60%)",
  purpleSoft: "hsl(270 70% 90%)",
  pink: "hsl(330 80% 65%)",
  pinkSoft: "hsl(330 80% 90%)",
  orange: "hsl(25 95% 55%)",
};

type SvgProps = { className?: string };

/** Logo: friendly robot head. */
export function BrandMark({ className }: SvgProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
      <path d="M24 3c11 0 21 8.5 21 20.5S36 45 24 45 3 36 3 23.5 12.5 3 24 3z" fill={C.yellow} stroke={INK} strokeWidth="2.5" />
      <path d="M24 8.5v5" stroke={INK} strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="24" cy="8" r="2.6" fill={C.pink} stroke={INK} strokeWidth="2" />
      <path d="M12.5 17.5c7-1.3 15.5-1.5 23 .2 1.4 6 1.3 11.3-.3 16.5-7.5 1.5-15 1.4-22.5-.3-1.4-5.4-1.5-10.7-.2-16.4z" fill={PAPER} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
      <circle cx="19" cy="24.5" r="2.6" fill={INK} />
      <circle cx="29" cy="24.5" r="2.6" fill={INK} />
      <path d="M19.5 29.5c2.8 2.2 6.4 2.2 9 0" fill="none" stroke={INK} strokeWidth="2.2" strokeLinecap="round" />
      <path d="M9.5 22v8M38.5 22v8" stroke={INK} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function WhatsAppIcon({ className }: SvgProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.3 1.27.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.04 21.5h-.01a9.45 9.45 0 0 1-4.82-1.32l-.35-.2-3.58.93.96-3.49-.23-.36a9.43 9.43 0 0 1-1.45-5.04c0-5.22 4.25-9.47 9.48-9.47 2.53 0 4.9.99 6.7 2.78a9.4 9.4 0 0 1 2.77 6.7c0 5.22-4.25 9.47-9.47 9.47zm8.06-17.54A11.33 11.33 0 0 0 12.04.63C5.76.63.65 5.74.65 12.02c0 2 .52 3.96 1.52 5.69L.55 23.6l6.04-1.58a11.36 11.36 0 0 0 5.44 1.39h.01c6.28 0 11.39-5.11 11.39-11.39 0-3.04-1.18-5.9-3.33-8.06z" />
    </svg>
  );
}

export function LinkedInIcon({ className }: SvgProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

/** Thumb-tack pin like the reference cards. */
export function Pin({ color = C.blue, className = "pin" }: { color?: string; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" aria-hidden="true">
      <path d="M16 18v11" stroke={INK} strokeWidth="2.2" strokeLinecap="round" />
      <path d="M9 18.5c4.5-1.2 9.5-1.2 14 0l-2.5-5V6.5c1.5-.6 2-1.6 2-3-4.5-1-9.5-1-14 0 0 1.4.5 2.4 2 3v7z" fill={color} stroke={INK} strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

export function Squiggle({ className }: SvgProps) {
  return (
    <svg className={className} viewBox="0 0 240 18" preserveAspectRatio="none" aria-hidden="true">
      <path d="M3 10c15-9 25 7 40 0s25-9 40 0 25 7 40 0 25-9 40 0 25 7 40 0 22-8 34-2" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function StarDoodle({ className, color = C.yellow }: SvgProps & { color?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" aria-hidden="true">
      <path d="M20 3.5l4.9 10.3 11.3 1.4-8.3 7.8 2.2 11.2L20 28.7l-10.1 5.5 2.2-11.2-8.3-7.8 11.3-1.4z" fill={color} stroke={INK} strokeWidth="2.2" strokeLinejoin="round" />
    </svg>
  );
}

export function CloudDoodle({ className }: SvgProps) {
  return (
    <svg className={className} viewBox="0 0 80 40" aria-hidden="true">
      <path d="M14 34c-7 0-11-4-10-9.5 1-5 6-7 10-5.5C15 11 22 6 30 8c4-6 15-6 19 1 6-3 14 1 14 8 6 0 11 4 10 9.5S67 34 62 34z" fill="none" stroke={INK} strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

export function SparkDoodle({ className, color = C.pink }: SvgProps & { color?: string }) {
  return (
    <svg className={className} viewBox="0 0 30 30" aria-hidden="true">
      <path d="M15 2c1 7 3.5 11 13 13-9.5 2-12 6-13 13-1-7-3.5-11-13-13 9.5-2 12-6 13-13z" fill={color} stroke={INK} strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

export function SwirlDoodle({ className }: SvgProps) {
  return (
    <svg className={className} viewBox="0 0 60 30" aria-hidden="true">
      <path d="M3 22c8-14 18-14 18-6s-9 8-7 1 15-15 22-6-2 15 3 13 10-14 18-12" fill="none" stroke={INK} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/** Large hero illustration: a friendly robot surrounded by creative AI objects. */
export function HeroIllustration() {
  return (
    <svg viewBox="0 0 520 500" role="img" aria-labelledby="hero-art-title">
      <title id="hero-art-title">
        Illustration of a friendly robot holding a paintbrush, surrounded by a code window, a chat bubble, a lightbulb and stars
      </title>

      {/* paper blob background */}
      <path d="M262 40c105-6 210 52 222 160 12 104-60 230-190 248C163 466 46 392 34 270 22 150 140 46 262 40z" fill={C.blueSoft} stroke={INK} strokeWidth="2.5" strokeDasharray="10 8" />

      {/* code window (top-left) */}
      <g className="anim-float-slow">
        <path d="M40 92c42-3 88-3 130 0 2 30 2 60 0 90-42 3-88 3-130 0-2-30-2-60 0-90z" fill={PAPER} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M40 112h130" stroke={INK} strokeWidth="2.5" />
        <circle cx="54" cy="102" r="4" fill={C.pink} stroke={INK} strokeWidth="1.5" />
        <circle cx="68" cy="102" r="4" fill={C.yellow} stroke={INK} strokeWidth="1.5" />
        <circle cx="82" cy="102" r="4" fill={C.green} stroke={INK} strokeWidth="1.5" />
        <path d="M58 132l-10 9 10 9M152 132l10 9-10 9" fill="none" stroke={C.purple} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M74 134h44M74 148h60M74 162h30" stroke={INK} strokeWidth="3" strokeLinecap="round" />
        <path d="M112 162h22" stroke={C.blue} strokeWidth="3" strokeLinecap="round" />
      </g>

      {/* chat bubble (top-right) */}
      <g className="anim-float">
        <path d="M352 70c40-4 86-2 112 4 5 22 4 44-2 62-14 3-30 4-46 4l-22 22 2-22c-16 0-32-1-46-4-5-20-5-44 2-66z" fill={C.yellowSoft} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
        <circle cx="378" cy="106" r="6" fill={INK} />
        <circle cx="404" cy="106" r="6" fill={INK} />
        <circle cx="430" cy="106" r="6" fill={INK} />
      </g>

      {/* lightbulb (right) */}
      <g className="anim-float-rot">
        <path d="M452 210c0-22 16-38 36-38s34 16 34 37c0 13-7 22-14 29-4 4-5 8-5 14h-30c0-6-2-10-6-14-8-7-15-16-15-28z" fill={C.yellow} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" transform="translate(-36 0)" />
        <path d="M434 260h28M436 270h24" stroke={INK} strokeWidth="2.5" strokeLinecap="round" />
        <path d="M440 206c2-10 8-15 16-16" fill="none" stroke={INK} strokeWidth="2.2" strokeLinecap="round" />
        <path d="M410 182l-10-8M486 182l10-8M400 220h-12M496 220h12" stroke={INK} strokeWidth="2.2" strokeLinecap="round" />
      </g>

      {/* palette (bottom-left) */}
      <g className="anim-float">
        <path d="M60 352c10-30 60-44 92-28 26 13 26 40 6 44-16 3-12 18-2 24 10 7-6 22-40 18-44-5-68-28-56-58z" fill={PAPER} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
        <circle cx="88" cy="350" r="8" fill={C.pink} stroke={INK} strokeWidth="1.8" />
        <circle cx="114" cy="338" r="8" fill={C.blue} stroke={INK} strokeWidth="1.8" />
        <circle cx="80" cy="378" r="8" fill={C.green} stroke={INK} strokeWidth="1.8" />
        <circle cx="108" cy="392" r="8" fill={C.yellow} stroke={INK} strokeWidth="1.8" />
      </g>

      {/* robot */}
      <g>
        {/* shadow */}
        <ellipse cx="270" cy="452" rx="98" ry="12" fill={INK} opacity="0.12" />
        {/* legs */}
        <path d="M236 404v38M304 404v38" stroke={INK} strokeWidth="9" strokeLinecap="round" />
        <path d="M218 446c8-6 28-6 36 0M286 446c8-6 28-6 36 0" fill={INK} stroke={INK} strokeWidth="6" strokeLinecap="round" />
        {/* left arm waving */}
        <path d="M196 300c-24-6-40-26-44-52" fill="none" stroke={INK} strokeWidth="8" strokeLinecap="round" />
        <circle cx="150" cy="240" r="13" fill={C.pink} stroke={INK} strokeWidth="2.5" />
        {/* right arm holding brush */}
        <path d="M344 300c22 2 40-6 52-24" fill="none" stroke={INK} strokeWidth="8" strokeLinecap="round" />
        <g transform="rotate(-35 400 270)">
          <rect x="394" y="214" width="12" height="60" rx="5" fill={C.orange} stroke={INK} strokeWidth="2.5" />
          <path d="M392 214c2-14 14-14 16 0z" fill={C.purple} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
        </g>
        <circle cx="398" cy="274" r="13" fill={C.pink} stroke={INK} strokeWidth="2.5" />
        {/* body */}
        <path d="M200 270c46-6 96-6 142 0 6 44 6 90-2 136-46 6-92 6-138 0-8-46-8-92-2-136z" fill={C.purpleSoft} stroke={INK} strokeWidth="3" strokeLinejoin="round" />
        {/* chest screen */}
        <path d="M230 298c27-3 55-3 82 0 2 22 2 42 0 62-27 3-55 3-82 0-3-20-3-40 0-62z" fill={PAPER} stroke={INK} strokeWidth="2.5" />
        <text x="271" y="342" textAnchor="middle" fontFamily="Caveat, cursive" fontWeight="700" fontSize="34" fill={C.blue}>AI</text>
        <circle cx="236" cy="384" r="6" fill={C.green} stroke={INK} strokeWidth="2" />
        <circle cx="306" cy="384" r="6" fill={C.yellow} stroke={INK} strokeWidth="2" />
        {/* neck */}
        <path d="M256 252v20M286 252v20" stroke={INK} strokeWidth="3" />
        {/* head */}
        <path d="M184 150c60-10 118-10 172 0 8 34 8 70-2 104-56 8-112 8-168 0-10-34-10-70-2-104z" fill={PAPER} stroke={INK} strokeWidth="3" strokeLinejoin="round" />
        {/* ears */}
        <path d="M184 186c-14 0-18 10-18 18s4 18 18 18" fill={C.blue} stroke={INK} strokeWidth="2.5" />
        <path d="M356 186c14 0 18 10 18 18s-4 18-18 18" fill={C.blue} stroke={INK} strokeWidth="2.5" />
        {/* antenna */}
        <path d="M270 146c0-14 2-24 8-34" fill="none" stroke={INK} strokeWidth="3" strokeLinecap="round" />
        <g className="anim-twinkle">
          <path d="M280 82l5 10 11 2-8 8 2 11-10-5-10 5 2-11-8-8 11-2z" fill={C.yellow} stroke={INK} strokeWidth="2.2" strokeLinejoin="round" />
        </g>
        {/* face screen */}
        <path d="M206 172c44-6 88-6 128 0 4 22 4 44 0 64-42 6-86 6-128 0-4-20-4-42 0-64z" fill={C.blueSoft} stroke={INK} strokeWidth="2.5" />
        <g className="anim-blink">
          <ellipse cx="240" cy="200" rx="10" ry="12" fill={INK} />
          <ellipse cx="300" cy="200" rx="10" ry="12" fill={INK} />
          <circle cx="243" cy="196" r="3.5" fill={PAPER} />
          <circle cx="303" cy="196" r="3.5" fill={PAPER} />
        </g>
        <path d="M252 220c10 9 26 9 36 0" fill="none" stroke={INK} strokeWidth="3" strokeLinecap="round" />
        <ellipse cx="222" cy="220" rx="8" ry="5" fill={C.pink} opacity="0.6" />
        <ellipse cx="318" cy="220" rx="8" ry="5" fill={C.pink} opacity="0.6" />
      </g>

      {/* paint stroke from brush */}
      <path d="M420 330c20-8 40 6 56-6" fill="none" stroke={C.pink} strokeWidth="7" strokeLinecap="round" />
      <path d="M430 350c16-4 30 4 44-2" fill="none" stroke={C.blue} strokeWidth="6" strokeLinecap="round" />

      {/* stars & sparkles */}
      <g className="anim-twinkle">
        <path d="M200 52l4 9 10 1-7 7 2 10-9-5-9 5 2-10-7-7 10-1z" fill={C.pink} stroke={INK} strokeWidth="2" strokeLinejoin="round" />
      </g>
      <g className="anim-twinkle" style={{ animationDelay: "1.2s" }}>
        <path d="M470 410c1 8 4 11 12 12-8 1-11 4-12 12-1-8-4-11-12-12 8-1 11-4 12-12z" fill={C.green} stroke={INK} strokeWidth="2" strokeLinejoin="round" />
      </g>
      <g className="anim-twinkle" style={{ animationDelay: "0.6s" }}>
        <path d="M30 220c1 8 4 11 12 12-8 1-11 4-12 12-1-8-4-11-12-12 8-1 11-4 12-12z" fill={C.yellow} stroke={INK} strokeWidth="2" strokeLinejoin="round" />
      </g>
    </svg>
  );
}

/** Small illustration for the Classes 5–9 course: robot with magnifying glass & game pad. */
export function ExplorerArt() {
  return (
    <svg viewBox="0 0 220 170" aria-hidden="true">
      <path d="M110 12c52 0 96 26 98 74 2 46-42 76-98 76S10 132 12 86 58 12 110 12z" fill={C.blueSoft} stroke={INK} strokeWidth="2" strokeDasharray="7 6" />
      {/* robot */}
      <path d="M84 38v-10" stroke={INK} strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="84" cy="24" r="5" fill={C.yellow} stroke={INK} strokeWidth="2" />
      <path d="M56 40c18-3 38-3 56 0 3 14 3 30 0 44-18 3-38 3-56 0-3-14-3-30 0-44z" fill={PAPER} stroke={INK} strokeWidth="2.5" />
      <circle cx="72" cy="60" r="5" fill={INK} />
      <circle cx="96" cy="60" r="5" fill={INK} />
      <path d="M76 72c5 4 11 4 16 0" fill="none" stroke={INK} strokeWidth="2.2" strokeLinecap="round" />
      <path d="M60 92c16-2 32-2 48 0 3 18 3 36 0 52-16 2-32 2-48 0-3-16-3-34 0-52z" fill={C.blue} stroke={INK} strokeWidth="2.5" />
      <path d="M72 110h24" stroke={PAPER} strokeWidth="3" strokeLinecap="round" />
      {/* arm + magnifier */}
      <path d="M108 104c12-2 22-10 28-22" fill="none" stroke={INK} strokeWidth="5" strokeLinecap="round" />
      <circle cx="146" cy="66" r="18" fill={PAPER} fillOpacity="0.6" stroke={INK} strokeWidth="3" />
      <path d="M138 58c3-4 7-6 11-6" fill="none" stroke={INK} strokeWidth="2" strokeLinecap="round" />
      {/* game pad */}
      <g className="anim-float">
        <path d="M148 118c10-6 34-6 44 0 6 8 8 20 4 26-6 4-12 2-16-4h-20c-4 6-10 8-16 4-4-6-2-18 4-26z" fill={C.yellow} stroke={INK} strokeWidth="2.2" strokeLinejoin="round" />
        <path d="M160 126v10M155 131h10" stroke={INK} strokeWidth="2.2" strokeLinecap="round" />
        <circle cx="181" cy="128" r="2.6" fill={INK} />
        <circle cx="187" cy="134" r="2.6" fill={INK} />
      </g>
      <g className="anim-twinkle">
        <path d="M30 40l3 7 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" fill={C.pink} stroke={INK} strokeWidth="1.8" strokeLinejoin="round" />
      </g>
      <path d="M26 120c1 6 3 8 9 9-6 1-8 3-9 9-1-6-3-8-9-9 6-1 8-3 9-9z" fill={C.green} stroke={INK} strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

/** Small illustration for the Classes 10–12 course: laptop with code, gear and rocket. */
export function BuilderArt() {
  return (
    <svg viewBox="0 0 220 170" aria-hidden="true">
      <path d="M110 12c52 0 96 26 98 74 2 46-42 76-98 76S10 132 12 86 58 12 110 12z" fill={C.purpleSoft} stroke={INK} strokeWidth="2" strokeDasharray="7 6" />
      {/* laptop */}
      <path d="M48 52c36-3 74-3 110 0 3 24 3 48 0 70-36 3-74 3-110 0-3-22-3-46 0-70z" fill={PAPER} stroke={INK} strokeWidth="2.5" />
      <path d="M30 124c48-3 98-3 146 0l-8 14c-44 3-86 3-130 0z" fill={C.purple} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M64 72l-8 8 8 8M142 72l8 8-8 8" fill="none" stroke={C.purple} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M76 70h34M76 82h50M76 94h24" stroke={INK} strokeWidth="2.6" strokeLinecap="round" />
      <path d="M104 94h22" stroke={C.green} strokeWidth="2.6" strokeLinecap="round" />
      <path d="M76 106h40" stroke={C.blue} strokeWidth="2.6" strokeLinecap="round" />
      {/* gear */}
      <g className="anim-float-rot">
        <path d="M178 34l4 0 1 6 5 2 5-4 3 3-4 5 2 5 6 1v4l-6 1-2 5 4 5-3 3-5-4-5 2-1 6h-4l-1-6-5-2-5 4-3-3 4-5-2-5-6-1v-4l6-1 2-5-4-5 3-3 5 4 5-2z" fill={C.yellow} stroke={INK} strokeWidth="2" strokeLinejoin="round" />
        <circle cx="180" cy="52" r="6" fill={PAPER} stroke={INK} strokeWidth="2" />
      </g>
      {/* rocket */}
      <g className="anim-float">
        <path d="M30 70c4-18 14-30 24-36 4 12 2 28-8 42z" fill={PAPER} stroke={INK} strokeWidth="2.2" strokeLinejoin="round" />
        <circle cx="44" cy="54" r="4" fill={C.blue} stroke={INK} strokeWidth="1.8" />
        <path d="M32 66l-8 2 2 10 8-6M46 76l-2 8 10 0-2-8" fill={C.pink} stroke={INK} strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M34 80c-4 6-6 10-6 16 6-2 10-4 14-10" fill={C.orange} stroke={INK} strokeWidth="1.8" strokeLinejoin="round" />
      </g>
      <path d="M190 120c1 6 3 8 9 9-6 1-8 3-9 9-1-6-3-8-9-9 6-1 8-3 9-9z" fill={C.blue} stroke={INK} strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * Clearly-labelled portrait placeholder (NOT a photo of the educator).
 * Replace by setting `photo` in src/config/educators.ts.
 */
export function PortraitPlaceholder({ initial, accent }: { initial: string; accent: "blue" | "green" | "yellow" | "purple" | "pink" | "orange" }) {
  const map = { blue: C.blueSoft, green: C.greenSoft, yellow: C.yellowSoft, purple: C.purpleSoft, pink: C.pinkSoft, orange: C.yellowSoft };
  return (
    <svg viewBox="0 0 160 160" aria-hidden="true">
      <rect width="160" height="160" fill={map[accent]} />
      <circle cx="80" cy="64" r="28" fill={PAPER} stroke={INK} strokeWidth="2.5" />
      <path d="M28 160c4-34 26-52 52-52s48 18 52 52" fill={PAPER} stroke={INK} strokeWidth="2.5" />
      <text x="80" y="76" textAnchor="middle" fontFamily="Caveat, cursive" fontWeight="700" fontSize="34" fill={INK}>{initial}</text>
    </svg>
  );
}
