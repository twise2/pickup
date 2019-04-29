import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Icon, SearchBar } from 'react-native-elements';

import {
  StyleSheet,
  Text,
  Picker,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';


class ComingSoon extends Component {
  constructor(props) {
    super(props);
    this.state = {
     search: '',
    };
  }

  updateSearch = search => {
    this.setState({ search });
  };

/*
 * //for later use
          <SearchBar
            containerStyle = {{width:'100%'}}
            placeholder="Search"
            onChangeText={this.updateSearch}
            value={this.state.search}
          />
*/
  render() {
    return (
      <View style = {styles.background}>
        <View style={{paddingLeft: 10, paddingRight: 10, flexDirection: 'row', width:'100%', backgroundColor: 'white', alignItems:'center', justifyContent:'space-between'}}>
          <Picker
            selectedValue={this.state.language}
            style={{height: 40, width: 150, }}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({language: itemValue})
            }>
            <Picker.Item label="Relevant" value="Relevant" />
            <Picker.Item label="Closest" value="Nearby" />
            <Picker.Item label="Popular" value="Popular" />
            <Picker.Item label="Upcoming" value="Upcoming" />
          </Picker>
          <Icon
            raised
            size={20}
            name='search'
            type='font-awesome'
            color='#f50'
            onPress={() => /*TODO: make search bar appear across entire row*/console.log('hello')}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  background: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'grey'
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
