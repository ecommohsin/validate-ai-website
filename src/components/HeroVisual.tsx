export function HeroVisual() {
  return (
    <div className="relative h-full min-h-[320px] w-full overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_78%_18%,rgba(26,111,181,0.22),transparent_58%),radial-gradient(ellipse_at_22%_82%,rgba(92,99,184,0.16),transparent_52%),radial-gradient(ellipse_at_88%_78%,rgba(43,163,181,0.14),transparent_48%),radial-gradient(ellipse_at_48%_42%,rgba(0,80,138,0.08),transparent_55%)]" />
      <div className="grid-fade absolute inset-0 opacity-70" />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 720 640"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="line-a" x1="40" y1="80" x2="680" y2="560" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00508A" stopOpacity="0.7" />
            <stop offset="0.45" stopColor="#5C63B8" stopOpacity="0.55" />
            <stop offset="1" stopColor="#2BA3B5" stopOpacity="0.65" />
          </linearGradient>
          <linearGradient id="line-b" x1="80" y1="560" x2="640" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E07A5F" stopOpacity="0.45" />
            <stop offset="0.5" stopColor="#5C63B8" stopOpacity="0.4" />
            <stop offset="1" stopColor="#00508A" stopOpacity="0.55" />
          </linearGradient>
          <filter id="glow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g className="hero-lines" strokeLinecap="round">
          <path d="M92 148 C 180 90, 260 210, 348 168" stroke="url(#line-a)" strokeWidth="1.5" />
          <path d="M348 168 C 430 130, 490 240, 578 198" stroke="url(#line-a)" strokeWidth="1.5" />
          <path d="M168 292 C 250 240, 310 360, 412 308" stroke="url(#line-b)" strokeWidth="1.35" />
          <path d="M412 308 C 500 270, 560 390, 648 334" stroke="url(#line-a)" strokeWidth="1.35" />
          <path d="M120 430 C 210 380, 280 510, 392 454" stroke="url(#line-b)" strokeWidth="1.4" />
          <path d="M392 454 C 470 410, 540 530, 630 478" stroke="url(#line-a)" strokeWidth="1.4" />
          <path d="M92 148 C 70 250, 140 340, 168 292" stroke="url(#line-a)" strokeWidth="1" />
          <path d="M348 168 C 320 250, 360 290, 412 308" stroke="url(#line-b)" strokeWidth="1" />
          <path d="M578 198 C 560 280, 600 320, 648 334" stroke="url(#line-a)" strokeWidth="1" />
          <path d="M168 292 C 150 360, 130 400, 120 430" stroke="url(#line-b)" strokeWidth="1" />
          <path d="M412 308 C 400 370, 390 420, 392 454" stroke="url(#line-a)" strokeWidth="1" />
          <path d="M92 148 L 168 292 L 392 454 L 578 198 L 348 168 Z" stroke="url(#line-a)" strokeWidth="0.6" opacity="0.45" />
          <path d="M240 96 C 300 160, 280 220, 348 168" stroke="url(#line-b)" strokeWidth="0.9" />
          <path d="M500 92 C 540 150, 530 210, 578 198" stroke="url(#line-a)" strokeWidth="0.9" />
          <path d="M60 360 C 110 390, 140 420, 168 292" stroke="url(#line-a)" strokeWidth="0.85" />
          <path d="M280 560 C 340 500, 380 490, 392 454" stroke="url(#line-b)" strokeWidth="0.9" />
          <path d="M540 560 C 580 500, 620 430, 648 334" stroke="url(#line-a)" strokeWidth="0.85" />
        </g>

        <g filter="url(#glow)">
          <circle className="hero-node hero-node-a" cx="92" cy="148" r="5.5" fill="#00508A" />
          <circle className="hero-node hero-node-b" cx="240" cy="96" r="3.5" fill="#5C63B8" />
          <circle className="hero-node hero-node-c" cx="348" cy="168" r="7" fill="#1A6FB5" />
          <circle className="hero-node hero-node-a" cx="500" cy="92" r="3.2" fill="#2BA3B5" />
          <circle className="hero-node hero-node-b" cx="578" cy="198" r="5" fill="#5C63B8" />
          <circle className="hero-node hero-node-c" cx="168" cy="292" r="4.5" fill="#2BA3B5" />
          <circle className="hero-node hero-node-a" cx="412" cy="308" r="6.5" fill="#00508A" />
          <circle className="hero-node hero-node-b" cx="648" cy="334" r="4" fill="#E07A5F" />
          <circle className="hero-node hero-node-c" cx="60" cy="360" r="3" fill="#5C63B8" />
          <circle className="hero-node hero-node-a" cx="120" cy="430" r="4.2" fill="#00508A" />
          <circle className="hero-node hero-node-b" cx="392" cy="454" r="5.8" fill="#2BA3B5" />
          <circle className="hero-node hero-node-c" cx="630" cy="478" r="3.6" fill="#5C63B8" />
          <circle className="hero-node hero-node-a" cx="280" cy="560" r="3.4" fill="#E07A5F" />
          <circle className="hero-node hero-node-b" cx="540" cy="560" r="4.4" fill="#00508A" />
        </g>
      </svg>

      <style>{`
        .hero-lines path {
          stroke-dasharray: 6 10;
          animation: hero-dash 28s linear infinite;
        }
        .hero-node {
          transform-origin: center;
          transform-box: fill-box;
        }
        .hero-node-a { animation: hero-pulse 4.6s ease-in-out infinite; }
        .hero-node-b { animation: hero-pulse 5.4s ease-in-out infinite 0.6s; }
        .hero-node-c { animation: hero-pulse 6s ease-in-out infinite 1.1s; }
        @keyframes hero-dash {
          to { stroke-dashoffset: -240; }
        }
        @keyframes hero-pulse {
          0%, 100% { opacity: 0.45; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
