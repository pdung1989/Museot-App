import * as React from 'react';
import { TouchableOpacity, StyleSheet, View, Text, SafeAreaView } from 'react-native';

const FirstPage = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fffff0' }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontFamily: "Cochin",
              fontSize: 40,
              textAlign: 'center',
              marginBottom: 16
            }}>
            Welcome to
            Museums in Helsinki
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('SecondPage')}>
            <Text style={{ color: '#FFFFFF', fontSize: 20 }}>Discover</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#155e75',
    borderRadius: 12,
    padding: 20,
    width: 200,
    marginTop: 16,
  },
});

export default FirstPage;
