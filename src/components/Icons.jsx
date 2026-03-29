// Shared icon props pattern
const iconProps = (size, color, className) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  className,
  "aria-hidden": "true",
});

// Icons
export const CopyIcon = ({ size = 16, color = "currentColor", className }) => (
  <svg {...iconProps(size, color, className)}>
    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
  </svg>
);

export const CheckIcon = ({ size = 16, color = "currentColor", className }) => (
  <svg {...iconProps(size, color, className)}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export const ArrowUpIcon = ({
  size = 16,
  color = "currentColor",
  className,
}) => (
  <svg {...iconProps(size, color, className)}>
    <line x1="12" y1="19" x2="12" y2="5" />
    <polyline points="5 12 12 5 19 12" />
  </svg>
);

export const ArrowLeftIcon = ({
  size = 16,
  color = "currentColor",
  className,
}) => (
  <svg {...iconProps(size, color, className)}>
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
);

export const ArrowRightIcon = ({
  size = 16,
  color = "currentColor",
  className,
}) => (
  <svg {...iconProps(size, color, className)}>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export const CopyrightIcon = ({
  size = 16,
  color = "currentColor",
  className,
}) => (
  <svg {...iconProps(size, color, className)}>
    <circle cx="12" cy="12" r="10" />
    <path d="M14.83 14.83a4 4 0 1 1 0-5.66" />
  </svg>
);
