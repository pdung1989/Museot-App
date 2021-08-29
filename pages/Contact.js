import * as React from 'react';
import { View, Text, SafeAreaView } from 'react-native';


const Contact = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 5, backgroundColor: '#fffff0' }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              color: '#a0522d',
              fontWeight: 'bold'
            }}>
              Museums in Helsinki
          </Text>
          <Text
            style={{
              fontSize: 20,
              marginTop: 50,
              padding: 10,
              color: '#a0522d',
            }}>
              Address: Kaskikuja, Espoo, Finland {'\n'}
              Phone: +35812345678 {'\n'}
              Email: museums@gmail.com
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Contact;
