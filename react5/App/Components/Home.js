import React, { Component } from 'react';
import { View, Text, Button, FlatList, Dimensions, TextInput } from 'react-native';


class Home extends React.Component {
render() {
    return (
        <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Welcome</Text>
        </View>
    );
  }
}

export default Home;