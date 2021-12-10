interface Props {
  size: number;
}

export default function YoutubeIcon({ size }: Props) {
  return (
    <svg
      id="그룹_892"
      data-name="그룹 892"
      xmlns="http://www.w3.org/2000/svg"
      width={(size * 33) / 22}
      height={size}
      viewBox="0 0 32.233 22.664"
    >
      <g
        id="사각형_621"
        data-name="사각형 621"
        transform="translate(8.367 4.978)"
        fill="#fff"
        stroke="#707070"
        strokeWidth="1"
      >
        <rect width="17" height="14" stroke="none" />
        <rect x="0.5" y="0.5" width="16" height="13" fill="none" />
      </g>
      <path
        id="Icon_awesome-youtube"
        data-name="Icon awesome-youtube"
        d="M32.61,8.046a4.05,4.05,0,0,0-2.85-2.868C27.246,4.5,17.167,4.5,17.167,4.5s-10.08,0-12.593.678a4.05,4.05,0,0,0-2.85,2.868,42.487,42.487,0,0,0-.674,7.809,42.487,42.487,0,0,0,.674,7.809,3.99,3.99,0,0,0,2.85,2.822c2.514.678,12.593.678,12.593.678s10.08,0,12.593-.678a3.99,3.99,0,0,0,2.85-2.822,42.487,42.487,0,0,0,.674-7.809,42.487,42.487,0,0,0-.674-7.809Zm-18.74,12.6V11.062l8.425,4.793L13.87,20.648Z"
        transform="translate(-1.05 -4.5)"
        fill="#ff0a0a"
      />
    </svg>
  );
}
