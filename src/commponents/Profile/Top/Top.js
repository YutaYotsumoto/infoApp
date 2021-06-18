import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const Top = ({name}) => {
  return (
    <View style={[styles.header, styles.topArea]}>
      <Image style={styles.Icon} source={require('../../../Icon/Icon.png')} />
      <Text style={styles.font}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  frame: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    width: 350,
    height: 240,
    margin: 20,
  },
  header: {
    borderBottomWidth: 1,
    borderColor: 'black',
    paddingVertical: 20,
  },
  topArea: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  Icon: {
    width: 50,
    height: 50,
    marginHorizontal: 20,
  },

  font: {
    fontSize: 30,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: 'black',
    margin: 5,
  },
});

export default Top;
