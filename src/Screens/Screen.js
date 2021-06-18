import React, {useState, useEffect} from 'react';
import {SafeAreaView, View} from 'react-native';

import axios from 'axios';

import Header from '../commponents/Header/Header';
import Profile from '../commponents/Profile';

const Screen = () => {
  const [users, setUsers] = useState([]);

  // useEffect関数内のaxiosでWebAPI取得
  useEffect(() => {
    const getInfo = async () => {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users',
      );
      const datas = response.data;
      console.log(datas);
    };
    getInfo();
  }, []);
  //22: []＝＞useStateによる状態の更新時に useEffectを走らせない設定

  return (
    <SafeAreaView backgroundColor="skyblue">
      <View backgroundColor="white">
        <Header text="Users" />
        <Profile />
      </View>
    </SafeAreaView>
  );
};

export default Screen;
