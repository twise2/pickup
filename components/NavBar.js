import {View, Image, StatusBar, TouchableWithoutFeedback} from 'react-native';
import React, {Component} from 'react';
import {Actions, Router, Scene} from 'react-native-router-flux';
import {ButtonGroup} from 'react-native-elements';

class NavBar extends Component {
  render() {
  const buttons = ['Find', 'Create', 'Profile']
    return (
      <View style={styles.backgroundStyle}>
        <StatusBar hidden = {true}/>
        <View style={{flexDirection: 'row', width:'100%', backgroundColor: 'white'}}>
            <ButtonGroup
              onPress={null}
              selectedIndex={0}
              buttons={buttons}
              containerStyle={{flex: 1, height: 50, alignItems:'center', justifyContent: 'center'}}
              style={'width:100%'}

            />
        </View>
      </View>
    );
  }
}
const styles = {
  backgroundStyle: {
    flexDirection: 'column',
    backgroundColor: 'black',
    width: '100%',
  },
};

export default NavBar;
