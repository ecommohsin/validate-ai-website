function rayPaths() {
  const originX = 180;
  const originY = 320;
  const count = 42;
  const paths: string[] = [];

  for (let i = 0; i < count; i += 1) {
    const t = i / (count - 1);
    const endY = -40 + t * 720;
    const midX = 520 + Math.sin(t * Math.PI) * 40;
    const midY = originY + (endY - originY) * 0.45;
    paths.push(
      `M ${originX} ${originY} Q ${midX} ${midY} 980 ${endY}`,
    );
  }

  return paths;
}

export function HeroVisual() {
  const rays = rayPaths();

  return (
    <div className="relative h-full min-h-[320px] w-full overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_78%_42%,rgba(0,80,138,0.08),transparent_58%),radial-gradient(ellipse_at_92%_18%,rgba(92,99,184,0.12),transparent_48%)]" />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 960 640"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMaxYMid slice"
      >
        <defs>
          <linearGradient id="ray" x1="180" y1="320" x2="920" y2="320" gradientUnits="userSpaceOnUse">
            <stop stopColor="#5C63B8" stopOpacity="0" />
            <stop offset="0.22" stopColor="#5C63B8" stopOpacity="0.18" />
            <stop offset="1" stopColor="#00508A" stopOpacity="0.08" />
          </linearGradient>
          <linearGradient id="plane-a" x1="620" y1="140" x2="880" y2="280" gradientUnits="userSpaceOnUse">
            <stop stopColor="#EEF3F8" />
            <stop offset="1" stopColor="#D9E4F0" />
          </linearGradient>
          <linearGradient id="plane-b" x1="620" y1="230" x2="880" y2="370" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1A6FB5" />
            <stop offset="1" stopColor="#00508A" />
          </linearGradient>
          <linearGradient id="plane-c" x1="620" y1="320" x2="880" y2="460" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F6F9FC" />
            <stop offset="1" stopColor="#E4EAF1" />
          </linearGradient>
        </defs>

        <g stroke="url(#ray)" strokeWidth="1">
          {rays.map((d) => (
            <path key={d} d={d} />
          ))}
        </g>

        <g transform="translate(40 36)">
          <polygon points="720,210 860,250 720,290 580,250" fill="url(#plane-c)" stroke="#CFD8E3" strokeWidth="1" />
          <polygon points="860,250 860,286 720,326 720,290" fill="#C5D3E2" />
          <polygon points="580,250 720,290 720,326 580,286" fill="#D7E0EA" />

          <polygon points="720,168 860,208 720,248 580,208" fill="url(#plane-b)" />
          <polygon points="860,208 860,244 720,284 720,248" fill="#003F6E" />
          <polygon points="580,208 720,248 720,284 580,244" fill="#1A6FB5" />

          <polygon points="720,126 860,166 720,206 580,166" fill="url(#plane-a)" stroke="#CFD8E3" strokeWidth="1" />
          <polygon points="860,166 860,202 720,242 720,206" fill="#C8D5E4" />
          <polygon points="580,166 720,206 720,242 580,202" fill="#E8EEF4" />

          <rect x="704" y="158" width="32" height="32" transform="rotate(45 720 174)" fill="white" stroke="#00508A" strokeWidth="1.2" />
          <rect x="712" y="166" width="16" height="16" transform="rotate(45 720 174)" fill="#00508A" opacity="0.18" />
        </g>
      </svg>
    </div>
  );
}
