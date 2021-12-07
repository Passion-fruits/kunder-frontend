import { Dispatch } from "react";

/* =========== 전역 type ===================== */

export type ModalOption = "login" | "signUp" | "none" | "support" | "playlist";

/* =================================================== */

export type State = {
  modal: ModalOption;
};

export type Action = {
  type: "SET_MODAL";
  modal: ModalOption;
};

export type SampleDispatch = Dispatch<Action>;
