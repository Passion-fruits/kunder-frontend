import React, { useReducer, useContext, createContext } from "react";
import { Action, SampleDispatch, State } from "./type";

const StateContext = createContext<State | null>(null);
const DispatchContext = createContext<SampleDispatch | null>(null);

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_MODAL":
      return {
        ...state,
        modal: action.modal,
      };
    case "SET_SONG_ID":
      return {
        ...state,
        song_id: action.song_id,
      };
    case "SET_MUSIC":
      return {
        ...state,
        music: action.music,
      };
    default:
      throw new Error("Unhandled action");
  }
}

export function ContextProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, {
    modal: "none",
    song_id: null,
    music: null,
  });
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export function getContextValue() {
  const state = useContext(StateContext);
  if (!state) throw new Error("Cannot find SampleProvider");
  return state;
}

export function setContextValue() {
  const dispatch = useContext(DispatchContext);
  if (!dispatch) throw new Error("Cannot find SampleProvider");
  return dispatch;
}
