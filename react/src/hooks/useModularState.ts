import { modx, StateCallableMapObjectInterface } from "react-modx";
import { useDependency } from "react-di";

export const useModularState = (moduleName: string, initialState: any, callableMap: StateCallableMapObjectInterface) => {
  const store = useDependency("store");
  const sagaMiddleware = useDependency("sagaMiddleware");

  const modxInstance = modx();
  modxInstance.config(store, sagaMiddleware);
  
  return modxInstance.useModularState(moduleName, initialState, callableMap);
};

