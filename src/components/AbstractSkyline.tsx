/** Subtle abstract infrastructure / skyline motif — geometric bridges and skyline shapes. */
export default function AbstractSkyline({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 320"
      className={className}
      role="img"
      aria-label="Abstract geometric skyline and bridge motif"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Water / horizon bands */}
      <path
        d="M0 250 Q120 240 200 245 Q280 250 340 260 L400 280 Q420 290 400 300 Q300 310 180 305 Q80 300 0 290 Z"
        fill="currentColor"
        opacity="0.12"
      />
      <path
        d="M400 280 Q480 265 560 250 Q650 235 800 240 L800 300 Q650 295 560 290 Q480 295 420 305 Q400 300 400 280 Z"
        fill="currentColor"
        opacity="0.12"
      />
      <path
        d="M360 280 Q380 300 400 320 L380 320 Q360 300 340 280 Z"
        fill="currentColor"
        opacity="0.08"
      />

      {/* Horizon lines */}
      <path
        d="M0 255 Q150 245 280 255 Q340 262 380 275"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.45"
      />
      <path
        d="M420 275 Q480 260 580 248 Q700 238 800 245"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.45"
      />
      <path
        d="M400 280 Q400 300 400 320"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.35"
      />

      {/* Focal marker */}
      <circle cx="400" cy="268" r="4" fill="currentColor" opacity="0.7" />
      <path
        d="M400 268 L400 248 M392 256 L408 256 M395 252 L405 252"
        stroke="currentColor"
        strokeWidth="1.25"
        opacity="0.55"
        fill="none"
      />

      {/* Arched bridge — left */}
      <path
        d="M220 210 Q280 175 340 210"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.85"
      />
      <path d="M220 210 L220 230 M340 210 L340 230" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />
      <path
        d="M240 208 L240 225 M260 195 L260 225 M280 185 L280 225 M300 195 L300 225 M320 208 L320 225"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.45"
      />
      <line x1="220" y1="230" x2="340" y2="230" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />

      {/* Arched bridge — right */}
      <path
        d="M460 215 Q520 180 580 215"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.85"
      />
      <path d="M460 215 L460 235 M580 215 L580 235" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />
      <path
        d="M480 212 L480 230 M500 198 L500 230 M520 190 L520 230 M540 198 L540 230 M560 212 L560 230"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.45"
      />
      <line x1="460" y1="235" x2="580" y2="235" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />

      {/* Skyline blocks — left cluster */}
      <rect x="250" y="140" width="28" height="70" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.75" />
      <rect x="282" y="110" width="36" height="100" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.8" />
      {/* Stepped tower */}
      <path
        d="M325 210 L325 95 L340 80 L355 95 L355 210 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.85"
      />
      <rect x="360" y="130" width="24" height="80" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />

      {/* Skyline blocks — right cluster */}
      <rect x="430" y="120" width="30" height="95" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.75" />
      <rect x="465" y="85" width="34" height="130" fill="none" stroke="currentColor" strokeWidth="1.75" opacity="0.9" />
      <line x1="482" y1="85" x2="482" y2="70" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />
      <rect x="505" y="145" width="22" height="70" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />
      <rect x="530" y="115" width="40" height="100" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.8" />
      <path
        d="M535 115 L550 95 L565 115"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.75"
      />

      {/* Shoreline accent */}
      <path
        d="M200 230 Q300 220 400 240 Q500 225 600 235"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.35"
        strokeDasharray="4 3"
      />
    </svg>
  );
}
