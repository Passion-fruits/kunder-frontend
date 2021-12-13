import { useRouter } from "next/dist/client/router";
import { FC, useEffect } from "react";
import { getContextValue } from "../../../lib/context";
import AudioPlayer from "../AudioPlayer";
import Modal from "../Modal";
import ImageBackground from "./ImageBackground";
import * as S from "./styles";
import { ACCESS_TOKEN } from "./../../../lib/api/export";
import { toast } from "material-react-toastify";
import Header from "../Header/index";

interface Props {}

const Layout: FC<Props> = ({ children }) => {
  const router = useRouter();
  const context = getContextValue();
  const modalState = context.modal;

  useEffect(() => {
    if (!localStorage.getItem(ACCESS_TOKEN) && router.pathname !== "/auth") {
      router.push("/auth");
      toast.info("😢 로그인 후 이용해주세요!");
    }
  }, [router.pathname]);

  return (
    <>
      {modalState !== "none" && <Modal />}
      {router.pathname === "/music/[id]" && (
        <S.ColorBackground background={`#${context.color}`} />
      )}
      <S.Wrapper>
        {router.pathname === "/auth" ? (
          <ImageBackground />
        ) : router.pathname === "/" ? (
          <ImageBackground />
        ) : (
          <></>
        )}
        {router.pathname !== "/auth" && <Header />}
        <S.Container>{children}</S.Container>
        <AudioPlayer />
      </S.Wrapper>
    </>
  );
};

export default Layout;
