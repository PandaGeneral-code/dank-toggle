import React from "react";
import { Provider as ReduxProvider } from "react-redux";

import DankToggle from "./components/DankToggle/DankToggle";
import StoreTester from "./components/StoreTester/StoreTester";
import configureStore from "./state/store";
import RootWrapper from "./styled";

const App = () => {
  return (
    <ReduxProvider store={configureStore()}>
      <RootWrapper>
        <DankToggle />
        <StoreTester />
      </RootWrapper>
    </ReduxProvider>
  );
};

export default App;
