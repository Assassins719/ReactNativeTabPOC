/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/FontAwesome'
import { Dimensions } from 'react-native'

import Home from './app/view/home';

const deviceW = Dimensions.get('window').width

const basePx = 375

function px2dp(px) {
  return px * deviceW / basePx
}

class Demo extends Component {
  render() {
      return (
          <View >
              <Text>
                  Demo
              </Text>
          </View>
      )
  }
}

export default class TabDemo extends Component {
  state = {
    selectedTab: 'browse'
  };

  render() {
    return (
      <TabNavigator >
        <TabNavigator.Item
          selected={this.state.selectedTab === 'browse'}
          title="Browse"
          selectedTitleStyle={{ color: "#3496f0" }}
          renderIcon={() => <Icon name="flickr" size={px2dp(22)} color="#666" />}
          renderSelectedIcon={() => <Icon name="flickr" size={px2dp(22)} color="#3496f0" />}
          onPress={() => this.setState({ selectedTab: 'browse' })}>
          <Home />
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'live'}
          title="Live"
          selectedTitleStyle={{ color: "#3496f0" }}
          renderIcon={() => <Icon name="film" size={px2dp(22)} color="#666" />}
          renderSelectedIcon={() => <Icon name="film" size={px2dp(22)} color="#3496f0" />}
          onPress={() => this.setState({ selectedTab: 'live' })}>
          <Demo/>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'sell'}
          title="Sell"
          selectedTitleStyle={{ color: "#3496f0" }}
          renderIcon={() => <Icon name="plus-circle" size={px2dp(32)} color="#666" />}
          renderSelectedIcon={() => <Icon name="plus-circle" size={px2dp(32)} color="#3496f0" />}
          onPress={() => this.setState({ selectedTab: 'sell' })}>
          <Demo/>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'feed'}
          title="Feed"
          selectedTitleStyle={{ color: "#3496f0" }}
          renderIcon={() => <Icon name="file" size={px2dp(22)} color="#666" />}
          renderSelectedIcon={() => <Icon name="file" size={px2dp(22)} color="#3496f0" />}
          onPress={() => this.setState({ selectedTab: 'feed' })}>
          <Demo/>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'me'}
          title="Me"
          selectedTitleStyle={{ color: "#3496f0" }}
          renderIcon={() => <Icon name="user" size={px2dp(22)} color="#666" />}
          renderSelectedIcon={() => <Icon name="user" size={px2dp(22)} color="#3496f0" />}
          onPress={() => this.setState({ selectedTab: 'me' })}>
          <Demo/>
        </TabNavigator.Item>

      </TabNavigator>
    );
  }
}

AppRegistry.registerComponent('TabDemo', () => TabDemo);