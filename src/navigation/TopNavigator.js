import React from "react";
import {
  Icon,
  Divider,
  TopNavigation,
  TopNavigationAction,
  Button,
} from "@ui-kitten/components";

import { ThemeContext } from "../theme/theme-context";

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;

const BackAction = (props) => (
  <TopNavigationAction {...props} icon={BackIcon} />
);

const ToggleAction = ({ theme, toggleTheme }) => {
  const toggleIcon = (
    <Icon name={theme === "light" ? "sun-outline" : "moon-outline"} />
  );

  return <TopNavigationAction icon={toggleIcon} onPress={toggleTheme} />;
};
const TopNavigator = ({ navigation, back }) => {
  const { theme, toggleTheme } = React.useContext(ThemeContext);

  return (
    <>
      <TopNavigation
        alignment="center"
        title="Personal App"
        accessoryLeft={back ? <BackAction onPress={navigation.goBack} /> : null}
        accessoryRight={
          <ToggleAction theme={theme} toggleTheme={toggleTheme} />
        }
      />
      <Divider />
    </>
  );
};

export default TopNavigator;
