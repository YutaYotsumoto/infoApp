import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Footer = () => {
  return (
    <View style={[styles.footerBase, styles.inFooter]}>
      <TouchableOpacity style={styles.IconsBase}>
        <Image style={styles.Icons} source={require('../../Icons/home.png')} />
        <Text>home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.IconsBase}>
        <Image
          style={styles.Icons}
          source={require('../../Icons/calendar.png')}
        />
        <Text>calendar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.IconsBase}>
        <Image style={styles.Icons} source={require('../../Icons/task.png')} />
        <Text>project</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.IconsBase}>
        <Image style={styles.Icons} source={require('../../Icons/user.png')} />
        <Text>account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footerBase: {
    borderTopWidth: 1,
    borderColor: 'darkgrey',
    paddingHorizontal: 20,
    // backgroundColor: '',
  },
  inFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  Icons: {
    width: 30,
    height: 30,
  },
  IconsBase: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
});

export default Footer;
