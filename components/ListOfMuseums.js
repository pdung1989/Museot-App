import React, { Component } from 'react';
import {
  StyleSheet,
  FlatList,
  TouchableOpacity,
  View,
  Image,
  Text,
  Linking,
} from 'react-native';

export default class ListOfMuseums extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          image: require('../assets/amos58.jpeg'),
          name: 'Amos Rex',
          url: 'https://museot.fi/museohaku/index.php?museo_id=60818',
          likes: 12,
        },
        {
          id: 2,
          image: require('../assets/arkkiteh.jpeg'),
          name: 'Arkkitehtuurimueso',
          url: 'https://museot.fi/museohaku/index.php?museo_id=21130',
          likes: 5,
        },
        {
          id: 3,
          image: require('../assets/taide.jpeg'),
          name: 'Arkkitehtuurimueso',
          url: 'https://museot.fi/museohaku/index.php?museo_id=21094',
          likes: 5,
        },
        {
          id: 4,
          image: require('../assets/design.jpeg'),
          name: 'Arkkitehtuurimueso',
          url: 'https://museot.fi/museohaku/index.php?museo_id=21134',
          likes: 5,
        },
        {
          id: 5,
          image: require('../assets/arabia.jpeg'),
          name: 'Arkkitehtuurimueso',
          url: 'https://museot.fi/museohaku/index.php?museo_id=21092',
          likes: 5,
        },
        {
          id: 6,
          image: require('../assets/didric.jpeg'),
          name: 'Arkkitehtuurimueso',
          url: 'https://museot.fi/museohaku/index.php?museo_id=21095',
          likes: 5,
        },
        {
          id: 7,
          image: require('../assets/ehren.jpeg'),
          name: 'Arkkitehtuurimueso',
          url: 'https://museot.fi/museohaku/index.php?museo_id=21096',
          likes: 26,
        },
        {
          id: 8,
          image: require('../assets/huvila.jpeg'),
          name: 'Arkkitehtuurimueso',
          url: 'https://museot.fi/museohaku/index.php?museo_id=21100',
          likes: 5,
        },
        {
          id: 9,
          image: require('../assets/kansallis.jpeg'),
          name: 'Arkkitehtuurimueso',
          url: 'https://museot.fi/museohaku/index.php?museo_id=21128',
          likes: 32,
        },
        {
          id: 10,
          image: require('../assets/luomus.jpeg'),
          name: 'Arkkitehtuurimueso',
          url: 'https://museot.fi/museohaku/index.php?museo_id=21106',
          likes: 50,
        },
      ],
    };
  }

  onPressLikes = () => {
    this.setState({
      likes: this.state.data.likes + 1
    })
  }

  onPresshandler = (url) => {
    Linking.canOpenURL(url)
      .then((supported) => {
        if (!supported) {
          console.log("Can't handle url: " + url);
        } else {
          return Linking.openURL(url);
        }
      })
      .catch((err) => console.error('An error occurred', err));
  }

  render() {
    return (
      <FlatList
        nestedScrollEnabled
        style={styles.container}
        enableEmptySections={true}
        data={this.state.data}
        keyExtractor={(item) => {
          return item.id;
        }}
        renderItem={({ item }) => {
          return (
            <View style={styles.box}>
              <Image style={styles.image} source={item.image} />
              <View style={styles.info}>
                <Text style={styles.name}>{item.name}</Text>
                <View style={styles.row}>
                  <View style={styles.iconContainer}>
                    <TouchableOpacity
                      onPress={() => this.onPresshandler(item.url)}>
                      <Text>See more!</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.iconContainer}>
                    <TouchableOpacity onPress={() => this.onPressLikes(item.id)} >
                      <Image
                        style={styles.icon}
                        source={{
                          uri:
                            'https://img.icons8.com/color/70/000000/filled-like.png',
                        }}
                      />
                    </TouchableOpacity>
                    <Text style={styles.iconFonts}>{item.likes}</Text>
                  </View>
                </View>
              </View>
            </View>
          );
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    paddingTop: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
  image: {
    width: 100,
    height: 100,
  },
  box: {
    marginTop: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 1,
      width: -2,
    },
    elevation: 2,
  },
  info: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 20,
    marginTop: 10,
    color: '#333',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 40,
    marginTop: 10,
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
  },
  iconFonts: {
    color: 'gray',
  },
});