import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Image,
    View
} from 'react-native';
import { SearchBar } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
class SearchView extends Component {
    render() {

        return (
            <View style={{ flexDirection: 'row',backgroundColor:'#E7E7E8' }}>
                <View style={{ width: 20, marginLeft:5,marginRight:5,marginTop:10 }}>
                    <Image source={require('../asset/img/backarrow.png')} style={{width: 18, height: 36 }} />
                </View>
                <View style={{ flex: 1 }}>
                    <SearchBar
                        style={{ width: 50, height: 50, backgroundColor: 'powderblue' }}
                        lightTheme
                        clearIcon
                        placeholder='Type Here...'
                    />
                </View>
                {/* <View style={{ width: 20, marginLeft: 8 }}>
                        <Icon name="close" color="#4F8EF7" />
                    </View> */}
            </View>
        )
    }
}

export default SearchView