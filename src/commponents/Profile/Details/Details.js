import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Details = ({id, city, street}) => {
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
    fontSize: 30,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: 'black',
    margin: 5,
  },
});

export default Details;
