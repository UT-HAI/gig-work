import {
  useReducer,
  useContext,
  createContext,
  Dispatch,
  ReactNode,
} from "react";

export const SCHEDULE_PAGE = 0;
export const COMPARE_PAGE = 1;

type LocationDispatch = Dispatch<{
  type: string;
  payload?: any;
}>;
const LocationStateContext = createContext(SCHEDULE_PAGE);
const LocationDispatchContext = createContext({} as LocationDispatch);

const reducer = (state: any, action: { type: string; payload?: any }) => {
  switch (action.type) {
    case "SET_SCHEDULE_PAGE":
      return SCHEDULE_PAGE;
    case "SET_COMPARE_PAGE":
      return COMPARE_PAGE;
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

type LocationProviderProps = {
  children: ReactNode;
};
export const LocationProvider = ({ children }: LocationProviderProps) => {
  const [state, dispatch] = useReducer(reducer, SCHEDULE_PAGE);

  return (
    <LocationDispatchContext.Provider value={dispatch}>
      <LocationStateContext.Provider value={state}>
        {children}
      </LocationStateContext.Provider>
    </LocationDispatchContext.Provider>
  );
};

export const useAppLocation = () => useContext(LocationStateContext);
export const useLocationDispatch = () => useContext(LocationDispatchContext);
