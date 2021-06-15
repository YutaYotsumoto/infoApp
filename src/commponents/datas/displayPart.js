import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Display = ({datas}) => {
  return (
    <View style={styles.area}>
      <Text style={styles.show}>{datas}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  area: {
    backgroundColor: 'gold',
    paddingVertical: 250,
  },
  show: {
    textAlign: 'center',
    fontSize: 30,
  },
});

export default Display;
