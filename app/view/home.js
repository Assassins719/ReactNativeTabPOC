import React, { Component } from 'react';
import {
    AppRegistry,
    View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { SearchBar } from 'react-native-elements'
import DropdownView from '../components/dropdowns';
import SearchView from '../components/searchheader';
import Filters from '../components/filters';
import ItemsList from '../components/itemlist';
class Home extends Component {
    render() {
        return (
            <View style={{ flexDirection: 'column' }} >
                <View style={{ height:170 }}>
                    <SearchView />
                    <DropdownView />
                    <Filters />
                </View>
                <View style={{ height:340 }}>
                    <ItemsList />
                </View>

            </ View>
        )
    }
}

export default Home