import { ImageBackground, StyleSheet } from "react-native";
import React, { ReactNode } from "react";
import { Box, IBoxProps } from "native-base";

type Props = {
  children: ReactNode;
  imageSource?: any;
} & IBoxProps;

const BackgroundLayout = (props: Props) => {
  const { children, imageSource, ...boxProps } = props;
  return (
    <Box flex={1} {...boxProps}>
      <ImageBackground
        source={imageSource || require("../../assets/icon.png")}
        style={{ flex: 1 }}
        resizeMode="cover"
        resizeMethod="auto"
      />
      <Box position={"absolute"} height={"100%"} width={"100%"}>
        {children}
      </Box>
    </Box>
  );
};

export default BackgroundLayout;

const styles = StyleSheet.create({});
