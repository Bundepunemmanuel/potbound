export default function Logo({ size = 28 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Potbound logo"
    >
      <rect x="8" y="18" width="84" height="18" rx="8" fill="#1E293B" />
      <path
        d="M18 36 L30 88 C31 92 34 94 38 94 L62 94 C66 94 69 92 70 88 L82 36 Z"
        fill="none"
        stroke="#1E293B"
        strokeWidth="7"
        strokeLinejoin="round"
      />
      <path
        d="M50 38 L50 55 M50 55 L34 70 M50 55 L50 82 M50 55 L66 70 M34 70 L26 82 M66 70 L74 82 M50 82 L42 92 M50 82 L58 92"
        stroke="#2563EB"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
