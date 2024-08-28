import { useState } from "react";
import { Switch } from "react-native";

export const CustomSwitch = ({ enabled = false }: { enabled?: boolean }) => {
  const [isEnabled, setIsEnabled] = useState(enabled);

  const toggleSwitch = () => setIsEnabled((prev) => !prev);

  return (
    <Switch
      className="flex-shrink-0"
      trackColor={{ false: "#282837", true: "#685CF0" }}
      thumbColor="#fff"
      ios_backgroundColor="#282837"
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};
