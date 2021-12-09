import { Dispatch } from "react";

/* =========== 전역 type ===================== */

export type ModalOption =
  | "login"
  | "signUp"
  | "none"
  | "support"
  | "playlist"
  | "updateProfile";

/* =================================================== */

export type State = {
  modal?: ModalOption;
  song_id?: string | string[];
};

export type Action = State & {
  type: "SET_MODAL" | "SET_SONG_ID";
};

export type SampleDispatch = Dispatch<Action>;
