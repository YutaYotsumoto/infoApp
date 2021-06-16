import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Body = ({id, city, street}) => {
  return (
    <View>
      <Text style={styles.font}>{id}</Text>
      <Text style={styles.font}>{city}</Text>
      <Text style={styles.font}>{street}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  font: {
    fontSize: 15,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: 'black',
    margin: 5,
  },
});

export default Body;
