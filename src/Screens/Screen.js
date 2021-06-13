import React from 'react';
import {StyleSheet, SafeAreaView, View} from 'react-native';
import Header from '../commponents/Header';

const Screen = () => {
  return (
    <SafeAreaView backgroundColor="peru">
      <View backgroundColor="white">
        <Header text="Information" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Screen;
