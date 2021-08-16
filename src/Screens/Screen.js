import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, FlatList, StyleSheet} from 'react-native';

import axios from 'axios';

import Header from '../commponents/Header/Header';
import Profile from '../commponents/Profile/Profile';
import SearchBar from '../commponents/searchBar/searchBar';
import Footer from '../commponents/footer/footer';

const Screen = () => {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState('');

  // useEffect関数内のaxiosでWebAPI取得
  useEffect(() => {
    const getApi = async () => {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users',
      );
      const datas = response.data;
      setUsers(datas);
    };
    getApi();
  }, []);

  // ユーザーがSearchBar内に入力したテキストデータをQueryに保存する
  const updateQuery = input => {
    setQuery(input);
  };

  //ユーザーがtextをsearchBarに入力した時(queryの値が変動した時)の動作
  useEffect(() => {
    const getApi = async () => {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users',
      );
      const datas = response.data;
      const result = datas.filter(data => data.name.includes(query));
      setUsers(result);
    };
    getApi();
  }, [query]);

  return (
    <SafeAreaView backgroundColor="tomato">
      <View style={styles.view} backgroundColor="white">
        <Header text="Followers" />
        <SearchBar initialText={'Search Users'} inputText={updateQuery} />
        <FlatList
          keyExtractor={item => item.id}
          data={users}
          extraData={query}
          renderItem={({item}) => (
            <Profile
              name={item.name}
              id={item.id}
              city={item.address.city}
              street={item.address.street}
            />
          )}
        />
        <Footer />
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
