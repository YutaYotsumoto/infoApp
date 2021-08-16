import React from 'react';
import {View, StyleSheet, TextInput, Image} from 'react-native';

const SearchBar = ({initialText, inputText}) => {
  return (
    <View style={styles.barBase}>
      <View style={[styles.barStyle, styles.inSearch]}>
        <Image style={styles.Icon} source={require('../../Icons/Search.png')} />
        <TextInput
          style={styles.bar}
          placeholder={initialText}
          onChangeText={inputText}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  barBase: {
    borderBottomWidth: 1,
    borderColor: 'darkgrey',
    // backgroundColor: '',
  },
  barStyle: {
    height: 32,
    width: 350,
    borderWidth: 1,
    borderColor: 'darkgrey',
    borderRadius: 8,
    marginVertical: 8,
    marginHorizontal: 20,
    overflow: 'hidden',
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
    width: 305,
    height: 25,
    fontSize: 15,
    marginVertical: 10,
    marginHorizontal: 5,
  },
});

export default SearchBar;
