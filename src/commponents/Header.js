import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = ({text}) => {
  return (
    <View style={styles.head}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  head: {
    width: '100%',
    backgroundColor: 'peru',
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginVertical: 5,
  },
});

export default Header;
