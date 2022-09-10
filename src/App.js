import React from "react";
import "./App.css";
import MountModules from "./components/MountModules";
import getMicroFrontendsModulesMetaData from "./utils/microFrontendsModulesMetaData";
import getGlobalContext from "./utils/globalContext";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Rendered from Container App</h1>
        <MountModules
          MFData={getMicroFrontendsModulesMetaData()}
          globalContext={getGlobalContext()}
        ></MountModules>
      </header>
    </div>
  );
}

export default App;
