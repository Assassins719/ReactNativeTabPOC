import React, { Component } from 'react';
import {
    StyleSheet,
    Text, Image,
    View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import GridView from 'react-native-super-grid';



class ItemsList extends Component {
    render() {
        
        const items = [
            { name: 'TURQUOISE', price: '100', img:require("../asset/img/item1.jpg") }, { name: 'EMERALD', price: '300', img:require("../asset/img/item3.jpg") },
            { name: 'PETER RIVER', price: '100', img:require("../asset/img/item2.jpg") }, { name: 'AMETHYST', price: '300' , img:require("../asset/img/item4.jpg")},
            { name: 'WET ASPHALT', price: '100', img:require("../asset/img/item1.jpg") }, { name: 'GREEN SEA', price: '300', img:require("../asset/img/item5.jpg") },
            { name: 'NEPHRITIS', price: '100', img:require("../asset/img/item5.jpg") }, { name: 'BELIZE HOLE', price: '300' , img:require("../asset/img/item1.jpg")},
            { name: 'WISTERIA', price: '100', img:require("../asset/img/item3.jpg") }, { name: 'MIDNIGHT BLUE', price: '400', img:require("../asset/img/item2.jpg") },
            { name: 'SUN FLOWER', price: '100' , img:require("../asset/img/item5.jpg")}, { name: 'CARROT', price: '400', img:require("../asset/img/item3.jpg") },
            { name: 'ALIZARIN', price: '100', img:require("../asset/img/item1.jpg") }, { name: 'CLOUDS', price: '400', img:require("../asset/img/item2.jpg") },
            { name: 'CONCRETE', price: '200', img:require("../asset/img/item3.jpg") }, { name: 'ORANGE', price: '400', img:require("../asset/img/item5.jpg") },
            { name: 'PUMPKIN', price: '200', img:require("../asset/img/item2.jpg") }, { name: 'POMEGRANATE', price: '400', img:require("../asset/img/item3.jpg") },
            { name: 'SILVER', price: '200', img:require("../asset/img/item5.jpg") }, { name: 'ASBESTOS', code: '400', img:require("../asset/img/item4.jpg") },
        ];
        return (
            <GridView
                itemDimension={150}
                items={items}
                style={styles.gridView}
                renderItem={item => (
                    <View style={styles.itemContainer}>
                        <Image source={item.img} style={{ flex: 1, width: null, height: 150 }} />
                        <View style={{ paddingLeft: 10, paddingRight: 10,paddingBottom:10 }}>
                            <Text style={styles.itemName}>{item.name}</Text>
                            <Text style={styles.itemCode}>PRICE: {item.price}</Text>
                            <View style={{ flexDirection: 'row', width: 20, marginLeft: 8 }}>
                                <Image source={require('../asset/img/heart.png')} style={{ width: 18, height: 18, marginRight:20 }} />
                                <Text>3</Text>
                                <Image source={require('../asset/img/share.png')} style={{ width: 18, height: 18, marginLeft:60 }} />
                            </View>
                        </View>
                    </ View>
                )}
            />

        )
    }
}

const styles = StyleSheet.create({
    gridView: {
        paddingTop: 10,
    },
    itemContainer: {
        justifyContent: 'flex-end',
        borderRadius: 2,
        height: 200,
        backgroundColor: '#eee',
        shadowOffset: { width: 20, height: 20 },
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 3
    },
    itemName: {
        fontSize: 16,
        color: '#333',
        fontWeight: '600',
    },
    itemCode: {
        fontWeight: '600',
        fontSize: 12,
        color: '#333',
    },
});

export default ItemsList