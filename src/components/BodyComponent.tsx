import React from 'react';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { BODY_COLOR } from '../commons/color';

export const BodyComponent = (props: any) => {
  const { height } = useWindowDimensions();

  return (
    <View style={{
      height: height * 0.88,
      ...styles.container
    }}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: BODY_COLOR,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 40,
    paddingVertical: 40
  }
});
