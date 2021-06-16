import React from 'react';
import {View, StyleSheet} from 'react-native';

import Head from './Heads/Head';
import Body from './Bodys/Body';

const Profile = ({name, id, city, street}) => {
  return (
    <View style={styles.frame}>
      <Head name={name} />
      <Body id={id} city={city} street={street} />
    </View>
  );
};

const styles = StyleSheet.create({
  frame: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    width: 350,
    height: 200,
    margin: 20,
  },
});

export default Profile;
