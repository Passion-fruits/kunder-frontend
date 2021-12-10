interface Props {
  size: number;
}

export default function PlayIcon({ size }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={(size * 6) / 7}
      height={size}
      viewBox="0 0 6.498 7.935"
    >
      <path
        id="다각형_14"
        data-name="다각형 14"
        d="M3.967,0,7.935,6.5H0Z"
        transform="translate(6.498) rotate(90)"
        fill="#fff"
      />
    </svg>
  );
}
