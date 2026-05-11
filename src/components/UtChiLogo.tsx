import { useId } from "react";

/** Simple wordmark + bus mark for Nhà xe Út Chí (inline SVG, no external assets). */
export function UtChiLogo({ className = "h-9 w-9" }: { className?: string }) {
  const gid = useId().replace(/:/g, "");
  const gradId = `utchi-grad-${gid}`;
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect width="40" height="40" rx="10" fill={`url(#${gradId})`} />
      <path
        d="M8 22h22v4a2 2 0 0 1-2 2h-2v-2a2 2 0 0 0-4 0v2H14v-2a2 2 0 0 0-4 0v2H8a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2Z"
        fill="white"
        fillOpacity="0.95"
      />
      <rect x="10" y="16" width="18" height="6" rx="1" fill="white" fillOpacity="0.35" />
      <circle cx="13" cy="28" r="2" fill="#1e3a5f" />
      <circle cx="27" cy="28" r="2" fill="#1e3a5f" />
      <defs>
        <linearGradient id={gradId} x1="8" y1="6" x2="34" y2="34" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2563eb" />
          <stop offset="1" stopColor="#0f172a" />
        </linearGradient>
      </defs>
    </svg>
  );
}
