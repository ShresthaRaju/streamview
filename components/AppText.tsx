import { Text, TextProps } from "react-native";

// passing className as a prop to this component conflicts with the native Text component somehow
// and thus the font-family style is not applied
// so I had to use styles instead of className
export const AppText = ({
  style,
  styles,
  children,
  ...rest
}: TextProps & { styles?: string }) => {
  return (
    <Text
      style={[{ fontFamily: "Mulish" }, style]}
      className={styles}
      {...rest}
    >
      {children}
    </Text>
  );
};
