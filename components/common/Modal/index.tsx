import { FC } from "react";
import * as S from "./styles";
import { getContextValue, setContextValue } from "./../../../lib/context/index";
import Login from "./Login";
import Signup from "./Signup";
import Support from "./Support";
import Playlist from "./Playlist";

interface Props {}

const Modal: FC<Props> = () => {
  const dispatch = setContextValue();
  const context = getContextValue();
  const modal = context.modal;

  const closeModal = ({ target }) => {
    const eventTarget = target as HTMLElement;
    if (eventTarget.id !== "modal_wrapper") return;
    dispatch({
      type: "SET_MODAL",
      modal: "none",
    });
  };

  return (
    <S.Wrapper id="modal_wrapper" onClick={closeModal}>
      {(() => {
        switch (modal) {
          case "login":
            return <Login />;
          case "signUp":
            return <Signup />;
          case "support":
            return <Support />;
          case "playlist":
            return <Playlist />;
        }
      })()}
    </S.Wrapper>
  );
};

export default Modal;
