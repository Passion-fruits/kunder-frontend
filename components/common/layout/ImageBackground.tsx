import { FC } from "react";
import * as S from "./styles";

interface Props {}

const ImageBackground: FC<Props> = () => {
  return (
    <S.BackgroundWrap>
      <S.Cover />
    </S.BackgroundWrap>
  );
};

export default ImageBackground;
