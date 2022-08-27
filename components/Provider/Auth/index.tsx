import {
  useReducer,
  useContext,
  createContext,
  Dispatch,
  useEffect,
  ReactNode,
} from "react";
import { useRouter } from "next/router";

// interface AuthState {
//   userId?: number;
// }

const defaultState = { userId: undefined };

type AuthDispatch = Dispatch<{
  type: string;
  payload: any;
}>;
const AuthStateContext = createContext(undefined);
const AuthDispatchContext = createContext({} as AuthDispatch);

const reducer = (state: any, action: { type: string; payload: any }) => {
  switch (action.type) {
    case "SET_USER_ID":
      return action.payload;
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

type AuthProviderProps = {
  children: ReactNode;
};
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [state, dispatch] = useReducer(reducer, undefined);
  const router = useRouter();

  useEffect(() => {
    if (!state) {
      router.push("/login");
    }
  }, [state, router]);

  return (
    <AuthDispatchContext.Provider value={dispatch}>
      <AuthStateContext.Provider value={state}>
        {children}
      </AuthStateContext.Provider>
    </AuthDispatchContext.Provider>
  );
};

export const useAuth = () => useContext(AuthStateContext);
export const useDispatchAuth = () => useContext(AuthDispatchContext);
