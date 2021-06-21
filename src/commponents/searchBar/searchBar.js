import React from 'react';
import {View, StyleSheet, TextInput, Image} from 'react-native';

const SearchBar = () => {
  return (
    <View style={[styles.barStyle, styles.inSearch]}>
      <Image style={styles.Icon} source={require('../../Icon/Search.png')} />
      <TextInput style={styles.bar} placeholder={'テキストを入力'} />
    </View>
  );
};

const styles = StyleSheet.create({
  barStyle: {
    height: 40,
    width: 250,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 20,
    marginTop: 10,
    marginHorizontal: 20,
    // overflow: 'hidden',
  },
  inSearch: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Icon: {
    width: 20,
    height: 20,
    marginLeft: 5,
  },
  bar: {
    fontWeight: '500',
    color: 'black',
    width: 200,
    fontSize: 15,
    marginVertical: 10,
    marginHorizontal: 5,
  },
});

export default SearchBar;
