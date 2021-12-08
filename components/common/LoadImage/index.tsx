import { FC } from "react";
import styled from "@emotion/styled";

interface Props {
  src: string;
  size?: number;
  border_radius: "circle" | "basic";
}

const LoadImage: FC<Props> = (params) => {
  return (
    <Image
      src={params.src}
      width={params.size}
      border_radius={params.border_radius}
    />
  );
};

export default LoadImage;

const Image = styled.img<{ width; border_radius }>`
  width: ${(res) => `${res.width}px`};
  height: ${(res) => `${res.width}px`};
  border-radius: ${(res) => (res.border_radius === "circle" ? `50%` : `5px`)};
`;
