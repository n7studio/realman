import { renderHook, RenderHookOptions } from "@testing-library/react-hooks";
import { Container, ContainerProvider } from "react-di";
import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

export function renderHookWithStore(
  callback: (props: unknown) => any,
  initialState: {[key:string]:any},
  options?: RenderHookOptions<unknown> | undefined
) {

  const diConfig = {
    store: (c:Container) => {
      const sagaMiddleware = c.get('sagaMiddleware');
      const middlewares = [];
      middlewares.push(applyMiddleware(sagaMiddleware));

      return createStore(
          (s:any) => s,
          initialState,
          compose(...middlewares)
      );
    },
    sagaMiddleware: (c:Container) => {
      return createSagaMiddleware({});
    }
  };

  return renderHook(callback, {
    ...options,
    wrapper: ({ children }) => (
      <ContainerProvider config={diConfig}>
        <>
          {children}
        </>
      </ContainerProvider>
    ),
  });
}
