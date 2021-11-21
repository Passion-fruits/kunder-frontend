import { FC } from "react";
import AudioPlayer from "../AudioPlayer";
import Header from "../Header";
import * as S from "./styles";

interface Props {}

const Layout: FC<Props> = ({ children }) => {
  return (
    <S.Wrapper>
      <Header />
      <S.Container>{children}</S.Container>
      <AudioPlayer />
    </S.Wrapper>
  );
};

export default Layout;
