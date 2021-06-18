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
    borderColor: 'black',
    paddingVertical: 20,
  },
  topArea: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  Icon: {
    width: 30,
    height: 30,
    marginHorizontal: 20,
  },

  font: {
    fontSize: 15,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: 'black',
    margin: 5,
  },
});

export default Head;
