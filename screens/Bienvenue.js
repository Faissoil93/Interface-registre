import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    ImageStore
}
    from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import MenuItem from '../components/MenuItem';



export default class Bienvenue extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navigation: props.navigation
        }
    }
 
    render() {
        return (
            <ImageBackground
                source={require('../assets/img/bienvenue.jpg')}
                style={styles.container}>
                <View style={styles.overlayContainer}>
                    <View style={styles.top}>
                        <Text style={styles.header}> M E D E C I N</Text>
                    </View>
                    <View style={styles.menuContainer}>
                        <MenuItem  itemImage={require('../assets/img/liste0.png')} />
                        <MenuItem  itemImage = {require('../assets/img/msg1.png')}/>
                        <MenuItem  itemImage = {require('../assets/img/parMed1.png')}/>
                       
                      
                
                    </View>
                </View>

            </ImageBackground>



        );

    }

}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    overlayContainer: {
        flex: 1,
        backgroundColor: 'rgba(47,163,218, .4)'
    },
    top: {
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        color: '#EFf',
        fontSize: 30,
        borderColor: '#cd5c5c',
        borderWidth: 3,
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        backgroundColor: '#cd5c5c'

    },
    menuContainer: {
        height: '40%',
        flexDirection: 'row',
        flexWrap: 'wrap'

    }
});