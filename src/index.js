import React from "react";
import { render } from "react-dom";
import DevTools from "mobx-react-devtools";
import Farm from './components/Farm';
import FarmModel from './models/FarmModel';
import PlayerModel from './models/PlayerModel';
import { Provider } from "mobx-react";

const farm = new FarmModel();
const player = new PlayerModel();

render(
  <div className="app-wrapper">
    <DevTools />
    <Provider farm={farm} player={player}>
      <Farm />
    </Provider>
  </div>,
  document.getElementById("root")
);

// Access the farm data easily 
window.farm = farm;
