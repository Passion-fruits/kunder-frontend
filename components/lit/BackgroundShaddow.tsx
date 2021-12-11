import { FC } from "react";
import * as S from "./styles";

interface Props {
  color: string;
}

const BackgroundShaddow: FC<Props> = ({ color }) => {
  return (
    <S.ShaddowWrapper>
      <div
        style={{
          background: `radial-gradient(
      50% 50% at 50% 50%,
      ${color} 0%,
      rgba(0, 0, 0, 0) 100%
    )`,
        }}
      />
    </S.ShaddowWrapper>
  );
};

export default BackgroundShaddow;
