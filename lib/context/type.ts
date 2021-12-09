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
  song_id?: string | string[];
  music: Music;
};

export type Action = State & {
  type: "SET_MODAL" | "SET_SONG_ID" | "SET_MUSIC";
};

export type SampleDispatch = Dispatch<Action>;
