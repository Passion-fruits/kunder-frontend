import { FC, useEffect, useState } from "react";
import styled from "@emotion/styled";

interface Props {
  src: string;
  size?: number;
  border_radius: "circle" | "basic";
}

const LoadImage: FC<Props> = (params) => {
  const [onLoad, setOnLoad] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = params.src;
    img.onload = () => {
      setOnLoad(true);
    };
  }, [params.src]);

  return (
    <Img
      src={onLoad ? params.src : "/none_data.png"}
      width={params.size}
      border_radius={params.border_radius}
    />
  );
};

export default LoadImage;

const Img = styled.img<{ width; border_radius }>`
  width: ${(res) => `${res.width}px`};
  height: ${(res) => `${res.width}px`};
  border-radius: ${(res) => (res.border_radius === "circle" ? `50%` : `5px`)};
`;
