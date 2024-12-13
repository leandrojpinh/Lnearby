import { colors, fontFamily } from "@/styles/theme";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    backgroundColor: colors.gray[100],
  },
  content: {
    gap: 12,
    padding: 24,
    paddingBottom: 100,
  },
  indicator: {
    width: 80,
    height: 4,
    backgroundColor: colors.gray[300],
  },
  nameSelected: {
    color: colors.gray[100],
  },
  title: {
    color: colors.gray[600],
    fontFamily: fontFamily.regular,
    marginBottom: 16,
  },
});
