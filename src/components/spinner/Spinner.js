const Spinner = () => {
  return (
    <svg
      style={{ margin: '0 auto', background: 'none', display: 'block' }}
      version="1.0"
      width="128px"
      height="128px"
      viewBox="0 0 128 128"
      xmlSpace="preserve"
    >
      <rect x="0" y="0" width="100%" height="100%" fill="#FFFFFF" />
      <g>
        <circle cx="16" cy="64" r="16" fill="#9f0013" />
        <circle
          cx="16"
          cy="64"
          r="16"
          fill="#bf5562"
          transform="rotate(45,64,64)"
        />
        <circle
          cx="16"
          cy="64"
          r="16"
          fill="#d7949c"
          transform="rotate(90,64,64)"
        />
        <circle
          cx="16"
          cy="64"
          r="16"
          fill="#ecccd0"
          transform="rotate(135,64,64)"
        />
        <circle
          cx="16"
          cy="64"
          r="16"
          fill="#f4e1e3"
          transform="rotate(180,64,64)"
        />
        <circle
          cx="16"
          cy="64"
          r="16"
          fill="#f4e1e3"
          transform="rotate(225,64,64)"
        />
        <circle
          cx="16"
          cy="64"
          r="16"
          fill="#f4e1e3"
          transform="rotate(270,64,64)"
        />
        <circle
          cx="16"
          cy="64"
          r="16"
          fill="#f4e1e3"
          transform="rotate(315,64,64)"
        />
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 64 64;315 64 64;270 64 64;225 64 64;180 64 64;135 64 64;90 64 64;45 64 64"
          calcMode="discrete"
          dur="720ms"
          repeatCount="indefinite"
        ></animateTransform>
      </g>
    </svg>
  );
};

export default Spinner;
