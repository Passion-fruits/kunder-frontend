import { ColorMap } from "./../styles/color";
interface Props {
  color: "red" | "blue";
  size: number;
}

export default function ChartArrowIcon({ size, color }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={(size * 10) / 8}
      height={size}
      viewBox="0 0 10 8"
      style={color === "blue" ? { transform: "rotate(90deg)" } : {}}
    >
      <path
        id="다각형_19"
        data-name="다각형 19"
        d="M5,0l5,8H0Z"
        fill={color === "red" ? ColorMap.mainColor : ColorMap.blue100}
      />
    </svg>
  );
}
