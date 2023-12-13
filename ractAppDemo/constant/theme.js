import { PixelRatio } from "react-native";
const fontScale = PixelRatio.getFontScale();

export const SIZES = {
    small: 9 * fontScale,
  medium: 14 * fontScale,
  large: 18 * fontScale,
  xLarge: 24 * fontScale,
};
export const COLORS = {
    bg: "#111827",
    cardBg: "#1F2937",
    second: "#4F46E5",
    white: "#FFF",
    black: "#000",
    gray: "#ddd",
    primary: "#003131",
    secondary: "#E9E9E9",
    accent: "#1F936D",

  };
  export const FONTS = {
    bold: "InterBold",
    semiBold: "InterSemiBold",
    medium: "InterMedium",
    regular: "InterRegular",
    light: "InterLight",
    
  };
  // export const FONTSS = {

  //   h1_semiBold: { fontSize: SIZESS.h1 },
  //   h2_semiBold: { fontSize: SIZESS.h2 }
  // };
  const SHADOW = {
    elevation: 5,
    shadowColor: COLORS.second,
    shadowOffset: { width: 2, height: 12 },
    shadowRadius: 12,
};
const SIZESS = {
  padding: 19,
  borderRadius: 15,
  textBoxRadius: 25,
  h1: 24,
  h2: 20
}