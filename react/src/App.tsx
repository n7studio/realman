import { FocusEvent, FormEvent, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEntities } from "./hooks/useEntities";
import { RealtimeConnector } from "./modules/realtime";
import { PlayerConnectedListener } from "./modules/players/listeners/PlayerConnectedListener";
import { LobbyScreen } from "./screens/lobby";
import { BoardScreen } from "./screens/board";
// import { usePlayers } from "./modules/players";
import { Player } from "./modules/players/types/models";
import { useSession } from "./hooks/useSession";
import { HubConnection, HubConnectionBuilder } from "@microsoft/signalr";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  action: string;
  body: string;
};

type Listener = {
  value: string;
  callsCount: number;
  name: string;
};

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const [connection, setConnection] = useState<HubConnection>();
  const [listeners, setListeners] = useState<Listener[]>([]);

  useEffect(() => {
    if (connection) {
      connection.start();
    }
  }, [connection]);

  return (
    <>
      <div>
        <form
          onSubmit={handleSubmit((formData: Inputs) => {
            if (connection && connection.state === "Connected") {
              const { action, body } = formData;

              if(body){
                connection.send(action, body);
              }else {
                connection.send(action);
              }
            }
          })}
        >
          <input
            placeholder="Enter the request url..."
            onBlur={(e: FocusEvent<HTMLInputElement>) => {
              const url = e.target.value;

              if (!url) {
                return;
              }

              const hubConnection = new HubConnectionBuilder()
                .withUrl(url)
                .withAutomaticReconnect()
                .build();

              setConnection(hubConnection);
            }}
          />
          <input type="text" placeholder="action" {...register("action")} />
          <button>Submit</button>

          <br />

          <textarea {...register("body")} placeholder="Request json"></textarea>
        </form>
        <br />
      </div>

      <button
        onClick={() => {
          const listener: Listener = {
            value: "",
            callsCount: 0,
            name: "",
          };

          setListeners([...listeners, listener]);
        }}
      >
        Add listener
      </button>
      <ul>
        {listeners?.map((listener, index) => {
          return (
            <li key={index}>
              <form>
                <input
                  type="text"
                  disabled={Boolean(listener.name)}
                  onBlur={(e: FocusEvent<HTMLInputElement>) => {
                    const action = e.target.value;

                    const listener: Listener = { ...listeners[index] };
                    listener.name = action;
                    listeners.splice(index, 1, listener);
                    setListeners([...listeners]);

                    connection?.on(action, (result) => {
                      const listener: Listener = { ...listeners[index] };
                      listener.callsCount++;
                      listener.name = action;

                      listener.value = result.toString();

                      listeners.splice(index, 1, listener);
                      setListeners([...listeners]);
                    });
                  }}
                />
              </form>
              <div>{`Called ${listener.callsCount}`}</div>
              <div>{listener.value || "No value"}</div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
