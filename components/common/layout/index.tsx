import { FC } from "react";
import { ContextProvider } from "../../../lib/context";
import AudioPlayer from "../AudioPlayer";
import Header from "../Header";
import ImageBackground from "./ImageBackground";
import * as S from "./styles";

interface Props {}

const Layout: FC<Props> = ({ children }) => {
  return (
    <ContextProvider>
      <S.Wrapper>
        <ImageBackground />
        <Header />
        <S.Container>{children}</S.Container>
        <AudioPlayer />
      </S.Wrapper>
    </ContextProvider>
  );
};

export default Layout;
