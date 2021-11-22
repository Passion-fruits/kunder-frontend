import { useRouter } from "next/dist/client/router";
import { FC } from "react";
import { ContextProvider } from "../../../lib/context";
import AudioPlayer from "../AudioPlayer";
import Header from "../Header";
import ImageBackground from "./ImageBackground";
import * as S from "./styles";

interface Props {}

const Layout: FC<Props> = ({ children }) => {
  const router = useRouter();
  return (
    <ContextProvider>
      <S.Wrapper>
        <ImageBackground />
        {router.pathname !== "/auth" && <Header />}
        <S.Container>{children}</S.Container>
        <AudioPlayer />
      </S.Wrapper>
    </ContextProvider>
  );
};

export default Layout;
