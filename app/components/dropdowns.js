import React, { Component } from 'react';
import {
    StyleSheet,
    View
} from 'react-native';

import { Dropdown } from 'react-native-material-dropdown';

class DropDownView extends Component {
    render() {
        let county = [{
            value: 'United Kingdom',
        }, {
            value: 'Germany',
        }, {
            value: 'Netherlands',
        }];
        let category = [{
            value: 'Fruit',
        }, {
            value: 'Building',
        }, {
            value: 'Clothes',
        }];
        let filter = [{
            value: 'Recent',
        }, {
            value: 'Old',
        }];
        return (
            <View style={{ flexDirection: 'row' }}>
                <View style={styles.dropdownItem}>
                    <Dropdown
                        label="Country"
                        data={county}
                    />
                </View>
                <View style={styles.dropdownSplit}></View>
                <View style={styles.dropdownItem}>
                    <Dropdown
                        label="Category"
                        data={category}
                    />
                </View>
                <View style={styles.dropdownSplit}></View>
                <View style={styles.dropdownItem}>
                    <Dropdown
                        label="Sort/Filter"
                        data={filter}
                    />
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    dropdownItem: {
        flex: 1, padding:0, margin:0, paddingLeft: 5, paddingRight: 5, marginTop: 0,
    },
    dropdownSplit: {
        width: 1, padding:0, margin:0,  height: 45, marginTop: 10, backgroundColor: '#ccc'
    }
});

export default DropDownView