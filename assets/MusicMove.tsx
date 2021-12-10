interface Props {
  size: number;
  isNext: boolean;
}

export default function MusicMoveIcon({ size, isNext }: Props) {
  return (
    <svg
      id="그룹_744"
      data-name="그룹 744"
      xmlns="http://www.w3.org/2000/svg"
      width={(size * 13) / 18}
      height={size}
      viewBox="0 0 13.963 18.07"
      style={isNext ? {} : { transform: "rotate(180deg)" }}
    >
      <path
        id="다각형_15"
        data-name="다각형 15"
        d="M8.214,0l8.214,12.32H0Z"
        transform="translate(12.32 0.821) rotate(90)"
        fill="#fff"
      />
      <rect
        id="사각형_575"
        data-name="사각형 575"
        width="1.643"
        height="18.07"
        transform="translate(12.32 0)"
        fill="#fff"
      />
    </svg>
  );
}
