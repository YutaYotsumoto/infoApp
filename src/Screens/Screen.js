import React from 'react';
import {StyleSheet, SafeAreaView, View} from 'react-native';
import {useEffect} from 'react';
import axios from 'axios';

import Header from '../commponents/Header';

const Screen = () => {
  // useEffect関数内のaxiosでWebAPI取得
  useEffect(() => {
    const getInfo = async () => {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users',
      );
      const dates = response.data;
      console.log(dates);
    };
    getInfo();
  }, []);

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
