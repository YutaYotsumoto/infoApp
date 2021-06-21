import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, FlatList, StyleSheet} from 'react-native';

import axios from 'axios';

import Header from '../commponents/Header/Header';
import Profile from '../commponents/Profile/Profile';
import SearchBar from '../commponents/searchBar/searchBar';

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
    <SafeAreaView backgroundColor="tomato">
      <View style={styles.view} backgroundColor="white">
        <Header text="Profiles" />
        <SearchBar />
        <FlatList
          keyExtractor={item => item.id}
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
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view: {
    height: '100%',
    // paddingBottom: 30,
    marginBottom: 34,
  },
});

export default Screen;
