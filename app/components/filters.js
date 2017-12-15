import React, { Component } from 'react';
import {
    StyleSheet,
    Text, View, Button, ScrollView
} from 'react-native';

import { Dropdown } from 'react-native-material-dropdown';


class Filters extends Component {
    render() {
        let initialArr = [
            {
                id: 1,
                text: "adidas nmd"
            },
            {
                id: 2,
                text: "adidas bag"
            },
            {
                id: 3,
                text: "adidas superstar"
            },
            {
                id: 4,
                text: "adidas jacket"
            },
            {
                id: 5,
                text: "adidas shoes"
            },
        ];
        buttonsListArr = initialArr.map(buttonInfo => (
            <Text style={styles.btn} key={buttonInfo.id}> {buttonInfo.text} </Text>
        ));
        return (
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={styles.sclView}
            >
                {buttonsListArr}
            </ScrollView>

        )
    }
}

const styles = StyleSheet.create({
    btn: {
        borderRadius: 30, borderWidth: 2, borderColor: '#f008', borderRadius: 12, padding: 5,
        height:30,
        color: '#f008',
        marginLeft:5,marginRight:5
    },
    sclView:{
        borderBottomWidth:1,paddingBottom:5
    }
});

export default Filters