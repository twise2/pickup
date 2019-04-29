// app/index.js
import React, {Component} from 'react';
import {Router, Scene} from 'react-native-router-flux';

import Find from './components/Find.js';
import Profile from './components/Profile.js';
import Create from './components/Create.js';
import NavBar from './components/NavBar';


const App = () => {
  return (
    <Router navigationBarStyle={{backgroundColor: 'white'}}>
      <Scene key="root">
        <Scene
          key="Find"
          hideNavBar={false}
          navBar={NavBar}
          component={Find}
          title="Find"
          initial
        />
        <Scene
          key="Profile"
          hideNavBar={false}
          navBar={NavBar}
          component={Profile}
          title="Profile"
        />
        <Scene
          key="Create"
          hideNavBar={false}
          navBar={NavBar}
          component={Create}
          title="Create"
        />
      </Scene>
    </Router>
  );
};

export default App;
