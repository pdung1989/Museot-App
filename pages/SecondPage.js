import * as React from 'react';
import { View, SafeAreaView } from 'react-native';
import ListOfMuseums from '../components/ListOfMuseums';


const SecondPage = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, marginTop: 5, padding: 16, backgroundColor: '#fffff0' }}>
        <ListOfMuseums />
      </View>
    </SafeAreaView>
  );
}

export default SecondPage;
