import React, {useState, useEffect} from 'react';
import {SafeAreaView, ScrollView, View, FlatList} from 'react-native';

import axios from 'axios';

import Header from '../commponents/Header/Header';
import Profile from '../commponents/Profile/Profile';

const Screen = () => {
  const [users, setUsers] = useState([]);

  // useEffect関数内のaxiosでWebAPI取得
  useEffect(() => {
    const getApi = async () => {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users',
      );
      const datas = response.data;
      setUsers(datas); //配列データ保存 usersが配列を保持
      console.log(datas);
    };
    getApi();
  }, []);

  return (
    <SafeAreaView backgroundColor="skyblue">
      <View backgroundColor="white">
        <Header text="Users" />
        <ScrollView>
          <FlatList
            data={users}
            renderItem={({item}) => (
              <Profile
                name={item.name}
                id={item.id}
                city={item.address.city}
                street={item.address.street}
              />
            )}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Screen;
