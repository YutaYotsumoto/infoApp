/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Body = ({id, city, street}) => {
  return (
    <View style={styles.flex}>
      <Text style={[styles.text, {marginLeft: 27}]}>id</Text>
      <Text style={[styles.text, {marginLeft: 27}]}>city</Text>
      <Text style={[styles.text, {marginLeft: 27}]}>street</Text>

      <Text style={styles.text}>:</Text>
      <Text style={styles.text}>:</Text>
      <Text style={styles.text}>:</Text>

      <Text style={styles.font}>{id}</Text>
      <Text style={styles.font}>{city}</Text>
      <Text style={styles.font}>{street}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    height: 30,
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: 'normal',
    color: 'grey',
    marginTop: 5,
    marginLeft: 5,
  },
  font: {
    height: 30,
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: 'black',
    marginTop: 5,
    marginHorizontal: 5,
  },
  flex: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    marginTop: 5,
  },
});

export default Body;
