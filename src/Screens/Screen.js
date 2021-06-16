import React, {useState, useEffect} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';

import axios from 'axios';

import Header from '../commponents/Header/Header';
import Profile from '../commponents/Profile/Profile';

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
        <ScrollView>
          <Profile name="りんごちゃん" id="0123" city="東京" street="赤坂" />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Screen;
