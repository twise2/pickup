import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';


class ComingSoon extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style = {styles.background}>
        <Text style = {styles.comingSoonText}>
          Coming Soon
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  background: {
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(0, 0, 0)'
  },
  comingSoonText: {
    marginTop: 25,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 40,
    color: '#ffffff'
  }
});

export default ComingSoon;
