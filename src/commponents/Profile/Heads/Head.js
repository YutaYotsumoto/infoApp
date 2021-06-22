import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const Head = ({name}) => {
  return (
    <View style={[styles.header, styles.topArea]}>
      <Image style={styles.Icon} source={require('../../../Icon/Icon.png')} />
      <Text style={styles.font}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    borderBottomWidth: 1,
    borderColor: 'darkgrey',
    paddingVertical: 20,
    overflow: 'visible',
  },
  topArea: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  Icon: {
    width: 35,
    height: 35,
    marginHorizontal: 20,
  },

  font: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    width: 260,
    margin: 5,
  },
});

export default Head;
