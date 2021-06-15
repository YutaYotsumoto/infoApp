import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Profile = () => {
  return (
    <View style={styles.frame}>
      <View style={styles.header}>
        <Text style={[styles.font, {marginVertical: 20}]}>name</Text>
      </View>

      <View style={styles.body}>
        <Text style={styles.font}>id</Text>
        <Text style={styles.font}>city</Text>
        <Text style={styles.font}>street</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frame: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
    width: 350,
    height: 300,
    margin: 20,
  },
  header: {
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  body: {
    marginVertical: 30,
  },
  font: {
    fontSize: 30,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: 'black',
    margin: 5,
  },
});

export default Profile;
