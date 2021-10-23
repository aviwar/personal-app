import React from "react";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { Provider as StoreProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { AppNavigator } from "./src/navigation/AppNavigator";

import { default as customTheme } from "./src/theme/custom-theme-royal-blue.json";
import { ThemeContext } from "./src/theme/theme-context";

import { store, persistor } from "./src/store";
import Loader from "./src/components/common/Loader";

export default () => {
  const [theme, setTheme] = React.useState("light");

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
  };

  const preferences = React.useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme, toggleTheme]
  );

  return (
    <StoreProvider store={store}>
      <ThemeContext.Provider value={preferences}>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={{ ...eva[theme], ...customTheme }}>
          <PersistGate loading={<Loader />} persistor={persistor}>
            <AppNavigator />
          </PersistGate>
        </ApplicationProvider>
      </ThemeContext.Provider>
    </StoreProvider>
  );
};
