import React, { useReducer, useContext, createContext, Dispatch } from "react";

export type ModalOption = "login" | "signUp" | "none";

type State = {
  modal: ModalOption;
};

type Action = {
  type: "SET_MODAL";
  modal: ModalOption;
};

type SampleDispatch = Dispatch<Action>;

const SampleStateContext = createContext<State | null>(null);
const SampleDispatchContext = createContext<SampleDispatch | null>(null);

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_MODAL":
      return {
        ...state,
        modal: action.modal,
      };
    default:
      throw new Error("Unhandled action");
  }
}

export function ContextProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, {
    modal: "none",
  });
  return (
    <SampleStateContext.Provider value={state}>
      <SampleDispatchContext.Provider value={dispatch}>
        {children}
      </SampleDispatchContext.Provider>
    </SampleStateContext.Provider>
  );
}

export function getContextValue() {
  const state = useContext(SampleStateContext);
  if (!state) throw new Error("Cannot find SampleProvider");
  return state;
}

export function setContextValue() {
  const dispatch = useContext(SampleDispatchContext);
  if (!dispatch) throw new Error("Cannot find SampleProvider");
  return dispatch;
}
