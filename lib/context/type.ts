import { Dispatch } from "react";
import { Music } from "../interface/music";

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
  song_id?: string | string[] | number;
  music?: Music;
  user_id?: string | string[] | number;
  color?: string;
};

export type Action = State & {
  type: "SET_MODAL" | "SET_SONG_ID" | "SET_MUSIC" | "SET_USER_ID" | "SET_COLOR";
};

export type SampleDispatch = Dispatch<Action>;
